
"""Compose image prompts locally. Never calls a generation API."""
from pathlib import Path
import sys,json
from validate_pack import ROOT,load,validate
def main():
    if len(sys.argv)!=2:raise SystemExit("Usage: python tools/compose_asset_prompt.py path/to/request.json")
    path=Path(sys.argv[1])
    if not path.is_absolute():path=Path.cwd()/path
    req=json.loads(path.read_text(encoding="utf-8"))
    validate(req,load("schemas/request.schema.json"))
    categories=load("asset_prompts/categories.json")
    if req["category"] not in categories:raise SystemExit("Unknown category")
    if req["category"] in ["audio","qa","batch"]:raise SystemExit("Use the dedicated audio/QA/batch prompt, not this image request composer.")
    files=["asset_prompts/00_SYSTEM/ASSET_GENERATION_SYSTEM_PROMPT.md","asset_prompts/01_GLOBAL_STYLE/MASTER_STYLE_PROMPT.md",categories[req["category"]]]
    values={"{{ASSET_ID}}":req["assetId"],"{{SUBJECT}}":req["subject"],"{{STATE}}":req["state"],
      "{{DIRECTION_IF_ANY}}":"As described in subject/state; otherwise not applicable",
      "{{TARGET_SIZE}}":str(req["targetWidth"])+" x "+str(req["targetHeight"])+" px after normalization",
      "{{ALPHA}}":"Real alpha transparency" if req["alpha"] else "Opaque background",
      "{{ANCHOR}}":req["anchor"],"{{APPROVED_REFERENCES}}":", ".join(req["referenceIds"]) or "None supplied: pilot requiring approval"}
    for f in files:
        content=(ROOT/f).read_text(encoding="utf-8")
        for key,value in values.items():content=content.replace(key,value)
        print(content+"\n")
    print("## Concrete asset request\n"+json.dumps(req,ensure_ascii=False,indent=2)+"\n")
    if not req["referenceIds"]:print("No approved references supplied: PILOT output requiring visual approval.\n")
    print((ROOT/"asset_prompts/01_GLOBAL_STYLE/NEGATIVE_PROMPT.md").read_text(encoding="utf-8"))
if __name__=="__main__":main()

