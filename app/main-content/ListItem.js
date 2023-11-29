export default function ListItem({ number }) {
    return (
        <li>
            <div className="stock-ticker">Stock #{number}</div>
            <div className="stock-price">Stock Price</div>
        </li>
    )
}