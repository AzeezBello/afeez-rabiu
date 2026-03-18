import Link from "next/link";

import { navLinks, profile, socialLinks } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-zinc-50 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-zinc-950">{profile.name}</p>
          <p className="mt-1 text-sm text-zinc-600">
            {profile.role}
          </p>
          <p className="mt-2 text-sm text-zinc-500">{profile.phone}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-zinc-600">
          <nav className="flex flex-wrap gap-4">
            <Link href="/" className="transition-colors hover:text-zinc-950">
              Home
            </Link>
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

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition-colors hover:text-zinc-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
