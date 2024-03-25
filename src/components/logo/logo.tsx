import { cn } from "@/lib/utils"

function Logo({ image, className }: ILogoProps) {
  return <a href="#"><img src={image} alt="Lou Morgan René PIERRE" className={cn('', className)} /></a>
}

export default Logo
