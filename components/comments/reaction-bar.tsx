"use client";

import { FC, memo } from "react";
import Image from "next/image";
import { likeHand, comment } from "@/public/assets";
import { reactions } from "@/types/comment-types";
import { ReactionBarProps } from "./types";
import { useTranslations } from "next-intl";

const ReactionBar: FC<ReactionBarProps> = memo(({ likeCount = 0 }) => {
  const t = useTranslations("reaction-bar");

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Image
            src={likeHand}
            alt="likeHand"
            width={18}
            height={18}
            className="rounded-full"
          />
          <p className="text-sm text-zinc-500">{t("like")}</p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src={comment}
            alt="comment"
            width={18}
            height={18}
            className="rounded-full"
          />
          <p className="text-sm text-zinc-500">{t("reply")}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-zinc-500">{likeCount}</span>
        <div className="flex items-center relative -space-x-2">
          {reactions.map((reaction, index) => (
            <Image
              key={index}
              src={reaction.src}
              alt={reaction.alt}
              width={24}
              height={24}
              className="rounded-full border-2 border-white"
              style={{ zIndex: reactions.length - index }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default ReactionBar;
