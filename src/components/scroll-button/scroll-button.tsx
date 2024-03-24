import { cn } from "@/lib/utils"
import { ChevronsDown, ChevronsUp } from "lucide-react"

function ScrollButton({ direction, target, size, className }: IScrollButtonProps) {
  return (
    <a href={target} className={cn(className)}>
      {direction === 'down' ? <ChevronsDown className={cn(size)} /> : <ChevronsUp className={cn(size)} />}
    </a>
  )
}

export default ScrollButton
