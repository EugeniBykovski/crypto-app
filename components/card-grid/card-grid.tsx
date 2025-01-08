"use client";

import { FC, memo, useMemo } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { CardGridProps } from "./types";

const CardGrid: FC<CardGridProps> = memo(
  ({ shuffledImages, flippedIndexes, foundPairs, onCardClick }) => {
    const flippedStates = useMemo(
      () =>
        shuffledImages.map(
          (image, index) =>
            flippedIndexes.includes(index) || foundPairs.includes(image)
        ),
      [flippedIndexes, foundPairs, shuffledImages]
    );

    return (
      <div className="grid grid-cols-3 gap-4">
        {shuffledImages?.map((image, index) => {
          const isFlipped = flippedStates[index];

          return (
            <motion.div
              key={index}
              className="relative w-24 h-24 cursor-pointer"
              onClick={() => onCardClick(index)}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`absolute inset-0 flex items-center justify-center ${
                  isFlipped ? "rotate-y-0" : "rotate-y-180"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  perspective: 1000,
                }}
                animate={{
                  rotateY: isFlipped ? 0 : 180,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                {isFlipped && (
                  <Image
                    src={image}
                    alt="card"
                    className="absolute w-full h-full object-cover"
                  />
                )}
              </motion.div>
              <motion.div
                className={`absolute inset-0 bg-blue-500`}
                style={{
                  backfaceVisibility: "hidden",
                  perspective: 1000,
                }}
                animate={{
                  rotateY: isFlipped ? -180 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    );
  }
);

export default CardGrid;
