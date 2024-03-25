import { Popover, PopoverTrigger } from "@radix-ui/react-popover"
import { Button, ButtonProps } from "../ui/button"

function EducationPopover({ variant, size, title, children, className }: ButtonProps) {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild className={className}>
          <Button variant={variant} size={size}>{title}</Button>
        </PopoverTrigger>
          {children}
      </Popover>
    </>
  )
}

export default EducationPopover
