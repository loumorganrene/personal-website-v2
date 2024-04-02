import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeWord(string:string) {
  return string[0].toUpperCase() + string.slice(1)
}

export function scrollToAnchor(ref: React.RefObject<HTMLDivElement>) {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
}

// export const handleScroll = (event: { deltaY: number }) => {
//   if ('deltaY' in event) {
//     if (event.deltaY > 0) {
//       // on scrolling down
//       window.scrollTo({
//         top: window.scrollY + window.innerHeight,
//         behavior: 'smooth'
//       });
//     } else {
//       // on scrolling up
//       window.scrollTo({
//         top: window.scrollY - window.innerHeight,
//         behavior: 'smooth'
//       })
//     }
//   }
// }

// export const handleClick = (url: string, sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> }) => {
//   const ref = sectionRefs[url]
//   if (ref && ref.current) {
//     scrollToAnchor(ref)
//   }
// }