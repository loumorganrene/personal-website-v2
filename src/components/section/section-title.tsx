import { cn } from "@/lib/utils"

function SectionTitle({ title, className }: ISectionTitleProps) {
  return (
    <div className="h-fit pt-24 pb-6 bg-white">
      <h2
        className={cn("w-min pl-10 text-4xl font-bold uppercase border-b-8", className)}>
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
