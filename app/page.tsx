import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  CircleDot,
  Database,
  Fingerprint,
  GitBranch,
  Layers3,
  LockKeyhole,
  PackageCheck,
  Radar,
  Sparkles
} from 'lucide-react';

interface Stage {
  number: string;
  title: string;
  copy: string;
  output: string;
}

interface Product {
  name: string;
  category: string;
  description: string;
  href: string;
  image: string;
  status: string;
}

const stages: Stage[] = [
  {
    number: '01',
    title: 'Find the real job',
    copy: 'Start with an operating procedure, a painful workflow, and the people responsible for it—not a feature wishlist.',
    output: 'SOP-backed architecture'
  },
  {
    number: '02',
    title: 'Make it explicit',
    copy: 'Define roles, records, states, commands, permissions, routes, copy, monetization, and acceptance evidence.',
    output: 'Versioned product contract'
  },
  {
    number: '03',
    title: 'Compile the product',
    copy: 'Generate the web app, API, durable state, auth boundaries, audit events, tests, and deployment package.',
    output: 'Runnable source code'
  },
  {
    number: '04',
    title: 'Compose the experience',
    copy: 'Codex turns the fixed contract into a product-specific workspace without being allowed to invent permissions or bypass workflow rules.',
    output: 'Distinct customer UI'
  },
  {
    number: '05',
    title: 'Prove it live',
    copy: 'Run contract tests, browser journeys, auth checks, persistence checks, and production gates against real URLs.',
    output: 'Retained evidence'
  },
  {
    number: '06',
    title: 'Close the loop',
    copy: 'Bring feedback, usage, revenue signals, and failures back into the factory to select the next release.',
    output: 'Evidence-backed iteration'
  }
];

const products: Product[] = [
  {
    name: 'Hot Drop',
    category: 'Local food discovery',
    description:
      'A consumer app for finding fresh bakery drops nearby before they sell out.',
    href: 'https://fresh-bread-radar-hosted-web-production.up.railway.app',
    image: '/products/hot-drop.png',
    status: 'Live product experiment'
  },
  {
    name: 'Casepath Vet',
    category: 'Veterinary referral operations',
    description:
      'A focused workspace for moving specialty referrals from intake through triage and next action.',
    href: 'https://vet.l-o-ol.com',
    image: '/products/casepath-vet.png',
    status: 'Production-ready pipeline'
  }
];

const proven = [
  'Hosted source-package generation',
  'Hosted web and API deployment',
  'Postgres-backed product state',
  'InkPass authentication and permissions',
  'Command, role, and workflow contract tests',
  'Browser journey and live URL evidence',
  'Feedback and business-event ingestion',
  'Versioned product lineage in git'
];

const stack = [
  {
    icon: Braces,
    label: 'Product spec',
    detail: 'The product in machine-readable form'
  },
  {
    icon: GitBranch,
    label: 'Typed commands',
    detail: 'Every mutation tied to a permission and guard'
  },
  {
    icon: Fingerprint,
    label: 'InkPass',
    detail: 'Identity, sessions, roles, and service access'
  },
  {
    icon: Database,
    label: 'Postgres',
    detail: 'Durable records, activity, and evidence'
  },
  {
    icon: Layers3,
    label: 'Next.js + API',
    detail: 'Customer workspace and executable backend'
  },
  {
    icon: PackageCheck,
    label: 'Railway',
    detail: 'Live services with production gate evidence'
  }
];

function Eyebrow({
  children,
  light = false
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] ${
        light ? 'text-orange-300' : 'text-orange-700'
      }`}
    >
      <span
        className={`h-2 w-2 ${light ? 'bg-orange-300' : 'bg-orange-600'}`}
      />
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#f2f0e9] text-[#161714]">
      <section className="blueprint-grid relative border-b border-black/15 px-6 py-16 md:px-10 md:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
          <div>
            <Eyebrow>L-O-OL Product Factory</Eyebrow>
            <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-8xl lg:text-[6.75rem]">
              Operating knowledge in.
              <span className="block text-orange-700">
                Working software out.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65 md:text-xl md:leading-9">
              Product Factory turns a real-world procedure into a focused,
              deployed vertical product—then demands evidence that the product
              actually works.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="factory-button factory-button-dark" href="#method">
                See the whole loop
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a className="factory-button factory-button-light" href="#proof">
                Inspect the proof
                <Radar className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="border border-black/20 bg-[#161714] p-2 text-white shadow-[12px_12px_0_#e85d2a]">
            <div className="border border-white/15 px-5 py-4">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                  Factory status
                </span>
                <span className="flex items-center gap-2 text-xs font-bold text-lime-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-lime-300" />
                  Operational
                </span>
              </div>
              <dl className="divide-y divide-white/15">
                <div className="grid grid-cols-[1fr_auto] gap-5 py-5">
                  <dt className="text-sm text-white/55">Operating mode</dt>
                  <dd className="text-right font-display text-lg font-semibold">
                    One product at a time
                  </dd>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-5 py-5">
                  <dt className="text-sm text-white/55">Release currency</dt>
                  <dd className="text-right font-display text-lg font-semibold">
                    Evidence
                  </dd>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-5 py-5">
                  <dt className="text-sm text-white/55">Live experiments</dt>
                  <dd className="text-right font-display text-3xl font-semibold text-orange-300">
                    02
                  </dd>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-5 pt-5">
                  <dt className="text-sm text-white/55">Commercial proof</dt>
                  <dd className="text-right text-sm font-bold text-yellow-300">
                    Still earning it
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-orange-700 text-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {[
            ['INPUT', 'SOPs, roles, workflows, constraints'],
            ['FACTORY', 'Contracts, agents, generators, gates'],
            ['OUTPUT', 'Source, deployment, evidence, next release']
          ].map(([label, copy], index) => (
            <div
              className="grid min-h-36 grid-cols-[auto_1fr] gap-5 border-b border-white/20 px-6 py-7 md:border-b-0 md:border-r md:last:border-r-0"
              key={label}
            >
              <span className="font-mono text-xs text-orange-200">
                0{index + 1}
              </span>
              <div>
                <strong className="text-xs tracking-[0.2em]">{label}</strong>
                <p className="mt-3 max-w-xs leading-7 text-orange-50/80">
                  {copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="method"
        className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Eyebrow>The method</Eyebrow>
              <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
                The whole loop,
                <br />
                not just the build.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-black/60 lg:justify-self-end">
              Most generators stop when files exist. Product Factory keeps going
              through auth, state, deployment, browser behavior, evidence, and
              the next decision.
            </p>
          </div>

          <ol className="mt-14 grid border-l border-t border-black/20 md:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage) => (
              <li
                className="group min-h-[310px] border-b border-r border-black/20 bg-[#f7f5ef] p-6 transition-colors hover:bg-white md:p-8"
                key={stage.number}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-black/40">
                    {stage.number} / 06
                  </span>
                  <CircleDot
                    className="h-5 w-5 text-orange-600 transition-transform group-hover:rotate-90"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-14 font-display text-2xl font-semibold tracking-[-0.025em]">
                  {stage.title}
                </h3>
                <p className="mt-4 leading-7 text-black/60">{stage.copy}</p>
                <p className="mt-7 border-t border-black/10 pt-4 text-xs font-extrabold uppercase tracking-[0.13em] text-orange-700">
                  Output: {stage.output}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="system"
        className="scroll-mt-24 bg-[#161714] px-6 py-20 text-white md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <Eyebrow light>Under the hood</Eyebrow>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
                Two engines.
                <br />
                One hard contract.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Deterministic code owns what must never drift. Agents own the
                judgment-heavy work. Neither gets to quietly do the other’s job.
              </p>
            </div>

            <div className="grid gap-px bg-white/15 md:grid-cols-2">
              <article className="bg-[#22231f] p-7 md:p-9">
                <LockKeyhole
                  className="h-7 w-7 text-lime-300"
                  aria-hidden="true"
                />
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-lime-300">
                  Deterministic core
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  The rules are compiled.
                </h3>
                <p className="mt-4 leading-7 text-white/60">
                  Entity lifecycles, typed commands, permissions, state guards,
                  API bindings, persistence, audit events, and acceptance tests.
                </p>
              </article>
              <article className="bg-[#22231f] p-7 md:p-9">
                <Sparkles
                  className="h-7 w-7 text-orange-300"
                  aria-hidden="true"
                />
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                  Agentic layer
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  The experience is composed.
                </h3>
                <p className="mt-4 leading-7 text-white/60">
                  Product research, architecture review, interface composition,
                  browser inspection, failure analysis, and release proposals.
                </p>
              </article>
            </div>
          </div>

          <div className="mt-14 border border-white/15 bg-black/25 p-5 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Required trace for every visible action
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 font-mono text-xs md:text-sm">
              {[
                'SOP step',
                'workflow',
                'command',
                'permission',
                'guard',
                'API',
                'UI control',
                'state',
                'audit event',
                'test'
              ].map((item, index, items) => (
                <span className="contents" key={item}>
                  <span className="border border-white/15 bg-white/5 px-3 py-2 text-white/80">
                    {item}
                  </span>
                  {index < items.length - 1 && (
                    <ArrowRight
                      className="h-3.5 w-3.5 text-orange-300"
                      aria-hidden="true"
                    />
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map(({ icon: Icon, label, detail }) => (
              <div
                className="border-b border-r border-white/15 p-6"
                key={label}
              >
                <Icon className="h-5 w-5 text-orange-300" aria-hidden="true" />
                <strong className="mt-5 block">{label}</strong>
                <p className="mt-2 text-sm leading-6 text-white/50">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <Eyebrow>Proof, not posture</Eyebrow>
              <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
                A green check has to point somewhere real.
              </h2>
            </div>
            <p className="text-lg leading-8 text-black/60">
              Build reports, command assertions, browser journeys, live URLs,
              persisted state, auth results, and product events are retained as
              evidence—not remembered as vibes.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div className="border border-black/20 bg-[#f7f5ef]">
              <div className="flex items-center justify-between border-b border-black/15 px-6 py-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em]">
                  Proven in the current system
                </p>
                <span className="font-mono text-xs text-black/40">
                  8 signals
                </span>
              </div>
              <ul className="grid md:grid-cols-2">
                {proven.map((item) => (
                  <li
                    className="flex min-h-20 items-center gap-3 border-b border-black/10 px-6 py-4 md:odd:border-r"
                    key={item}
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center bg-lime-300">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="border border-yellow-700/40 bg-[#f1dd70] p-7 md:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-yellow-950/60">
                The honest part
              </p>
              <h3 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em]">
                Production-ready is not commercially validated.
              </h3>
              <p className="mt-5 leading-7 text-yellow-950/75">
                The factory can build, deploy, authenticate, persist, test, and
                observe a product. It has not yet proved repeatable settled
                customer revenue and satisfaction across the portfolio.
              </p>
              <div className="mt-8 border-t border-yellow-900/25 pt-5 text-sm font-bold">
                That gap is visible by design. The factory cannot promote a
                product by deleting or hand-waving failed evidence.
              </div>
            </aside>
          </div>

          <div className="mt-20">
            <div className="flex flex-col justify-between gap-5 border-b border-black/20 pb-6 md:flex-row md:items-end">
              <div>
                <Eyebrow>Factory output</Eyebrow>
                <h3 className="font-display text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                  Built through the loop.
                </h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-black/55">
                Two very different product silhouettes, used to test whether the
                system generalizes beyond a single dashboard.
              </p>
            </div>

            <div className="grid gap-px bg-black/20 lg:grid-cols-2">
              {products.map((product) => (
                <article
                  className="group bg-[#f2f0e9] p-4 md:p-6"
                  key={product.name}
                >
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block focus-visible:ring-2 focus-visible:ring-orange-600"
                  >
                    <div className="overflow-hidden border border-black/15 bg-white">
                      <img
                        className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                        src={product.image}
                        alt={`${product.name} product interface`}
                      />
                    </div>
                    <div className="grid grid-cols-[1fr_auto] gap-5 pt-6">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-700">
                          {product.category}
                        </p>
                        <h4 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em]">
                          {product.name}
                        </h4>
                        <p className="mt-3 max-w-lg leading-7 text-black/60">
                          {product.description}
                        </p>
                        <p className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-black/45">
                          <span className="h-2 w-2 bg-lime-600" />
                          {product.status}
                        </p>
                      </div>
                      <span className="grid h-11 w-11 place-items-center border border-black/20 transition group-hover:bg-black group-hover:text-white">
                        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <Eyebrow>Why build a factory?</Eyebrow>
            <h2 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
              Because “generate an app” is the easy part.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-black/60">
              The difficult part is preserving domain truth from procedure to
              interface, proving every action is authorized and durable,
              shipping it, watching it behave, and knowing what to do next.
            </p>
            <a
              className="factory-button factory-button-dark mt-8"
              href="mailto:hello@l-o-ol.com?subject=Product%20Factory"
            >
              Talk about a workflow
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
