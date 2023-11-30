import './StockGraph.css'
import Buttons from './Buttons'

export default function StockGraph(props) {
    return (
        <div id="graph-parts-container">
            <div id="graph-container">
            </div>
            <Buttons />
        </div>
    )
}