import { cn, handleClick } from "@/lib/utils"

function Nav({ linkList, className, sectionRefs }: INavProps) {
  return (
    <nav className="max-w-full self-end">
      <ul className={'flex justify-between gap-x-6'}>
        {linkList.map((link) =>
          <li key={link.name}>
            <button onClick={() => handleClick(link.url, sectionRefs)}>
              <i className={cn(link.icon, className)}></i>
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav
