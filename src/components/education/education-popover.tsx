import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { Button, ButtonProps } from "../ui/button";
import useToggleState from "@/hooks/useToggleState";
import { cn } from "@/lib/utils";
// import useToggleState from "@/hooks/useToggleState";
interface IEducationPopover extends ButtonProps {
  collapsibleStyle?: string;
  contentStyle?: string;
  side?: "top" | "right" | "bottom" | "left"
}
function EducationPopover({ id, variant, size, title, className, collapsibleStyle, contentStyle, children }: IEducationPopover) {
  const { open, toggle } = useToggleState(false);

  return (
    <>
      <Collapsible onOpenChange={toggle} className={cn("relative", collapsibleStyle)}>
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
        <CollapsibleContent className={cn("z-0 absolute top-0 ", open ? "overflow-hidden animate-scale-up" : "hidden", contentStyle)}>
          {children}
        </CollapsibleContent>
      </Collapsible>
    </>
  )
}

export default EducationPopover
