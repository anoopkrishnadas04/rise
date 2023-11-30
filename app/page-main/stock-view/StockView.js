import './StockView.css'
import StockHeader from './stock-header/StockHeader'
import StockDisplay from './stock-display/StockDisplay'


export default function StockView() {
    return (
        <div id="view-container">
            <StockHeader />
            <StockDisplay />
        </div>
    )
}