"use client";

import { FC, memo, useMemo } from "react";
import { HeaderWithTimerProps } from "./types";
import { useTranslations } from "next-intl";

const HeaderWithTimer: FC<HeaderWithTimerProps> = memo(
  ({ timer }) => {
    const t = useTranslations("header-timer");

    const formattedTime = useMemo(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = String(timer % 60).padStart(2, "0");
      return `${minutes}m ${seconds}s`;
    }, [timer]);

    return (
      <div className="text-center mb-3">
        <h2 className="text-2xl font-semibold mb-1 text-[#FFBB1D]">
          {t("title")}
        </h2>
        <p className="text-md text-zinc-700 font-semibold mb-2">
          {t("description-1")}
        </p>
        <p className="text-[#5E44ED] text-4xl font-bold">{formattedTime}</p>
        <p className="text-sm text-zinc-500">{t("description-2")}</p>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.timer === nextProps.timer
);

export default HeaderWithTimer;
