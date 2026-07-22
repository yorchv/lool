'use client';

import Link from 'next/link';
import s from './Navbar.module.css';

export default function Navlinks() {
  return (
    <div className="relative flex flex-row items-center justify-between py-4 md:py-5">
      <Link
        href="/"
        className={s.logo}
        aria-label="L-O-OL Product Factory home"
      >
        <span className="inline-grid h-9 w-9 place-items-center border-2 border-zinc-950 bg-white text-sm font-extrabold text-zinc-950">
          L
        </span>
        <span className="font-extrabold text-zinc-950">
          L-O-OL{' '}
          <span className="hidden font-medium text-zinc-500 sm:inline">
            / Product Factory
          </span>
        </span>
      </Link>
      <nav
        className="flex items-center gap-2 text-xs font-extrabold sm:gap-5 sm:text-sm"
        aria-label="Main navigation"
      >
        <Link href="/#method" className={s.link}>
          Method
        </Link>
        <Link href="/#system" className={`${s.link} hidden sm:inline-flex`}>
          System
        </Link>
        <Link href="/#proof" className={s.link}>
          Proof
        </Link>
      </nav>
    </div>
  );
}
