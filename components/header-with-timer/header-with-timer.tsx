"use client";

import { FC, memo } from "react";
import { HeaderWithTimerProps } from "./types";

const HeaderWithTimer: FC<HeaderWithTimerProps> = memo(({ timer }) => (
  <div className="text-center mb-4">
    <h2 className="text-2xl font-semibold mb-1 text-[#FFBB1D]">
      Your Chance to Win!
    </h2>
    <p className="text-md text-zinc-700 font-semibold mb-2">
      Limited-time prize, so hurry up!
    </p>
    <p className="text-[#5E44ED] text-4xl font-bold">
      {Math.floor(timer / 60)}m {String(timer % 60).padStart(2, "0")}s
    </p>
    <p className="text-sm text-zinc-500">time left to play</p>
  </div>
));

export default HeaderWithTimer;
