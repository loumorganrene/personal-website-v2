import Logo from "../logo/logo"
import Nav from "../nav/nav"
import LPLogo from "./../../assets/logos/logo-lp.webp"
import mainNavLinkList from "../../data/main-nav-link-list"

function Header({sectionRefs}: {sectionRefs:{ [key: string]: React.RefObject<HTMLDivElement> }}) {

  return (
    <header className='z-10 flex justify-between items-center max-w-screen max-h-20 p-4 sticky top-0 bg-white'>
      <Logo image={LPLogo} className='max-w-20 max-h-10' />
      <Nav linkList={mainNavLinkList} sectionRefs={sectionRefs} className='fa-fw text-4xl' />
    </header>
  );
}

export default Header