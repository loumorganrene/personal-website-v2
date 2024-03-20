import Logo from "../logo/logo"
import Nav from "../nav/nav"
import LPLogo from "./../../assets/logos/logo-lp.svg"
import mainNavLinkList from "../../data/main-nav-link-list"

function Header() {
  return (
    <header className='flex justify-between items-center max-w-full max-h-20 p-4 sticky top-0'>
      <Logo image={LPLogo} className='max-w-20 max-h-12' />
      <Nav linkList={mainNavLinkList} className='fa-fw text-4xl' />
    </header>
  );
}

export default Header