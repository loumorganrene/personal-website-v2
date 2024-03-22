import { cn } from "@/lib/utils"

function Section({ sectionName, children, className }: ISectionProps) {
  return (
    <section id={sectionName} className={cn('w-full h-screen pt-20', className)}>
      {children}
    </section>
  )
}

export default Section
