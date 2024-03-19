import { capitalizeWord } from "@/lib/utils"

function Section({sectionName, children}: ISectionProps) {
  return (
    <section id={sectionName}>
      <h2>{capitalizeWord(sectionName)}</h2>
      {children}
    </section>
  )
}

export default Section
