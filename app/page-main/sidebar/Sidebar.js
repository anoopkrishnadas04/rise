import './Sidebar.css'
import './SideStock'
import ListItem from './SideStock'

export default function Sidebar() {
    return (
        <div id="sidebar-container">
            <ListItem id="list-item-1" name={1} price={"Price"}/>
            <ListItem id="list-item-2" name={2} price={"Price"}/>
            <ListItem id="list-item-3" name={3} price={"Price"}/>
            <ListItem id="list-item-4" name={4} price={"Price"}/>
            <ListItem id="list-item-5" name={5} price={"Price"}/>
            <ListItem id="list-item-6" name={6} price={"Price"}/>
            <ListItem id="list-item-7" name={7} price={"Price"}/>
            <ListItem id="list-item-8" name={8} price={"Price"}/>
        </div>
    )
}