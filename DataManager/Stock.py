from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
import requests
from Table import Table
from Graph import Graph
from News import News

class Stock:
    def __iter__(self):
        return iter([
            ('ticker', self.ticker),
            ('url', self.url),
            ('market_price', self.market_price),
            ('market_change', self.market_change),
            ('market_percentage', self.market_percentage),
            ('headers', self.headers)
        ])
    
    #Constructor
    def __init__(self, ticker, code):
        #Base Stock Attributes
        self.ticker = ""
        self.url = ""
        self.soup = None
        self.market_price = ""
        self.market_change = ""
        self.market_percentage = ""
        self.headers = {'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/114.0'}

        self.Table = None

        self.Graph = None

        self.News1 = None
        self.News2 = None

        #Initializer Call
        self.update_stock(ticker, code)

    #Stock Initializer/Update Function
    def update_stock(self, new_ticker, code):
        self.update_ticker(new_ticker)
        self.update_url()
        self.update_soup()

        if code[0] == 1:
            self.update_graph("2m", "1d")
        if code[1] == 1:
            self.update_table()
        if code[2] == 1:
            self.update_news()
        self.get_stock_price()

    #Ticker:
    def update_ticker(self, new_ticker):
        self.ticker = new_ticker.upper()

    #URL:
    def update_url(self):
        self.url = f"https://finance.yahoo.com/quote/{self.ticker}?p={self.ticker}"

    #Soup:
    def update_soup(self):
        self.soup = self.get_soup()

    def get_soup(self):
        response = requests.get(self.url, headers=self.headers)
        return BeautifulSoup(response.text, "html.parser")

    #Table:    
    def update_table(self):
        if self.Table == None:
            self.Table = Table(self.get_table())
        else:
            self.Table.update_table(self.get_table())
            
    def get_table(self):
        result = self.soup.find_all('td')
        return result

    #Graph:
    def update_graph(self, interval, range):
        self.interval = interval
        self.range = range
        if self.Graph == None:
            self.Graph = Graph(self.ticker, self.interval, self.range)
        else:
            self.Graph.update_graph(self.ticker, self.interval, self.range)


    #News:
    def update_news(self):
        self.get_news()

    def get_news(self):
        newsUrl=f'https://www.cnbc.com/quotes/{self.ticker}?tab=news'
        try:
            req = Request(url=newsUrl,headers=self.headers) 
            resp = urlopen(req)    
        except:
            print("no link")
        html = BeautifulSoup(resp, features="html.parser")

        #finds a class and finds the latest news while making sure href is true
        counter = 0
        for row in html.find_all('a', class_='LatestNews-headline', href = True):
            if counter == 0:
                self.News1 = News(row.text, row['href'])
            if counter == 1:
                self.News2 = News(row.text, row['href'])
                break
            counter += 1




    #DEBUGGING: Used to Interpret Soup Contents
    def print_soup(self):
        print(self.soup)

    #Stock Price Function:
    def get_stock_price(self):
        for row in self.soup.find_all('fin-streamer'):
            if row["data-field"]=="regularMarketPrice" and row["data-symbol"]==self.ticker:
                self.market_price = row["value"]
            if row["data-field"]=="regularMarketChange" and row["data-symbol"]==self.ticker:
                self.market_change = row["value"]
            if row["data-field"]=="regularMarketChangePercent" and row["data-symbol"]==self.ticker:
                self.market_percentage = row["value"]

    #DEBUGGING: Used to Interpret Table Data Output
    def print_table(self):
        self.Table.print_table()

    #DEBUGGING: Used to Interpret Graph Data Output
    def print_graph(self):
        self.Graph.update_graph_json()

""" RESERVE: Working Current Price Function
    def pull_data(self):
        response = requests.get(url, headers=headers)
        soup = BeautifulSoup(response.text, "html.parser")

        current = soup.select_one(f'fin-streamer[data-field="regularMarketPrice"][data-symbol="{ticker}"]')
        print(current['value'])
        #with open("") as fp:
        #    return BeautifulSoup(fp, "html.parser")
"""

""" RESERVE: Traversing Table Data
counter = 0
for row in result:
    #Accesses Data Values
    if counter % 2 == 1: 
        print(row.text)
    counter += 1

    #Accesses Data Labels
    if counter % 2 == 0: 
        print(row.text)
"""

""" TESTING: HTML Access and Soup Creation 
    with open("DataManager/test.html") as fp:
        self.soup = BeautifulSoup(fp, "html.parser")
    print(soup)
"""