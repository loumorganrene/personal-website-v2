import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeWord(string:string) {
  return string[0].toUpperCase() + string.slice(1)
}

export function scrollToAnchor(ref: React.RefObject<HTMLDivElement>) {
  console.log(ref.current)
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
}