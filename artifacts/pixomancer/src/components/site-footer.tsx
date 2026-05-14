import { Link } from "react-router-dom";
import logo from "../assets/pixomancer-logo-transparent.png";

const EMAIL = "sales@pixomancer.com";

const socials = [
  {
    id: "btn-social-facebook",
    label: "Facebook",
    href: "https://www.facebook.com/pixomancer/?utm_source=website&utm_medium=footer&utm_campaign=facebook-page-visit",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073C24 5.41 18.627 0 12 0S0 5.41 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    id: "btn-social-instagram",
    label: "Instagram",
    href: "https://www.instagram.com/pixomancerofficial/?utm_source=website&utm_medium=footer&utm_campaign=instagram-page-visit",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: "btn-social-linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/pixomancer/?utm_source=website&utm_medium=footer&utm_campaign=linkedin-page-visit",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "btn-social-pinterest",
    label: "Pinterest",
    href: "https://www.pinterest.com/pixomancer/?utm_source=website&utm_medium=footer&utm_campaign=pinterest-page-visit",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
];

const siteMap = {
  Studio: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/process", label: "Our Process" },
    { to: "/work", label: "Work & Case Studies" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ],
  Services: [
    { to: "/services", label: "All Services" },
    { to: "/services/web-development", label: "Web & SaaS Development" },
    { to: "/services/ui-ux", label: "UI/UX Design" },
    { to: "/services/digital-marketing", label: "Digital Marketing" },
    { to: "/services/ecommerce", label: "E-Commerce Stores" },
    { to: "/services/branding", label: "Brand Identity" },
    { to: "/services/copywriting", label: "Authority Copywriting" },
    { to: "/services/video", label: "Video & Animation" },
    { to: "/services/ai", label: "AI Automation" },
  ],
  Expertise: [
    { to: "/services/web-development", label: "SaaS Development" },
    { to: "/services/digital-marketing", label: "SEO & PPC Advertising" },
    { to: "/services/ecommerce", label: "Shopify & Headless Commerce" },
    { to: "/services/digital-marketing", label: "Meta & TikTok Ads" },
    { to: "/services/ai", label: "AI Chatbot Integration" },
    { to: "/services/branding", label: "Corporate Branding" },
  ],
};

export function SiteFooter() {
  return (
    <footer role="contentinfo" aria-label="Site footer" className="border-t border-charcoal bg-slate-deep text-white">
      <div className="container-x pt-14 pb-8 sm:pt-16 sm:pb-10">

        {/* Main columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12">
          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" aria-label="Pixomancer — Home">
              <img
                src={logo}
                alt="Pixomancer — Creative & Technology Solutions"
                className="h-12 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
                width={160}
                height={48}
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cloud/70 max-w-xs">
              Crafting brands beyond pixels. Full-stack creative and technology solutions for visionary businesses worldwide.
            </p>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              id="btn-footer-email"
              name="Contact Email"
              className="gtm-contact mt-5 inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-white transition-colors"
              data-gtm-category="Contact"
              data-gtm-action="Email Click"
              data-gtm-label={EMAIL}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
              </svg>
              {EMAIL}
            </a>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  id={s.id}
                  name={s.label}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="gtm-social flex h-9 w-9 items-center justify-center bg-charcoal text-cloud/60 hover:bg-teal hover:text-white transition-colors"
                  data-gtm-category="Social"
                  data-gtm-action="Click"
                  data-gtm-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Site map columns */}
          {Object.entries(siteMap).map(([section, links]) => (
            <nav key={section} aria-label={`${section} links`}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-teal">{section}</h3>
              <ul role="list" className="mt-4 space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-cloud/70 hover:text-white transition-colors leading-relaxed"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="my-10 border-t border-charcoal sm:my-12" />

        {/* Sitemap strip */}
        <div className="mb-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-charcoal">Site Map</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { to: "/", label: "Home" }, { to: "/about", label: "About" },
              { to: "/services", label: "Services" }, { to: "/services/web-development", label: "Web Dev" },
              { to: "/services/ui-ux", label: "UI/UX" }, { to: "/services/digital-marketing", label: "Marketing" },
              { to: "/services/ecommerce", label: "E-Commerce" }, { to: "/services/branding", label: "Branding" },
              { to: "/services/copywriting", label: "Copywriting" }, { to: "/services/video", label: "Video" },
              { to: "/services/ai", label: "AI Automation" }, { to: "/process", label: "Process" },
              { to: "/work", label: "Work" }, { to: "/faq", label: "FAQ" },
              { to: "/contact", label: "Contact" }, { to: "/privacy-policy", label: "Privacy" },
              { to: "/terms", label: "Terms" },
            ].map((l) => (
              <Link key={l.label} to={l.to} className="text-xs text-cloud/40 hover:text-teal transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-charcoal pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cloud/50">
            © {new Date().getFullYear()} Pixomancer Studio. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy" className="text-xs text-cloud/40 hover:text-teal transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-cloud/40 hover:text-teal transition-colors">Terms & Conditions</Link>
            <span className="text-xs italic text-cloud/30">Crafting Brands Beyond Pixels.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
