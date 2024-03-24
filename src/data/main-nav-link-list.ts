import { MainNavIconType } from "../types/enum"

const mainNavLinkList: IMainNavLink[] = [
  {
    name: "education",
    url: "#education",
    icon: MainNavIconType.GraduationCap
  },
  {
    name: "projects",
    url: "#projects",
    icon: MainNavIconType.LaptopCode
  },
  {
    name: "contact",
    url: "#contact",
    icon: MainNavIconType.Envelope
  },
  {
    name: "feedbacks",
    url: "#feedbacks",
    icon: MainNavIconType.Comment
  }
]

export default mainNavLinkList