import { cn, scrollToAnchor } from "@/lib/utils"

function Nav({ linkList, className, sectionRefs }: INavProps) {
  
  const handleClick = (url: string) => {
    const ref = sectionRefs[url]
    if (ref && ref.current) {
      scrollToAnchor(ref)
    }
  }

  return (
    <nav className="max-w-full self-end">
      <ul className={'flex justify-between gap-x-6'}>
        {linkList.map((link) =>
          <li key={link.name}>
            <button onClick={() => handleClick(link.url)}>
              <i className={cn(link.icon, className)}></i>
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav
