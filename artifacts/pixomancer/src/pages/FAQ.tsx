import { useState } from "react";
import { Link } from "react-router-dom";
import { FinalCta } from "../components/sections";
import { usePageSEO } from "../hooks/usePageSEO";
import { useInView } from "../hooks/useInView";

type FaqItem = { q: string; a: string; category: string };

const faqs: FaqItem[] = [
  { category: "Getting Started", q: "How quickly can we start a project?", a: "Our streamlined onboarding allows us to kick off within the same week after a strategic alignment call. We prioritize speed and efficiency — no unnecessary delays, no procurement theater." },
  { category: "Getting Started", q: "Do I need to commit to a long-term contract?", a: "No. We offer flexible engagement models, including fixed-scope sprints and retained partnerships, all focused on delivering measurable outcomes. Our goal is to earn your continued business through consistent results, not restrictive contracts." },
  { category: "Getting Started", q: "How does Pixomancer's integrated approach benefit my project?", a: "Our integrated approach means all aspects of your project — from development to design, marketing, and AI — are handled by a single, cohesive in-house team. This eliminates communication gaps, ensures consistent quality, and creates a unified strategy that drives more impactful results." },
  { category: "Services", q: "Can you integrate AI solutions into my existing platforms?", a: "Absolutely. Our AI automation specialists excel at seamlessly integrating custom chatbots, intelligent workflows, and advanced AI systems into your current infrastructure, enhancing efficiency and user experience without disrupting operations." },
  { category: "Services", q: "What technologies do you use for SaaS development?", a: "We leverage modern, robust, and scalable tech stacks tailored to your project's specific needs. This often includes React, Next.js, Node.js, Python, various cloud platforms (AWS, GCP, Azure), and advanced database solutions, ensuring future-proof performance." },
  { category: "Services", q: "Which e-commerce platform is best for my business?", a: "The ideal platform depends on your unique business model, scale, and specific requirements. We specialize in Shopify, WooCommerce, Headless Commerce solutions, Magento, BigCommerce, and Webflow E-Commerce, providing expert guidance to select and implement the perfect fit." },
  { category: "Services", q: "How long does it take to see SEO results?", a: "SEO is a long-term strategy, but you can typically expect initial improvements in rankings and organic traffic within 3–6 months. Significant results, leading to sustained growth, usually manifest within 6–12 months, depending on industry competitiveness and current digital footprint." },
  { category: "Services", q: "Is your video and animation production handled in-house?", a: "Yes, all our video and animation projects — from concept to final render — are managed by our in-house team of motion graphic designers and animators. This ensures consistent quality, seamless communication, and full creative control." },
  { category: "Ownership & IP", q: "Do I own the intellectual property for the work you create?", a: "Unequivocally, yes. Upon project completion and final payment, you own all intellectual property, including code, design assets, content, and credentials. We believe in empowering our clients with full ownership — no vendor lock-in, ever." },
  { category: "Ownership & IP", q: "What happens to my data and assets if the engagement ends?", a: "Everything is yours. All code repositories, design files, ad accounts, analytics profiles, and credentials are fully transferred to you. We document the handover thoroughly to ensure continuity and peace of mind." },
  { category: "Communication", q: "How do you ensure transparent communication during a project?", a: "Transparency is a cornerstone of our process. We provide weekly live demos, a dedicated project manager, a shared Slack channel, and utilize collaborative project tracking tools so you always have real-time visibility into progress." },
  { category: "Communication", q: "What if my project requirements evolve during the engagement?", a: "We embrace agile methodologies, allowing for flexibility and adaptation. Our process includes regular sprint reviews and check-ins, enabling us to adjust to evolving needs while maintaining project momentum and delivering on objectives." },
  { category: "Pricing", q: "How does Pixomancer's pricing work?", a: "We operate on transparent milestone billing — you pay per clearly defined project phase and deliverables, not hourly rates. This provides predictability and ensures you only pay for tangible, measurable progress. Retainers are available for ongoing partnerships." },
  { category: "Pricing", q: "Do you work with startups or only established businesses?", a: "We work with both. While we have a strong track record with established brands like Netbank and Rokt, we are passionate about partnering with innovative startups ready to disrupt their markets. Our scalable solutions support growth at any stage." },
];

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

export default function FAQPage() {
  usePageSEO({
    title: "FAQ — Pixomancer | Your Questions, Answered",
    description: "Clear answers to common questions about Pixomancer's services, process, pricing, IP ownership, and communication. Everything you need to know before starting a project.",
    canonical: "https://pixomancer.com/faq",
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number>(0);
  const { ref, inView } = useInView();

  const filtered = activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-cloud bg-background">
        <div ref={ref} className={`container-x py-16 sm:py-24 md:py-32 text-center anim-fade-up ${inView ? "in-view" : ""}`}>
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
            <span className="h-px w-6 bg-teal" /> FAQ <span className="h-px w-6 bg-teal" />
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-deep sm:text-5xl md:text-6xl lg:text-7xl">
            Your Questions,{" "}
            <span className="text-teal">Answered.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-charcoal sm:text-lg leading-relaxed">
            Clarity, not confusion. We believe in complete transparency. Here are honest answers to everything you might want to know before working with us.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="bg-background border-b border-cloud">
        <div className="container-x py-14 sm:py-20 md:py-24">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(0); }}
                id={`btn-faq-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
                name={`FAQ Filter ${cat}`}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeCategory === cat
                    ? "bg-slate-deep text-white"
                    : "bg-cloud text-charcoal hover:bg-slate-deep hover:text-white"
                }`}
                data-gtm-category="FAQ Filter"
                data-gtm-action="Click"
                data-gtm-label={cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-3xl">
            {filtered.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-b border-cloud">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    id={`btn-faq-item-${i}`}
                    name={item.q}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left group sm:py-6"
                    data-gtm-category="FAQ"
                    data-gtm-action="Expand"
                    data-gtm-label={item.q}
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-teal">{item.category}</span>
                      <div className="mt-1 font-display text-sm font-bold text-slate-deep sm:text-base md:text-lg group-hover:text-teal transition-colors">{item.q}</div>
                    </div>
                    <span className={`font-mono text-xl text-teal shrink-0 transition-transform mt-1 sm:text-2xl ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && (
                    <p className="pb-6 text-sm leading-relaxed text-charcoal sm:text-base">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center border-t border-cloud pt-10">
            <p className="text-base text-charcoal">Didn't find your answer?</p>
            <Link
              to="/contact"
              id="btn-faq-ask-directly"
              name="Ask Us Directly"
              className="btn-primary gtm-cta mt-4 inline-flex text-sm sm:text-base"
              data-gtm-category="CTA"
              data-gtm-action="Click"
              data-gtm-label="FAQ — Ask Us Directly"
            >
              Still Curious? Ask Us Directly →
            </Link>
          </div>
        </div>
      </section>

      <FinalCta
        title="Ready to Start Your Digital Transformation?"
        cta="Book Your Free Strategy Call"
        sub="No pitch decks. No sales sequences. Just a real strategist ready to help."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </main>
  );
}
