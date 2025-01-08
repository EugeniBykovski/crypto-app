"use client";

import { FC } from "react";
import Image from "next/image";
import { CardGridProps } from "./types";

const CardGrid: FC<CardGridProps> = ({
  shuffledImages,
  flippedIndexes,
  foundPairs,
  onCardClick,
}) => (
  <div className="grid grid-cols-3 gap-4">
    {shuffledImages.map((image, index) => (
      <div
        key={index}
        className={`w-24 h-24 bg-blue-500 flex items-center justify-center ${
          flippedIndexes.includes(index) || foundPairs.includes(image)
            ? "bg-white"
            : ""
        }`}
        onClick={() => onCardClick(index)}
      >
        {(flippedIndexes.includes(index) || foundPairs.includes(image)) && (
          <Image src={image} alt="card" className="w-20 h-20" />
        )}
      </div>
    ))}
  </div>
);

export default CardGrid;
