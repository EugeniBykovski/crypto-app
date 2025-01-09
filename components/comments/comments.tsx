"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { comments } from "@/data/mock";
import { Comment, reactions } from "@/types/comment-types";
import { comment, likeHand } from "@/public/assets";
import { CommentsProps } from "./types";

const Comments: FC<CommentsProps> = ({ region }) => {
  // const [visibleComments, setVisibleComments] = useState<Comment[]>([]);
  const allComments = comments[region];

  // useEffect(() => {
  //   let commentIndex = 0;

  //   const interval = setInterval(() => {
  //     if (commentIndex < allComments.length) {
  //       setVisibleComments((prev) => [...prev, allComments[commentIndex]]);
  //       commentIndex++;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [allComments]);

  return (
    <div className="space-y-8 px-4">
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
            <p className="text-sm text-zinc-500">Like</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={comment}
              alt="comment"
              width={18}
              height={18}
              className="rounded-full"
            />
            <p className="text-sm text-zinc-500">Reply</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-500">379</span>
          <div className="flex items-center relative -space-x-2">
            {reactions.map((reaction, index) => (
              <Image
                key={index}
                src={reaction.src}
                alt={reaction.alt}
                width={24}
                height={24}
                className="rounded-full border-2 border-white"
                style={{
                  zIndex: reactions.length - index,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {allComments.map((comment, index) => (
        <div
          key={`comment-${comment.id}-${index}`}
          className="flex items-start flex-col bg-white rounded-lg"
        >
          <div className="flex items-start space-x-4 bg-white">
            <Image
              src={comment.avatar}
              alt={comment.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="bg-[#EEEEFF80] rounded-lg px-6 py-2">
              <h4 className="text-sm font-semibold">{comment.name}</h4>
              <p className="text-sm text-gray-600">{comment.text}</p>
              {comment.commentImage && (
                <Image
                  src={comment.commentImage}
                  alt={`${comment.name}'s comment`}
                  width={200}
                  height={200}
                  className="mt-2 rounded-lg"
                />
              )}
            </div>
          </div>
          <div className="w-full mt-2 flex items-center justify-between space-x-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-500">{comment.time}</span>
              <span className="text-sm text-zinc-500">Like</span>
              <span className="text-sm text-zinc-500">Reply</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-zinc-500">{comment.likes}</span>
              <div className="flex items-center relative -space-x-2">
                {reactions.map((reaction, index) => (
                  <Image
                    key={index}
                    src={reaction.src}
                    alt={reaction.alt}
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-white"
                    style={{
                      zIndex: reactions.length - index,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
