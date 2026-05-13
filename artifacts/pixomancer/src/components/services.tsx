import { Link } from "react-router-dom";

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  long: string;
  pills: string[];
  icon: keyof typeof Icons;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web & Software Engineering",
    blurb: "Scalable, high-performance digital infrastructure built for aggressive growth.",
    long: "We architect and build websites, apps, and SaaS platforms that outperform — fast-loading, secure, and built to scale with your ambition.",
    pills: ["Website Dev", "App Dev", "SaaS", "Software Dev"],
    icon: "code",
  },
  {
    slug: "ui-ux",
    title: "UI/UX Experience Design",
    blurb: "Pixel-perfect interfaces that dictate user behavior and reduce bounce rates.",
    long: "Interfaces engineered around behavior. We design experiences that feel inevitable and convert without friction.",
    pills: ["UI/UX Design", "Website Design"],
    icon: "frame",
  },
  {
    slug: "digital-marketing",
    title: "Full-Funnel Digital Marketing",
    blurb: "Data-driven customer acquisition engineered for omnipresence and measurable ROI.",
    long: "From first-touch SEO to last-click CRO — we engineer end-to-end growth motions that compound traffic, leads, and revenue across every channel that matters.",
    pills: ["SEO", "Google Ads", "Meta Ads", "TikTok Ads", "Social Media", "Email Automations", "Content Marketing", "CRO"],
    icon: "target",
  },
  {
    slug: "ecommerce",
    title: "High-Conversion E-Commerce Store Creation",
    blurb: "Lightning-fast storefronts engineered to maximize AOV and crush cart abandonment.",
    long: "We architect scalable e-commerce experiences — sub-second loads, frictionless checkout, smart upsells, and conversion-tuned UX that turns browsers into repeat buyers.",
    pills: ["Shopify", "WooCommerce", "Headless Commerce", "Magento", "BigCommerce", "Webflow E-Commerce"],
    icon: "shop",
  },
  {
    slug: "branding",
    title: "Brand Identity",
    blurb: "Magnetic corporate identities that make you instantly recognizable.",
    long: "Identities engineered to dominate attention. Logo systems, color, type, and brand operating systems.",
    pills: ["Corporate Branding", "Graphic Design", "Logos"],
    icon: "shapes",
  },
  {
    slug: "copywriting",
    title: "Authority Copywriting",
    blurb: "Words that sell. Elite content that establishes industry dominance.",
    long: "Copy that converts and content that compounds authority — sales pages, ebooks, founder-led LinkedIn.",
    pills: ["Copywriting", "Ebooks", "LinkedIn Branding"],
    icon: "pen",
  },
  {
    slug: "video",
    title: "Video & Animation",
    blurb: "Dynamic 2D videos that simplify ideas and capture shrinking attention spans.",
    long: "Scripts, storyboards, motion. We make complex ideas land in 60 seconds.",
    pills: ["2D Animation", "Video Editing", "Motion Graphics"],
    icon: "play",
  },
  {
    slug: "ai",
    title: "AI Automation & Systems",
    blurb: "Custom chatbots and workflows that automate leads and save manual hours.",
    long: "Future-proof your operations. Chatbots, agentic workflows, and integration glue that works while you sleep.",
    pills: ["AI Chatbots", "Workflows", "Integrations"],
    icon: "bot",
  },
];

export function ServiceIcon({ name, className }: { name: keyof typeof Icons; className?: string }) {
  const Cmp = Icons[name];
  return <Cmp className={className} />;
}

const base = "w-7 h-7 stroke-teal";
const Icons = {
  code: (p: { className?: string }) => (
    <svg className={p.className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </svg>
  ),
  frame: (p: { className?: string }) => (
    <svg className={p.className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="3" width="18" height="18" />
      <path d="M3 9h18M9 3v18" />
    </svg>
  ),
  target: (p: { className?: string }) => (
    <svg className={p.className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  shop: (p: { className?: string }) => (
    <svg className={p.className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M3 7h18l-1.5 12a2 2 0 0 1-2 1.7H6.5a2 2 0 0 1-2-1.7L3 7z" />
      <path d="M8 7V5a4 4 0 0 1 8 0v2" />
      <path d="M9 12h6" />
    </svg>
  ),
  shapes: (p: { className?: string }) => (
    <svg className={p.className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="7" cy="7" r="4" />
      <rect x="13" y="13" width="8" height="8" />
      <path d="M13 3l5 8h-10z" />
    </svg>
  ),
  pen: (p: { className?: string }) => (
    <svg className={p.className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" />
    </svg>
  ),
  play: (p: { className?: string }) => (
    <svg className={p.className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="4" width="18" height="16" />
      <path d="M10 9l5 3-5 3z" fill="currentColor" />
    </svg>
  ),
  bot: (p: { className?: string }) => (
    <svg className={p.className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="4" y="8" width="16" height="12" />
      <circle cx="9" cy="14" r="1.2" fill="currentColor" />
      <circle cx="15" cy="14" r="1.2" fill="currentColor" />
      <path d="M12 4v4M8 20v2M16 20v2" />
    </svg>
  ),
};

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-px bg-cloud ${compact ? "md:grid-cols-4" : "md:grid-cols-2"}`}>
      {services.map((s, i) => (
        <article
          key={s.slug}
          style={{ animationDelay: `${i * 70}ms` }}
          className="group relative bg-background p-8 reveal opacity-0 transition-colors hover:bg-background"
        >
          <div className="absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-teal pointer-events-none" />
          <ServiceIcon name={s.icon} />
          <h3 className="mt-6 text-xl font-bold text-slate-deep">{s.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal">
            {compact ? s.blurb : s.long}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {s.pills.map((p) => <span key={p} className="pill">{p}</span>)}
          </div>
          <Link
            to={`/services/${s.slug}`}
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal transition-transform hover:translate-x-0.5"
          >
            Explore <span aria-hidden>→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
