"use client";
import React, { useState } from "react";
import AboutModal from "./AboutModal";
import Musicians from "./Musicians";
import PageHeading from "../components/PageHeading";
import "./page.css";
import "./AboutModal.css";

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (currentOpenState: boolean) => {
    setIsOpen(!currentOpenState);
  };

  return (
    <div className="relative min-h-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-col justify-center items-center flex-1 text-center z-10 p-4">
      <PageHeading title="About" />
      <section className="h-full w-full flex flex-col justify-start items-center flex-auto py-2 px-4">
        <div className="min-h-60 w-full flex flex-col justify-start items-center">
          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased px-4 py-8">
            Ellington Willoughby & the Mythical Squid is a psychedelic-pop band
            from SE Portland, Oregon.
          </p>

          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            Funky Grooves to accompany you on a journey that is both far out &
            close to home.
          </p>
        </div>

        <div className="w-full flex justify-center items-start">
          <button
            type="button"
            onClick={() => toggleModal(isOpen)}
            aria-label="Find out more about the band"
            className="modal-button text-sm md:text-base lg:text-lg subpixel-antialiased"
          >
            Find out more
          </button>
        </div>

        <div className="min-h-60 w-full">
          <Musicians />
        </div>
      </section>

      <div className="">
        <AboutModal isOpen={isOpen} onClose={() => toggleModal(isOpen)} />
      </div>
    </div>
  );
}
