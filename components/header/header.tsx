"use client";

import { FC, memo } from "react";
import { bg } from "@/public/assets";
import Logo from "../logo/logo";

const Header: FC = memo(() => (
  <header
    className="relative md:fixed top-0 left-0 w-full h-20 mb-4 md:h-[8vh] rounded-b-3xl flex justify-center items-center z-50 bg-cover bg-center"
    style={{
      backgroundImage: `url(${bg.src})`,
    }}
  >
    <Logo />
  </header>
));

export default Header;
