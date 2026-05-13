import { useState } from "react";
import { FinalCta } from "../components/sections";
import { usePageSEO } from "../hooks/usePageSEO";
import { useInView } from "../hooks/useInView";

type CaseStudy = {
  id: string;
  client: string;
  location: string;
  category: string;
  tag: string;
  title: string;
  metric: string;
  metricLabel: string;
  brief: string;
  duration: string;
  services: string[];
  context: string;
  approach: string;
  outcome: string;
};

const categories = ["All", "Web & Software", "AI & Automation", "E-Commerce", "Digital Marketing", "UI/UX"];

const caseStudies: CaseStudy[] = [
  {
    id: "enstack",
    client: "Enstack",
    location: "Philippines",
    category: "Web & Software",
    tag: "Web & Software",
    title: "Merchant Analytics Dashboard Rebuild",
    metric: "+37%",
    metricLabel: "Revenue Per Merchant",
    brief: "Rebuilt backend analytics and streamlined UI, cutting manual reporting time by 62% and lifting on-platform revenue per merchant by 37%.",
    duration: "14 Weeks",
    services: ["Development", "UI/UX Design", "AI Automation"],
    context: "Enstack, a Philippine-based no-code e-commerce platform, needed to upgrade its merchant analytics dashboard to reduce manual data reconciliation for SMB owners.",
    approach: "Pixomancer's engineering team rebuilt the backend analytics layer and implemented automated reporting widgets. The UI/UX team streamlined navigation to surface key metrics first.",
    outcome: "Merchants reduced manual reporting time by 62%, leading to higher engagement with growth features and a 37% increase in on-platform revenue per merchant within six months. Over 200,000 entrepreneurs now use the platform.",
  },
  {
    id: "netbank",
    client: "Netbank",
    location: "Philippines",
    category: "Web & Software",
    tag: "Web & Software",
    title: "Embedded Banking Onboarding Redesign",
    metric: "28%",
    metricLabel: "Faster Onboarding",
    brief: "Redesigned front-end dashboard and automated compliance checks, reducing partner onboarding time by 28%.",
    duration: "12 Weeks",
    services: ["Development", "UI/UX Design"],
    context: "Netbank, the Philippines' first fully regulated Banking-as-a-Service (BaaS) platform, needed to simplify its partner onboarding interface to scale faster.",
    approach: "Pixomancer redesigned the front-end dashboard and embedded onboarding wizard. We introduced real-time compliance checklist tracking and automated document verification integration.",
    outcome: "Partner onboarding time dropped by 28%, enabling Netbank to acquire 3 new major fintech clients within the quarter. The bank now serves clients including Smart Money, TikTok, and Lazada.",
  },
  {
    id: "xpress",
    client: "Xpress Super App",
    location: "Philippines",
    category: "Web & Software",
    tag: "Development",
    title: "User Retention Engine",
    metric: "+25%",
    metricLabel: "User Retention (90 Days)",
    brief: "Personalized push notifications and a loyalty dashboard boosted retention by 25% and monthly rides per user by 18%.",
    duration: "16 Weeks",
    services: ["Development", "UI/UX Design", "Marketing Automation"],
    context: "Xpress, a Filipino ride-hailing and lifestyle super app, needed to improve user retention after early growth plateaus. The app had over 100,000 downloads but struggled with repeat usage.",
    approach: "Pixomancer implemented personalized push notification workflows based on ride frequency, automated re-engagement emails, and redesigned the rewards dashboard to highlight loyalty points.",
    outcome: "User retention increased by 25% over 90 days. Average monthly rides per active user climbed 18%, supporting Xpress's expansion into delivery and digital payments.",
  },
  {
    id: "glowtify",
    client: "Glowtify",
    location: "Canada",
    category: "AI & Automation",
    tag: "AI & Automation",
    title: "AI Marketing Workflow Automation",
    metric: "40 hrs/wk",
    metricLabel: "Saved",
    brief: "Built automated data pipelines from Shopify and social APIs, saving 40+ hours per week and helping secure $3.4M in seed funding.",
    duration: "10 Weeks",
    services: ["AI Automation", "Development"],
    context: "Glowtify, a Montréal-based AI marketing platform for e-commerce brands, needed to streamline its internal campaign workflows and integrate real-time competitive data into its dashboard.",
    approach: "Pixomancer's AI automation team built custom data pipelines pulling from Shopify APIs and social media metrics. We developed automated alerts for campaign performance anomalies.",
    outcome: "Glowtify's internal team saved over 40 hours per week previously spent on manual reporting. The enhanced dashboard features helped the startup secure $3.4 million in seed funding.",
  },
  {
    id: "imgadgets",
    client: "IMGadgets",
    location: "Canada",
    category: "E-Commerce",
    tag: "E-Commerce",
    title: "Category Page Conversion Optimization",
    metric: "+31%",
    metricLabel: "Conversion Rate",
    brief: "Redesigned product category pages and checkout flow, lifting conversion rates by 31% within 60 days.",
    duration: "8 Weeks",
    services: ["UI/UX Design", "Digital Marketing", "Copywriting"],
    context: "IMGadgets, a Mississauga-based e-commerce company operating for 10 years, wanted to optimize its category landing pages and improve checkout flow for its e-mobility products.",
    approach: "Pixomancer redesigned key product category pages for clarity and speed, wrote persuasive, benefit-driven product descriptions, and implemented A/B tests on checkout buttons.",
    outcome: "Conversion rate increased 31% across optimized pages within 60 days. IMGadgets now holds approximately 60% market share in Canada's e-mobility category.",
  },
  {
    id: "shopvision",
    client: "ShopVision",
    location: "Canada",
    category: "AI & Automation",
    tag: "AI & Automation",
    title: "Competitive Intelligence Data Pipelines",
    metric: "$1.2M",
    metricLabel: "Annualized Efficiency Gain",
    brief: "Built automated scrapers and connectors for 100,000+ brands, saving $1.2M/year and enabling a $4.1M raise.",
    duration: "14 Weeks",
    services: ["AI Automation", "Development"],
    context: "ShopVision, a Vancouver-based AI platform for e-commerce competitive intelligence, needed to expand its data ingestion pipeline and integrate real-time ad monitoring.",
    approach: "Pixomancer built automated web scrapers and API connectors to pull promotional data from over 100,000 brands. We delivered a unified competitive dashboard with AI-powered campaign recommendations.",
    outcome: "ShopVision reduced manual competitive analysis time by 85%, saving an estimated $1.2 million in annualized labor costs. The startup raised $4.1 million shortly after implementation.",
  },
  {
    id: "stored",
    client: "Stored",
    location: "United Kingdom",
    category: "E-Commerce",
    tag: "E-Commerce",
    title: "Omnicommerce Checkout Optimization",
    metric: "+22%",
    metricLabel: "Checkout Completion Rate",
    brief: "Streamlined mobile checkout and added BNPL options, increasing completion rates by 22% for early adopters.",
    duration: "12 Weeks",
    services: ["Development", "UI/UX Design"],
    context: "Stored, a London-based omnicommerce payments platform, faced friction in its mobile checkout flow for brick-and-mortar businesses selling online for the first time.",
    approach: "Pixomancer streamlined the checkout interface, added Buy Now Pay Later options (Klarna, Afterpay), and optimized for mobile-first transactions.",
    outcome: "Checkout completion rates improved by 22% across early adopters. Stored was recognized as a finalist for Fintech Startup of the Year at the UK Startup Awards.",
  },
  {
    id: "heysavi",
    client: "Hey Savi",
    location: "United Kingdom",
    category: "Web & Software",
    tag: "Web & Software",
    title: "AI Fashion Search SEO & Growth",
    metric: "+18%",
    metricLabel: "Organic User Acquisition (90 Days)",
    brief: "Optimized on-page SEO and automated sitemaps, boosting organic traffic by 18% ahead of a £2.2M pre-seed round.",
    duration: "10 Weeks",
    services: ["Development", "Digital Marketing"],
    context: "Hey Savi, a UK-based AI fashion search engine, needed to improve its on-page SEO and user growth ahead of a major funding push.",
    approach: "Pixomancer implemented semantic HTML restructuring, optimized meta tags, and built automated sitemaps for over 10,000 fashion queries. We also tuned the recommendation algorithm for faster load times.",
    outcome: "Organic search traffic increased 18% within 90 days. Lower acquisition costs helped Hey Savi secure £2.2 million in pre-seed funding.",
  },
  {
    id: "rokt",
    client: "Rokt",
    location: "Australia",
    category: "Digital Marketing",
    tag: "Digital Marketing",
    title: "Post-Transaction Revenue Optimization",
    metric: "+14%",
    metricLabel: "Incremental Revenue per Transaction",
    brief: "Optimized offer relevance algorithms and A/B tested placement, increasing incremental revenue per transaction by 14%.",
    duration: "16 Weeks",
    services: ["Digital Marketing", "AI Automation", "Development"],
    context: "Rokt, a global e-commerce technology leader, sought to increase post-transaction engagement without disrupting checkout user experience.",
    approach: "Pixomancer's marketing and AI teams optimized offer relevance algorithms, A/B tested placement strategies, and built automated reporting for partner advertisers.",
    outcome: "Incremental revenue per transaction increased 14% across tested cohorts. Rokt powers billions of transactions annually for clients including Uber, PayPal, and Ticketmaster.",
  },
  {
    id: "zipline",
    client: "Zipline AI",
    location: "Australia",
    category: "AI & Automation",
    tag: "AI & Automation",
    title: "Brand-Safe Generative AI Co-Creation",
    metric: "11 min",
    metricLabel: "Avg. Session (up from 54 sec)",
    brief: "Built custom moderation layers and a streamlined UI, lifting average session time from 54 seconds to over 11 minutes.",
    duration: "12 Weeks",
    services: ["AI Automation", "UI/UX Design"],
    context: "Zipline AI, a Brisbane-based startup, needed to scale its generative AI co-creation platform for enterprise brands while maintaining brand safety.",
    approach: "Pixomancer built custom moderation layers, integrated brand asset APIs, and designed a streamlined user interface for non-technical brand managers.",
    outcome: "Average session time jumped from 54 seconds to over 11 minutes, unlocking deeper customer insights for brands. Engagement metrics helped Zipline secure major enterprise clients.",
  },
];

const stats = [
  { n: "50+", l: "Visionary Brands Launched" },
  { n: "98%", l: "Client Retention Rate" },
  { n: "12+", l: "Diverse Industries Served" },
  { n: "150+", l: "Successful Projects Shipped" },
];

export default function WorkPage() {
  usePageSEO({
    title: "Work & Case Studies — Pixomancer | Real Results for Real Brands",
    description: "10+ case studies across web engineering, AI automation, e-commerce, and digital marketing. Real challenges. Real solutions. Measurable results for brands like Enstack, Glowtify, IMGadgets, and more.",
    canonical: "https://pixomancer.com/work",
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const { ref, inView } = useInView();

  const filtered = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-cloud bg-background">
        <div ref={ref} className={`container-x py-16 sm:py-24 md:py-32 text-center anim-fade-up ${inView ? "in-view" : ""}`}>
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
            <span className="h-px w-6 bg-teal" /> Portfolio <span className="h-px w-6 bg-teal" />
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-deep sm:text-5xl md:text-6xl lg:text-7xl">
            Our Impact in Action.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-charcoal sm:text-lg leading-relaxed">
            Real challenges. Real solutions. Unmistakable results. Case studies that define success across 12+ industries worldwide.
          </p>
          <button
            onClick={() => document.getElementById("case-grid")?.scrollIntoView({ behavior: "smooth" })}
            id="btn-work-start-story"
            name="Start Your Success Story"
            className="btn-primary gtm-cta mt-8 inline-flex text-sm sm:text-base"
            data-gtm-category="CTA"
            data-gtm-action="Click"
            data-gtm-label="Work Hero — Start Your Story"
          >
            Start Your Success Story →
          </button>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-cloud bg-slate-deep">
        <div className="container-x py-8 sm:py-10">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl font-bold text-white sm:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-teal">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + grid */}
      <section id="case-grid" className="bg-background border-b border-cloud">
        <div className="container-x py-14 sm:py-20 md:py-24">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`btn-filter-${cat.toLowerCase().replace(/[^a-z]/g, "-")}`}
                name={`Filter ${cat}`}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors gtm-filter ${
                  activeCategory === cat
                    ? "bg-slate-deep text-white"
                    : "bg-cloud text-charcoal hover:bg-slate-deep hover:text-white"
                }`}
                data-gtm-category="Work Filter"
                data-gtm-action="Click"
                data-gtm-label={cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c, i) => (
              <CaseCard key={c.id} cs={c} index={i} onSelect={() => setSelectedCase(c)} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-deep/80 p-4 sm:p-6"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedCase(null); }}
          role="dialog"
          aria-modal="true"
          aria-label={`Case study: ${selectedCase.client}`}
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white">
            <button
              onClick={() => setSelectedCase(null)}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center bg-cloud text-slate-deep hover:bg-teal hover:text-white transition-colors"
            >
              ✕
            </button>
            <div className="bg-slate-deep p-7 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-teal">{selectedCase.tag}</span>
              <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                {selectedCase.client} — {selectedCase.title}
              </h2>
              <div className="mt-4 flex flex-wrap gap-4">
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Key Result</div>
                  <div className="font-display text-2xl font-bold text-teal">{selectedCase.metric}</div>
                  <div className="text-xs text-white/70">{selectedCase.metricLabel}</div>
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Duration</div>
                  <div className="text-lg font-bold text-white">{selectedCase.duration}</div>
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Location</div>
                  <div className="text-lg font-bold text-white">{selectedCase.location}</div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {selectedCase.services.map((s) => (
                  <span key={s} className="bg-white/10 px-2 py-1 text-xs font-medium text-white/80">{s}</span>
                ))}
              </div>
            </div>
            <div className="p-7 sm:p-8 space-y-6">
              <ModalSection label="Context" text={selectedCase.context} />
              <ModalSection label="Our Approach" text={selectedCase.approach} />
              <ModalSection label="The Outcome" text={selectedCase.outcome} highlight />
            </div>
          </div>
        </div>
      )}

      <FinalCta
        title="Your Project Belongs Here."
        cta="Start a Project with Us"
        sub="Let's craft your next success story. No pitch decks, no sales bots."
      />
    </main>
  );
}

function ModalSection({ label, text, highlight }: { label: string; text: string; highlight?: boolean }) {
  return (
    <div>
      <div className={`mb-2 text-xs font-bold uppercase tracking-widest ${highlight ? "text-teal" : "text-charcoal"}`}>{label}</div>
      <p className="text-sm leading-relaxed text-charcoal sm:text-base">{text}</p>
    </div>
  );
}

function CaseCard({ cs, index, onSelect }: { cs: CaseStudy; index: number; onSelect: () => void }) {
  const { ref, inView } = useInView();
  return (
    <article
      ref={ref}
      className={`group flex flex-col border border-cloud bg-background transition-all hover:border-teal hover:shadow-md anim-fade-up ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 60}ms` }}
    >
      <div className="bg-slate-deep p-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1 bg-teal" />
        <span className="text-xs font-bold uppercase tracking-widest text-teal">{cs.tag}</span>
        <div className="mt-3 font-display text-3xl font-bold text-white">{cs.metric}</div>
        <div className="mt-0.5 text-sm text-white/60">{cs.metricLabel}</div>
        <div className="mt-2 text-xs text-white/40">{cs.client} · {cs.location}</div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-base font-bold text-slate-deep leading-snug">{cs.client} — {cs.title}</h3>
        <p className="mt-2 text-sm text-charcoal leading-relaxed flex-1">{cs.brief}</p>
        <div className="mt-4 pt-4 border-t border-cloud">
          <button
            onClick={onSelect}
            id={`btn-case-${cs.id}`}
            name={`View Case Study — ${cs.client}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal transition-all hover:gap-2.5 gtm-case-study"
            data-gtm-category="Case Study"
            data-gtm-action="Click"
            data-gtm-label={cs.client}
          >
            View Full Case Study →
          </button>
        </div>
      </div>
    </article>
  );
}
