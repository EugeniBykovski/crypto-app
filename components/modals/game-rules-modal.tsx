"use client";

import { FC, memo } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { GameRulesModalProps } from "./types";
import Image from "next/image";
import { money } from "@/public/assets";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const GameRulesModal: FC<GameRulesModalProps> = memo(({ isOpen, onPlay }) => {
  const t = useTranslations("rules-modal");

  return (
    <Dialog open={isOpen}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <DialogContent className="w-[86%]">
          <DialogTitle></DialogTitle>
          <div className="text-center">
            <h2 className="text-[#5E44ED] text-4xl font-bold">{t("time")}</h2>
            <p className="text-sm text-zinc-500 mt-1">
              {t("time-description-1")}
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              {t("time-description-2")} <br /> {t("time-description-3")}
            </p>
            <p className="mt-4 text-md text-zinc-700 font-semibold">
              {t("time-description-4")}
            </p>
            <div className="my-4 flex justify-center items-center gap-2">
              <Image src={money} alt="Money" width={32} height={32} />
              <p className="text-3xl text-green-500 font-bold">{t("bonus")}</p>
            </div>
            <Button
              className="mt-2 focus-visible:ring-0 bg-[#5E44ED] text-white py-5 w-full rounded-lg shadow-md hover:bg-purple-700 font-semibold text-md"
              onClick={onPlay}
            >
              {t("play")}
            </Button>
          </div>
        </DialogContent>
      </motion.div>
    </Dialog>
  );
});

export default GameRulesModal;
