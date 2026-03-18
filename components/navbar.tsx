import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navLinks, profile } from "@/lib/site-content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl animate-in items-center justify-between px-6 py-5 duration-700 fade-in slide-in-from-top-4 motion-reduce:animate-none">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-zinc-950"
        >
          {profile.name.split(" ")[0]}
          <span className="text-zinc-400">.</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" variant="outline" className="hidden md:inline-flex">
          <a href={`mailto:${profile.email}`}>Contact</a>
        </Button>
      </div>
    </header>
  );
}
