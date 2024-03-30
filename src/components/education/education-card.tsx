import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"

function EducationCard({ contents }: { contents: IEducation }) {
  return (
    <>
      <Card className="w-96">
        <CardHeader>
          <CardDescription className="flex justify-between align-baseline">
            <p className="">
              {contents.startDate} - {contents.endDate}
            </p>
            <img
              className="w-5 h-5"
              src={`./src/assets/logos/` + contents.school.logo}
              alt={contents.school.name + "logo"} />
            <a href={contents.school?.url}>
              {contents.school.name}
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="">
            {contents.content.description}
          </p>
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
