import Link from "next/link";
import { House } from "@phosphor-icons/react";
import "@/styles/page-heading.css";

export default function PageHeading({ title }: { title: string }) {
  return (
    <section className="relative min-h-48 w-full flex justify-center items-center p-8">
      <div className="home-link-container">
        <Link href="/" className="home-link">
          <House weight="duotone" size={32} />
          <div className="home-link-label">Home</div>
        </Link>
      </div>
      <div className="w-full flex justify-around items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl subpixel-antialiased py-4 my-6">
          {title}
        </h2>
      </div>
    </section>
  );
}
