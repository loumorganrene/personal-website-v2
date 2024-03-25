import { SectionRef } from "@/types/enum";
import { useRef } from "react";

export function useSectionRefs() {
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    [SectionRef.Education]: useRef<HTMLDivElement>(null),
    [SectionRef.Projects]: useRef<HTMLDivElement>(null),
    [SectionRef.Contact]: useRef<HTMLDivElement>(null),
    [SectionRef.Feedbacks]: useRef<HTMLDivElement>(null)
  }
  
  return sectionRefs
}