import './StockTable.css'
import TableData from './TableData'

export default function StockTable({key, val}) {
    let keyArr = {key}
    let valArr = {val}
    
    return (
        <div id="table-container">
            <TableData name={keyArr[0]}  data={valArr[0]} />
            <TableData name={keyArr[1]}  data={valArr[1]} />
            <TableData name={keyArr[2]}  data={valArr[2]} />
            <TableData name={keyArr[3]}  data={valArr[3]} />
            <TableData name={keyArr[4]}  data={valArr[4]} />
            <TableData name={keyArr[5]}  data={valArr[5]} />
            <TableData name={keyArr[6]}  data={valArr[6]} />
            <TableData name={keyArr[7]}  data={valArr[7]} />
            <TableData name={keyArr[8]}  data={valArr[8]} />
            <TableData name={keyArr[9]}  data={valArr[9]} />
            <TableData name={keyArr[10]} data={valArr[10]} />
            <TableData name={keyArr[11]} data={valArr[11]} />
            <TableData name={keyArr[12]} data={valArr[12]} />
            <TableData name={keyArr[13]} data={valArr[13]} />
            <TableData name={keyArr[14]} data={valArr[14]} />
            <TableData name={keyArr[15]} data={valArr[15]} />
        </div>
    )
}