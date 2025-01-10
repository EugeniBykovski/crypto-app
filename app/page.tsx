"use client";

import { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import { StaticImageData } from "next/image";
import { createCardClickHandler, shuffledImages } from "@/lib/utils";
import { images } from "@/constants/constants";
import GameRulesModal from "@/components/modals/game-rules-modal";
import CongratsModal from "@/components/modals/congrats-modal";
import HeaderWithTimer from "@/components/header-with-timer/header-with-timer";
import CardGrid from "@/components/card-grid/card-grid";
import Comments from "@/components/comments/comments";
import { useRegion } from "@/hooks/useRegion";

const Home: FC = memo(() => {
  const region = useRegion();
  const [showModal, setShowModal] = useState(true);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [foundPairs, setFoundPairs] = useState<StaticImageData[]>([]);
  const [timer, setTimer] = useState(165);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  useEffect(() => {
    if (!isTimerActive) return;

    const countdown = setInterval(
      () => setTimer((prev) => (prev > 0 ? prev - 1 : 0)),
      1000
    );
    return () => clearInterval(countdown);
  }, [isTimerActive]);

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      const [firstIndex, secondIndex] = flippedIndexes;

      if (shuffledImages[firstIndex] === shuffledImages[secondIndex])
        setFoundPairs((prev) => [...prev, shuffledImages[firstIndex]]);

      const resetFlipped = setTimeout(() => setFlippedIndexes([]), 1500);
      return () => clearTimeout(resetFlipped);
    }
  }, [flippedIndexes]);

  useEffect(() => {
    if (flippedIndexes.length === 1) {
      const resetTimer = setTimeout(() => setFlippedIndexes([]), 1500);
      return () => clearTimeout(resetTimer);
    }
  }, [flippedIndexes]);

  useEffect(() => {
    if (foundPairs.length === images.length) {
      setIsTimerActive(false);
      setIsGameFinished(true);
      setTimeout(() => setShowCongratsModal(true), 1000);
    }
  }, [foundPairs]);

  const handleCardClick = useCallback(
    (index: number) =>
      createCardClickHandler(
        flippedIndexes,
        foundPairs,
        setFlippedIndexes
      )(index),
    [flippedIndexes, foundPairs]
  );

  const handlePlay = useCallback(() => {
    setShowModal(false);
    setIsTimerActive(true);
    setIsGameFinished(false);
  }, []);

  const memorizedShuffledImages = useMemo(() => shuffledImages, []);
  const handleCloseCongratsModal = useCallback(() => {
    setShowCongratsModal(false);
    setIsTimerActive(false);
    setTimer(165);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen md:mt-32 sm:mt-8">
      <GameRulesModal isOpen={showModal} onPlay={handlePlay} />
      <HeaderWithTimer timer={timer} />
      <CardGrid
        shuffledImages={memorizedShuffledImages}
        flippedIndexes={flippedIndexes}
        foundPairs={foundPairs}
        onCardClick={handleCardClick}
      />
      <Comments
        region={region}
        isGameStarted={isTimerActive}
        isGameFinished={isGameFinished}
      />
      <CongratsModal
        isOpen={showCongratsModal}
        onClose={handleCloseCongratsModal}
      />
    </div>
  );
});

export default Home;
