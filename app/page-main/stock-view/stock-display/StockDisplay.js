import './StockDisplay.css'
import StockGraph from './stock-graph/StockGraph'
import StockTable from './stock-table/StockTable'

export default function StockDisplay() {
    return (
        <div id="display-container">
            <StockGraph />
            <StockTable 
                key = {[
                    "Previous Close",
                    "Open",
                    "Bid",
                    "Ask",
                    "Day's Range",
                    "52 Week Range",
                    "Volume",
                    "Avg. Volume",
                    "Market Cap",
                    "Beta (5Y Monthly)",
                    "PE Ratio (TTM)",
                    "EPS (TTM)",
                    "Earnings Date",
                    "Forward Dividend & Yield",
                    "Ex-Dividend Date",
                    "1y Target Est"
                ]}
                val = {[
                    "377.43",
                    "376.78",
                    "377.46 x 1000",
                    "377.65 x 2200",
                    "376.21 - 378.18",
                    "219.35 - 379.79",
                    "5,355,087",
                    "23,730,858",
                    "2.807T",
                    "0.88",
                    "36.67",
                    "10.30",
                    "Jan 22, 2024 - Jan 26, 2024",
                    "3.00 (0.79%)",
                    "Nov 15, 2023",
                    "368.30"
                ]}
            />
        </div>
    )
}