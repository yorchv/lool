import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f7f9fb] px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-zinc-200 py-10 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="font-extrabold text-zinc-950">
          L-O-OL / Product Factory
        </Link>
        <span>Operating knowledge in. Working software out.</span>
        <a className="hover:text-blue-700" href="mailto:hello@l-o-ol.com">
          hello@l-o-ol.com
        </a>
      </div>
    </footer>
  );
}
