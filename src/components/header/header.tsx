import Logo from "../logo/logo"
import Nav from "../nav/nav"
import LPLogo from "./../../assets/logos/logo.svg"
import mainNavLinkList from "../../data/main-nav-link-list"

function Header() {
  return (
    <header>
      <Logo image={LPLogo} />
      <Nav linkList={mainNavLinkList} />
    </header>
  )
}

export default Header
