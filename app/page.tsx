"use client";

import { FC, memo, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// import { useTranslations } from "next-intl";
import { boat, jewelry, sailboat } from "@/public/assets";
import Image, { StaticImageData } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";

const images = [boat, sailboat, jewelry];
const shuffledImages = [...images, ...images].sort(() => Math.random() - 0.5);

const Home: FC = memo(() => {
  // const t = useTranslations("home");

  const [showModal, setShowModal] = useState(true);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [foundPairs, setFoundPairs] = useState<StaticImageData[]>([]);
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev: any) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      const [firstIndex, secondIndex] = flippedIndexes;
      if (shuffledImages[firstIndex] === shuffledImages[secondIndex]) {
        setFoundPairs((prev: any) => [...prev, shuffledImages[firstIndex]]);
      }
      setTimeout(() => setFlippedIndexes([]), 2000);
    }
  }, [flippedIndexes]);

  useEffect(() => {
    if (flippedIndexes.length === 1) {
      const timer = setTimeout(() => {
        setFlippedIndexes([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [flippedIndexes]);

  const handleCardClick = (index: number) => {
    if (
      flippedIndexes.length < 2 &&
      !flippedIndexes.includes(index) &&
      !foundPairs.includes(shuffledImages[index])
    ) {
      setFlippedIndexes((prev: any) => [...prev, index]);
    }
  };

  const handlePlay = () => setShowModal(false);

  const handleCloseCongratsModal = () => {
    setShowCongratsModal(false);
    console.log("Congratulations modal closed");
  };

  useEffect(() => {
    if (foundPairs.length === images.length) {
      setShowCongratsModal(true);
    }
  }, [foundPairs]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Dialog open={showModal}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold">Условия игры</h2>
                <p className="mt-2 text-gray-600">
                  Откройте все пары картинок, чтобы выиграть!
                </p>
                <Button className="mt-4" onClick={handlePlay}>
                  Играть
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-green-600">Выберите пары!</h1>
        <p className="text-gray-600">
          Время: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {shuffledImages.map((image, index) => (
          <div
            key={index}
            className={`w-24 h-24 bg-blue-500 flex items-center justify-center ${
              flippedIndexes.includes(index) || foundPairs.includes(image)
                ? "bg-white"
                : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            {(flippedIndexes.includes(index) || foundPairs.includes(image)) && (
              <Image src={image} alt="card" className="w-20 h-20" />
            )}
          </div>
        ))}
      </div>
      {showCongratsModal && (
        <Dialog open={showCongratsModal}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold">Поздравляем!</h2>
                  <p className="mt-2 text-gray-600">
                    Вы выиграли виртуальные $5000! Скачайте приложение, чтобы
                    начать.
                  </p>
                  <Button className="mt-4" onClick={handleCloseCongratsModal}>
                    Закрыть
                  </Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
});

export default Home;
