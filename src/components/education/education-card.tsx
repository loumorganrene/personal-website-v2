import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

function EducationCard({ contents, descClassName }: { contents: IEducation, descClassName?: string }) {
  return (
    <>
      <Card className="w-fit">
        <CardHeader>
          <CardDescription className={cn(
            "flex align-baseline justify-between pl-10",
            descClassName
          )}>
            <span>
              {contents.startDate} - {contents.endDate}
            </span>
            <a
              className="flex gap-2"
              href={contents.school.url}>
              <img
                className="w-5 h-5"
                src={`./src/assets/logos/` + contents.school.logo}
                alt={contents.school.name + "logo"} />
              {contents.school.name}
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          {/* <p className="">
            {contents.content.description}
          </p> */}
          <ul>
            {contents.content.skills?.map((skill) =>
              <li className="">
                - {skill}
              </li>
            )}
          </ul>
        </CardContent>
      </Card>
    </>
  )
}

export default EducationCard
