import { cn } from "@/lib/utils"

function Nav({ linkList, className }: INavProps) {
  return (
    <nav className="max-w-full self-end">
      <ul className={'flex justify-between gap-x-6'}>
        {linkList.map((link) =>
          <li key={link.name}>
            <a href={link.url}>
              <i className={cn(link.icon, className)}></i>
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav
