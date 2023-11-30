import { promises as fs } from 'fs';
import './StockHeader.css'
import StockName from './stock-name/StockName'
import StockPrice from './stock-price/StockPrice'
import UpdateTime from './update-time/UpdateTime'
import { exec } from 'child_process';

export default async function StockHeader() {
    const { execFile } = require('node:child_process');
    const child = execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
    }); 
    const file = await fs.readFile(process.cwd() + '/app/json-files/Stock.json', 'utf8');
    const data = JSON.parse(file);
    return (
        <div id="header-container">
            <StockName name={data.ticker}/>
            <StockPrice price={data.market_price}/>
            <UpdateTime time={data.market_percentage}/>
        </div>
    )
}