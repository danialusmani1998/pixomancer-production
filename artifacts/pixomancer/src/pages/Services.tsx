import { Link } from "react-router-dom";
import { useState } from "react";
import { FinalCta } from "../components/sections";
import { usePageSEO } from "../hooks/usePageSEO";
import { useInView } from "../hooks/useInView";

const pillars = [
  {
    icon: "</>",
    slug: "web-development",
    label: "Web & Software Engineering",
    headline: "Scalable, High-Performance Digital Infrastructure.",
    desc: "We architect and build websites, applications, and SaaS platforms that don't just function — they outperform. Our solutions are fast-loading, secure, and meticulously crafted to scale with your most ambitious visions.",
    tags: ["Website Development", "Custom App Development", "SaaS Platform Engineering", "Enterprise Software"],
    cta: "Discover Engineering",
    ctaId: "btn-service-web-dev",
  },
  {
    icon: "⬡",
    slug: "ui-ux",
    label: "UI/UX Experience Design",
    headline: "Interfaces Engineered Around Human Behavior.",
    desc: "We design intuitive, engaging, and conversion-led experiences that feel inevitable. Our UI/UX strategies reduce friction, enhance satisfaction, and transform visitors into loyal customers — all grounded in behavioral data.",
    tags: ["User Interface Design", "User Experience Strategy", "Website Design", "Mobile App UI/UX", "Prototyping"],
    cta: "Explore Design",
    ctaId: "btn-service-ui-ux",
  },
  {
    icon: "◎",
    slug: "digital-marketing",
    label: "Full-Funnel Digital Marketing",
    headline: "Data-Driven Growth from Awareness to Conversion.",
    desc: "From the initial spark of awareness to the final conversion and beyond, we engineer end-to-end growth motions. Our strategies compound traffic, leads, and revenue across every channel that matters.",
    tags: ["SEO", "Google Ads", "Meta Ads", "TikTok Ads", "Email Automation", "Content Marketing", "CRO"],
    cta: "Amplify Your Reach",
    ctaId: "btn-service-marketing",
  },
  {
    icon: "◻",
    slug: "ecommerce",
    label: "E-Commerce Store Creation",
    headline: "High-Conversion Storefronts That Maximize AOV.",
    desc: "We architect scalable e-commerce experiences designed to maximize Average Order Value and virtually eliminate cart abandonment. Sub-second load times, frictionless checkouts, smart upsells, and conversion-tuned UX.",
    tags: ["Shopify Development", "WooCommerce", "Headless Commerce", "Magento", "BigCommerce", "Webflow"],
    cta: "Boost Your Sales",
    ctaId: "btn-service-ecommerce",
  },
  {
    icon: "◈",
    slug: "branding",
    label: "Brand Identity",
    headline: "Magnetic Corporate Identities That Command Attention.",
    desc: "Crafting comprehensive brand operating systems that command instant recognition. Logo systems, color palettes, typography, and brand guidelines ensuring a cohesive and compelling presence across every touchpoint.",
    tags: ["Corporate Branding", "Graphic Design", "Logo Design", "Brand Strategy", "Visual Identity Systems"],
    cta: "Define Your Brand",
    ctaId: "btn-service-branding",
  },
  {
    icon: "✦",
    slug: "copywriting",
    label: "Authority Copywriting",
    headline: "Words That Don't Just Inform — They Convert.",
    desc: "Our elite content establishes industry dominance, builds trust, and drives action. From persuasive sales pages to insightful ebooks and founder-led LinkedIn thought leadership, we craft narratives that compel.",
    tags: ["Sales Copywriting", "Website Content", "Ebook Creation", "LinkedIn Branding", "Email Copy"],
    cta: "Command Attention",
    ctaId: "btn-service-copy",
  },
  {
    icon: "▶",
    slug: "video",
    label: "Video & Animation",
    headline: "Transform Complex Ideas into Captivating Visual Stories.",
    desc: "Our dynamic 2D videos, motion graphics, and expert video editing simplify messages and capture shrinking attention spans. All in-house — from script and storyboard to final render.",
    tags: ["2D Animation", "Explainer Videos", "Video Editing", "Motion Graphics", "Storyboarding"],
    cta: "Animate Your Story",
    ctaId: "btn-service-video",
  },
  {
    icon: "⬡",
    slug: "ai",
    label: "AI Automation & Systems",
    headline: "Future-Proof Your Operations with Intelligent Automation.",
    desc: "We design and implement custom chatbots, agentic workflows, and seamless integrations that work tirelessly behind the scenes — automating leads, streamlining processes, and saving countless manual hours.",
    tags: ["AI Chatbot Development", "Workflow Automation", "System Integrations", "Custom AI Solutions"],
    cta: "Automate Your Edge",
    ctaId: "btn-service-ai",
  },
];

const faqItems: [string, string][] = [
  ["How does Pixomancer's integrated approach benefit my project?", "Our integrated approach means all aspects of your project — from development to design, marketing, and AI — are handled by a single, cohesive in-house team. This eliminates communication gaps and creates a unified strategy that drives more impactful and efficient results."],
  ["Can you help us define which services we need most?", "Absolutely. Our initial strategy call and audit phase are designed to deeply understand your business goals, challenges, and current digital landscape. We then provide expert recommendations on the most impactful services and a tailored roadmap."],
  ["What makes your Web & Software Engineering stand out?", "Our engineering team focuses on building scalable, high-performance, and secure digital infrastructures using modern tech stacks. We prioritize clean code, robust architecture, and future-proof solutions that support aggressive growth."],
  ["How do you ensure UI/UX designs are conversion-focused?", "Our UI/UX process is deeply rooted in behavioral psychology and data analytics. We conduct thorough user research, create intuitive user flows, and rigorously test prototypes to ensure every decision is optimized to reduce friction and drive conversions."],
  ["What kind of ROI can I expect from Digital Marketing?", "While specific ROI varies by industry and campaign, our data-driven full-funnel marketing strategies are engineered for measurable results. We focus on optimizing every touchpoint to maximize traffic, leads, and ultimately, revenue."],
  ["Is Headless Commerce right for my e-commerce business?", "Headless Commerce offers unparalleled flexibility, speed, and customization — ideal for businesses seeking unique brand experiences and high performance. We can assess if it's the right strategic move for your specific e-commerce goals."],
  ["What types of content do your Copywriting services cover?", "Our copywriting expertise spans high-converting sales pages, website content, ebooks, thought leadership articles, email marketing sequences, and compelling social media copy — all designed to establish your brand as an industry authority."],
  ["Can you create explainer videos for complex products?", "Yes. Our team specializes in transforming complex product features into clear, concise, and engaging 2D animated explainer videos — from scriptwriting and storyboarding to final animation and voiceover."],
  ["What are the benefits of implementing AI Automation?", "AI automation boosts efficiency by automating repetitive tasks, improving customer service with intelligent chatbots, streamlining workflows, and providing valuable data insights — freeing your team to focus on strategic, high-value initiatives."],
];

export default function ServicesPage() {
  usePageSEO({
    title: "Services — Pixomancer | Integrated Digital Agency",
    description: "Eight integrated service pillars: web engineering, UI/UX, digital marketing, e-commerce, brand identity, copywriting, video & animation, and AI automation. One in-house team. Zero hand-offs.",
    canonical: "https://pixomancer.com/services",
  });

  const { ref, inView } = useInView();
  const [faqOpen, setFaqOpen] = useState<number>(0);

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-cloud bg-background">
        <div ref={ref} className={`container-x py-16 sm:py-24 md:py-32 text-center anim-fade-up ${inView ? "in-view" : ""}`}>
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
            <span className="h-px w-6 bg-teal" /> Services <span className="h-px w-6 bg-teal" />
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-deep sm:text-5xl md:text-6xl lg:text-7xl">
            Unlocking Your{" "}
            <span className="text-teal">Digital Advantage.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-charcoal sm:text-lg leading-relaxed">
            Beyond pixels: our comprehensive service ecosystem delivers integrated solutions for unstoppable growth. Every discipline. One in-house team.
          </p>
          <Link
            to="/contact"
            id="btn-services-hero-cta"
            name="Book a Strategy Call"
            className="btn-primary gtm-cta mt-8 inline-flex text-sm sm:text-base"
            data-gtm-category="CTA"
            data-gtm-action="Click"
            data-gtm-label="Services Hero — Book Strategy Call"
          >
            Book a Strategy Call →
          </Link>
        </div>
      </section>

      {/* Pillar intro */}
      <section className="bg-background border-b border-cloud">
        <div className="container-x py-12 sm:py-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-charcoal">Our Eight Pillars</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-slate-deep sm:text-3xl">Eight Core Disciplines. One Unified Vision.</h2>
            </div>
            <p className="max-w-sm text-sm text-charcoal leading-relaxed">
              Each pillar represents a specialized domain — yet all are seamlessly interconnected, ensuring maximum efficiency and exponential results.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars grid */}
      <section className="bg-background">
        <div className="container-x py-10 sm:py-14 md:py-16">
          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <ServiceCard key={p.slug} pillar={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Stack CTA */}
      <section className="bg-slate-deep border-y border-charcoal">
        <div className="container-x py-12 sm:py-16 md:py-20 text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">Need a Custom Digital Stack?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-cloud/70 leading-relaxed">
            Your vision is unique, and so should be your digital solution. Our strategists are ready to assemble a bespoke stack tailored precisely to your roadmap and objectives.
          </p>
          <Link
            to="/contact"
            id="btn-services-custom-stack"
            name="Build My Custom Stack"
            className="btn-primary gtm-cta mt-8 inline-flex text-sm sm:text-base"
            data-gtm-category="CTA"
            data-gtm-action="Click"
            data-gtm-label="Services — Build Custom Stack"
          >
            Build My Custom Stack →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background border-b border-cloud">
        <div className="container-x py-16 sm:py-24 md:py-28">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
              <span className="h-px w-6 bg-teal" /> FAQ <span className="h-px w-6 bg-teal" />
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-deep sm:text-4xl">Frequently Asked Questions About Our Services.</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            {faqItems.map(([q, a], i) => {
              const isOpen = faqOpen === i;
              return (
                <div key={i} className="border-b border-cloud">
                  <button
                    onClick={() => setFaqOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left group sm:py-6"
                  >
                    <span className="font-display text-sm font-bold text-slate-deep sm:text-base group-hover:text-teal transition-colors">{q}</span>
                    <span className={`font-mono text-xl text-teal shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && <p className="pb-6 text-sm leading-relaxed text-charcoal">{a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta
        title="Ready to Engineer Your Digital Dominance?"
        cta="Book Your Free Strategy Call"
        sub="No pitch decks. No sales bots. Just a real conversation with a senior strategist."
      />
    </main>
  );
}

function ServiceCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const { ref, inView } = useInView();
  return (
    <article
      ref={ref}
      className={`group border border-cloud bg-background p-7 sm:p-8 transition-all hover:border-teal hover:shadow-md anim-fade-up ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center bg-cloud text-base font-bold text-teal transition-colors group-hover:bg-teal group-hover:text-white">
          {pillar.icon}
        </div>
        <span className="font-mono text-xs text-charcoal/30">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-slate-deep sm:text-2xl">{pillar.label}</h3>
      <p className="mt-1 text-sm font-semibold text-teal">{pillar.headline}</p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal">{pillar.desc}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {pillar.tags.map((t) => (
          <span key={t} className="px-2 py-1 text-xs font-medium bg-cloud text-charcoal">{t}</span>
        ))}
      </div>
      <div className="mt-6">
        <Link
          to={`/services/${pillar.slug}`}
          id={pillar.ctaId}
          name={pillar.cta}
          className="inline-flex items-center gap-2 text-sm font-bold text-teal hover:gap-3 transition-all gtm-cta"
          data-gtm-category="Services"
          data-gtm-action="Click"
          data-gtm-label={pillar.label}
        >
          {pillar.cta} →
        </Link>
      </div>
    </article>
  );
}
