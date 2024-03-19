function Nav({linkList}: {linkList: IMainNavLinks[]}) {
  return (
    <nav>
      <ul>
        {linkList.map((link) => 
          <li key={link.name}>
            <a href={link.url}>
            <i className={link.icon}></i>
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav
