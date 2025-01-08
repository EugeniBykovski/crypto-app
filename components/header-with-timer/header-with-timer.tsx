"use client";

import { FC } from "react";
import { HeaderWithTimerProps } from "./types";

const HeaderWithTimer: FC<HeaderWithTimerProps> = ({ timer }) => (
  <div className="text-center mb-4">
    <h1 className="text-2xl font-bold text-green-600">Выберите пары!</h1>
    <p className="text-gray-600">
      Время: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
    </p>
  </div>
);

export default HeaderWithTimer;
