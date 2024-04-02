import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

function EducationCard({ contents, descClassName }: { contents: IEducation, descClassName?: string } ) {
  return (
    <>
      <Card className="w-96">
        <CardHeader>
          <CardDescription className={cn("flex justify-between align-baseline pl-10", descClassName)}>
            <span className="">
              {contents.startDate} - {contents.endDate}
            </span>
            <img
              className="w-5 h-5"
              src={`./src/assets/logos/` + contents.school.logo}
              alt={contents.school.name + "logo"} />
            <a href={contents.school?.url}>
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
