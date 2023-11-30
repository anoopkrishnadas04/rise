import './StockHeader.css'
import StockName from './stock-name/StockName'
import StockPrice from './stock-price/StockPrice'
import UpdateTime from './update-time/UpdateTime'

export default function StockHeader({name, price, time}) {
    return (
        <div id="header-container">
            <StockName name={name}/>
            <StockPrice price={price}/>
            <UpdateTime time={time}/>
        </div>
    )
}