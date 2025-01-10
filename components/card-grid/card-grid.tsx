"use client";

import { FC, memo, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import { CardGridProps } from "./types";
import { bgCard } from "@/public/assets";
import { gradients } from "@/data/mock";
import { motion } from "framer-motion";

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

    const getGradient = (image: StaticImageData) => {
      const pairIndex = foundPairs.findIndex(({ src }) => src === image.src);
      return pairIndex >= 0 ? gradients[pairIndex % gradients.length] : null;
    };

    return (
      <div className="grid grid-cols-3 gap-4 my-6">
        {shuffledImages?.map((image, index) => {
          const isFlipped = flippedStates[index];
          const gradient = getGradient(image);

          return (
            <motion.div
              key={`card-${index}`}
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
                  <div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: gradient || "transparent",
                    }}
                  >
                    <Image
                      src={image}
                      alt="card"
                      className="absolute w-full h-full object-cover rounded-xl"
                    />
                  </div>
                )}
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-xl flex justify-center items-center bg-cover bg-center"
                style={{
                  backgroundImage: `url(${bgCard.src})`,
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
              ></motion.div>
            </motion.div>
          );
        })}
      </div>
    );
  }
);

export default CardGrid;
