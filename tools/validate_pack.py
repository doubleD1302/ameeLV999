
"""Validate this documentation kit, not a running game. Standard library only."""
from pathlib import Path
import json,re,math,csv,hashlib,sys
from collections import deque
ROOT=Path(__file__).resolve().parents[1]
def load(path): return json.loads((ROOT/path).read_text(encoding="utf-8"))
def ensure(ok,msg):
    if not ok: raise ValueError(msg)
def same(a,b):
    if isinstance(a,bool) != isinstance(b,bool): return False
    return a==b
def validate(v,s,path="$"):
    supported={"$schema","title","type","const","enum","oneOf","properties","required",
        "additionalProperties","propertyNames","items","minItems","maxItems","uniqueItems",
        "minimum","maximum","minLength","maxLength","pattern"}
    ensure(not (set(s)-supported),f"{path}: unsupported schema keywords {set(s)-supported}")
    if "oneOf" in s:
        passed=0
        for option in s["oneOf"]:
            try:validate(v,option,path);passed+=1
            except ValueError:pass
        ensure(passed==1,f"{path}: expected exactly one schema match, got {passed}")
    if "const" in s:ensure(same(v,s["const"]),f"{path}: wrong const")
    if "enum" in s:ensure(any(same(v,c) for c in s["enum"]),f"{path}: not in enum")
    if "type" in s:
        types=s["type"] if isinstance(s["type"],list) else [s["type"]]
        predicates={"object":isinstance(v,dict),"array":isinstance(v,list),"string":isinstance(v,str),
          "integer":isinstance(v,int) and not isinstance(v,bool),
          "number":isinstance(v,(int,float)) and not isinstance(v,bool) and math.isfinite(v),
          "boolean":isinstance(v,bool),"null":v is None}
        ensure(any(predicates.get(t,False) for t in types),f"{path}: wrong type, expected {types}")
    if isinstance(v,dict):
        props=s.get("properties",{})
        for k in s.get("required",[]):ensure(k in v,f"{path}: missing {k}")
        for k,value in v.items():
            if "propertyNames" in s:validate(k,s["propertyNames"],path+".<key>")
            if k in props:validate(value,props[k],path+"."+k)
            else:
                extra=s.get("additionalProperties",True)
                ensure(extra is not False,f"{path}: unexpected property {k}")
                if isinstance(extra,dict):validate(value,extra,path+"."+k)
    if isinstance(v,list):
        ensure(len(v)>=s.get("minItems",0),f"{path}: array too short")
        ensure(len(v)<=s.get("maxItems",float("inf")),f"{path}: array too long")
        if s.get("uniqueItems"):
            keys=[json.dumps(x,sort_keys=True,ensure_ascii=False) for x in v]
            ensure(len(keys)==len(set(keys)),f"{path}: duplicate array items")
        if "items" in s:
            for i,x in enumerate(v):validate(x,s["items"],f"{path}[{i}]")
    if isinstance(v,str):
        ensure(len(v)>=s.get("minLength",0),f"{path}: string too short")
        ensure(len(v)<=s.get("maxLength",float("inf")),f"{path}: string too long")
        if "pattern" in s:ensure(re.search(s["pattern"],v) is not None,f"{path}: pattern mismatch")
    if isinstance(v,(int,float)) and not isinstance(v,bool):
        ensure(math.isfinite(v),f"{path}: non-finite number")
        ensure(v>=s.get("minimum",-float("inf")),f"{path}: below minimum")
        ensure(v<=s.get("maximum",float("inf")),f"{path}: above maximum")
def ids(rows,key="id"):
    seq=[r[key] for r in rows]
    ensure(len(seq)==len(set(seq)),f"Duplicate {key}")
    return set(seq)
def dag(rows,idkey="id",depkey="prerequisites"):
    mapping={r[idkey]:r[depkey] for r in rows};active=set();done=set()
    def visit(n):
        ensure(n in mapping,f"Unknown dependency {n}")
        ensure(n not in active,f"Dependency cycle at {n}")
        if n in done:return
        active.add(n)
        for d in mapping[n]:visit(d)
        active.remove(n);done.add(n)
    for n in mapping:visit(n)
def rotate(mask,n):
    for _ in range(n):mask=((mask<<1)&15)|((mask>>3)&1)
    return mask
DIRS={1:(-1,0,4),2:(0,1,8),4:(1,0,1),8:(0,-1,2)}
def pipe_solved(board,rots):
    rows,cols=board["rows"],board["cols"];count=rows*cols
    if len(rots)!=count:return False
    masks=[rotate(m,r) for m,r in zip(board["basePorts"],rots)]
    source,target=board["source"],board["target"]
    for end in [source,target]:
        if not masks[end["index"]]&end["externalPort"]:return False
        y,x=divmod(end["index"],cols);dy,dx,_=DIRS[end["externalPort"]]
        if 0<=y+dy<rows and 0<=x+dx<cols:return False
    allowed={(source["index"],source["externalPort"]),(target["index"],target["externalPort"])}
    seen={source["index"]};q=deque(seen)
    while q:
        idx=q.popleft();y,x=divmod(idx,cols)
        for port,(dy,dx,opposite) in DIRS.items():
            if not masks[idx]&port:continue
            ny,nx=y+dy,x+dx
            if not (0<=ny<rows and 0<=nx<cols):
                if (idx,port) not in allowed:return False
                continue
            ni=ny*cols+nx
            if not masks[ni]&opposite:return False
            if ni not in seen:seen.add(ni);q.append(ni)
    return target["index"] in seen
def slide(tiles,size,move):
    arr=tiles.copy();z=arr.index(0);y,x=divmod(z,size)
    dy,dx={"U":(-1,0),"D":(1,0),"L":(0,-1),"R":(0,1)}[move]
    ensure(0<=y+dy<size and 0<=x+dx<size,"Sliding move outside board")
    to=(y+dy)*size+x+dx;arr[z],arr[to]=arr[to],arr[z]
    return arr
def check_puzzles(puzzles):
    for p in puzzles:
        b=p["board"];c=p["solutionCertificate"]
        if p["engine"]=="memory":
            deck=b["deck"];ensure(len(deck)%2==0,"Odd memory deck")
            ensure(all(deck.count(x)==2 for x in set(deck)),"Memory symbol not paired")
            ensure(sorted(x for pair in c for x in pair)==list(range(len(deck))),"Memory proof coverage")
            ensure(all(deck[a]==deck[z] and a!=z for a,z in c),"Memory proof wrong pair")
        elif p["engine"]=="sliding":
            size=b["size"];goal=list(range(1,size*size))+[0]
            ensure(sorted(b["tiles"])==list(range(size*size)),"Sliding permutation invalid")
            ensure(b["tiles"]!=goal,"Sliding initial already solved")
            state=b["tiles"]
            for move in c:state=slide(state,size,move)
            ensure(state==goal,"Sliding proof does not solve board")
        else:
            n=b["rows"]*b["cols"]
            ensure(len(b["basePorts"])==len(b["rotations"])==len(c)==n,"Pipe size mismatch")
            ensure(all(0<=x<n for x in b["locked"]),"Pipe lock out of range")
            ensure(all(b["rotations"][i]==c[i] for i in b["locked"]),"Pipe proof changes locked cell")
            ensure(not pipe_solved(b,b["rotations"]),"Pipe initial already solved")
            ensure(pipe_solved(b,c),"Pipe proof has a leak or misses target")
def save_semantics(s):
    itemids=ids(load("data/items.json"));flowerids=ids(load("data/flowers.json"))
    ensure(set(s["inventory"])<=itemids,"Save has unknown item")
    ensure(set(s["upgrades"])<=ids(load("data/upgrades.json")),"Save has unknown upgrade")
    ensure(set(s["completedQuests"])<=ids(load("data/quests.json")),"Save has unknown quest")
    plotids={p["id"] for p in load("data/maps/cottage.json")["plots"]}
    ensure(ids(s["plots"])<=plotids,"Save unknown plot")
    allflags=set(sum(load("data/flags.json").values(),[]))
    ensure(set(s["flags"])<=allflags,"Unknown save flag")
    ensure(set(s["relationships"])<=ids(load("data/neighbors.json")),"Unknown save neighbor")
    ensure({p["petId"] for p in s["pets"]}<=ids(load("data/pets.json")),"Unknown save pet")
    ensure(len({p["petId"] for p in s["pets"]})==len(s["pets"]),"Duplicate adopted pet")
    for plot in s["plots"]:
        c=plot["crop"]
        if c:
            ensure(c["flowerId"] in flowerids,"Unknown crop flower")
            ensure(c["readyAtSimMs"]>=c["plantedAtSimMs"],"Negative crop duration")
    ensure(len({r["commandId"] for r in s["receipts"]})==len(s["receipts"]),"Duplicate receipt")
    ensure(s["player"]["zoneId"] in ids(load("data/zones.json")),"Unknown player zone")
    ensure(set(s["puzzleProgress"])<=ids(load("data/puzzles.json")),"Unknown puzzle progress")
def validate_save(s):
    validate(s,load("schemas/save.schema.json"));save_semantics(s)
def check_maps(maps):
    for m in maps:
        w,h=m["width"],m["height"]
        inside=lambda x,y:0<=x<w and 0<=y<h
        blocked={tuple(c) for c in m["blocked"]}
        ensure(all(inside(x,y) for x,y in blocked),"Map blocked coordinate out of bounds")
        blocked|={(d["x"],d["y"]) for d in m["debris"] if d["blocksMovement"]}
        start=(m["spawn"]["x"],m["spawn"]["y"])
        ensure(inside(*start) and start not in blocked,"Invalid map spawn")
        q=deque([start]);seen={start}
        while q:
            x,y=q.popleft()
            for dx,dy in [(1,0),(-1,0),(0,1),(0,-1)]:
                t=(x+dx,y+dy)
                if inside(*t) and t not in blocked and t not in seen:seen.add(t);q.append(t)
        for p in m["interactPoints"]+m["plots"]:
            ensure((p["x"],p["y"]) in seen,f"Unreachable {m['id']} {p['id']}")
        for p in m["portals"]:
            ensure(inside(p["x"],p["y"]),"Portal out of bounds")
        ensure(len({(d["x"],d["y"]) for d in m["debris"]})==len(m["debris"]),"Overlapping debris")
def check_links():
    total=0
    for f in ROOT.rglob("*.md"):
        if any(p in f.parts for p in ("node_modules", ".git", "dist")): continue
        text=f.read_text(encoding="utf-8")
        ensure("\ufffd" not in text,f"Encoding replacement char in {f}")
        for target in re.findall(r"\[[^\]]*\]\(([^)]+)\)",text):
            if re.match(r"^(https?:|mailto:|#)",target):continue
            target=target.split("#",1)[0]
            if not target or "{{" in target:continue
            resolved=(f.parent/target).resolve()
            ensure(resolved.is_relative_to(ROOT),f"Link escapes kit: {f} {target}")
            ensure(resolved.exists(),f"Broken link: {f.relative_to(ROOT)} -> {target}")
            total+=1
    return total
def main():
    mapping=load("schemas/catalog.json")
    for content,schema in mapping.items():validate(load(content),load(schema),content)
    cats={name:load("data/"+name+".json") for name in ["items","flowers","furniture","upgrades","zones","neighbors","pets","quests","recipes","fish","livestock","dialogues","puzzles"]}
    sets={k:ids(v) for k,v in cats.items()}
    itemids=sets["items"];flags=set(sum(load("data/flags.json").values(),[]))
    for f in cats["flowers"]:
        ensure(f["seedItemId"] in itemids and f["harvestItemId"] in itemids,"Flower item reference")
        ensure(f["unlockFlag"] is None or f["unlockFlag"] in flags,"Flower unlock reference")
    for u in cats["upgrades"]:
        ensure(set(u["items"])<=itemids,"Upgrade material reference")
        ensure(set(u["grantsFlags"])<=flags,"Upgrade flag reference")
    dag(cats["upgrades"]);dag(cats["quests"])
    for q in cats["quests"]:
        ensure(set(q["rewards"]["items"])<=itemids,"Quest item reference")
        kind,target=q["condition"]["kind"],q["condition"]["target"]
        expected={"upgrade":"upgrades","talk_count":"neighbors","pet_adopted":"pets"}
        if kind in expected:ensure(target in sets[expected[kind]],"Quest condition target")
    for group in ["flowers","pets","zones","recipes"]:
        for entry in cats[group]:
            flag=entry.get("unlockFlag")
            ensure(flag is None or flag in flags,"Unknown unlock flag in "+group)
    for npc in cats["neighbors"]:ensure(set(npc["likedItems"])<=itemids,"NPC liked item reference")
    for r in cats["recipes"]:ensure(set(r["inputs"])|set(r["outputs"])<=itemids,"Recipe reference")
    for f in cats["fish"]:ensure(f["itemId"] in itemids and f["zoneId"] in sets["zones"],"Fish reference")
    for a in cats["livestock"]:ensure(a["productItemId"] in itemids and a["feedItemId"] in itemids,"Animal reference")
    strings=load("data/localization/vi.json")
    for d in cats["dialogues"]:ensure(d["textKey"] in strings,"Dialogue localization missing")
    for p in cats["puzzles"]:ensure(p["instructionsKey"] in strings,"Puzzle localization missing")
    check_puzzles(cats["puzzles"])
    maps=[load("data/maps/cottage.json"),load("data/maps/greenhouse.json")]
    check_maps(maps)
    for m in maps:
        for p in m["portals"]:
            ensure(p["targetZone"] in sets["zones"],"Portal target")
            other=next(x for x in maps if x["id"]==p["targetZone"])
            ensure(0<=p["targetX"]<other["width"] and 0<=p["targetY"]<other["height"],"Portal spawn")
    for fn in ["save_new_v2.json","save_growing_v2.json","save_migrated_v2_expected.json"]:validate_save(load("fixtures/"+fn))
    invalid=0
    for f in (ROOT/"fixtures/invalid").glob("*.json"):
        try:validate_save(json.loads(f.read_text(encoding="utf-8")))
        except (ValueError,KeyError,TypeError):invalid+=1
        else:raise ValueError("Invalid fixture incorrectly accepted: "+f.name)
    images=load("data/asset_registry.json");imageids=ids(images,"assetId")
    for a in images:
        ensure((ROOT/a["promptPath"]).exists(),"Asset prompt missing")
        if a["status"]=="approved":
            ensure(bool(a["relativeFile"] and a["sha256"]),"Approved image needs file/hash")
            p=ROOT/a["relativeFile"];ensure(p.exists(),"Approved image file missing")
            ensure(hashlib.sha256(p.read_bytes()).hexdigest()==a["sha256"],"Image hash mismatch")
    symbols=load("data/puzzle_symbols.json");symbolids=ids(symbols)
    for symbol in symbols:ensure(symbol["assetId"] in imageids,"Puzzle symbol asset missing")
    for puzzle in cats["puzzles"]:
        if puzzle["engine"]=="memory":ensure(set(puzzle["board"]["deck"])<=symbolids,"Memory symbol not defined")
    for f in cats["flowers"]:
        for stage in ["seed","sprout","bud","bloom","ready"]:ensure(f["assetPrefix"]+"_"+stage in imageids,"Missing flower stage request")
    for f in cats["furniture"]:ensure(f["assetId"] in imageids,"Furniture asset reference")
    clips=load("data/animation_specs.json");ids(clips)
    for c in clips:ensure(set(c["frameIds"])<=imageids,"Animation frame reference")
    for a in load("data/audio_registry.json"):
        ensure((ROOT/a["promptPath"]).exists(),"Audio prompt missing")
        if a["status"]=="approved":
            ensure(bool(a["relativeFile"] and a["sha256"] and a["measuredDurationMs"]),"Approved audio needs QA metadata")
            p=ROOT/a["relativeFile"];ensure(p.exists(),"Audio file missing")
            ensure(hashlib.sha256(p.read_bytes()).hexdigest()==a["sha256"],"Audio hash mismatch")
    for p in load("asset_prompts/categories.json").values():ensure((ROOT/p).exists(),"Category prompt missing")
    with (ROOT/"docs/13_production/BACKLOG.csv").open(encoding="utf-8",newline="") as f:tasks=list(csv.DictReader(f))
    for t in tasks:
        t["deps"]=t["depends_on"].split("|") if t["depends_on"] else []
        ensure((ROOT/t["spec"]).exists(),"Task spec missing")
    dag(tasks,depkey="deps")
    links=check_links()
    print(json.dumps({"status":"PASS","schemaMappedFiles":len(mapping),"puzzleProofs":len(cats["puzzles"]),"invalidFixturesRejected":invalid,"mapsReachable":len(maps),"backlogTasks":len(tasks),"plannedImageAssets":len(images),"animationClips":len(clips),"markdownLinksChecked":links},ensure_ascii=False,indent=2))
if __name__=="__main__":
    try:main()
    except Exception as e:
        print("FAIL:",e,file=sys.stderr);sys.exit(1)

