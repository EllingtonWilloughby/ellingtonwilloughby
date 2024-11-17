import React from "react";
import { members } from "@/lib/members";
import { IMusicians } from "@/lib/types";
import Link from "next/link";
export default function Musicians() {
  return (
    <div>
      <h3 className="text-center font-normal subpixel-antialiased underline p-2">
        Members
      </h3>

      <section className="w-full display flex flex-col justify-center items-center">
        {members.map((musician: IMusicians, index: number) => (
          <div className="p-2" key={index}>
            {musician.link ? (
              <>
                <Link href={musician.link} className="text-center">
                  <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased">
                    {musician.name}
                  </p>
                </Link>
                <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg subpixel-antialiased">
                  {musician.instruments}
                </p>
              </>
            ) : (
              <>
                <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased">
                  {musician.name}
                </p>
                <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg subpixel-antialiased">
                  {musician.instruments}
                </p>
              </>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
