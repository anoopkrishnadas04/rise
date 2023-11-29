import './Links.css'
import Description from './description/Description'
import Account from './account/Account'
import Settings from './settings/Settings'

export default function Links() {
    return (
        <div id="links-container">
            <Settings />
            <Account />
            <Description />
        </div>
    )
}