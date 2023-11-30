import './PageMain.css'
import Sidebar from './sidebar/Sidebar'
import StockView from './stock-view/StockView'


export default function PageMain() {
    return (
        <div id="page-main-container">
            <Sidebar />
            <StockView />
        </div>
    )
}