import { images } from "@/constants/constants";
import { clsx, type ClassValue } from "clsx";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shuffledImages = [...images, ...images].sort(
  () => Math.random() - 0.5
);

export const createCardClickHandler = (
  flippedIndexes: number[],
  foundPairs: StaticImageData[],
  setFlippedIndexes: React.Dispatch<React.SetStateAction<number[]>>
) => {
  return (index: number) => {
    if (
      flippedIndexes.length < 2 &&
      !flippedIndexes.includes(index) &&
      !foundPairs.includes(shuffledImages[index])
    ) {
      setFlippedIndexes((prev) => [...prev, index]);
    }
  };
};
