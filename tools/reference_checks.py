
"""Executable examples of the proposed rules, not runtime game tests."""
from copy import deepcopy
from validate_pack import ROOT,load,ensure,validate_save,pipe_solved
def reconcile(s,now):
    out=deepcopy(s);delta=max(0,now-s["savedAtWallMs"])
    cap=load("data/config.json")["offlineCapSeconds"]*1000
    out["simTimeMs"]+=min(delta,cap);out["savedAtWallMs"]=now;out["revision"]+=1
    return out
def migrate_v1(s):
    out=deepcopy(load("fixtures/save_new_v2.json"))
    out.update({"savedAtWallMs":s["lastSeenMs"],"simTimeMs":s["elapsedMs"],"coins":s["coins"],"inventory":deepcopy(s["inventory"])})
    return out
def claim_once(s,key,coins):
    if key in s["claimedRewards"]:return deepcopy(s)
    out=deepcopy(s);out["claimedRewards"].append(key);out["coins"]+=coins;return out
def main():
    s=load("fixtures/save_new_v2.json")
    for case in load("fixtures/time_cases.json"):
        fixture=deepcopy(s);fixture["savedAtWallMs"]=case["savedAtWallMs"]
        a=reconcile(fixture,case["nowWallMs"])
        ensure(a["simTimeMs"]-fixture["simTimeMs"]==case["expectedCreditMs"],case["id"])
        b=reconcile(a,case["nowWallMs"]);ensure(b["simTimeMs"]==a["simTimeMs"],"Double resume credits time")
        ensure(a["savedAtWallMs"]==case["nowWallMs"],"Anchor not refreshed")
    migrated=migrate_v1(load("fixtures/save_legacy_v1.json"))
    ensure(migrated==load("fixtures/save_migrated_v2_expected.json"),"Migration fixture mismatch")
    validate_save(migrated)
    growing=load("fixtures/save_growing_v2.json")
    before=reconcile(growing,1119999);at=reconcile(growing,1120000)
    ensure(before["simTimeMs"]<before["plots"][0]["crop"]["readyAtSimMs"],"Too early crop")
    ensure(at["simTimeMs"]>=at["plots"][0]["crop"]["readyAtSimMs"],"Boundary crop not ready")
    long=reconcile(growing,260200000)
    ensure(long["inventory"]==growing["inventory"],"Offline unexpectedly harvested or replanted")
    once=claim_once(s,"puzzle:p_memory_01",20)
    twice=claim_once(once,"puzzle:p_memory_01",20)
    ensure(twice["coins"]==s["coins"]+20 and len(twice["claimedRewards"])==1,"Claim not idempotent")
    # Negative oracle check: rotate the source off its boundary inlet.
    pipe=next(p for p in load("data/puzzles.json") if p["id"]=="p_pipe_01")
    invalid=pipe["solutionCertificate"].copy();invalid[0]=(invalid[0]+1)%4
    ensure(not pipe_solved(pipe["board"],invalid),"Broken pipe wrongly solved")
    print("PASS: 7 time boundaries + duplicate resume; migration exact; crop threshold; no offline auto-harvest; claim idempotency; negative pipe oracle.")
    print("Scope: reference rules only. Browser lifecycle, IndexedDB concurrency and runtime are NOT_RUN.")
if __name__=="__main__":main()

