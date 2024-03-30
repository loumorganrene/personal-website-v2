import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Button, ButtonProps } from "../ui/button"
import { cn } from "@/lib/utils"
import useToggleState from "@/hooks/useToggleState";

interface IEducationPopover extends ButtonProps {
  contentStyle?: string;
  side?: "top" | "right" | "bottom" | "left"
}

function EducationPopover({ id, variant, size, title, children, className, contentStyle, side }: IEducationPopover) {
  const { isToggled, toggle, buttonRef } = useToggleState(false);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild className={cn("", className)}>
          <Button ref={buttonRef} onClick={toggle} id={id} variant={variant} size={size} className={`${isToggled === true ? 'animate-scale-down' : 'animate-scale-up'}`}>{title}</Button>
        </PopoverTrigger>
        <PopoverContent side={side} sideOffset={1} className={contentStyle}>
        {children}
      </PopoverContent>
    </Popover >
    </>
  )
}

export default EducationPopover
