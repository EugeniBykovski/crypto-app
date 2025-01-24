// eslint-disable-next-line
// @ts-nocheck

"use client";

import { FC, memo } from "react";
import Image from "next/image";
import { LikeHandIcon, CommentIcon } from "@/public/assets";
import { reactions } from "@/types/comment-types";
import { ReactionBarProps } from "./types";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ReactionBar: FC<ReactionBarProps> = memo(({ likeCount = 0 }) => {
  const t = useTranslations("reaction-bar");

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <LikeHandIcon
            alt="likeHand"
            width={18}
            height={18}
            className="rounded-full"
          />
          <Link href={"/"} className="underline">
            <p className="text-sm text-zinc-500 hover:text-zinc-400 transition">
              {t("like")}
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <CommentIcon
            alt="comment"
            width={18}
            height={18}
            className="rounded-full"
          />
          <Link href={"/"} className="underline">
            <p className="text-sm text-zinc-500 hover:text-zinc-400 transition">
              {t("reply")}
            </p>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-zinc-500">{likeCount}</span>
        <div className="flex items-center relative -space-x-2">
          {reactions.map((reaction, index) => (
            <div key={index} className="relative z-10">
              {typeof reaction.src === "function" ? (
                <>{reaction.src({ width: 24, height: 24 })}</>
              ) : (
                <Image
                  src={reaction.src}
                  alt={reaction.alt}
                  width={24}
                  height={24}
                  className="rounded-full border-2 border-white"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ReactionBar;
