import { capitalizeWord, cn } from "@/lib/utils"

function Section({ sectionName, children, className }: ISectionProps) {
  return (
    <section id={sectionName} className={cn('w-full h-screen', className)}>
      <h2>{capitalizeWord(sectionName)}</h2>
      {children}
    </section>
  )
}

export default Section
