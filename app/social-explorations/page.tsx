import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';

interface Exploration {
  number: string;
  title: string;
  direction: string;
  filename: string;
}

const explorations: Exploration[] = [
  {
    number: '01',
    title: 'Nothing general.',
    direction: 'Swiss-grid severity',
    filename: '01-nothing-general.png'
  },
  {
    number: '02',
    title: 'A small door for a big problem.',
    direction: 'Matchbox mythology',
    filename: '02-small-door-big-problem.png'
  },
  {
    number: '03',
    title: 'Work, but stranger.',
    direction: 'Deadpan luxury',
    filename: '03-work-but-stranger.png'
  },
  {
    number: '04',
    title: 'Probably useful.',
    direction: 'Surreal object study',
    filename: '04-probably-useful.png'
  },
  {
    number: '05',
    title: 'A thing for things.',
    direction: 'Postmodern play',
    filename: '05-thing-for-things.png'
  },
  {
    number: '06',
    title: 'Approved for mysterious purposes.',
    direction: 'Bureaucratic folklore',
    filename: '06-approved-mysterious-purposes.png'
  },
  {
    number: '07',
    title: 'Meeting adjourned.',
    direction: 'Cinematic deadpan',
    filename: '07-meeting-adjourned.png'
  },
  {
    number: '08',
    title: 'Very specific miracles.',
    direction: 'Macro surrealism',
    filename: '08-specific-miracles.png'
  },
  {
    number: '09',
    title: 'The octopus has a clipboard.',
    direction: 'Illuminated operations',
    filename: '09-octopus-clipboard.png'
  },
  {
    number: '10',
    title: 'Soon.',
    direction: 'Minimal suspense',
    filename: '10-soon.png'
  }
];

export const metadata: Metadata = {
  title: 'Social Explorations | L-O-OL',
  description: 'Ten early visual directions for L-O-OL.'
};

export default function SocialExplorationsPage() {
  return (
    <div className="bg-[#11120f] text-white">
      <header className="border-b border-white/15 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-300">
            L-O-OL / Direction board 001
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-8xl">
            Ten wrong answers
            <span className="block text-orange-400">to the right mood.</span>
          </h1>
          <div className="mt-8 grid gap-5 border-t border-white/15 pt-6 text-white/55 md:grid-cols-2">
            <p className="max-w-xl text-lg leading-8">
              Early L-O-OL social experiments. Cryptic on purpose. Serious
              design, unserious behavior.
            </p>
            <p className="max-w-lg text-sm leading-7 md:justify-self-end">
              Open any image for the full 1254 × 1254 PNG. This page is a review
              wall, not a final campaign.
            </p>
          </div>
        </div>
      </header>

      <main className="px-4 py-4 md:px-6 md:py-6">
        <div className="mx-auto grid max-w-[1600px] gap-4 md:grid-cols-2 md:gap-6">
          {explorations.map((exploration) => {
            const imagePath = `/social-explorations/${exploration.filename}`;

            return (
              <article
                className="group border border-white/15 bg-[#1b1c18] p-3 md:p-4"
                key={exploration.filename}
              >
                <a
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                  href={imagePath}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${exploration.title} full-resolution image`}
                >
                  <img
                    className="aspect-square w-full bg-black object-cover"
                    src={imagePath}
                    alt={`L-O-OL social exploration: ${exploration.title}`}
                    loading="lazy"
                    width="1254"
                    height="1254"
                  />
                  <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4 border-t border-white/15 px-1 pb-2 pt-5">
                    <span className="font-mono text-xs text-orange-300">
                      {exploration.number}
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-semibold tracking-[-0.025em]">
                        {exploration.title}
                      </h2>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                        {exploration.direction}
                      </p>
                    </div>
                    <span className="grid h-9 w-9 place-items-center border border-white/20 transition group-hover:border-orange-300 group-hover:bg-orange-300 group-hover:text-black">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
