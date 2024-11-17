"use client";

import React from "react";
import { useThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";

export default function Logo() {
  const { theme } = useThemeContext();
  return (
    <div className="mx-auto flex justify-center items-start max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg">
      <Image
        src={theme ? "/images/logo_i_light.svg" : "/images/logo_i_dark.svg"}
        alt="Ellington Willoughby & the Mythical Squid band logo"
        width={440}
        height={440}
        className="w-full min-w-96"
        priority
      />
    </div>
  );
}
