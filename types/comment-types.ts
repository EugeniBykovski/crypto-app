import { LikeIcon } from "@/public/assets/icons/logos/like-icon";
import { StaticImageData } from "next/image";

export type Comment = {
  id: number;
  name: string;
  text: string;
  avatar: string | StaticImageData;
  commentImage?: string | StaticImageData;
  time: string;
  likes: number;
};

export const reactions = [
  {
    src: LikeIcon,
    alt: "like",
  },
];
