import React from 'react';
import { members } from '@/data';
export default function Musicians() {
  return (
    <section>
      <div className="text-center font-normal subpixel-antialiased underline p-2">
        Members
      </div>

      <div className="w-full display flex flex-col justify-center items-center">
        {members.map(
          (musician: { name: string; instruments: string }, index: number) => (
            <div className="card p-2" key={index}>
              <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal subpixel-antialiased">
                {musician.name}
              </p>
              <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-normal subpixel-antialiased">
                {musician.instruments}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
