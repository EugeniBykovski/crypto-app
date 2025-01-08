"use client";

import { FC, memo } from "react";
import Logo from "../logo/logo";

const Header: FC = memo(() => (
  <header className="md:fixed top-0 left-0 w-full h-[8vh] bg-[#F1F1F0] flex justify-center items-center z-50">
    <Logo />
  </header>
));

export default Header;
