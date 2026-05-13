import { PageHero } from "../components/sections";
import { usePageSEO } from "../hooks/usePageSEO";

export default function TermsPage() {
  usePageSEO({
    title: "Terms & Conditions — Pixomancer",
    description: "Pixomancer's Terms & Conditions. The terms governing your use of our website and the engagement of our creative and technology services.",
    canonical: "https://pixomancer.com/terms",
  });

  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        sub="Please read these terms carefully before engaging our services."
        align="left"
      />

      <section className="bg-background py-14 sm:py-20">
        <div className="container-x mx-auto max-w-3xl">

          <p className="text-sm text-charcoal mb-8">
            <strong>Effective Date:</strong> 1 January 2025 &nbsp;|&nbsp; <strong>Last Updated:</strong> 12 May 2025
          </p>

          <TermsSection title="1. Acceptance of Terms">
            <p>
              By accessing or using the Pixomancer website (pixomancer.com) or engaging Pixomancer for any services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.
            </p>
          </TermsSection>

          <TermsSection title="2. Services">
            <p>
              Pixomancer provides creative and technology services including, but not limited to, web development, UI/UX design, digital marketing, e-commerce development, brand identity, copywriting, video production, and AI automation.
            </p>
            <p>
              The specific scope, deliverables, timeline, and fees for any project are defined in a separate Statement of Work (SOW) or project agreement signed by both parties.
            </p>
          </TermsSection>

          <TermsSection title="3. Project Agreements & Payment">
            <p>
              Work commences only upon receipt of a signed SOW and the agreed initial payment (deposit). Payment schedules are milestone-based as defined in each SOW. Invoices are due within 14 days of issue unless otherwise agreed in writing.
            </p>
            <p>
              Late payments may attract interest at 2% per month on the outstanding balance. Pixomancer reserves the right to pause work on any project with outstanding invoices.
            </p>
          </TermsSection>

          <TermsSection title="4. Intellectual Property">
            <p>
              Upon receipt of full and final payment for a project, all intellectual property rights in the final deliverables (including source code, design files, written content, and creative assets) are assigned to the client.
            </p>
            <p>
              Pixomancer retains the right to display the work in its portfolio and marketing materials unless explicitly agreed otherwise in writing.
            </p>
            <p>
              Third-party assets, libraries, or tools incorporated into deliverables remain subject to their respective licences, which Pixomancer will disclose upon request.
            </p>
          </TermsSection>

          <TermsSection title="5. Client Responsibilities">
            <p>The client agrees to:</p>
            <ul>
              <li>Provide timely feedback, approvals, and required content to keep the project on schedule</li>
              <li>Ensure they have the rights to any materials provided to Pixomancer for use in the project</li>
              <li>Appoint a single point of contact with authority to approve deliverables</li>
            </ul>
            <p>
              Delays caused by the client may result in revised timelines and/or additional charges.
            </p>
          </TermsSection>

          <TermsSection title="6. Revisions & Change Requests">
            <p>
              The number of included revision rounds is specified in each SOW. Revisions beyond the agreed scope will be quoted and charged separately at Pixomancer's current hourly rate.
            </p>
          </TermsSection>

          <TermsSection title="7. Confidentiality">
            <p>
              Both parties agree to keep confidential any proprietary information shared during the course of the engagement. This obligation continues for 2 years after the project conclusion unless otherwise agreed.
            </p>
          </TermsSection>

          <TermsSection title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, Pixomancer's total liability in connection with any project shall not exceed the total fees paid by the client for that specific project in the 12 months preceding the claim.
            </p>
            <p>
              Pixomancer shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits or data.
            </p>
          </TermsSection>

          <TermsSection title="9. Termination">
            <p>
              Either party may terminate a project engagement with 14 days' written notice. The client shall pay for all work completed up to the termination date. Deposits and milestone payments already made are non-refundable unless otherwise stated in the SOW.
            </p>
          </TermsSection>

          <TermsSection title="10. Website Use">
            <p>
              You may use the Pixomancer website for lawful purposes only. You agree not to:
            </p>
            <ul>
              <li>Scrape, copy, or reproduce content without written permission</li>
              <li>Use the site in any way that could damage, disable, or overburden it</li>
              <li>Attempt to gain unauthorised access to any part of the site or its systems</li>
            </ul>
          </TermsSection>

          <TermsSection title="11. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. Pixomancer has no control over and accepts no responsibility for the content, privacy policies, or practices of any third-party sites.
            </p>
          </TermsSection>

          <TermsSection title="12. Governing Law">
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with applicable law. Any disputes shall first be attempted to be resolved through good-faith negotiation before pursuing formal legal proceedings.
            </p>
          </TermsSection>

          <TermsSection title="13. Changes to These Terms">
            <p>
              We reserve the right to update these Terms & Conditions at any time. Changes will be posted on this page with a revised effective date. Continued use of our website or services after changes constitutes your acceptance of the revised terms.
            </p>
          </TermsSection>

          <TermsSection title="14. Contact">
            <p>
              Questions about these Terms? Contact us at <a href="mailto:sales@pixomancer.com" className="text-teal hover:underline">sales@pixomancer.com</a>
            </p>
          </TermsSection>

        </div>
      </section>
    </main>
  );
}

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-slate-deep mb-4 sm:text-2xl">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-charcoal [&_ul]:ml-5 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_strong]:font-semibold [&_strong]:text-slate-deep">
        {children}
      </div>
    </div>
  );
}
