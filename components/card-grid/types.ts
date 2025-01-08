import { StaticImageData } from "next/image";

export interface CardGridProps {
  shuffledImages: StaticImageData[];
  flippedIndexes: number[];
  foundPairs: StaticImageData[];
  onCardClick: (index: number) => void;
}
