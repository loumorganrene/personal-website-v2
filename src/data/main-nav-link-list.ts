import { MainNavIconType, SectionRef } from "../types/enum"

const mainNavLinkList: IMainNavLink[] = [
  {
    name: "education",
    url: SectionRef.Education,
    icon: MainNavIconType.GraduationCap
  },
  {
    name: "projects",
    url: SectionRef.Projects,
    icon: MainNavIconType.LaptopCode
  },
  {
    name: "contact",
    url: SectionRef.Contact,
    icon: MainNavIconType.Envelope
  },
  {
    name: "feedbacks",
    url: SectionRef.Feedbacks,
    icon: MainNavIconType.Comment
  }
]

export default mainNavLinkList