import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { Button, ButtonProps } from "../ui/button";
import useToggleState from "@/hooks/useToggleState";
import { cn } from "@/lib/utils";
// import useToggleState from "@/hooks/useToggleState";
interface IEducationPopover extends ButtonProps {
  contentStyle?: string;
  side?: "top" | "right" | "bottom" | "left"
}
function EducationPopover({ id, variant, size, title, className, contentStyle, children }: IEducationPopover) {
  const { open, toggle } = useToggleState(false);

  return (
    <>
      <Collapsible onOpenChange={toggle} className={cn("relative", contentStyle)}>
        <CollapsibleTrigger asChild >
          <Button
            id={id}
            variant={variant}
            size={size}
            className={cn(
              "z-10 relative origin-top-left",
              open ?
                'animate-scale-down' :
                'animate-scale-up',
              className)}
          >{title}</Button>
        </CollapsibleTrigger>
        <CollapsibleContent className={cn(open ? "z-0 absolute top-0 left-10 animate-scale-up" : "animate-scale-down",)}>
          {children}
        </CollapsibleContent>
      </Collapsible>
    </>
  )
}

export default EducationPopover
