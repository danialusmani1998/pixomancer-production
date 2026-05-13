import { Link } from "react-router-dom";
import { useState } from "react";
import { CtaBand, FinalCta } from "../components/sections";
import { Web3Form } from "../components/web3-form";
import { usePageSEO } from "../hooks/usePageSEO";
import { useInView } from "../hooks/useInView";

const brands = ["Enstack", "Netbank", "Xpress", "Glowtify", "IMGadgets", "ShopVision", "Stored", "Hey Savi", "Rokt", "Zipline AI"];

const steps = [
  { n: "01", label: "Ignition", desc: "Free strategy call. Align ambition, scope, and timeline." },
  { n: "02", label: "Audit", desc: "Deep diagnostic of funnel, brand, code, and conversion." },
  { n: "03", label: "Research", desc: "Market positioning, competitor teardowns, behavioral analysis." },
  { n: "04", label: "Blueprint", desc: "Sprint plan with KPIs, owners, and deliverables." },
  { n: "05", label: "Concept", desc: "Visual, narrative, and architectural direction sprints." },
  { n: "06", label: "UI/UX", desc: "High-fidelity prototypes you can test before code." },
  { n: "07", label: "Development", desc: "Senior engineering. Modern stack. Type-safe by default." },
  { n: "08", label: "Testing", desc: "QA, performance, accessibility, conversion validation." },
  { n: "09", label: "Launch", desc: "Go-live, analytics wiring, full handover." },
  { n: "10", label: "Scale", desc: "Ads, SEO, automation — continuous optimization post-launch." },
];

const cases = [
  { brand: "Enstack", location: "Philippines", tag: "Web & Software", metric: "+37% Revenue/Merchant", desc: "Rebuilt backend analytics and streamlined UI, cutting manual reporting time by 62% and lifting on-platform revenue per merchant within 6 months." },
  { brand: "Glowtify", location: "Canada", tag: "AI & Automation", metric: "40 hrs/wk Saved", desc: "Built automated data pipelines from Shopify and social APIs, saving 40+ hours of manual work per week — helping secure $3.4M in seed funding." },
  { brand: "Xpress Super App", location: "Philippines", tag: "Development", metric: "+25% Retention", desc: "Personalized push notifications + loyalty dashboard. User retention rose 25% over 90 days with average monthly rides up 18%." },
];

const testimonials = [
  { q: "Pixomancer rebuilt our analytics dashboard from the ground up. The efficiency gains for our merchants were immediate — less time on reporting, more on growing their business.", n: "Macy Castillo", r: "CEO, Enstack" },
  { q: "The front-end redesign made onboarding faster and cleaner. Pixomancer delivered on time and understood the compliance requirements from day one.", n: "Gus Poston", r: "CEO, Netbank" },
  { q: "Pixomancer's automation work saved our team over 40 hours a week. That's not a vanity metric — it's real time we reinvested into product development.", n: "Marc Allard", r: "CEO, Glowtify" },
  { q: "Pixomancer turned our category pages into conversion machines. The A/B testing framework they built is still running months later.", n: "Meenu Seda", r: "CEO, IMGadgets" },
  { q: "We needed deep, technical execution on data pipelines. Pixomancer delivered and helped us raise our next round.", n: "Harry Chemko", r: "Co-founder, ShopVision" },
];

const faqs: [string, string][] = [
  ["How quickly can we start a project?", "Our streamlined onboarding allows us to kick off within the same week after a strategic alignment call. We prioritize speed and efficiency — no unnecessary delays."],
  ["Do I need to commit to a long-term contract?", "No. We offer flexible engagement models, including fixed-scope sprints and retained partnerships, all focused on delivering measurable outcomes. Our goal is to earn your continued business through results, not restrictive contracts."],
  ["Can you integrate AI solutions into my existing platforms?", "Absolutely. Our AI automation specialists excel at seamlessly integrating custom chatbots, intelligent workflows, and advanced AI systems into your current infrastructure."],
  ["What technologies do you use for SaaS development?", "We leverage modern, robust, and scalable tech stacks tailored to your project. This includes React, Next.js, Node.js, Python, various cloud platforms (AWS, GCP, Azure), and advanced database solutions."],
  ["Which e-commerce platform is best for my business?", "The ideal platform depends on your unique business model, scale, and requirements. We specialize in Shopify, WooCommerce, Headless Commerce, Magento, BigCommerce, and Webflow E-Commerce."],
  ["How long does it take to see SEO results?", "You can typically expect initial improvements in 3–6 months. Significant, sustained growth usually manifests within 6–12 months, depending on industry competitiveness and your current digital footprint."],
  ["Is your video and animation production in-house?", "Yes, all video and animation projects — from concept to final render — are managed by our in-house motion designers and animators."],
  ["Do I own the intellectual property for work you create?", "Unequivocally, yes. Upon project completion and final payment, you own all IP: code, design assets, content, and credentials. No vendor lock-in, ever."],
  ["How do you ensure transparent communication?", "Weekly live demos, a dedicated project manager, Slack channel, and a shared roadmap. You see tangible progress every 7 days — no waiting in the dark."],
];

const services = [
  { icon: "</>", label: "Web & Software Engineering", tags: ["Website Dev", "App Dev", "SaaS", "Software"], to: "/services/web-development" },
  { icon: "⬡", label: "UI/UX Experience Design", tags: ["UI Design", "UX Strategy", "Prototyping"], to: "/services/ui-ux" },
  { icon: "◎", label: "Full-Funnel Digital Marketing", tags: ["SEO", "Google Ads", "Meta", "TikTok", "CRO"], to: "/services/digital-marketing" },
  { icon: "◻", label: "E-Commerce Store Creation", tags: ["Shopify", "WooCommerce", "Headless", "BigCommerce"], to: "/services/ecommerce" },
  { icon: "◈", label: "Brand Identity", tags: ["Logo", "Visual System", "Graphic Design"], to: "/services/branding" },
  { icon: "✦", label: "Authority Copywriting", tags: ["Sales Copy", "Ebooks", "LinkedIn Authority"], to: "/services/copywriting" },
  { icon: "▶", label: "Video & Animation", tags: ["2D Animation", "Explainer", "Motion Graphics"], to: "/services/video" },
  { icon: "⬡", label: "AI Automation & Systems", tags: ["Chatbots", "Workflows", "Integrations"], to: "/services/ai" },
];

export default function HomePage() {
  usePageSEO({
    title: "Pixomancer — Unleash Your Brand's Full Digital Potential",
    description: "Full-stack digital agency delivering web engineering, AI automation, UI/UX design, e-commerce, branding, and performance marketing. 50+ brands launched. 98% client retention.",
    canonical: "https://pixomancer.com/",
  });

  return (
    <>
      <Hero />
      <TrustMarquee />
      <ProblemSolution />
      <ServicesSection />
      <CtaBand
        text="Don't see exactly what you need? We build custom stacks tailored to your unique vision."
        cta="Talk to a Strategist Now"
      />
      <ProcessSection />
      <CaseStudies />
      <Testimonials />
      <FaqSection />
      <HomeContactSection />
      <FinalCta
        title="Stop Being Invisible. Start Being Inevitable."
        cta="Book Your Free Strategy Call"
        sub="Directs to our secure contact form. No spam. Your privacy is paramount."
      />
    </>
  );
}

function Hero() {
  const { ref, inView } = useInView(0.05);
  return (
    <section className="relative overflow-hidden border-b border-cloud bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <span className="absolute -right-10 top-1/2 -translate-y-1/2 font-display text-[30vw] font-bold leading-none text-cloud/40 select-none">PIXEL</span>
        <span className="absolute left-0 top-0 h-full w-1 bg-teal opacity-20" />
      </div>
      <div ref={ref} className="container-x relative grid gap-10 py-16 sm:py-24 md:grid-cols-12 md:gap-16 md:py-36 lg:py-40">
        <div className="md:col-span-7">
          <div className={`inline-flex items-center gap-3 anim-fade-in ${inView ? "in-view" : ""}`}>
            <span className="h-px w-8 bg-teal" />
            <span className="text-xs font-bold uppercase tracking-widest text-teal">Crafting Brands Beyond Pixels</span>
          </div>
          <h1 className={`mt-5 font-display text-4xl font-bold leading-[1.02] text-slate-deep sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-7xl anim-fade-up delay-100 ${inView ? "in-view" : ""}`}>
            Unleash Your Brand's Full{" "}
            <span className="relative inline-block">
              <span className="text-teal">Digital Potential.</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-teal/30" />
            </span>
          </h1>
          <p className={`mt-6 max-w-xl text-base text-charcoal sm:text-lg md:text-xl leading-relaxed anim-fade-up delay-200 ${inView ? "in-view" : ""}`}>
            From Vision to Velocity — we engineer digital experiences that dominate markets. Full-stack expertise across development, design, AI, and content, all meticulously crafted to deliver measurable growth.
          </p>
          <div className={`mt-8 flex flex-wrap gap-3 sm:gap-4 anim-fade-up delay-300 ${inView ? "in-view" : ""}`}>
            <Link
              to="/contact"
              id="btn-hero-ignite"
              name="Ignite Your Project"
              className="btn-primary gtm-cta text-sm sm:text-base"
              data-gtm-category="CTA"
              data-gtm-action="Click"
              data-gtm-label="Hero — Ignite Your Project"
            >
              Ignite Your Project →
            </Link>
            <Link
              to="/process"
              id="btn-hero-see-process"
              name="See Our Proven Process"
              className="btn-outline gtm-cta text-sm sm:text-base"
              data-gtm-category="CTA"
              data-gtm-action="Click"
              data-gtm-label="Hero — See Our Proven Process"
            >
              See Our Proven Process
            </Link>
          </div>
          <div className={`mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 anim-fade-in delay-400 ${inView ? "in-view" : ""}`}>
            <StatBadge n="50+" l="Successful Launches" />
            <StatBadge n="10+" l="Industry-Leading Brands" />
            <StatBadge n="98%" l="Client Retention Rate" />
          </div>
        </div>
        <div className={`hidden md:col-span-5 md:flex items-center anim-slide-right delay-200 ${inView ? "in-view" : ""}`}>
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function StatBadge({ n, l }: { n: string; l: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-2xl font-bold text-slate-deep sm:text-3xl">{n}</span>
      <span className="text-xs uppercase tracking-widest text-charcoal mt-0.5">{l}</span>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 480 480" className="w-full" fill="none">
        <rect x="40" y="80" width="400" height="320" stroke="#222831" strokeWidth="2" />
        <rect x="40" y="80" width="400" height="40" fill="#222831" />
        <circle cx="60" cy="100" r="5" fill="#00ADB5" />
        <circle cx="78" cy="100" r="5" fill="#393E46" />
        <circle cx="96" cy="100" r="5" fill="#393E46" />
        <rect x="64" y="144" width="180" height="16" fill="#222831" />
        <rect x="64" y="170" width="240" height="8" fill="#393E46" opacity=".4" />
        <rect x="64" y="186" width="200" height="8" fill="#393E46" opacity=".4" />
        <rect x="64" y="210" width="130" height="40" fill="#00ADB5" />
        <rect x="64" y="280" width="160" height="100" stroke="#222831" strokeWidth="2" />
        <rect x="240" y="280" width="160" height="48" stroke="#00ADB5" strokeWidth="2" />
        <rect x="240" y="332" width="160" height="48" stroke="#222831" strokeWidth="2" />
        <line x1="380" y1="40" x2="320" y2="100" stroke="#222831" strokeWidth="3" />
        <rect x="370" y="30" width="24" height="24" fill="#00ADB5" transform="rotate(45 382 42)" />
        <rect x="300" y="80" width="9" height="9" fill="#00ADB5" />
        <rect x="287" y="93" width="7" height="7" fill="#00ADB5" opacity=".6" />
      </svg>
      <div className="absolute -top-3 -right-3 h-6 w-6 border-t-2 border-r-2 border-teal" />
      <div className="absolute -bottom-3 -left-3 h-6 w-6 border-b-2 border-l-2 border-teal" />
    </div>
  );
}

function TrustMarquee() {
  return (
    <section className="border-y border-cloud bg-cloud/40">
      <div className="container-x py-6 sm:py-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-charcoal/70">Trusted by visionaries at</p>
        <div className="mt-5 overflow-hidden">
          <div className="marquee-track items-center">
            {[...brands, ...brands, ...brands].map((b, i) => (
              <span key={i} className="font-display text-lg font-bold text-charcoal/30 sm:text-xl whitespace-nowrap">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-background">
      <div ref={ref} className={`container-x py-16 sm:py-24 md:py-28 text-center anim-fade-up ${inView ? "in-view" : ""}`}>
        <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
          <span className="h-px w-6 bg-teal" /> The Problem <span className="h-px w-6 bg-teal" />
        </p>
        <h2 className="mt-5 mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-slate-deep sm:text-4xl md:text-5xl">
          Is Your Digital Presence a{" "}
          <span className="text-teal">Liability</span>, or Your Strongest Asset?
        </h2>
        <p className="mt-5 mx-auto max-w-2xl text-base text-charcoal sm:text-lg leading-relaxed">
          In today's hyper-competitive landscape, a mediocre online presence isn't just invisible — it's actively costing you opportunities. Don't let outdated design, clunky user experiences, or an absent digital strategy drain your potential.
        </p>
        <Link
          to="/contact"
          id="btn-problem-transform"
          name="Transform Your Digital Future"
          className="btn-primary gtm-cta mt-8 inline-flex text-sm sm:text-base"
          data-gtm-category="CTA"
          data-gtm-action="Click"
          data-gtm-label="Problem Section — Transform"
        >
          Transform Your Digital Future →
        </Link>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { ref, inView } = useInView();
  return (
    <section id="services" className="border-y border-cloud bg-background">
      <div className="container-x py-16 sm:py-24 md:py-32">
        <div ref={ref} className={`text-center anim-fade-up ${inView ? "in-view" : ""}`}>
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
            <span className="h-px w-6 bg-teal" /> Services <span className="h-px w-6 bg-teal" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-slate-deep sm:text-4xl md:text-5xl">Our Integrated Digital Arsenal.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-charcoal sm:text-lg">
            Eight pillars. One in-house team. Zero compromises. All disciplines working in perfect harmony for maximum impact.
          </p>
        </div>
        <div className="mt-10 grid gap-px bg-cloud sm:grid-cols-2 lg:grid-cols-4 md:mt-14">
          {services.map((s, i) => (
            <Link
              key={s.label}
              to={s.to}
              id={`btn-service-card-${i + 1}`}
              name={s.label}
              className="group bg-background p-6 transition-all hover:bg-slate-deep gtm-cta block"
              data-gtm-category="Services"
              data-gtm-action="Click"
              data-gtm-label={s.label}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center bg-cloud text-sm font-bold text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  {s.icon}
                </span>
                <span className="font-mono text-xs text-charcoal/40 group-hover:text-white/30 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-slate-deep transition-colors group-hover:text-white sm:text-lg">
                {s.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1">
                {s.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs font-medium bg-cloud text-charcoal group-hover:bg-white/10 group-hover:text-white/80 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-teal group-hover:text-teal transition-colors">
                Explore <span>→</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            id="btn-services-talk-strategist"
            name="Talk to a Strategist Now"
            className="btn-primary gtm-cta text-sm sm:text-base"
            data-gtm-category="CTA"
            data-gtm-action="Click"
            data-gtm-label="Services Section — Talk to a Strategist"
          >
            Talk to a Strategist Now →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-cloud/30 border-y border-cloud">
      <div className="container-x py-16 sm:py-24 md:py-32">
        <div ref={ref} className={`text-center anim-fade-up ${inView ? "in-view" : ""}`}>
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
            <span className="h-px w-6 bg-teal" /> The Blueprint <span className="h-px w-6 bg-teal" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-slate-deep sm:text-4xl md:text-5xl">
            The Pixomancer Blueprint: From Concept to Conquest.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-charcoal sm:text-lg">
            A transparent 10-step framework forged over 150+ successful launches.
          </p>
        </div>
        <ol className="mt-10 grid gap-px bg-cloud grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:mt-14">
          {steps.map((s, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li
                key={s.label}
                className={`group bg-background p-5 sm:p-6 transition-all hover:bg-slate-deep ${isLast ? "ring-2 ring-inset ring-teal" : ""}`}
              >
                <span className="font-mono text-xs font-bold text-teal">{s.n}</span>
                <div className="mt-2 font-display text-sm font-bold text-slate-deep group-hover:text-white sm:text-base">{s.label}</div>
                <p className="mt-2 text-xs leading-relaxed text-charcoal group-hover:text-white/70 hidden sm:block">{s.desc}</p>
                <div className={`mt-3 h-0.5 w-8 transition-colors ${isLast ? "bg-teal" : "bg-charcoal/20 group-hover:bg-teal"}`} />
              </li>
            );
          })}
        </ol>
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/process"
            id="btn-process-start-transformation"
            name="Start Your Transformation Today"
            className="btn-outline gtm-cta text-sm sm:text-base"
            data-gtm-category="CTA"
            data-gtm-action="Click"
            data-gtm-label="Process Section — Start Transformation"
          >
            Start Your Transformation Today →
          </Link>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-background border-b border-cloud">
      <div className="container-x py-16 sm:py-24 md:py-32">
        <div ref={ref} className={`flex items-end justify-between flex-wrap gap-4 anim-fade-up ${inView ? "in-view" : ""}`}>
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal">
              <span className="h-px w-6 bg-teal" /> Case Studies
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-slate-deep sm:text-4xl md:text-5xl">
              Impact That Speaks Volumes.
            </h2>
            <p className="mt-2 text-base text-charcoal max-w-xl">Real challenges. Real solutions. Unmistakable results.</p>
          </div>
          <Link
            to="/work"
            id="btn-home-all-projects"
            name="See All Our Impactful Projects"
            className="shrink-0 text-sm font-bold text-teal hover:text-slate-deep transition-colors gtm-cta"
            data-gtm-category="CTA"
            data-gtm-action="Click"
            data-gtm-label="Case Studies Section — All Projects"
          >
            All Projects →
          </Link>
        </div>
        <div className="mt-8 sm:mt-12 grid gap-5 sm:grid-cols-3">
          {cases.map((c, i) => (
            <article
              key={c.brand}
              className="group flex flex-col border border-cloud bg-background transition-all hover:border-teal hover:shadow-md"
            >
              <div className="bg-slate-deep p-6 relative overflow-hidden">
                <div className="absolute right-0 top-0 h-full w-1 bg-teal" />
                <span className="text-xs font-bold uppercase tracking-widest text-teal">{c.tag}</span>
                <div className="mt-3 font-display text-3xl font-bold text-white">{c.metric}</div>
                <div className="mt-1 text-sm text-white/60">{c.brand} · {c.location}</div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-sm text-charcoal leading-relaxed flex-1">{c.desc}</p>
                <div className="mt-4 pt-4 border-t border-cloud">
                  <Link
                    to="/work"
                    id={`btn-case-${i + 1}`}
                    name={`View Case Study — ${c.brand}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-teal transition-all hover:gap-2 gtm-case-study"
                    data-gtm-category="Case Study"
                    data-gtm-action="Click"
                    data-gtm-label={c.brand}
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/work"
            id="btn-work-all-projects"
            name="See All Our Impactful Projects"
            className="btn-outline gtm-cta text-sm sm:text-base"
            data-gtm-category="CTA"
            data-gtm-action="Click"
            data-gtm-label="Case Studies Section — See All"
          >
            See All Our Impactful Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-cloud/30 border-b border-cloud">
      <div className="container-x py-16 sm:py-24 md:py-32">
        <div ref={ref} className={`text-center anim-fade-up ${inView ? "in-view" : ""}`}>
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
            <span className="h-px w-6 bg-teal" /> Client Stories <span className="h-px w-6 bg-teal" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-slate-deep sm:text-4xl md:text-5xl">
            Voices of Success.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-charcoal">What our partners say — in their own words.</p>
        </div>
        <div className="mt-10 md:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className={`flex flex-col border border-cloud bg-background p-6 sm:p-8 ${i === 0 ? "lg:col-span-1 border-teal" : ""}`}
            >
              <div className="font-display text-4xl leading-none text-teal">"</div>
              <blockquote className="mt-3 text-sm leading-relaxed text-charcoal sm:text-base flex-1">{t.q}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 bg-teal flex items-center justify-center text-white font-bold text-sm">
                  {t.n.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-deep text-sm">{t.n}</div>
                  <div className="text-xs text-teal">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number>(0);
  const { ref, inView } = useInView();
  return (
    <section id="faq" className="bg-background border-b border-cloud">
      <div className="container-x py-16 sm:py-24 md:py-32">
        <div ref={ref} className={`text-center anim-fade-up ${inView ? "in-view" : ""}`}>
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
            <span className="h-px w-6 bg-teal" /> FAQ <span className="h-px w-6 bg-teal" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-slate-deep sm:text-4xl md:text-5xl">
            Your Questions, Answered.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-charcoal">Clarity, not confusion. Transparency is a cornerstone of how we operate.</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl md:mt-14">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-cloud">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6 group"
                >
                  <span className="font-display text-sm font-bold text-slate-deep sm:text-base md:text-lg group-hover:text-teal transition-colors">{q}</span>
                  <span className={`font-mono text-xl text-teal transition-transform shrink-0 sm:text-2xl ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-sm leading-relaxed text-charcoal sm:text-base">{a}</p>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-charcoal sm:mt-12">
          Still curious?{" "}
          <Link
            to="/contact"
            id="btn-faq-ask-us"
            name="Still Curious Ask Us Directly"
            className="font-bold text-teal hover:underline gtm-cta"
            data-gtm-category="CTA"
            data-gtm-action="Click"
            data-gtm-label="FAQ — Ask Us Directly"
          >
            Still Curious? Ask Us Directly →
          </Link>
        </p>
      </div>
    </section>
  );
}

function HomeContactSection() {
  const { ref, inView } = useInView();
  return (
    <section id="home-contact" className="bg-cloud/30 border-b border-cloud" aria-labelledby="home-contact-heading">
      <div ref={ref} className={`container-x py-16 sm:py-24 md:py-32 grid gap-10 md:grid-cols-2 md:gap-12 items-start anim-fade-up ${inView ? "in-view" : ""}`}>
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal">
            <span className="h-px w-6 bg-teal" /> Quick Brief
          </p>
          <h2 id="home-contact-heading" className="mt-4 font-display text-3xl font-bold leading-tight text-slate-deep sm:text-4xl md:text-5xl">
            Ready to Transform Your{" "}
            <span className="text-teal">Digital Destiny?</span>
          </h2>
          <p className="mt-4 text-base text-charcoal max-w-md sm:text-lg leading-relaxed">
            Send a 60-second brief. A senior strategist — not an automated bot — will personally review your brief and respond within one business day.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-charcoal">
            {["No NDAs to start. No sales sequences.", "Fixed-scope sprints or retained engagements.", "You own every asset, repo, and credential."].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 bg-teal shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Web3Form formId="contact-home-form" source="home_inline_brief" compact />
        </div>
      </div>
    </section>
  );
}
