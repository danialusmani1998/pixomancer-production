import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";

export function FinalCta({
  title = "Ready to stop being invisible?",
  sub = "Directs to our secure contact form. No spam.",
  cta = "Book Your Free Strategy Call",
}: {
  title?: string;
  sub?: string;
  cta?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <section className="bg-slate-deep overflow-hidden">
      <div
        ref={ref}
        className={`container-x py-20 sm:py-28 md:py-32 text-center anim-fade-up ${inView ? "in-view" : ""}`}
      >
        <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h2>
        <div className="mt-8 sm:mt-10">
          <Link
            to="/contact"
            id="btn-final-cta"
            name="Final CTA"
            className="btn-primary gtm-cta text-sm sm:text-base"
            data-gtm-category="CTA"
            data-gtm-action="Click"
            data-gtm-label="Final CTA"
          >
            {cta} →
          </Link>
        </div>
        <p className="mt-5 text-xs text-cloud/70 sm:text-sm">{sub}</p>
      </div>
    </section>
  );
}

export function CtaBand({
  text,
  cta = "Talk to an Expert Now",
  to = "/contact",
}: {
  text: string;
  cta?: string;
  to?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <section className="bg-slate-deep">
      <div
        ref={ref}
        className={`container-x flex flex-col gap-5 py-10 sm:py-12 md:flex-row md:items-center md:justify-between anim-fade-in ${inView ? "in-view" : ""}`}
      >
        <p className="font-display text-lg font-bold text-white sm:text-xl md:text-2xl max-w-2xl">{text}</p>
        <Link
          to={to}
          id="btn-ctaband"
          name="CTA Band"
          className="btn-primary gtm-cta shrink-0 self-start md:self-auto text-sm sm:text-base"
          data-gtm-category="CTA"
          data-gtm-action="Click"
          data-gtm-label="CTA Band"
        >
          {cta} →
        </Link>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <section className="border-b border-cloud bg-background overflow-hidden">
      <div className={`container-x py-16 sm:py-24 md:py-32 ${align === "center" ? "text-center" : ""}`}>
        {eyebrow && (
          <p
            className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-charcoal anim-fade-in in-view ${align === "center" ? "justify-center" : ""}`}
          >
            {align === "center" && <span className="h-px w-6 bg-teal" />}
            {eyebrow}
            <span className="h-px w-6 bg-teal" />
          </p>
        )}
        <h1
          className="mt-4 font-display text-4xl font-bold leading-[1.05] text-slate-deep sm:text-5xl md:text-6xl lg:text-7xl anim-fade-up in-view delay-100"
        >
          {title}
        </h1>
        {sub && (
          <p
            className={`mt-5 text-base text-charcoal sm:text-lg md:text-xl anim-fade-up in-view delay-200 ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
