import sys

sys.path.append("./DataManager")

from Stock import Stock
import json

def update_stock_json(ticker):
    s = Stock(ticker, [1,1,1])
    with open("./app/json-files/Stock.json", 'w') as f:
        str = json.dump(dict(s), f, indent=4)

with open ("./DataManager/scripts/script_input.txt", 'r') as f:
    update_stock_json(f.read())