"use client";
import React from "react";
import Link from "next/link";
import SocialIcons from "@/contact/SocialIcons";
import PageHeading from "@/components/PageHeading";

export default function ContactPage() {
  return (
    <div className="relative min-h-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-col justify-center items-center flex-1 text-center z-10 p-4">
      <PageHeading title="Contact" />
      <section className="h-full w-full flex flex-col justify-start items-center flex-auto py-2 px-4 my-8">
        <div className="text-center text-sm sm:text-base md:text-lg lg:text-xl leading-9 subpixel-antialiased p-6">
          <p className="p-6">
            Reach out to Ellington Willoughby & the Mythical Squid by emailing
            us at{" "}
            <Link
              href="mailto:ellingtonwilloughby@gmail.com"
              className="min-h-72 this-link font-bold subpixel-antialiased"
            >
              this link
            </Link>
            , or on our socials through any of the links below:
          </p>
        </div>
        <div className="min-h-20 w-full flex items-end">
          <SocialIcons />
        </div>
      </section>
    </div>
  );
}
