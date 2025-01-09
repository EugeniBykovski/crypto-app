"use client";

import { FC, memo, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CongratsModalProps } from "./types";
import Image from "next/image";
import { money } from "@/public/assets";
import Confetti from "react-confetti";

const CongratsModal: FC<CongratsModalProps> = memo(({ isOpen, onClose }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen}>
      <DialogContent className="w-[86%]">
        <div className="text-center">
          <Image
            src={money}
            alt="Congratulations"
            width={72}
            height={72}
            className="mx-auto"
          />
          <h2 className="text-[#5E44ED] text-3xl font-bold my-5">
            Congratulations!
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            {showConfetti && (
              <Confetti
                width={500}
                height={window.innerHeight}
                numberOfPieces={200}
                recycle={false}
              />
            )}
            You won virtual{" "}
            <span className="text-zinc-700 font-semibold">$3,000</span>!
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Download the app now and trade for free.
          </p>
          <Button
            className="mt-5 focus-visible:ring-0 bg-purple-600 text-white py-5 w-full rounded-lg shadow-md hover:bg-purple-700 font-semibold text-md"
            onClick={onClose}
          >
            Download Bonus App
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
});

export default CongratsModal;
