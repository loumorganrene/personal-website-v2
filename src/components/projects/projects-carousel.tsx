import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import projectsList from "@/data/projects-list"
import { Card, CardContent } from "../ui/card"
import { cn } from "@/lib/utils"
import { TechnologyIconType } from "@/types/enum"

function ProjectsCarousel() {

  return (
    <>
      <Carousel opts={{ loop: true }} >
        <CarouselContent>
          {projectsList.map((project, index) => (
            <CarouselItem key={"carousel-item-" + index}>
              <div className="p-12 md:px-96">
                <Card className="rounded-[40px] shadow-md">
                  <CardContent className="group relative flex flex-col items-center justify-center p-6 aspect-2/3 md:aspect-auto md:h-[70svh]">
                    <div className="hidden group-hover:flex flex-col absolute p-6 w-full">
                      <p>
                        {project.description}
                      </p>
                    </div>
                    <img
                      src={"/assets/projects/" + project.image}
                      alt={project.title}
                      className="object-cover h-full group-hover:blur-sm group-hover:opacity-25"
                    />
                  </CardContent>
                </Card>
                <div className="flex flex-col items-center gap-6 py-6">
                  <h3 className="text-white text-3xl font-semibold">
                    {project.title.toUpperCase()}
                  </h3>
                  <ul className="flex gap-2 items-center justify-center">
                    {project.technologies.map((techno: string, index: number) =>
                      <li>
                        <img
                          key={"project-techno-" + index}
                          src={techno}
                          className={cn(
                            "w-16 h-16 drop-shadow-md",
                            techno === TechnologyIconType.REACT ? "brightness-0 invert" : "",
                            techno === TechnologyIconType.JAVASCRIPT || techno === TechnologyIconType.TYPESCRIPT ? "w-14 h-14" : "")}
                        />
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-5 top-72 sm:left-72" />
        <CarouselNext className="-right-5 top-72 sm:right-72" />
      </Carousel>
    </>
  )
}

export default ProjectsCarousel
