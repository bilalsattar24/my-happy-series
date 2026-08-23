"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/books", label: "Books" },
  { href: "/explore-series", label: "Explore Series" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/author", label: "Author" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#f1ddbd] bg-[#fff8ec]/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 whitespace-nowrap font-black text-xl text-[#17324d]"
        >
          <span className="brand-smiley" aria-hidden="true" />
          <span>My Happy Series</span>
        </Link>
        <div className="hidden items-center gap-5 text-sm font-bold text-[#5a4b3d] sm:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/books"
            className="hidden h-10 items-center justify-center rounded-md bg-[#17324d] px-4 text-sm font-black text-white shadow-[0_8px_18px_rgba(23,50,77,0.18)] transition hover:bg-[#0d2238] sm:inline-flex"
          >
            Buy Books
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#17324d] text-[#17324d] sm:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="flex w-4 flex-col gap-1">
              <span
                className={`block h-0.5 w-full bg-[#17324d] transition ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#17324d] transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#17324d] transition ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>
      {menuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-[#f1ddbd] bg-[#fff8ec] px-5 py-4 sm:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-black text-[#17324d]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/books"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-md bg-[#17324d] px-4 text-sm font-black text-white"
            >
              Buy Books
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#17324d] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="whitespace-nowrap text-xl font-black">My Happy Series</p>
        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex flex-wrap gap-5 text-sm font-bold text-white/80">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-white/72">
            Children&apos;s books for faith, confidence, and happy little hearts.
          </p>
        </div>
      </div>
    </footer>
  );
}
