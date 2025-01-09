"use client";

import { FC, memo } from "react";
import Image from "next/image";
import { reactions } from "@/types/comment-types";
import { CommentItemProps } from "./types";
import { useTranslations } from "next-intl";

const CommentItem: FC<CommentItemProps> = memo(
  ({ avatar, name, text, commentImage, time, likes }) => {
    const t = useTranslations("comment-item");

    return (
      <div className="flex items-start flex-col bg-white rounded-lg">
        <div className="flex items-start space-x-4 bg-white">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="bg-[#EEEEFF80] rounded-lg px-6 py-2">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm text-gray-600">{text}</p>
            {commentImage && (
              <Image
                src={commentImage}
                alt={`${name}'s comment`}
                width={200}
                height={200}
                className="mt-2 rounded-lg"
              />
            )}
          </div>
        </div>
        <div className="w-full mt-2 flex items-center justify-between space-x-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-500">{time}</span>
            <span className="text-sm text-zinc-500">{t("like")}</span>
            <span className="text-sm text-zinc-500">{t("reply")}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-zinc-500">{likes}</span>
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
      </div>
    );
  }
);

export default CommentItem;
