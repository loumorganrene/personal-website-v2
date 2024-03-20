import { cn } from "@/lib/utils"



function Logo({ image, className }: ILogoProps) {
  return <img src={image} alt="Lou Morgan René PIERRE" className={cn('', className)} />
}

export default Logo
