import sys

sys.path.append("./DataManager")

from Stock import Stock
import json

def update_news_json(ticker):
    s=Stock(ticker, [0,0,1])
    update_news1_json(s)
    update_news2_json(s)

def update_news1_json(s):
    with open("./app/json-files/News1.json", 'w') as f:
        str = json.dump(s.News1.__dict__, f, indent=4)

def update_news2_json(s):
    with open("./app/json-files/News2.json", 'w') as f:
        str = json.dump(s.News2.__dict__, f, indent=4)

with open ("./DataManager/scripts/script_input.txt", 'r') as f:
    update_news_json(f.read())
