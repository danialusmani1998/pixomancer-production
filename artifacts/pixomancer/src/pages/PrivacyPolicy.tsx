import { PageHero } from "../components/sections";
import { usePageSEO } from "../hooks/usePageSEO";

export default function PrivacyPolicyPage() {
  usePageSEO({
    title: "Privacy Policy — Pixomancer",
    description: "Pixomancer's Privacy Policy. Learn how we collect, use, and protect your personal data when you use our services or visit our website.",
    canonical: "https://pixomancer.com/privacy-policy",
  });

  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        sub="How we collect, use, and protect your information."
        align="left"
      />

      <section className="bg-background py-14 sm:py-20">
        <div className="container-x mx-auto max-w-3xl prose-content">

          <p className="text-sm text-charcoal mb-8">
            <strong>Effective Date:</strong> 1 January 2025 &nbsp;|&nbsp; <strong>Last Updated:</strong> 12 May 2025
          </p>

          <PolicySection title="1. Who We Are">
            <p>
              Pixomancer ("we", "us", "our") is a full-stack creative and technology agency. Our registered trading name is Pixomancer Studio. For questions about this policy, contact us at <a href="mailto:sales@pixomancer.com" className="text-teal hover:underline">sales@pixomancer.com</a>.
            </p>
          </PolicySection>

          <PolicySection title="2. Information We Collect">
            <p>We collect information you provide directly to us when you:</p>
            <ul>
              <li>Fill in a contact or enquiry form (name, email address, phone number, company, project details)</li>
              <li>Book a strategy call via our scheduling link</li>
              <li>Engage with us via email or social media</li>
            </ul>
            <p>We also collect certain technical data automatically:</p>
            <ul>
              <li>IP address, browser type and version, operating system</li>
              <li>Pages visited, time spent, referring URL</li>
              <li>Cookie identifiers (see Section 7)</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your enquiry and communicate about your project</li>
              <li>Provide, operate, and improve our services</li>
              <li>Send transactional communications (project updates, invoices)</li>
              <li>Comply with legal obligations</li>
              <li>Analyse website performance and user experience via aggregated analytics</li>
            </ul>
            <p>We do <strong>not</strong> sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </PolicySection>

          <PolicySection title="4. Legal Basis for Processing (GDPR)">
            <p>Where GDPR applies, we process your personal data on the following legal bases:</p>
            <ul>
              <li><strong>Contractual necessity:</strong> to fulfil a project agreement or pre-contractual steps at your request</li>
              <li><strong>Legitimate interests:</strong> to respond to enquiries and improve our services</li>
              <li><strong>Consent:</strong> where you have specifically opted in (e.g. marketing emails)</li>
              <li><strong>Legal obligation:</strong> where required by applicable law</li>
            </ul>
          </PolicySection>

          <PolicySection title="5. Data Retention">
            <p>
              We retain your personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by law. Enquiry data is retained for up to 3 years. Project data is retained for 7 years for legal and accounting purposes.
            </p>
          </PolicySection>

          <PolicySection title="6. Third-Party Services">
            <p>We use the following third-party services which may process your data:</p>
            <ul>
              <li><strong>Web3Forms</strong> — contact form submissions</li>
              <li><strong>Google Analytics / Google Tag Manager</strong> — aggregated website analytics</li>
              <li><strong>Cal.com</strong> — scheduling calls</li>
            </ul>
            <p>Each of these services has its own privacy policy and data processing terms. We encourage you to review them.</p>
          </PolicySection>

          <PolicySection title="7. Cookies">
            <p>
              We use essential cookies to ensure our website functions correctly. We also use analytics cookies (via Google Tag Manager) to understand how visitors use our site. You can control cookies through your browser settings. Disabling analytics cookies will not affect your ability to use the site.
            </p>
          </PolicySection>

          <PolicySection title="8. Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request erasure of your data ("right to be forgotten")</li>
              <li>Object to processing based on legitimate interests</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>To exercise any of these rights, email <a href="mailto:sales@pixomancer.com" className="text-teal hover:underline">sales@pixomancer.com</a>. We will respond within 30 days.</p>
          </PolicySection>

          <PolicySection title="9. Data Security">
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or alteration. All data is transmitted over HTTPS. We restrict access to personal data to authorised personnel only.
            </p>
          </PolicySection>

          <PolicySection title="10. Children's Privacy">
            <p>
              Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal data from children. If you believe a child has submitted personal data to us, please contact us immediately.
            </p>
          </PolicySection>

          <PolicySection title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. Material changes will be communicated via email or a notice on our website.
            </p>
          </PolicySection>

          <PolicySection title="12. Contact">
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:<br />
              <a href="mailto:sales@pixomancer.com" className="text-teal hover:underline">sales@pixomancer.com</a>
            </p>
          </PolicySection>

        </div>
      </section>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-slate-deep mb-4 sm:text-2xl">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-charcoal [&_ul]:ml-5 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_strong]:font-semibold [&_strong]:text-slate-deep">
        {children}
      </div>
    </div>
  );
}
