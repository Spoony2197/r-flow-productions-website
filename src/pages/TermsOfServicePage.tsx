import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-surface-cream min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl text-dark-500 mb-4">
          Terms of Service
        </h1>
        <p className="text-dark-300 mb-12">Last updated: March 21, 2026</p>

        <div className="space-y-10 text-dark-400 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-dark-500 mb-4">
              Agreement to Terms
            </h2>
            <p>
              By accessing or using the R Flow Productions website at
              rflowproductions.com (the "Site"), you agree to be bound by these
              Terms of Service ("Terms"). If you do not agree to these Terms,
              please do not use our Site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-dark-500 mb-4">
              Services
            </h2>
            <p>
              R Flow Productions provides video production, editing, and
              strategic video storytelling services for businesses, tech
              companies, and medical practitioners. Details of specific services,
              deliverables, timelines, and pricing are agreed upon separately
              through individual project contracts or statements of work.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-dark-500 mb-4">
              Use of the Site
            </h2>
            <p className="mb-4">
              You agree to use our Site only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the Site in any way that violates applicable laws or
                regulations
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the Site or
                its systems
              </li>
              <li>
                Use the Site to transmit harmful code, spam, or malicious
                content
              </li>
              <li>
                Reproduce, distribute, or modify any content on the Site without
                our written permission
              </li>
              <li>
                Use automated tools to scrape, crawl, or extract data from the
                Site
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-dark-500 mb-4">
              Intellectual Property
            </h2>
            <p className="mb-4">
              All content on this Site — including but not limited to text,
              graphics, logos, images, videos, and design — is the property of R
              Flow Productions or its licensors and is protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p>
              You may not use, reproduce, or distribute any content from the
              Site without our prior written consent. For client projects,
              intellectual property ownership and usage rights are governed by
              the applicable project contract.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-dark-500 mb-4">
              Client Projects and Contracts
            </h2>
            <p className="mb-4">
              Engagement for video production services is governed by a separate
              project agreement or statement of work. These Terms govern your
              use of the Site only. In the event of a conflict between these
              Terms and a signed project agreement, the project agreement shall
              prevail.
            </p>
            <p>
              Booking a consultation through our Site does not constitute a
              binding agreement for services. A formal agreement will be provided
              before any production work begins.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-dark-500 mb-4">
              Third-Party Links and Services
            </h2>
            <p>
              Our Site may contain links to third-party websites and services
              (e.g., Calendly, YouTube, social media platforms). These links are
              provided for your convenience. We do not control or endorse these
              third-party sites and are not responsible for their content,
              privacy practices, or terms of use.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-dark-500 mb-4">
              Disclaimer of Warranties
            </h2>
            <p>
              The Site is provided on an "as is" and "as available" basis. R
              Flow Productions makes no warranties, express or implied,
              regarding the Site's operation, accuracy, or availability. We
              disclaim all warranties, including but not limited to implied
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-dark-500 mb-4">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, R Flow Productions shall
              not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising from your use of or inability to use
              the Site, even if we have been advised of the possibility of such
              damages. Our total liability for any claim related to the Site
              shall not exceed the amount you paid us, if any, in the 12 months
              preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-dark-500 mb-4">
              Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless R Flow
              Productions, its officers, directors, employees, and agents from
              and against any claims, liabilities, damages, losses, or expenses
              arising out of or in connection with your use of the Site or
              violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-dark-500 mb-4">
              Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of New York, without regard to its conflict
              of law principles. Any disputes arising under these Terms shall be
              subject to the exclusive jurisdiction of the courts located in New
              York, NY.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-dark-500 mb-4">
              Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be posted on this page with an updated "Last updated" date.
              Your continued use of the Site after changes are posted
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-dark-500 mb-4">
              Contact Us
            </h2>
            <p className="mb-2">
              If you have questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>R Flow Productions</strong>
              <br />
              Email:{' '}
              <a
                href="mailto:sir-tay.jackson@rflowproductions.com"
                className="text-brand-bright hover:underline"
              >
                sir-tay.jackson@rflowproductions.com
              </a>
              <br />
              Phone:{' '}
              <a
                href="tel:203-309-7484"
                className="text-brand-bright hover:underline"
              >
                203-309-7484
              </a>
              <br />
              Location: New York, NY
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
