import { Link, useParams, Navigate } from "react-router-dom";
import { services, ServiceIcon } from "../components/services";
import { FinalCta } from "../components/sections";
import { useState } from "react";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return <Navigate to="/services" replace />;
  const others = services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  const renderPage = () => {
    switch (slug) {
      case "web-development": return <WebDevPage others={others} />;
      case "ui-ux": return <UiUxPage others={others} />;
      case "digital-marketing": return <MarketingPage others={others} />;
      case "ecommerce": return <EcommercePage others={others} />;
      case "branding": return <BrandingPage others={others} />;
      case "copywriting": return <CopywritingPage others={others} />;
      case "video": return <VideoPage others={others} />;
      case "ai": return <AiPage others={others} />;
      default: return <DefaultPage svc={svc} others={others} />;
    }
  };

  return renderPage();
}

function OtherServices({ others }: { others: ReturnType<typeof services.filter> }) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-x">
        <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Pair with other pillars.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to={`/services/${o.slug}`}
              className="flex gap-4 items-start border border-cloud p-5 transition-colors hover:border-teal group">
              <ServiceIcon name={o.icon} className="w-6 h-6 stroke-teal shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-base font-bold text-slate-deep">{o.title}</h3>
                <p className="mt-1 text-xs text-charcoal leading-relaxed">{o.blurb}</p>
                <span className="mt-2 inline-block text-xs font-bold text-teal">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqBlock({ faqs }: { faqs: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl mt-8 sm:mt-10">
      {faqs.map(([q, a], i) => (
        <div key={i} className="border-b border-cloud">
          <button onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-4 sm:py-5 text-left">
            <span className="font-display text-sm font-bold text-slate-deep sm:text-base">{q}</span>
            <span className={`font-mono text-xl text-teal transition-transform shrink-0 ${open === i ? "rotate-45" : ""}`}>+</span>
          </button>
          {open === i && <p className="pb-4 text-sm leading-relaxed text-charcoal">{a}</p>}
        </div>
      ))}
    </div>
  );
}

function BackLink() {
  return (
    <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-charcoal hover:text-teal transition-colors">
      ← All Services
    </Link>
  );
}

function WebDevPage({ others }: { others: ReturnType<typeof services.filter> }) {
  const stack = [
    ["Frontend", "React, Next.js, TypeScript, TanStack"],
    ["Backend", "Node.js, Express, FastAPI, tRPC"],
    ["Database", "PostgreSQL, Prisma, Drizzle, Redis"],
    ["Infra", "Vercel, AWS, Cloudflare, Docker"],
    ["Auth", "Clerk, Auth.js, Supabase Auth"],
    ["Payments", "Stripe, Lemon Squeezy, Paddle"],
  ];
  const phases = [
    { n: "01", t: "Technical Discovery", d: "Stack audit, architecture mapping, and roadmap alignment." },
    { n: "02", t: "Architecture & API Design", d: "OpenAPI-first contract design, DB schema, system design doc." },
    { n: "03", t: "Sprint Development", d: "Type-safe code, weekly builds, and live demo access." },
    { n: "04", t: "QA & Performance", d: "Lighthouse audits, load testing, security hardening." },
    { n: "05", t: "Launch & Handover", d: "Full repo, credentials, and 30-day post-launch support." },
  ];
  const faqs: [string, string][] = [
    ["What tech stack do you build SaaS apps on?", "We default to TypeScript, React (or Next.js), Postgres with Drizzle or Prisma ORM, and deploy to Vercel or AWS. We pick the stack that wins for your scale — not whatever's trending."],
    ["How long does a full SaaS build take?", "An MVP with core feature set takes 6–12 weeks. Complex platforms with integrations, billing, and multi-tenancy take 3–6 months. We scope precisely before we start."],
    ["Can you take over an existing codebase?", "Yes. We perform a technical audit first, identify debt and risk, then either refactor incrementally or execute a phased rebuild. We won't touch a codebase blind."],
    ["Do you build mobile apps too?", "Yes — React Native and Expo for cross-platform iOS/Android, or PWAs for web-first mobile experiences. We assess which approach fits your product and budget."],
    ["What's included after launch?", "30-day post-launch support is standard. We fix bugs, monitor performance, and optimize after go-live. Ongoing retainers available for continued development."],
    ["Do you handle cloud infrastructure setup?", "Yes. We provision and configure AWS, Vercel, GCP, or Cloudflare infrastructure as part of every project — CI/CD, staging environments, secrets management, and monitoring included."],
  ];
  return (
    <>
      <section className="border-b border-cloud bg-slate-deep text-white">
        <div className="container-x py-16 sm:py-24 md:py-32">
          <BackLink />
          <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal">
                <span className="h-px w-6 bg-teal" /> Web & SaaS Engineering
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl text-white">
                Build software that{" "}
                <span className="text-teal">scales.</span>
              </h1>
              <p className="mt-5 text-base text-cloud/80 max-w-xl sm:text-lg">
                From SaaS MVPs to enterprise platforms — we architect, engineer, and ship production-grade software on the modern stack. No outsourcing. No tech debt by design.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Get a Scoping Call →</Link>
                <Link to="/work" className="btn-outline !border-white/30 !text-white hover:!bg-white hover:!text-slate-deep">See Our Work</Link>
              </div>
            </div>
            <div className="bg-slate-deep border border-charcoal rounded-sm p-4 sm:p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-cloud/40">pixomancer.config.ts</span>
              </div>
              <pre className="text-xs sm:text-sm text-cloud/80 overflow-x-auto leading-relaxed whitespace-pre-wrap">{`export const stack = {
  frontend: ["React", "TypeScript"],
  backend: ["Node.js", "Postgres"],
  infra: ["Vercel", "Cloudflare"],
  auth: "Clerk",
  payments: "Stripe",
  velocity: "FAST"
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Tech stack we master.</h2>
          <div className="mt-8 grid gap-px bg-cloud grid-cols-2 sm:grid-cols-3">
            {stack.map(([cat, items]) => (
              <div key={cat} className="bg-background p-5 sm:p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-teal">{cat}</div>
                <p className="mt-2 text-sm text-charcoal">{items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Our delivery phases.</h2>
          <div className="mt-8 space-y-0 divide-y divide-cloud">
            {phases.map((p) => (
              <div key={p.n} className="grid grid-cols-[2rem_1fr] sm:grid-cols-[3rem_1fr] gap-4 py-5 sm:gap-6">
                <div className="font-mono text-lg font-bold text-teal sm:text-2xl">{p.n}</div>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-deep sm:text-lg">{p.t}</h3>
                  <p className="mt-1 text-sm text-charcoal">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20 border-t border-cloud">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Frequently asked questions.</h2>
          <FaqBlock faqs={faqs} />
        </div>
      </section>

      <OtherServices others={others} />
      <FinalCta title="Ready to ship software that scales?" cta="Book a Technical Discovery Call" sub="No NDAs required to start. Full IP transfer on delivery." />
    </>
  );
}

function UiUxPage({ others }: { others: ReturnType<typeof services.filter> }) {
  const deliverables = [
    ["User Research", "Interviews, heatmaps, and behavioral analysis to understand what users actually do — not just what they say."],
    ["Information Architecture", "Sitemap and flow diagrams that make navigation feel effortless before a single pixel is designed."],
    ["Wireframes", "Skeleton layouts that establish hierarchy and conversion paths — reviewed before visual styling begins."],
    ["High-Fidelity Prototypes", "Figma-based, click-through prototypes with real interactions. User-testable before development starts."],
    ["Design System", "Reusable component library with tokens, variants, and usage rules. Built to scale with your product."],
    ["Developer Handoff", "Annotated Figma files with spacing, component specs, and interaction notes. No ambiguity for engineers."],
  ];
  const stats = [
    ["3.2×", "average conversion lift post redesign"],
    ["−58%", "average support ticket reduction after UX audit"],
    ["92%", "of prototypes approved in first review round"],
  ];
  const faqs: [string, string][] = [
    ["What's the difference between UI and UX design?", "UX (user experience) is about the flow — how someone moves through your product and whether it reduces friction toward their goal. UI (user interface) is the visual layer — color, type, component styling. Both must work together to convert."],
    ["Do you design for mobile-first?", "Always. Over 60% of web traffic is mobile. We start with mobile constraints and scale up — never the reverse."],
    ["How long does a UI/UX project take?", "A landing page or marketing site takes 1–2 weeks of design. A full SaaS product design with research and a component system typically takes 4–8 weeks."],
    ["Will I receive the Figma source files?", "Yes, 100%. Full Figma source files, the design system, all component variants, and all exported assets are transferred to you at handover. You own everything."],
    ["Can you audit our existing design?", "Yes. A UX audit covers conversion paths, usability issues, accessibility gaps, and competitive positioning. It's often the fastest way to identify where revenue is leaking."],
  ];
  return (
    <>
      <section className="border-b border-cloud bg-background">
        <div className="container-x py-16 sm:py-24 md:py-32">
          <BackLink />
          <div className="mt-6 max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal">
              <span className="h-px w-6 bg-teal" /> UI / UX Experience Design
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-slate-deep sm:text-5xl md:text-6xl">
              Design that converts,{" "}
              <span className="text-teal">not just impresses.</span>
            </h1>
            <p className="mt-5 text-base text-charcoal sm:text-lg max-w-2xl">
              We design interfaces around user behavior, not portfolio aesthetics. Every component earns its existence by moving the user closer to a decision.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Request a UX Audit →</Link>
              <Link to="/process" className="btn-outline">Our Design Process</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-14 sm:py-20">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map(([n, l]) => (
              <div key={n} className="bg-background border border-cloud p-6 sm:p-8">
                <div className="font-display text-4xl font-bold text-teal sm:text-5xl">{n}</div>
                <p className="mt-3 text-sm text-charcoal capitalize">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">What we deliver.</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map(([t, d]) => (
              <div key={t} className="border-l-2 border-teal pl-5 py-2">
                <h3 className="font-display text-base font-bold text-slate-deep">{t}</h3>
                <p className="mt-2 text-sm text-charcoal leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-deep py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Our design philosophy.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[["Behavior-led", "We study how users actually move — clicks, scrolls, drops — not assumptions."],
              ["Conversion-first", "Beauty that doesn't convert is just decoration. Every choice serves the goal."],
              ["System thinking", "We design components, not pages. Scales with your product, not against it."]
            ].map(([t, d]) => (
              <div key={t} className="border border-charcoal p-5 sm:p-6">
                <div className="h-8 w-1 bg-teal mb-4" />
                <h3 className="font-display text-lg font-bold text-white">{t}</h3>
                <p className="mt-2 text-sm text-cloud/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20 border-t border-cloud">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Common design questions answered.</h2>
          <FaqBlock faqs={faqs} />
        </div>
      </section>

      <OtherServices others={others} />
      <FinalCta title="Ready to design a product people actually use?" cta="Book a Design Discovery Call" />
    </>
  );
}

function MarketingPage({ others }: { others: ReturnType<typeof services.filter> }) {
  const channels = [
    { ch: "Search Engine Optimization (SEO)", kpi: "Organic Traffic, Keyword Rankings, ROAS", time: "90–180 days" },
    { ch: "Google Ads (PPC)", kpi: "CTR, CPA, Conversion Rate", time: "Immediate" },
    { ch: "Meta Ads (Facebook & Instagram)", kpi: "CPM, ROAS, Frequency", time: "7–14 days" },
    { ch: "TikTok & Short-Form Video Ads", kpi: "CPV, Hook Rate, Conversion", time: "7–14 days" },
    { ch: "Email & SMS Automation", kpi: "Open Rate, Revenue per Email, LTV", time: "30 days" },
    { ch: "Conversion Rate Optimization (CRO)", kpi: "CVR, Bounce Rate, AOV", time: "14–30 days" },
    { ch: "Content & Social Media Marketing", kpi: "Reach, Engagement Rate, Leads", time: "60–90 days" },
  ];
  const faqs: [string, string][] = [
    ["How long does it take to see results from digital marketing?", "Paid ads (Google, Meta, TikTok) produce measurable results within 7–14 days. SEO compounds over 90–180 days. Email automation and CRO show impact within the first 30 days. We always prioritize quick wins alongside long-term compounding channels."],
    ["What makes your approach to SEO different?", "We combine technical SEO (Core Web Vitals, crawl efficiency, schema markup) with content built around search intent — not just keyword density. We target topical authority, not individual rankings, so results compound instead of plateauing."],
    ["Do you run paid ads in-house or outsource?", "100% in-house. Our media buyers, creatives, and conversion strategists work together on every account. We do not white-label or hand campaigns to a third party."],
    ["What's a realistic ROAS expectation for paid social?", "Most established DTC brands see 2–4x ROAS within the first 30 days after we take over. The ceiling depends on creative quality, product-market fit, and margin. We set realistic KPIs per account — not vanity benchmarks."],
    ["Can you manage our social media accounts too?", "Yes. Social media management (content calendar, posting, community management) is available as a standalone or bundled service. We create content that builds authority, not just engagement."],
    ["How do you measure marketing ROI?", "Every campaign is tied to a revenue north-star metric — MRR, AOV, CAC, or LTV depending on your business model. We report weekly against this metric, not vanity dashboards full of impressions."],
  ];
  return (
    <>
      <section className="bg-background border-b border-cloud">
        <div className="container-x py-16 sm:py-24 md:py-32">
          <BackLink />
          <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal">
                <span className="h-px w-6 bg-teal" /> Full-Funnel Digital Marketing
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-slate-deep sm:text-5xl md:text-6xl">
                Marketing that drives{" "}
                <span className="text-teal">revenue, not vanity.</span>
              </h1>
              <p className="mt-5 text-base text-charcoal sm:text-lg">
                From first-touch SEO to last-click CRO — we engineer end-to-end growth motions that compound traffic, leads, and revenue across every channel that matters.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Get a Free Audit →</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[["SEO", "+238%", "organic traffic avg."], ["CPA", "−41%", "acquisition cost avg."], ["ROAS", "3.8×", "paid social average"], ["LTV", "+52%", "email automation avg."]].map(([l, n, s]) => (
                <div key={l} className="border border-cloud bg-background p-4 sm:p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-charcoal">{l}</div>
                  <div className="mt-2 font-display text-3xl font-bold text-teal sm:text-4xl">{n}</div>
                  <p className="mt-1 text-xs text-charcoal">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Channels we own end-to-end.</h2>
          <div className="mt-8 overflow-x-auto -mx-4 px-4 sm:-mx-0 sm:px-0">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-slate-deep text-white">
                  <th className="text-left p-4 font-bold text-xs uppercase tracking-widest">Channel</th>
                  <th className="text-left p-4 font-bold text-xs uppercase tracking-widest">Key KPIs</th>
                  <th className="text-left p-4 font-bold text-xs uppercase tracking-widest">Results Timeline</th>
                </tr>
              </thead>
              <tbody className="bg-background divide-y divide-cloud">
                {channels.map((c) => (
                  <tr key={c.ch} className="hover:bg-cloud/40 transition-colors">
                    <td className="p-4 font-medium text-slate-deep">{c.ch}</td>
                    <td className="p-4 text-charcoal">{c.kpi}</td>
                    <td className="p-4"><span className="pill">{c.time}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20 border-t border-cloud">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Your questions, answered directly.</h2>
          <FaqBlock faqs={faqs} />
        </div>
      </section>

      <OtherServices others={others} />
      <FinalCta title="Stop burning budget on marketing that doesn't convert." cta="Book a Free Marketing Audit" sub="We audit your current funnel for free before any engagement." />
    </>
  );
}

function EcommercePage({ others }: { others: ReturnType<typeof services.filter> }) {
  const platforms = [
    { name: "Shopify", best: "DTC brands under $10M GMV", strength: "Speed to market, 10,000+ apps, Stripe-native" },
    { name: "Shopify Hydrogen", best: "High-traffic DTC stores", strength: "Headless React, sub-second LCP, full customization" },
    { name: "WooCommerce", best: "Content-led WordPress brands", strength: "Flexible, SEO-friendly, lowest licensing cost" },
    { name: "BigCommerce", best: "Mid-market with complex catalog", strength: "B2B features, multi-currency, native faceted search" },
  ];
  const conversionItems = [
    "Sub-second page load (Core Web Vitals green)", "Mobile-first product pages (PDPs)", "Sticky add-to-cart with social proof", "Smart upsell and cross-sell engine",
    "Abandoned cart email + SMS sequence", "Trust badges and secure checkout signals", "One-click checkout integration (Shop Pay, PayPal)", "Post-purchase flow and review capture",
  ];
  const faqs: [string, string][] = [
    ["Which e-commerce platform should I choose?", "Shopify wins for most DTC brands starting out or scaling to $10M. Shopify Hydrogen (headless) is right when you need custom UX and extreme page speed. WooCommerce suits content-led brands already on WordPress. BigCommerce fits complex B2B or large catalogs. We pick based on your margin, catalog size, and 2-year roadmap — not platform kickbacks."],
    ["How do you improve conversion rate on an existing store?", "We start with a conversion audit — analyzing heatmaps, session recordings, and funnel drop-offs. Common wins: faster page speed, better mobile PDP layout, sharper social proof placement, and a rebuilt checkout. Most stores see 15–40% CVR improvement within 60 days of a proper CRO engagement."],
    ["What's the average timeline for a new Shopify build?", "A standard Shopify store (custom theme, up to 500 SKUs, basic integrations) takes 4–6 weeks. A headless Hydrogen build with custom checkout and app integrations takes 8–14 weeks. Complex migrations from legacy platforms take 10–16 weeks depending on data volume."],
    ["Can you migrate my existing store without losing sales history?", "Yes. We handle full store migrations — products, metafields, order history, customer records, and reviews — with zero storefront downtime using blue-green deployment. SEO URL structures are preserved with 301 redirect maps."],
    ["Do you set up email automations too?", "Yes. Klaviyo, Omnisend, and Drip are our standard tools. We build out the core flows — welcome series, abandoned cart, post-purchase, win-back — as part of every store launch."],
  ];
  return (
    <>
      <section className="bg-slate-deep text-white border-b border-charcoal">
        <div className="container-x py-16 sm:py-24 md:py-32">
          <BackLink />
          <div className="mt-6">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal">
              <span className="h-px w-6 bg-teal" /> High-Conversion E-Commerce
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl text-white max-w-4xl">
              E-commerce stores built to{" "}
              <span className="text-teal">crush cart abandonment.</span>
            </h1>
            <p className="mt-5 text-base text-cloud/80 max-w-2xl sm:text-lg">
              Lightning-fast storefronts engineered to maximize average order value, minimize bounce, and turn first-time buyers into repeat customers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Get a Store Audit →</Link>
              <Link to="/work" className="btn-outline !border-white/30 !text-white hover:!bg-white hover:!text-slate-deep">See Our Builds</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Platform selection guide.</h2>
          <p className="mt-3 text-sm text-charcoal max-w-2xl">We're platform-agnostic. We pick what's right for your business — not what pays us the highest referral fee.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {platforms.map((p) => (
              <div key={p.name} className="border border-cloud p-5 sm:p-6 hover:border-teal transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-slate-deep">{p.name}</h3>
                  <span className="pill">Best for</span>
                </div>
                <p className="mt-2 text-sm font-medium text-teal">{p.best}</p>
                <p className="mt-2 text-sm text-charcoal">{p.strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Our conversion checklist — every build.</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {conversionItems.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-background p-4 border border-cloud">
                <span className="text-teal font-bold mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20 border-t border-cloud">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">E-commerce questions, answered.</h2>
          <FaqBlock faqs={faqs} />
        </div>
      </section>

      <OtherServices others={others} />
      <FinalCta title="Ready to build a store that actually converts?" cta="Get a Free Store Audit" />
    </>
  );
}

function BrandingPage({ others }: { others: ReturnType<typeof services.filter> }) {
  const deliverables = [
    { t: "Logo System", d: "Primary, secondary, and icon variants across all formats (SVG, PNG, dark/light)." },
    { t: "Color Architecture", d: "Primary, secondary, and neutral palettes with accessibility contrast ratios validated." },
    { t: "Typography System", d: "Display, body, and mono typefaces with scale, weight, and usage rules." },
    { t: "Brand Voice Guide", d: "Tone of voice, messaging pillars, and example copy in your brand's language." },
    { t: "Brand Pattern / Texture", d: "Proprietary graphic elements, iconography, and background textures." },
    { t: "Brand Book (PDF + Figma)", d: "Complete usage guide — everything a designer, developer, or marketer needs." },
  ];
  const faqs: [string, string][] = [
    ["How long does a brand identity project take?", "A full brand identity — logo, color system, typography, voice guide, and brand book — takes 3–5 weeks. Logo-only projects are 1–2 weeks. Larger rebrands with multiple stakeholders take 6–8 weeks."],
    ["Do you do research before designing?", "Yes. Every brand project starts with positioning discovery — competitor audit, target audience profiling, and a brand personality workshop. We don't start designing until we understand where you need to sit in the market."],
    ["Will I receive all the source files?", "100%. You receive every source file — AI, EPS, SVG, Figma, PNG in all sizes, dark and light versions. You own the complete brand system outright."],
    ["Can you refresh an existing brand without a full rebrand?", "Yes. A brand refresh evolves your existing identity — updated color palette, refined typography, logo cleanup — without starting from scratch. It's faster and less disruptive than a full rebrand."],
    ["Do you handle brand applications like social media templates?", "Yes. We create social media templates, email headers, presentation decks, and document templates as optional brand application packages after the core identity is complete."],
  ];
  return (
    <>
      <section className="bg-background border-b border-cloud">
        <div className="container-x py-16 sm:py-24 md:py-32">
          <BackLink />
          <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal">
                <span className="h-px w-6 bg-teal" /> Brand Identity Design
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-slate-deep sm:text-5xl md:text-6xl">
                Brands that make people{" "}
                <span className="text-teal">stop scrolling.</span>
              </h1>
              <p className="mt-5 text-base text-charcoal max-w-xl sm:text-lg">
                Magnetic corporate identities engineered to make you instantly recognizable in a noisy market. Beyond a logo — a complete brand operating system.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Start Your Brand →</Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[["#222831","bg-[#222831]"],["#393E46","bg-[#393E46]"],["#00ADB5","bg-[#00ADB5]"],["#EEEEEE","bg-[#EEEEEE]"],["#FFFFFF","bg-white border"],["#2B2D42","bg-[#2B2D42]"]].map(([hex, cls]) => (
                <div key={hex} className={`${cls} aspect-square flex items-end p-2`}>
                  <span className="font-mono text-[10px] text-white/70 mix-blend-difference">{hex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-deep py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Complete brand system — what's included.</h2>
          <div className="mt-8 space-y-0">
            {deliverables.map((d, i) => (
              <div key={d.t} className={`grid grid-cols-[1.5rem_1fr] sm:grid-cols-[2rem_1fr] gap-4 py-5 border-b border-charcoal sm:gap-6`}>
                <div className="font-mono text-sm font-bold text-teal mt-0.5">0{i + 1}</div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">{d.t}</h3>
                  <p className="mt-1 text-sm text-cloud/70">{d.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20 border-t border-cloud">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Branding questions, answered.</h2>
          <FaqBlock faqs={faqs} />
        </div>
      </section>

      <OtherServices others={others} />
      <FinalCta title="Ready to become the brand people remember?" cta="Start Your Brand Identity" />
    </>
  );
}

function CopywritingPage({ others }: { others: ReturnType<typeof services.filter> }) {
  const types = [
    { t: "Sales Pages", d: "Long-form persuasion architecture that converts cold traffic into buyers." },
    { t: "Website Copy", d: "Homepage, about, and service pages that position you as the obvious choice." },
    { t: "Email Sequences", d: "Welcome flows, nurture campaigns, and re-engagement sequences." },
    { t: "Ad Creatives", d: "Short-form hooks and primary copy for Meta, Google, and TikTok ads." },
    { t: "LinkedIn Ghostwriting", d: "Authority-building content for founders — not generic engagement bait." },
    { t: "Ebooks & Lead Magnets", d: "Long-form gated content that positions you as a category expert." },
    { t: "Product Descriptions", d: "Sensory, benefit-first copy that reduces returns and increases AOV." },
    { t: "Case Studies", d: "Client success stories engineered to build trust and close deals faster." },
  ];
  const faqs: [string, string][] = [
    ["What makes copywriting actually convert?", "Conversion copy is built around a deep understanding of the reader's problem — not the product's features. We research your customer's language, fears, and desired outcomes, then mirror that language back in a structure that moves from awareness to decision."],
    ["Do you write SEO-optimized copy?", "Yes. Every web page we write is structured for search intent — semantic keyword integration, clear header hierarchy, FAQ schema, and content depth that matches topical authority expectations for the target keyword cluster."],
    ["How long does a copywriting project take?", "A single sales page takes 3–5 business days. A full website (5–8 pages) takes 1–2 weeks. Email sequences take 3–5 days per flow. We scope precisely after a discovery call."],
    ["Do I need to provide a brief?", "A brief helps, but it's not required to start. We run a discovery questionnaire that extracts your positioning, ICP, offer, and competitive landscape — everything we need to write copy that sounds like you but converts better."],
    ["Can you match our existing brand voice?", "Yes. We analyze your existing content, brand guidelines, and competitor positioning to write in a voice that's distinctly yours — not generic agency copy with your logo on it."],
  ];
  return (
    <>
      <section className="bg-background border-b border-cloud">
        <div className="container-x py-16 sm:py-24 md:py-32">
          <BackLink />
          <div className="mt-6">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal">
              <span className="h-px w-6 bg-teal" /> Authority Copywriting
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-slate-deep sm:text-5xl md:text-6xl max-w-3xl">
              Words that sell.{" "}
              <span className="text-teal">Copy that compounds.</span>
            </h1>
            <blockquote className="mt-8 border-l-4 border-teal pl-6 py-2 max-w-2xl">
              <p className="text-base text-charcoal italic sm:text-lg">
                "Your copy is your 24/7 sales team. If it can't close a sceptical reader at 2am, you're leaving money on the table."
              </p>
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Start a Copy Project →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Content formats we master.</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {types.map((t) => (
              <div key={t.t} className="bg-background p-5 border border-cloud hover:border-teal transition-colors">
                <h3 className="font-display text-base font-bold text-slate-deep">{t.t}</h3>
                <p className="mt-2 text-xs text-charcoal leading-relaxed">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20 border-t border-cloud">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Copywriting questions, answered.</h2>
          <FaqBlock faqs={faqs} />
        </div>
      </section>

      <OtherServices others={others} />
      <FinalCta title="Ready to make your copy do the heavy lifting?" cta="Start a Copy Project" />
    </>
  );
}

function VideoPage({ others }: { others: ReturnType<typeof services.filter> }) {
  const phases = [
    { n: "01", t: "Brief & Strategy", d: "We define the goal, audience, platform, and call to action before a word is written." },
    { n: "02", t: "Script & Storyboard", d: "Narrative arc, scene-by-scene breakdown, and voiceover script. Approved by you before production starts." },
    { n: "03", t: "Illustration", d: "All visual assets — characters, UI mockups, icons, and environments — created in-studio." },
    { n: "04", t: "Animation & Motion", d: "Scene assembly, motion design, transitions, and effects in After Effects and LottieFiles." },
    { n: "05", t: "Sound & Voiceover", d: "Original or licensed music, sound design, and professional voiceover in your language." },
    { n: "06", t: "Delivery", d: "Final exports in all required formats — MP4 (16:9, 9:16, 1:1), GIF previews, and native Lottie if needed." },
  ];
  const videoTypes = [
    ["Explainer Videos", "60–120 seconds", "SaaS onboarding, product launches, investor decks"],
    ["Ad Creatives", "15–30 seconds", "Meta, TikTok, YouTube pre-roll"],
    ["Brand Films", "90–180 seconds", "Website hero, pitch decks, company culture"],
    ["UI / Product Demos", "30–90 seconds", "App features, dashboard walkthroughs"],
    ["Social Content", "15–60 seconds", "Reels, TikToks, LinkedIn carousels"],
  ];
  const faqs: [string, string][] = [
    ["How long does a 60-second explainer video take?", "A standard 60-second 2D animated explainer — from brief to delivery — takes 3–4 weeks. Rush timelines (2 weeks) are possible with a rush fee. Longer videos or complex illustration styles take 4–6 weeks."],
    ["Do you write the script too?", "Yes. Script and storyboard are included in every video project. If you already have a script, we review and optimize it for visual storytelling before moving to storyboard."],
    ["What animation style do you work in?", "Our primary style is clean 2D motion design with character or UI illustration. We also do kinetic typography, screen recordings with motion graphics, and whiteboard/sketch animation. We match the style to your brand and audience."],
    ["Can you animate in Lottie for web use?", "Yes. We export animations as Lottie JSON for use in web and mobile products — lightweight, resolution-independent, and interactive. Ideal for onboarding animations, loading states, and website micro-interactions."],
    ["Do you handle voiceover and music?", "Yes. We work with a roster of professional voiceover artists across English and major European languages. Music is either licensed (royalty-free) or original composition depending on scope."],
  ];
  return (
    <>
      <section className="bg-slate-deep text-white border-b border-charcoal">
        <div className="container-x py-16 sm:py-24 md:py-32">
          <BackLink />
          <div className="mt-6 max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal">
              <span className="h-px w-6 bg-teal" /> Video & Animation
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl text-white">
              60 seconds to{" "}
              <span className="text-teal">make them stay.</span>
            </h1>
            <p className="mt-5 text-base text-cloud/80 max-w-xl sm:text-lg">
              Dynamic 2D animations and video content that simplify complex ideas and capture attention in the first three seconds. Script to delivery — all in-studio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Get a Video Quote →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Our 6-phase production process.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {phases.map((p) => (
              <div key={p.n} className="border border-cloud p-5 sm:p-6 hover:border-teal transition-colors">
                <div className="font-mono text-2xl font-bold text-teal">{p.n}</div>
                <h3 className="mt-3 font-display text-base font-bold text-slate-deep">{p.t}</h3>
                <p className="mt-2 text-sm text-charcoal">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Video formats we produce.</h2>
          <div className="mt-8 overflow-x-auto -mx-4 px-4 sm:-mx-0 sm:px-0">
            <table className="w-full min-w-[500px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-deep text-white">
                  <th className="text-left p-4 font-bold text-xs uppercase tracking-widest">Format</th>
                  <th className="text-left p-4 font-bold text-xs uppercase tracking-widest">Duration</th>
                  <th className="text-left p-4 font-bold text-xs uppercase tracking-widest">Best Used For</th>
                </tr>
              </thead>
              <tbody className="bg-background divide-y divide-cloud">
                {videoTypes.map(([f, d, u]) => (
                  <tr key={f} className="hover:bg-cloud/40 transition-colors">
                    <td className="p-4 font-medium text-slate-deep">{f}</td>
                    <td className="p-4 text-charcoal"><span className="pill">{d}</span></td>
                    <td className="p-4 text-charcoal">{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20 border-t border-cloud">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Video production questions, answered.</h2>
          <FaqBlock faqs={faqs} />
        </div>
      </section>

      <OtherServices others={others} />
      <FinalCta title="Ready to make something people actually watch?" cta="Get a Video Quote" />
    </>
  );
}

function AiPage({ others }: { others: ReturnType<typeof services.filter> }) {
  const useCases = [
    { t: "Customer Support Automation", d: "Deflect tier-1 tickets with a trained GPT agent that resolves FAQs, order status, and returns — 24/7.", saving: "Up to 70% ticket deflection" },
    { t: "Lead Qualification Bot", d: "Website chatbot that qualifies leads, collects contact info, and books calls — while you sleep.", saving: "3× more qualified leads" },
    { t: "Internal Knowledge Assistant", d: "Train a private LLM on your SOPs, docs, and wikis. Employees get instant, accurate answers.", saving: "−60% internal queries" },
    { t: "E-Commerce Product Recommendation", d: "Conversational shopping assistant that recommends products based on user intent and history.", saving: "+22% AOV average" },
    { t: "Content & Copy Generation Workflow", d: "Automated pipeline from brief to first draft — product descriptions, email campaigns, ad copy.", saving: "10× content velocity" },
    { t: "Data & Reporting Automation", d: "Connect your data sources (GA4, Shopify, CRM) to an AI layer that surfaces insights automatically.", saving: "−80% manual reporting" },
  ];
  const integrations = ["OpenAI GPT-4o", "Anthropic Claude", "LangChain", "Zapier / Make", "Slack", "Zendesk", "HubSpot", "Shopify", "Notion", "Google Workspace", "Airtable", "Webhooks"];
  const faqs: [string, string][] = [
    ["What is an AI chatbot and how does it differ from a rule-based chatbot?", "A rule-based chatbot follows a fixed decision tree — it can only answer questions it was explicitly programmed for. An AI chatbot (LLM-powered) understands natural language, handles complex variations of questions, and can be trained on your specific business knowledge — making it exponentially more useful for real customer interactions."],
    ["How do you train the AI on our company data?", "We use a technique called Retrieval-Augmented Generation (RAG). Your docs, FAQs, product data, and SOPs are embedded into a vector database. When a user asks a question, the AI retrieves the relevant information and generates an accurate, context-aware answer — without hallucinating data it wasn't given."],
    ["Is our data safe with an AI integration?", "Yes. We architect solutions so your sensitive data stays on your infrastructure or a private cloud endpoint. We do not send proprietary data to public LLM APIs without explicit consent and clear data agreements with the provider (OpenAI, Anthropic, etc.)."],
    ["How long does it take to deploy an AI chatbot?", "A standard customer support bot with 50–100 trained knowledge articles takes 2–3 weeks. Complex agents with multi-system integrations (CRM, helpdesk, e-commerce) take 4–6 weeks. We build, test, and monitor the live deployment."],
    ["Can the AI integrate with our existing tools?", "Yes. We integrate with Zendesk, HubSpot, Shopify, Slack, Intercom, Notion, Google Workspace, and most tools with APIs. If it has a webhook or API, we can connect it."],
    ["What happens when the AI doesn't know the answer?", "We design graceful fallback flows — the bot escalates to a human, offers to capture the query for follow-up, or directs the user to a contact form. No dead ends. No hallucinated answers."],
  ];
  return (
    <>
      <section className="bg-slate-deep text-white border-b border-charcoal">
        <div className="container-x py-16 sm:py-24 md:py-32">
          <BackLink />
          <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal">
                <span className="h-px w-6 bg-teal" /> AI Automation & Systems
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl text-white">
                Automate the work.{" "}
                <span className="text-teal">Compound the results.</span>
              </h1>
              <p className="mt-5 text-base text-cloud/80 max-w-xl sm:text-lg">
                Custom GPT-powered agents and intelligent automation workflows that free your team from repetitive work and generate revenue while you sleep.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Book an AI Discovery Call →</Link>
              </div>
            </div>
            <div className="border border-charcoal bg-slate-deep/50 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-teal">Live Agent Status</span>
                <span className="flex items-center gap-1.5 text-xs text-green-400"><span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> Active</span>
              </div>
              {[
                ["Support Bot", "847 tickets resolved this week"],
                ["Lead Agent", "23 qualified leads captured today"],
                ["Content Pipeline", "140 product descriptions generated"],
              ].map(([t, s]) => (
                <div key={t} className="border-t border-charcoal py-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold text-white">{t}</div>
                    <div className="text-xs text-cloud/60 mt-0.5">{s}</div>
                  </div>
                  <span className="pill bg-teal/10 text-teal shrink-0">Running</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">What we automate for you.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <div key={u.t} className="border border-cloud p-5 sm:p-6 hover:border-teal transition-colors flex flex-col">
                <h3 className="font-display text-base font-bold text-slate-deep">{u.t}</h3>
                <p className="mt-2 text-sm text-charcoal leading-relaxed flex-1">{u.d}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-teal">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />{u.saving}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">Integrations we support.</h2>
          <p className="mt-3 text-sm text-charcoal">If it has an API, we can connect it.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {integrations.map((t) => (
              <span key={t} className="pill bg-background border border-cloud text-slate-deep text-xs sm:text-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20 border-t border-cloud">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">AI automation questions, answered.</h2>
          <FaqBlock faqs={faqs} />
        </div>
      </section>

      <OtherServices others={others} />
      <FinalCta title="Ready to put your operations on autopilot?" cta="Book an AI Discovery Call" sub="We audit your workflows and identify the top 3 automation opportunities — free." />
    </>
  );
}

function DefaultPage({ svc, others }: { svc: { title: string; long: string; pills: string[]; icon: string; slug: string }; others: ReturnType<typeof services.filter> }) {
  return (
    <>
      <section className="border-b border-cloud bg-background">
        <div className="container-x py-16 sm:py-24 md:py-32">
          <BackLink />
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-slate-deep sm:text-5xl md:text-6xl">
            {svc.title}
          </h1>
          <p className="mt-5 max-w-xl text-base text-charcoal sm:text-lg">{svc.long}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {svc.pills.map((p: string) => <span key={p} className="pill">{p}</span>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Request a Quote →</Link>
          </div>
        </div>
      </section>
      <OtherServices others={others} />
      <FinalCta />
    </>
  );
}
