import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Button, ButtonProps } from "../ui/button"
import { cn } from "@/lib/utils"

interface IEducationPopover extends ButtonProps {
  contentStyle?: string;
  side?: "top" | "right" | "bottom" | "left"
}

function EducationPopover({ id, variant, size, title, children, className, contentStyle, side }: IEducationPopover) {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild className={cn("", className)}>
          <Button id={id} variant={variant} size={size}>{title}</Button>
        </PopoverTrigger>
        <PopoverContent side={side} sideOffset={1} className={contentStyle}>
        {children}
      </PopoverContent>
    </Popover >
    </>
  )
}

export default EducationPopover
