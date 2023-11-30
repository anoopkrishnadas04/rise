import './StockDisplay.css'
import StockGraph from './stock-graph/StockGraph'
import StockTable from './stock-table/StockTable'

export default function StockDisplay() {
    return (
        <div id="display-container">
            <StockGraph />
            <StockTable />
        </div>
    )
}