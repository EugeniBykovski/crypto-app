"use client";

import { FC, memo } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GameRulesModalProps } from "./types";
import Image from "next/image";
import { money } from "@/public/assets";

const GameRulesModal: FC<GameRulesModalProps> = memo(({ isOpen, onPlay }) => (
  <Dialog open={isOpen}>
    <DialogContent className="w-[86%]">
      <div className="text-center">
        <h2 className="text-[#5E44ED] text-4xl font-bold">2m 45s</h2>
        <p className="text-sm text-zinc-500 mt-1">time left to play</p>
        <p className="mt-4 text-sm text-zinc-500">
          You are selected for CryptoSkill <br /> limited offer!
        </p>
        <p className="mt-2 text-md text-zinc-700 font-semib old">
          Match pictures and win virtual
        </p>
        <div className="my-4 flex justify-center items-center gap-2">
          <Image src={money} alt="Money" width={32} height={32} />
          <p className="text-4xl text-green-400 font-bold">$3,000!</p>
        </div>
        <Button
          className="mt-2 bg-purple-600 focus-visible:ring-0 text-white py-5 w-full rounded-lg shadow-md hover:bg-purple-700"
          onClick={onPlay}
        >
          Play
        </Button>
      </div>
    </DialogContent>
  </Dialog>
));

export default GameRulesModal;
