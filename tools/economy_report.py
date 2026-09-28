
"""Print a CSV of theoretical one-batch economics. No playtest claims."""
from validate_pack import load
import csv,sys
def main():
    items={i["id"]:i for i in load("data/items.json")}
    w=csv.writer(sys.stdout)
    w.writerow(["flowerId","minutes","seedCost","sellPrice","yield","profitPerPlotPerHarvest","profitFourPlotsOneBatch","readyAfter8h"])
    for f in load("data/flowers.json"):
        cost=items[f["seedItemId"]]["buyPrice"];price=items[f["harvestItemId"]]["sellPrice"]
        net=price*f["yield"]-cost
        w.writerow([f["id"],f["durationSeconds"]/60,cost,price,f["yield"],net,4*net,f["durationSeconds"]<=28800])
if __name__=="__main__":main()

