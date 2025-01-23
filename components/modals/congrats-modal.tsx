"use client";

import { FC, memo, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CongratsModalProps } from "./types";
import Image from "next/image";
import { money } from "@/public/assets";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const CongratsModal: FC<CongratsModalProps> = memo(({ isOpen, onClose }) => {
  const t = useTranslations("congrats-modal");
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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <DialogContent className="w-[86%] rounded-lg">
          <DialogTitle></DialogTitle>
          <div className="text-center">
            <Image
              src={money}
              alt="Congratulations"
              width={72}
              height={72}
              className="mx-auto"
            />
            <h2 className="text-[#5E44ED] text-3xl font-bold my-5">
              {t("title")}
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
              {t("description-1")}{" "}
              <span className="text-zinc-700 font-semibold">{t("bonus")}</span>!
            </p>
            <p className="text-sm text-gray-500 mt-1">{t("description-2")}</p>
            <Link href={"https://my.toruftuiov.com/click"}>
              <Button
                className="mt-5 focus-visible:ring-0 bg-[#5E44ED] text-white py-5 w-full rounded-lg shadow-md hover:bg-purple-700 font-semibold text-md"
                onClick={onClose}
              >
                {t("download")}
              </Button>
            </Link>
          </div>
        </DialogContent>
      </motion.div>
    </Dialog>
  );
});

export default CongratsModal;
