import { PageHero } from "../components/sections";
import { Web3Form } from "../components/web3-form";
import { usePageSEO } from "../hooks/usePageSEO";
import { useInView } from "../hooks/useInView";

const EMAIL = "sales@pixomancer.com";

const socials = [
  { id: "btn-contact-social-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/pixomancer/?utm_source=website&utm_medium=contact&utm_campaign=linkedin-page-visit" },
  { id: "btn-contact-social-instagram", label: "Instagram", href: "https://www.instagram.com/pixomancer/?utm_source=website&utm_medium=contact&utm_campaign=instagram-page-visit" },
  { id: "btn-contact-social-facebook", label: "Facebook", href: "https://www.facebook.com/pixomancer/?utm_source=website&utm_medium=contact&utm_campaign=facebook-page-visit" },
  { id: "btn-contact-social-pinterest", label: "Pinterest", href: "https://www.pinterest.com/pixomancer/?utm_source=website&utm_medium=contact&utm_campaign=pinterest-page-visit" },
];

export default function ContactPage() {
  usePageSEO({
    title: "Contact Pixomancer — Your Digital Future Starts Here",
    description: "Connect with Pixomancer. A senior strategist — not a sales bot — will personally review your brief and respond within one business day. Book a free strategy call to explore the possibilities.",
    canonical: "https://pixomancer.com/contact",
  });

  const { ref, inView } = useInView();

  return (
    <main itemScope itemType="https://schema.org/ContactPage">
      <PageHero
        eyebrow="LET'S TALK"
        title="Connect with Pixomancer: Your Digital Future Starts Here."
        sub="Let's transform your vision into unstoppable reality. Whether you're ready to launch, scale, or simply explore — our team is eager to connect."
      />

      <section className="bg-background py-14 sm:py-20 md:py-24" aria-labelledby="contact-heading">
        <div
          ref={ref}
          className={`container-x grid gap-10 md:grid-cols-5 md:gap-12 anim-fade-up ${inView ? "in-view" : ""}`}
        >
          <div className="md:col-span-3">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-charcoal">Send Us a Message</p>
              <h2 id="contact-heading" className="mt-2 font-display text-2xl font-bold text-slate-deep">Fill out the form below.</h2>
              <p className="mt-2 text-sm text-charcoal leading-relaxed">A senior strategist will get back to you within one business day. No automated responses — just genuine, expert advice.</p>
            </div>
            <Web3Form formId="contact-main-form" source="contact_page_main" />
          </div>

          <aside className="md:col-span-2 space-y-4" aria-label="Contact details">
            <div className="bg-slate-deep p-7 sm:p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-teal">Skip the Form?</p>
              <h3 className="mt-2 font-display text-xl font-bold">Ready for a Strategic Conversation?</h3>
              <p className="mt-3 text-cloud/80 text-sm leading-relaxed">
                Book a free, no-obligation strategy call to discuss your goals and explore how Pixomancer can help you achieve them.
              </p>
              <a
                href="/contact"
                id="btn-contact-book-call"
                name="Book Your Strategy Call Now"
                className="btn-primary gtm-cta mt-6 inline-flex w-full justify-center text-sm"
                data-gtm-category="CTA"
                data-gtm-action="Click"
                data-gtm-label="Contact Page — Book Strategy Call"
              >
                Book Your Strategy Call Now →
              </a>
            </div>

            <div className="border border-cloud p-5 sm:p-6 hover:border-teal transition-colors" itemScope itemType="https://schema.org/Organization">
              <div className="text-xs font-bold uppercase tracking-widest text-teal">Prefer to Connect Directly?</div>
              <a
                href={`mailto:${EMAIL}`}
                id="btn-contact-email"
                name="Contact Email"
                className="gtm-contact mt-2 block font-display text-lg font-bold text-slate-deep hover:text-teal transition-colors"
                itemProp="email"
                data-gtm-category="Contact"
                data-gtm-action="Email Click"
                data-gtm-label={EMAIL}
              >
                {EMAIL}
              </a>
            </div>

            <div className="border border-cloud p-5 sm:p-6 hover:border-teal transition-colors">
              <div className="text-xs font-bold uppercase tracking-widest text-teal">Response Time</div>
              <p className="mt-2 text-sm text-charcoal leading-relaxed">
                Within 1 business day.<br />
                A senior strategist — not a sales bot — will review your brief personally.
              </p>
            </div>

            <div className="border border-cloud p-5 sm:p-6 hover:border-teal transition-colors">
              <div className="text-xs font-bold uppercase tracking-widest text-teal">Follow Our Journey</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    id={s.id}
                    name={s.label}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="gtm-social inline-flex items-center gap-1.5 border border-cloud px-3 py-2 text-xs font-bold text-charcoal hover:border-teal hover:text-teal transition-colors"
                    data-gtm-category="Social"
                    data-gtm-action="Click"
                    data-gtm-label={s.label}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How quickly does Pixomancer respond to enquiries?", "acceptedAnswer": { "@type": "Answer", "text": "We respond to all enquiries within one business day. A senior strategist will review your brief." } },
          { "@type": "Question", "name": "What is Pixomancer's email address?", "acceptedAnswer": { "@type": "Answer", "text": `You can reach Pixomancer at ${EMAIL}` } },
          { "@type": "Question", "name": "Does Pixomancer offer free consultations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer a free 30-minute strategy call to assess your project with no obligation." } },
        ]
      })}} />
    </main>
  );
}
