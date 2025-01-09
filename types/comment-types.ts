import { heart, like, smile } from "@/public/assets";
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
  { src: like, alt: "like" },
  { src: heart, alt: "heart" },
  { src: smile, alt: "smile" },
];
