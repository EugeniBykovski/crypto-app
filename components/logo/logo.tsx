"use client";

import { FC, memo } from "react";
import Link from "next/link";
import { LogoIcon } from "@/public/assets";

const Logo: FC = memo(() => (
  <Link href={"/"}>
    <LogoIcon className="hover:opacity-85 transition" />
  </Link>
));

export default Logo;
