import React from 'react';

export default function ShowsPage() {
  return (
    <div className="relative min-h-screen w-full max-w-screen-xl mx-auto p-2">
      <h2 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased">
        Shows
      </h2>
      <div className="w-full max-w-screen-sm mx-auto m-10 flex justify-center items-center">
        <table>
          <thead>
            <tr>
              <th className="font-semibold text-base md:text-lg subpixel-antialiased">
                Date
              </th>
              <th className="font-semibold text-base md:text-lg subpixel-antialiased">
                Time
              </th>
              <th className="font-semibold text-base md:text-lg subpixel-antialiased">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <h3>Coming Soon...</h3>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
