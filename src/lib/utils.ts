import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function splitInHalf(sentence: string): [string, string] {
  const words = sentence.trim().split(" ")
  const half = Math.ceil(words.length / 2)
  return [
    words.slice(0, half).join(" "),
    words.slice(half).join(" ")
  ]
}
