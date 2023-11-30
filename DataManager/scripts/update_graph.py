import sys

sys.path.append("./DataManager")

from Stock import Stock
import json

def update_graph_json(ticker, interval, range):
    #print(interval, range)
    s = Stock(ticker, [1,0,0])
    s.update_graph(interval=interval, range=range)
    with open("./app/json-files/Graph.json", 'w') as f:
        str = json.dump(s.Graph.__dict__, f, indent=4)

with open ("./DataManager/scripts/script_input.txt", 'r') as f:
    ticker = f.read()

with open ("./DataManager/scripts/graph_params.txt", 'r') as f:
    update_graph_json(ticker, f.readline().strip(), f.readline().strip())