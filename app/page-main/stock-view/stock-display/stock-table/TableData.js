import './TableData.css'

export default function TableData({name, data}) {
    return (
        <div className="table-data-container">
            {name}: {data}
        </div>
    )
}