"use client";
import React from "react";
import { useThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";

export default function Logo() {
  const { theme } = useThemeContext();

  // Fallback logo while theme is being determined
  if (theme === null) {
    return (
      <Image
        src="/images/logo_.svg" // Default or placeholder logo
        alt="Ellington Willoughby & the Mythical Squid band logo"
        width={480}
        height={480}
        className="w-full max-w-screen-sm mx-auto"
        priority
      />
    );
  }

  return (
    <Image
      src={theme ? "/images/logo_.svg" : "/images/logo_b.svg"}
      alt="Ellington Willoughby & the Mythical Squid band logo"
      width={480}
      height={480}
      className="w-full max-w-screen-sm mx-auto"
      priority
    />
  );
}
