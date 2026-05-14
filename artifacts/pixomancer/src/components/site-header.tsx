import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/pixomancer-logo-full.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services", hasDropdown: true },
  { to: "/process", label: "Process" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
];

const serviceLinks = [
  { to: "/services/web-development", label: "Web & SaaS Development", icon: "</>", desc: "Scalable websites, apps & SaaS platforms" },
  { to: "/services/ui-ux", label: "UI/UX Design", icon: "⬡", desc: "Conversion-led interface engineering" },
  { to: "/services/digital-marketing", label: "Digital Marketing", icon: "◎", desc: "SEO, PPC, Meta, TikTok & email funnels" },
  { to: "/services/ecommerce", label: "E-Commerce", icon: "◻", desc: "Shopify, headless & high-AOV storefronts" },
  { to: "/services/branding", label: "Brand Identity", icon: "◈", desc: "Logos, color systems & brand OS" },
  { to: "/services/copywriting", label: "Authority Copywriting", icon: "✦", desc: "Sales copy, content & LinkedIn authority" },
  { to: "/services/video", label: "Video & Animation", icon: "▶", desc: "Motion graphics & explainer production" },
  { to: "/services/ai", label: "AI Automation", icon: "⬡", desc: "GPT agents, workflows & integrations" },
];

export function SiteHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 border-b bg-white transition-all duration-300 ${
        scrolled ? "border-cloud shadow-[0_1px_8px_0_rgba(0,0,0,0.06)]" : "border-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between sm:h-24">
        {/* Logo & Brand Name */}
        <Link to="/" aria-label="Pixomancer — Home" className="flex items-center gap-3 group shrink-0">
          <img
            src={logo}
            alt="Pixomancer — Creative & Technology Solutions"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-16"
            width={240}
            height={64}
            style={{ background: "transparent" }}
          />
          <span className="font-display text-2xl font-bold tracking-tighter text-slate-deep transition-colors group-hover:text-teal sm:text-3xl lg:text-4xl">
            Pixomancer
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex xl:gap-8">
          {nav.map((n) => {
            const active = pathname === n.to || (n.to !== "/" && pathname.startsWith(n.to));
            if (n.hasDropdown) {
              return (
                <div key={n.to} className="nav-dropdown-trigger relative" ref={dropdownRef}>
                  <Link
                    to={n.to}
                    aria-current={active ? "page" : undefined}
                    aria-haspopup="true"
                    className="relative flex items-center gap-1 text-sm font-medium text-charcoal transition-colors hover:text-slate-deep py-5"
                  >
                    {n.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-px" aria-hidden="true">
                      <path d="M2 4l4 4 4-4" />
                    </svg>
                    {active && <span className="absolute -bottom-0 left-0 h-0.5 w-full bg-teal" />}
                  </Link>

                  {/* Mega Dropdown */}
                  <div className="nav-dropdown bg-white border border-cloud shadow-xl" role="menu" aria-label="Services menu">
                    <div className="p-2">
                      <div className="grid grid-cols-2 gap-1">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.to}
                            to={s.to}
                            role="menuitem"
                            className="group flex items-start gap-3 p-3 transition-colors hover:bg-cloud"
                          >
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-cloud text-sm font-bold text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                              {s.icon}
                            </span>
                            <div>
                              <div className="text-sm font-semibold text-slate-deep leading-tight">{s.label}</div>
                              <div className="mt-0.5 text-xs text-charcoal leading-relaxed">{s.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 border-t border-cloud pt-2 px-1">
                        <Link
                          to="/services"
                          className="flex items-center justify-between px-2 py-2 text-xs font-bold uppercase tracking-widest text-teal hover:text-slate-deep transition-colors"
                        >
                          View All Services
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                            <path d="M2 7h10M8 3l4 4-4 4" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={n.to}
                to={n.to}
                aria-current={active ? "page" : undefined}
                className="relative text-sm font-medium text-charcoal transition-colors hover:text-slate-deep py-5"
              >
                {n.label}
                {active && <span className="absolute -bottom-0 left-0 h-0.5 w-full bg-teal" />}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            id="btn-nav-book-call"
            name="Nav Book Strategy Call"
            className="btn-primary gtm-nav hidden lg:inline-flex text-sm"
            data-gtm-category="Navigation"
            data-gtm-action="Click"
            data-gtm-label="Book Strategy Call"
          >
            Book Strategy Call
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-slate-deep p-1"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-cloud bg-white" role="dialog" aria-label="Mobile navigation">
          <nav aria-label="Mobile navigation" className="container-x flex flex-col py-3">
            {nav.map((n) => {
              if (n.hasDropdown) {
                return (
                  <div key={n.to}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      className="flex w-full items-center justify-between border-b border-cloud/50 py-3.5 text-sm font-medium text-charcoal hover:text-teal transition-colors"
                    >
                      {n.label}
                      <svg
                        width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75"
                        className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      >
                        <path d="M3 6l5 5 5-5" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <div className="bg-cloud/40 px-3 py-2 border-b border-cloud/50">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.to}
                            to={s.to}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 py-2.5 text-sm text-charcoal hover:text-teal transition-colors"
                          >
                            <span className="text-teal text-xs">{s.icon}</span>
                            {s.label}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          onClick={() => setOpen(false)}
                          className="block py-2.5 text-xs font-bold uppercase tracking-widest text-teal hover:text-slate-deep transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === n.to ? "page" : undefined}
                  className="border-b border-cloud/50 py-3.5 text-sm font-medium text-charcoal hover:text-teal transition-colors last:border-0"
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              id="btn-nav-book-call-mobile"
              name="Mobile Nav Book Strategy Call"
              className="btn-primary gtm-nav mt-4 justify-center text-sm"
              data-gtm-category="Navigation"
              data-gtm-action="Click"
              data-gtm-label="Book Strategy Call Mobile"
            >
              Book Strategy Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
