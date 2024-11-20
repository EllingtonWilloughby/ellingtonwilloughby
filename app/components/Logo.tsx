"use client";

import React from "react";
import { useThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";

export default function Logo() {
  const { theme } = useThemeContext();
  return (
    <Image
      src={theme ? "/images/logo_i_dark.svg" : "/images/logo_i_light.svg"}
      alt="Ellington Willoughby & the Mythical Squid band logo"
      width={480}
      height={480}
      className="w-full max-w-screen-sm mx-auto"
      priority
    />
  );
}
