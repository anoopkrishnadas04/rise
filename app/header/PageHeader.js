import './PageHeader.css'
import Logo from './logo/Logo'
import Searchbar from './searchbar/Searchbar'
import Links from './links/Links'

export default function PageHeader() {
  return (
    <header>
        <Logo />
        <Searchbar />
        <Links />
    </header>
  )
}