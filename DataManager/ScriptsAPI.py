from flask import Flask, jsonify, request
from flask_restful import Resource, Api

from Stock import Stock

app = Flask(__name__)
api = Api(app)

"""
Request Code List:

"""

class Stock(Resource):
    def get(self, ticker):
        s = Stock(ticker, [1,1,1])
        return dict(s)
