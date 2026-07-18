'use client';

import Link from 'next/link';
import s from './Navbar.module.css';

export default function Navlinks() {
  return (
    <div className="relative flex flex-row items-center justify-between py-4 md:py-5">
      <Link href="/" className={s.logo} aria-label="L-O-OL home">
        <span className="inline-grid h-9 w-9 place-items-center border-2 border-zinc-950 bg-white text-sm font-extrabold text-zinc-950">
          L
        </span>
        <span className="font-extrabold text-zinc-950">L-O-OL</span>
      </Link>
      <nav className="flex items-center gap-5 text-sm font-extrabold">
        <Link href="/#products" className={s.link}>
          Products
        </Link>
        <Link href="/#trust" className={s.link}>
          Trust
        </Link>
        <Link href="/#next" className={s.link}>
          Next
        </Link>
      </nav>
    </div>
  );
}
