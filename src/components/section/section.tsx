import React from 'react'
import { cn } from "@/lib/utils"

const Section = React.forwardRef<HTMLDivElement, ISectionProps>((props, ref) => {
  const { sectionName, children, className } = props
  return (
    <section id={sectionName} ref={ref} className={cn('w-full h-screen', className)}>
      {children}
    </section>
  )
})

export default Section
