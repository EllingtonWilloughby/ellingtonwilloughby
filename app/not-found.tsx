import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/not-found.css";

export default function NotFoundPage() {
  const gifUrl = "/gif/notfound.webp";

  return (
    <div className="relative h-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-col justify-center items-center flex-1 text-center z-10 p-4">
      <section className="max-w-screen-md flex flex-col justify-around items-center flex-auto">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl subpixel-antialiased my-3 text-center font-semibold">
          404 Error: Page Not Found
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased text-center px-6">
          You seem to have wandered off into silence... The page you are looking
          for must have drifted away.
        </p>
        <div className="mb-6 w-full flex justify-center p-2">
          <Image
            src={gifUrl}
            alt="Image for the Not Found page"
            className="w-full h-auto rounded-lg shadow-lg max-w-md backdrop-saturation-80 backdrop-blur-sm"
            width={500}
            height={500}
            priority
          />
        </div>
        <Link
          href="/"
          className="link-btn focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-opacity-75 transition"
        >
          Take me back to the music!
        </Link>
      </section>
    </div>
  );
}
