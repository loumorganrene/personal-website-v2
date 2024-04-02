import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Button, ButtonProps } from "../ui/button"
import { cn } from "@/lib/utils"
import useToggleState from "@/hooks/useToggleState";

interface IEducationPopover extends ButtonProps {
  contentStyle?: string;
  side?: "top" | "right" | "bottom" | "left"
}

function EducationPopover({ id, variant, size, title, children, className, contentStyle, side }: IEducationPopover) {
  const { isToggled, toggle } = useToggleState(false);

  return (
    <>
      <Popover onOpenChange={toggle}>
        <PopoverTrigger asChild className={cn(isToggled === true ? 'z-10 transform origin-top-left animate-scale-down' : 'transform origin-top-left animate-scale-up', className)}>
          <Button id={id} variant={variant} size={size} className={""}>{title}</Button>
        </PopoverTrigger>
        <PopoverContent align={"start"} side={side} sideOffset={-135} className={cn(isToggled === true ? "z-0" : "", contentStyle)}>
          {children}
        </PopoverContent>
      </Popover >
    </>
  )
}

export default EducationPopover
