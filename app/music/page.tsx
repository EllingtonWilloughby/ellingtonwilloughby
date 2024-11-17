"use client";
import Albums from "@/music/albums/Albums";
import PageHeading from "@/components/PageHeading";

export default function MusicPage() {
  return (
    <div className="relative h-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-col justify-start items-center text-center z-10 p-4">
      <PageHeading title="Music" />

      <section className="w-full">
        <Albums />
      </section>
    </div>
  );
}
