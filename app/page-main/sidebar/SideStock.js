import './SideStock.css'

export default function SideStock({ name, price }) {
    return (
        <div className='side-stock-container'>
            <div className="stock-ticker">{name ? name : 'No Name Selected'}</div>
            <div className="stock-price">{price ? price : 'N/A'}</div>                
        </div>
    )
}