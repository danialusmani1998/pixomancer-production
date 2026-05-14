import { Link } from "react-router-dom";
import { useState } from "react";
import { FinalCta } from "../components/sections";
import { usePageSEO } from "../hooks/usePageSEO";
import { useInView } from "../hooks/useInView";

const principles = [
  { icon: "↯", label: "No Retainer Traps", desc: "We operate on outcomes, not hours. Our focus is on delivering measurable results and earning your continued partnership through consistent value — not restrictive long-term contracts." },
  { icon: "→", label: "Ruthless Execution", desc: "Precision, speed, and unwavering dedication define our approach. We streamline workflows, minimize back-and-forth, and relentlessly pursue excellence to ensure faster delivery and zero missed deadlines." },
  { icon: "↑", label: "Revenue Over Vanity", desc: "Our ultimate measure of success is your bottom line. We prioritize strategies and solutions that drive real revenue growth — focusing on metrics that matter, not just aesthetics." },
];

const timeline = [
  { year: "2019", title: "The Spark of Vision", desc: "Pixomancer was founded on a revolutionary principle: digital solutions must be direct drivers of revenue and market leadership. We set out to redefine what a digital agency could achieve." },
  { year: "2021", title: "Full-Stack Mastery Achieved", desc: "We strategically unified engineering, design, marketing, and content creation into a single, powerful in-house team. This integration eliminated silos and unlocked unparalleled synergy for our clients." },
  { year: "2023", title: "Pioneering the AI Era", desc: "Recognizing the transformative power of artificial intelligence, we established AI automation and custom GPT agents as a first-class pillar of our service offerings — future-proofing our clients' operations." },
  { year: "2025", title: "Inevitable Growth & Global Reach", desc: "With 50+ successful launches and a rapidly expanding global footprint, Pixomancer continues to scale, driven by an unwavering obsession with client success and digital innovation." },
];

const stats = [
  { n: "50+", l: "Visionary Brands Launched" },
  { n: "98%", l: "Client Retention Rate" },
  { n: "12+", l: "Industries Served" },
  { n: "150+", l: "Projects Shipped" },
];

const faqItems: [string, string][] = [
  ["What sets Pixomancer apart from other digital agencies?", "Our distinct advantage lies in our integrated, in-house team covering all digital disciplines, our outcome-driven philosophy (No Retainer Traps, Revenue Over Vanity), and our relentless focus on ruthless execution. We don't just deliver services — we partner to build digital dominance."],
  ["How does your 'Revenue Over Vanity' philosophy impact projects?", "Every decision — from design to development and marketing — is made with your business's financial success in mind. We prioritize strategies that generate measurable ROI, focusing on conversion rates, customer acquisition cost, and average order value, rather than just superficial aesthetics."],
  ["Can I visit your studio or meet the team in person?", "While our team operates globally through efficient remote collaboration, we welcome strategic in-person meetings for significant project kick-offs or deep-dive sessions. Please contact us to arrange a meeting with our leadership team."],
  ["What kind of clients does Pixomancer typically work with?", "We partner with visionary brands and ambitious businesses across various industries, including SaaS, e-commerce, DTC, and technology startups. Our clients are typically those ready to invest in transformative digital solutions and seeking measurable growth."],
  ["How do you ensure your team stays updated with the latest digital trends?", "Continuous learning and innovation are embedded in our culture. Our team regularly participates in industry conferences, advanced training, and R&D initiatives — particularly in emerging fields like AI and advanced web technologies."],
  ["What is your approach to project management and client communication?", "We utilize agile project management methodologies, providing dedicated project managers, weekly live demos, and transparent communication channels. Our goal is to keep you fully informed and involved throughout the project journey."],
  ["Do you work with startups or only established businesses?", "We work with both. While we have a strong track record with established brands, we are passionate about partnering with innovative startups ready to disrupt their markets. Our scalable solutions are designed to support growth at any stage."],
  ["How do you measure the success of a project?", "Success is measured against specific, measurable goals established during our Blueprint phase. This includes KPIs such as increased revenue, improved conversion rates, reduced operational costs, enhanced user engagement, and overall market impact."],
];

export default function AboutPage() {
  usePageSEO({
    title: "About Pixomancer — Beyond Pixels: Where Vision Meets Engineering",
    description: "Pixomancer is an elite digital creative and technology studio founded in 2019. We are pixel sorcerers, strategic thinkers, and engineering maestros dedicated to transforming ambitious visions into undeniable digital realities.",
    canonical: "https://pixomancer.com/about",
  });

  const [faqOpen, setFaqOpen] = useState<number>(0);
  const { ref, inView } = useInView();

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-cloud bg-background">
        <div ref={ref} className={`container-x py-16 sm:py-24 md:py-32 anim-fade-up ${inView ? "in-view" : ""}`}>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
              <span className="h-px w-6 bg-teal" /> About Us
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-deep sm:text-5xl md:text-6xl lg:text-7xl">
              Beyond Pixels:{" "}
              <span className="text-teal">The Story of Pixomancer.</span>
            </h1>
            <p className="mt-6 text-base text-charcoal sm:text-lg leading-relaxed max-w-2xl">
              We are Pixomancer — an elite digital creative and technology studio. We are a collective of pixel sorcerers, strategic thinkers, and engineering maestros dedicated to transforming ambitious visions into undeniable digital realities. Where creative vision meets engineering precision.
            </p>
            <Link
              to="/services"
              id="btn-about-hero-meet"
              name="View Our Services"
              className="btn-primary gtm-cta mt-8 inline-flex text-sm sm:text-base"
              data-gtm-category="CTA"
              data-gtm-action="Click"
              data-gtm-label="About Hero — View Services"
            >
              View Our Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-deep border-b border-charcoal">
        <div className="container-x py-10 sm:py-12">
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

      {/* Philosophy */}
      <section className="bg-background border-b border-cloud">
        <div className="container-x py-14 sm:py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-charcoal">Our Philosophy</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-deep sm:text-4xl md:text-5xl">
                We Don't Just Execute.{" "}
                <span className="text-teal">We Envision. We Enchant.</span>
              </h2>
              <p className="mt-5 text-base text-charcoal leading-relaxed">
                In a world saturated with agencies promising processes, Pixomancer delivers tangible impact. We are built for visionary brands that refuse to be invisible and are ready to become inevitable. Our core tenets guide every decision, every line of code, and every creative stroke.
              </p>
            </div>
            <div className="grid gap-4">
              {principles.map((p) => (
                <div key={p.label} className="border border-cloud p-6 hover:border-teal transition-colors group">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center bg-cloud text-teal font-bold text-lg group-hover:bg-teal group-hover:text-white transition-colors">
                      {p.icon}
                    </span>
                    <h3 className="font-display text-base font-bold text-slate-deep">{p.label}</h3>
                  </div>
                  <p className="mt-3 text-sm text-charcoal leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrated approach */}
      <section className="bg-cloud/30 border-b border-cloud">
        <div className="container-x py-14 sm:py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-charcoal">Why We're Different</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-deep sm:text-4xl">
                The Power of One:{" "}
                <span className="text-teal">Integrated Expertise.</span>
              </h2>
              <p className="mt-5 text-base text-charcoal leading-relaxed">
                Unlike fragmented agencies, Pixomancer unites all critical digital disciplines under one roof. From complex SaaS development and intelligent AI automation to striking UI/UX, high-conversion e-commerce stores, and full-funnel digital marketing — our integrated team ensures seamless collaboration and a cohesive strategy that amplifies your impact.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Web Engineering", "UI/UX Design", "Digital Marketing", "E-Commerce", "Brand Identity", "Copywriting", "Video & Animation", "AI Automation"].map((s, i) => (
                <div key={s} className="flex items-center gap-2 border border-cloud bg-background p-3 hover:border-teal transition-colors group">
                  <span className="h-1.5 w-1.5 bg-teal shrink-0" />
                  <span className="text-xs font-semibold text-slate-deep group-hover:text-teal transition-colors">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background border-b border-cloud">
        <div className="container-x py-14 sm:py-20 md:py-24">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
              <span className="h-px w-6 bg-teal" /> Our Journey <span className="h-px w-6 bg-teal" />
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-deep sm:text-4xl">A Legacy of Innovation and Impact.</h2>
          </div>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-cloud sm:left-8" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div key={t.year} className="relative flex gap-6 sm:gap-10">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center bg-slate-deep text-xs font-bold text-teal sm:h-16 sm:w-16 sm:text-sm">
                    {t.year}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-display text-lg font-bold text-slate-deep">{t.title}</h3>
                    <p className="mt-2 text-sm text-charcoal leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background border-b border-cloud">
        <div className="container-x py-16 sm:py-24">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
              <span className="h-px w-6 bg-teal" /> FAQ <span className="h-px w-6 bg-teal" />
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-deep sm:text-4xl">Getting to Know Pixomancer.</h2>
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
        title="Ready to Build Your Digital Future?"
        cta="Start Your Project Today"
        sub="No sales bots. A senior strategist, in your corner."
      />
    </main>
  );
}
