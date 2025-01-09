"use client";

import { FC, memo } from "react";
import Link from "next/link";
import { LogoIcon } from "@/public/assets";

const Logo: FC = memo(() => (
  <Link href={"/"} className="flex justify-center items-center gap-2">
    <LogoIcon className="hover:opacity-85 transition" />
    <h2 className="text-white text-2xl font-semibold">CryptoSkill</h2>
  </Link>
));

export default Logo;
