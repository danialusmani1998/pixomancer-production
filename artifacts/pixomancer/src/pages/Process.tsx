import { Link } from "react-router-dom";
import { useState } from "react";
import { FinalCta } from "../components/sections";
import { usePageSEO } from "../hooks/usePageSEO";
import { useInView } from "../hooks/useInView";

const steps = [
  {
    n: "01",
    label: "Ignition",
    title: "Ignition: Aligning Your Ambition.",
    desc: "It all begins with a complimentary strategy call. We dive deep into your vision, objectives, and current challenges to define a clear scope and timeline, ensuring our partnership starts with perfect alignment.",
    deliverable: "Initial Strategy & Scope Definition",
  },
  {
    n: "02",
    label: "Audit",
    title: "Audit: Uncovering Hidden Potential.",
    desc: "Our experts conduct a comprehensive diagnostic of your existing digital assets — from your current funnels and brand messaging to code infrastructure and conversion pathways. We identify critical opportunities for optimization and growth.",
    deliverable: "Comprehensive Digital Audit Report",
  },
  {
    n: "03",
    label: "Research",
    title: "Research: Mastering Your Market.",
    desc: "We leave no stone unturned. This phase involves in-depth market positioning analysis, rigorous competitor teardowns, and advanced behavioral analysis to uncover actionable insights that inform every strategic decision.",
    deliverable: "Market & Competitor Intelligence Report",
  },
  {
    n: "04",
    label: "Blueprint",
    title: "Blueprint: Your Roadmap to Success.",
    desc: "Based on our audit and research, we craft a detailed sprint plan. This blueprint outlines key performance indicators (KPIs), assigns clear ownership, and defines all deliverables — providing a transparent roadmap for the entire project.",
    deliverable: "Detailed Project Blueprint & Sprint Plan",
  },
  {
    n: "05",
    label: "Concept",
    title: "Concept: Forging Your Vision.",
    desc: "This is where creativity takes flight. We develop compelling visual, narrative, and architectural concepts, translating strategic insights into innovative design directions that capture your brand's essence and market ambition.",
    deliverable: "Creative Concepts & Direction",
  },
  {
    n: "06",
    label: "UI/UX Prototyping",
    title: "Prototyping: Experience Before Build.",
    desc: "Before a single line of code is written, we develop high-fidelity, interactive prototypes. This allows you to experience and test the user journey, gather feedback, and refine the interface — ensuring pixel-perfect design and optimal UX.",
    deliverable: "Interactive UI/UX Prototypes",
  },
  {
    n: "07",
    label: "Development",
    title: "Development: Engineering Excellence.",
    desc: "Our senior engineers bring your vision to life using modern, robust, and type-safe tech stacks. We prioritize clean code, scalability, and performance — building digital solutions that are not only functional but future-proof.",
    deliverable: "Developed Digital Solution (Website, App, SaaS)",
  },
  {
    n: "08",
    label: "Testing",
    title: "Testing: Ensuring Flawless Performance.",
    desc: "Every aspect of your solution undergoes rigorous quality assurance (QA), performance testing, accessibility checks, and conversion validation. We ensure your digital asset is flawless, robust, and ready to deliver.",
    deliverable: "Comprehensive QA & Performance Report",
  },
  {
    n: "09",
    label: "Launch",
    title: "Launch: Go-Live & Handover.",
    desc: "The exciting moment of deployment. We manage the go-live process, set up monitoring, wire analytics for comprehensive tracking, and provide a full, seamless handover — ensuring you're empowered to take the reins.",
    deliverable: "Live Digital Platform & Handover Documentation",
  },
  {
    n: "10",
    label: "Growth & Scale",
    title: "Growth & Scale: Sustained Market Dominance.",
    desc: "Our partnership extends beyond launch. We provide continuous optimization strategies — including advanced SEO, targeted advertising, and AI-driven automation — to ensure your digital presence continues to evolve, grow, and dominate.",
    deliverable: "Post-Launch Growth Strategy & Support",
  },
];

const promises = [
  { icon: "◎", label: "Weekly Live Demos", desc: "See real, tangible progress every seven days. No more waiting in the dark — you're always in the loop, witnessing your vision come to life." },
  { icon: "◻", label: "Transparent Milestone Billing", desc: "Pay per phase, tied directly to clear deliverables. No hidden fees, no surprise invoices — just straightforward, accountable financial planning." },
  { icon: "✦", label: "30-Day Post-Launch Support", desc: "Every project includes 30 days of comprehensive post-launch coverage. We ensure a smooth transition and are there to support you well after go-live." },
];

const faqItems: [string, string][] = [
  ["How does the Pixomancer process ensure project success?", "Our 10-step framework is built on principles of transparency, agile development, and continuous feedback. Each phase has clear deliverables and checkpoints, minimizing risks and ensuring the project stays aligned with your strategic objectives from start to finish."],
  ["What is involved in the Ignition phase?", "The Ignition phase is our initial discovery — a complimentary strategy call where we discuss your business goals, project vision, and current challenges. This helps us understand your needs and determine how Pixomancer can best support your success."],
  ["How detailed is the Audit phase?", "Our Audit is a deep diagnostic. We meticulously analyze your existing digital presence, including website performance, user experience, brand messaging, SEO, and technical infrastructure, to identify strengths, weaknesses, and untapped opportunities for growth."],
  ["How do you ensure the project stays on budget and on schedule?", "Our Blueprint phase establishes a detailed sprint plan with clear KPIs and timelines. We employ transparent milestone billing, and our agile methodology allows for continuous monitoring and adjustments, ensuring projects are delivered efficiently and within agreed-upon parameters."],
  ["What is the purpose of UI/UX Prototyping?", "UI/UX Prototyping allows you to visualize and interact with your digital solution before development begins. This crucial step ensures the design meets your expectations and user needs, allowing for cost-effective adjustments prior to coding."],
  ["What kind of support do you offer after launch?", "We provide 30 days of comprehensive post-launch support to ensure a smooth transition. Beyond that, we offer ongoing growth and scale strategies — including SEO, advertising, and AI automation — to sustain your digital momentum."],
  ["How do you handle feedback and revisions during the project?", "Feedback and revisions are integral to our agile process. We conduct weekly live demos and regular review sessions, providing dedicated channels for your input. This collaborative approach ensures your vision is accurately translated into the final product."],
  ["Can your process adapt to unique project requirements?", "Yes, our 10-step framework is robust yet flexible. While it provides a structured approach, we tailor each phase to the specific nuances and unique requirements of your project, ensuring a bespoke solution that aligns perfectly with your goals."],
  ["What is Transparent Milestone Billing?", "Transparent Milestone Billing means you pay for clearly defined project phases and deliverables, not hourly rates. This provides predictability, aligns our incentives with your outcomes, and ensures you only pay for tangible progress."],
  ["How does Pixomancer ensure long-term growth post-launch?", "Our Growth & Scale phase focuses on continuous optimization. We implement advanced SEO, targeted digital advertising, and AI-driven automation to ensure your digital assets not only launch successfully but continue to attract and convert over time."],
];

export default function ProcessPage() {
  usePageSEO({
    title: "Our Process — Pixomancer | 10-Step Framework for Digital Success",
    description: "The Pixomancer Blueprint: a transparent 10-step framework from Ignition to Growth & Scale, forged over 150+ successful launches. Weekly live demos, milestone billing, 30-day post-launch support.",
    canonical: "https://pixomancer.com/process",
  });

  const [activeStep, setActiveStep] = useState<number>(0);
  const [faqOpen, setFaqOpen] = useState<number>(0);
  const { ref, inView } = useInView();

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-cloud bg-background">
        <div ref={ref} className={`container-x py-16 sm:py-24 md:py-32 text-center anim-fade-up ${inView ? "in-view" : ""}`}>
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
            <span className="h-px w-6 bg-teal" /> Our Blueprint <span className="h-px w-6 bg-teal" />
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-deep sm:text-5xl md:text-6xl lg:text-7xl">
            Precision. Transparency.{" "}
            <span className="text-teal">Unrivaled Results.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-charcoal sm:text-lg leading-relaxed">
            Our 10-step alchemy — honed over 150+ successful launches — transforms complex challenges into streamlined successes. This isn't just a process; it's your pathway to predictable digital success.
          </p>
          <Link
            to="/contact"
            id="btn-process-hero-begin"
            name="Begin Your Journey"
            className="btn-primary gtm-cta mt-8 inline-flex text-sm sm:text-base"
            data-gtm-category="CTA"
            data-gtm-action="Click"
            data-gtm-label="Process Hero — Begin Journey"
          >
            Begin Your Journey →
          </Link>
        </div>
      </section>

      {/* Steps overview grid */}
      <section className="border-b border-cloud bg-background">
        <div className="container-x py-14 sm:py-20 md:py-24">
          <div className="text-center mb-10">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
              <span className="h-px w-6 bg-teal" /> 10 Steps <span className="h-px w-6 bg-teal" />
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-deep sm:text-4xl md:text-5xl">From Spark to Signal.</h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-charcoal">Click any step to explore what we do and what we deliver.</p>
          </div>

          {/* Step selector */}
          <div className="grid grid-cols-5 gap-px bg-cloud sm:grid-cols-10">
            {steps.map((s, i) => (
              <button
                key={s.n}
                onClick={() => setActiveStep(i)}
                className={`group py-4 px-2 text-center transition-all ${activeStep === i ? "bg-slate-deep" : "bg-background hover:bg-cloud/60"}`}
              >
                <span className={`font-mono text-xs font-bold ${activeStep === i ? "text-teal" : "text-charcoal/50"}`}>{s.n}</span>
                <div className={`mt-1 text-xs font-bold leading-tight ${activeStep === i ? "text-white" : "text-slate-deep"}`}>{s.label}</div>
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <div className="mt-0 border border-t-0 border-cloud p-6 sm:p-8 md:p-10 transition-all">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <span className="font-mono text-4xl font-bold text-cloud sm:text-5xl">{steps[activeStep].n}</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-slate-deep sm:text-3xl">{steps[activeStep].title}</h3>
                <p className="mt-4 text-base text-charcoal leading-relaxed">{steps[activeStep].desc}</p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="border border-teal p-5 sm:p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-teal">Key Deliverable</div>
                  <div className="mt-2 font-display text-lg font-bold text-slate-deep">{steps[activeStep].deliverable}</div>
                </div>
                <div className="mt-5">
                  <Link
                    to="/contact"
                    id={`btn-process-step-${steps[activeStep].n}`}
                    name={`Start Step ${steps[activeStep].n} — ${steps[activeStep].label}`}
                    className="btn-primary gtm-cta w-full justify-center text-sm sm:text-base"
                    data-gtm-category="CTA"
                    data-gtm-action="Click"
                    data-gtm-label={`Process Step ${steps[activeStep].n} — Start`}
                  >
                    Start Step {steps[activeStep].n} Today →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Delivery Promise */}
      <section className="bg-slate-deep border-b border-charcoal">
        <div className="container-x py-14 sm:py-20 md:py-24">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-teal">Our Commitment</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Our Unwavering Delivery Promise.</h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-cloud/70">Every project, every time. These aren't aspirations — they're guarantees.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {promises.map((p) => (
              <div key={p.label} className="border border-charcoal p-6 sm:p-8 hover:border-teal transition-colors">
                <div className="flex h-10 w-10 items-center justify-center bg-teal text-white font-bold">{p.icon}</div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{p.label}</h3>
                <p className="mt-2 text-sm text-cloud/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              id="btn-process-book-call"
              name="Book a Strategy Call"
              className="btn-primary gtm-cta text-sm sm:text-base"
              data-gtm-category="CTA"
              data-gtm-action="Click"
              data-gtm-label="Process — Book Strategy Call"
            >
              Book a Strategy Call →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background border-b border-cloud">
        <div className="container-x py-16 sm:py-24 md:py-28">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal">
              <span className="h-px w-6 bg-teal" /> FAQ <span className="h-px w-6 bg-teal" />
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-deep sm:text-4xl">Process Clarity: Your Key Questions Answered.</h2>
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
        title="Ready to Build Something Inevitable?"
        cta="Book Your Free Strategy Call"
        sub="No pitch decks. No sales bots. Just a senior strategist who gets it."
      />
    </main>
  );
}
