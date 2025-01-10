import { StaticImageData } from "next/image";

export type CommentsProps = {
  region: "eu" | "asia" | "mex";
  isGameStarted: boolean;
  isGameFinished: boolean;
};

export interface ReactionBarProps {
  likeCount?: number;
}

export interface CommentItemProps {
  avatar: string | StaticImageData;
  name: string;
  text: string;
  commentImage?: string | StaticImageData;
  time: string;
  likes?: number;
}
