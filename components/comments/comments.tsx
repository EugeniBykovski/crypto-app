"use client";

import { FC, useEffect, useState } from "react";
import { comments } from "@/data/mock";
import { CommentsProps } from "./types";
import ReactionBar from "./reaction-bar";
import CommentItem from "./comment-item";

const Comments: FC<CommentsProps> = ({
  region,
  isGameStarted,
  isGameFinished,
}) => {
  const [visibleComments, setVisibleComments] = useState<number>(4);
  const allComments = comments[region];

  useEffect(() => {
    if (!isGameStarted) {
      if (!isGameFinished) {
        setVisibleComments(4);
      }
      return;
    }

    let commentIndex = 0;

    const interval = setInterval(() => {
      if (commentIndex < 3) {
        setVisibleComments((prev) => prev + 1);
        commentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isGameStarted, isGameFinished]);

  return (
    <div className="space-y-8 px-4">
      <ReactionBar likeCount={379} />
      {allComments?.map((comment, index) => (
        <div
          key={`comment-${comment.id}-${index}`}
          className={`transition-opacity duration-700 ${
            index >= allComments.length - visibleComments
              ? "opacity-100"
              : "opacity-0"
          }`}
          style={{
            position:
              index < allComments.length - visibleComments
                ? "absolute"
                : "relative",
            top: index < allComments.length - visibleComments ? 0 : "auto",
            height: index >= allComments.length - visibleComments ? "auto" : 0,
            overflow: "hidden",
          }}
        >
          <CommentItem
            avatar={comment.avatar}
            name={comment.name}
            text={comment.text}
            commentImage={comment.commentImage}
            time={comment.time}
            likes={comment.likes}
          />
        </div>
      ))}
    </div>
  );
};

export default Comments;
