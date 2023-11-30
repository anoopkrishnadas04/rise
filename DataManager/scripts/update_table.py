import sys

sys.path.append("./DataManager")

from Stock import Stock
import json

def update_table_json(ticker):
    s = Stock(ticker, [0,1,0])
    with open("./app/json-files/Table.json", 'w') as f:
        str = json.dump(s.Table.__dict__, f, indent=4)

with open ("./DataManager/scripts/script_input.txt", 'r') as f:
    update_table_json(f.read())

