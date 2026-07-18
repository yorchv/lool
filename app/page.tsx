import { ArrowUpRight } from 'lucide-react';

interface Product {
  initials: string;
  name: string;
  category: string;
  description: string;
  href: string;
  image: string;
  accentClassName: string;
}

interface UpcomingProduct {
  initials: string;
  name: string;
  description: string;
}

const products: Product[] = [
  {
    initials: 'HD',
    name: 'Hot Drop',
    category: 'Fresh bread nearby',
    description:
      'Find fresh bakery drops nearby before they sell out. Track freshness, distance, and bakery updates.',
    href: 'https://fresh-bread-radar-hosted-web-production.up.railway.app',
    image: '/products/hot-drop.png',
    accentClassName: 'border-emerald-700 bg-lime-300 text-zinc-950'
  },
  {
    initials: 'CV',
    name: 'Casepath Vet',
    category: 'Veterinary referrals',
    description:
      'Coordinate specialty veterinary referrals from intake to triage. Keep records and next actions visible.',
    href: 'https://vet.l-o-ol.com',
    image: '/products/casepath-vet.png',
    accentClassName: 'border-blue-800 bg-blue-100 text-blue-950'
  }
];

const upcomingProducts: UpcomingProduct[] = [
  {
    initials: 'GS',
    name: 'Greenlight Sites',
    description:
      'Clinical trial site activation with regulatory checklists and blocker capture.'
  },
  {
    initials: 'TB',
    name: 'Timberbook',
    description:
      'Managed forestry supply discovery and delivered-cost comparison.'
  },
  {
    initials: 'PR',
    name: 'Part Runner',
    description:
      'Field-service parts intake, truck stock visibility, and blocked work triage.'
  },
  {
    initials: 'PS',
    name: 'Proof Supply',
    description:
      'Provider intake, document review, and approval workflows for service teams.'
  }
];

const statusItems = ['Live app', 'Sign-in ready', 'Workflow tested'];

function ProductMark({
  children,
  className = 'border-zinc-900 bg-white text-zinc-950'
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-grid h-11 w-11 shrink-0 place-items-center border-2 text-xs font-extrabold ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#f7f9fb] text-zinc-950">
      <section className="relative min-h-[560px] overflow-hidden border-b border-zinc-200 bg-[linear-gradient(90deg,rgba(247,249,251,0.98),rgba(247,249,251,0.72)),url('/products/hot-drop.png')] bg-cover bg-center px-6 py-14 md:min-h-[640px] md:px-10 md:py-20 lg:min-h-[720px]">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase text-blue-700">
              Focused AI products
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-normal sm:text-6xl md:text-7xl lg:text-8xl">
              Useful tools for specific work.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-700 md:text-lg">
              L-O-OL brings practical AI products together in one place. Each
              one helps with a clear job.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-zinc-950 bg-zinc-950 px-5 text-sm font-extrabold text-white transition hover:bg-zinc-800"
                href="#products"
              >
                Browse products
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-zinc-950 bg-white/90 px-5 text-sm font-extrabold text-zinc-950 transition hover:bg-white"
                href="mailto:hello@l-o-ol.com"
              >
                Contact us
              </a>
            </div>
          </div>

          <div className="grid gap-3 rounded-lg border border-zinc-900/15 bg-white/90 p-5 shadow-2xl shadow-zinc-900/10 backdrop-blur">
            <div className="flex min-h-12 items-center justify-between border-b border-zinc-200 pb-3 text-sm font-bold text-zinc-700">
              <span>Live products</span>
              <strong className="text-3xl text-zinc-950">2</strong>
            </div>
            <div className="flex min-h-12 items-center justify-between border-b border-zinc-200 pb-3 text-sm font-bold text-zinc-700">
              <span>Customer workflows</span>
              <strong className="text-3xl text-zinc-950">2</strong>
            </div>
            <div className="flex min-h-12 items-center justify-between text-sm font-bold text-zinc-700">
              <span>More in progress</span>
              <strong className="text-3xl text-zinc-950">4</strong>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-3 bg-[linear-gradient(90deg,#19b992,#ef624c,#e3ad2f,#3157d5)]" />
      </section>

      <section
        className="grid border-b border-zinc-200 bg-white md:grid-cols-4"
        aria-label="Product logos"
      >
        {products.map((product) => (
          <a
            key={product.name}
            className="flex min-h-24 items-center gap-3 border-b border-zinc-200 px-6 font-extrabold transition hover:bg-blue-50 md:justify-center md:border-b-0 md:border-r"
            href={product.href}
            target="_blank"
            rel="noreferrer"
          >
            <ProductMark className={product.accentClassName}>
              {product.initials}
            </ProductMark>
            <span>{product.name}</span>
          </a>
        ))}
        {upcomingProducts.slice(0, 2).map((product) => (
          <div
            key={product.name}
            className="flex min-h-24 items-center gap-3 border-b border-zinc-200 px-6 font-extrabold text-zinc-600 md:justify-center md:border-b-0 md:border-r last:md:border-r-0"
          >
            <ProductMark>{product.initials}</ProductMark>
            <span>{product.name}</span>
          </div>
        ))}
      </section>

      <section id="products" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-3 text-xs font-extrabold uppercase text-zinc-600">
          Products
        </p>
        <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-normal md:text-6xl">
          Start with the product that fits your work.
        </h2>
        <p className="mt-5 max-w-2xl leading-7 text-zinc-700">
          Each product has its own focus, customer workflow, and live app.
        </p>

        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <article
              className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-xl shadow-zinc-900/5"
              key={product.name}
            >
              <img
                className="h-64 w-full border-b border-zinc-200 object-cover object-top"
                src={product.image}
                alt={`${product.name} product interface`}
              />
              <div className="flex min-h-[360px] flex-col gap-5 p-6">
                <div className="flex items-center gap-4">
                  <ProductMark className={product.accentClassName}>
                    {product.initials}
                  </ProductMark>
                  <div>
                    <p className="mb-1 text-xs font-extrabold uppercase text-zinc-600">
                      {product.category}
                    </p>
                    <h3 className="font-display text-2xl font-bold">
                      {product.name}
                    </h3>
                  </div>
                </div>
                <p className="leading-7 text-zinc-700">{product.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2">
                  {statusItems.map((item) => (
                    <li
                      className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-800"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  className="inline-flex min-h-12 items-center justify-between rounded-lg border border-zinc-950 px-4 text-sm font-extrabold transition hover:bg-zinc-950 hover:text-white"
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open {product.name}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="trust"
        className="mx-auto grid max-w-6xl gap-10 rounded-lg bg-zinc-950 px-6 py-10 text-white md:grid-cols-[0.9fr_1.1fr] md:p-12"
      >
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase text-yellow-400">
            Trust
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-normal md:text-5xl">
            Real products, not one big demo.
          </h2>
        </div>
        <div className="grid gap-5">
          {[
            [
              'Clear purpose',
              'Every product is built for a narrow job and a real user.'
            ],
            [
              'Direct access',
              'Live products open from their own web addresses.'
            ],
            [
              'Working workflows',
              'Core tasks are reviewed before a product is listed here.'
            ]
          ].map(([title, copy]) => (
            <div
              className="border-b border-white/15 pb-5 last:border-b-0 last:pb-0"
              key={title}
            >
              <strong>{title}</strong>
              <p className="mt-2 leading-7 text-white/70">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="next" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-3 text-xs font-extrabold uppercase text-zinc-600">
          Next
        </p>
        <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-normal md:text-6xl">
          More products for focused operations.
        </h2>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingProducts.map((product) => (
            <article
              className="min-h-56 rounded-lg border border-zinc-200 bg-white p-6"
              key={product.name}
            >
              <ProductMark className="border-red-500 bg-red-50 text-red-900">
                {product.initials}
              </ProductMark>
              <h3 className="mt-5 font-display text-xl font-bold">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
