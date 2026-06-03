import SectionTitle from "@/components/common/SectionTitle";
import { Flame } from "lucide-react";
import LegalPageShell from "./components/LegalPageShell";
import { cookieCategories } from "./data/cookieCategories";

export default function CookiePolicy() {
  return (
    <LegalPageShell>
      <div className="mb-10">
        <SectionTitle
          animate={false}
          label="Legal & Privacy"
          icon={Flame}
          title="Cookie &"
          titleHighlight="Policy"
          description="Transparent tracking. Learn how the B2B Apparel Sourcing Platform uses cookies to optimize your supply chain workflow."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-10 ds-card p-8 sm:p-10">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ds-text">
              1. What Are Cookies?
            </h2>
            <p className="text-ds-muted-foreground leading-relaxed text-sm">
              Cookies are small text files stored on your device when you browse
              the web. On our B2B platform, they act as memory nodes that
              remember your active secure sessions, RFQ draft progress, platform
              configurations, and language preferences to ensure a friction-free
              enterprise experience.
            </p>
          </section>

          <hr className="border-ds-border" />

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-ds-text">
              2. How We Deploy Cookies
            </h2>
            <p className="text-ds-muted-foreground leading-relaxed text-sm">
              We utilize both session cookies (which expire when you close your
              web browser) and persistent cookies (which stay on your device for
              a set period or until deleted). These are categorized into
              distinct operational layers below.
            </p>

            <div className="mt-6 space-y-4">
              {cookieCategories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-start justify-between p-4 rounded-xl bg-ds-surface border border-ds-border"
                >
                  <div className="pr-4">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-ds-text text-sm">
                        {category.title}
                      </h3>
                      <span className="text-[10px] bg-ds-primary/10 text-ds-primary font-medium px-2 py-0.5 rounded">
                        {category.badge}
                      </span>
                    </div>
                    <p className="text-xs text-ds-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-ds-border" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ds-text">
              3. Third-Party Cookie Ecosystem
            </h2>
            <p className="text-ds-muted-foreground leading-relaxed text-sm">
              In specific parts of the dashboard lifecycle, trusted third
              parties operate analytical tracking. This includes secure global
              identity layers, encrypted media hosting pipelines for showcasing
              manufacturer facility walkthrough videos, and processing
              infrastructure endpoints.
            </p>
          </section>

          <hr className="border-ds-border" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ds-text">
              4. Browser Controls & Deletion
            </h2>
            <p className="text-ds-muted-foreground leading-relaxed text-sm">
              You can configure, drop, block, or clear cookies via global
              browser-level preference options. Please note that disabling
              essential tracking scripts may lead to authentication failure
              timeouts or fragmented user actions within secure dashboard
              networks.
            </p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-8 space-y-6">
          <div className="ds-always-dark ds-section-dark rounded-2xl p-6 shadow-xl border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ds-primary/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-lg font-bold tracking-tight text-ds-foreground">
              Data Integrity
            </h3>
            <p className="text-xs text-ds-muted-foreground mt-2 leading-relaxed">
              Our policy structures are aligned with global B2B digital data
              standards to ensure safe transaction handshakes and secure
              procurement tracking.
            </p>

            <div className="mt-6 pt-4 border-t border-ds-border space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-ds-muted-foreground">
                  Security Architecture
                </span>
                <span className="text-ds-primary font-medium">
                  Compliance Checked
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-ds-muted-foreground">
                  User Data Control
                </span>
                <span className="text-ds-primary font-medium">
                  Fully Encrypted
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-ds-muted-foreground">
                  AI Pattern Recognition
                </span>
                <span className="text-ds-primary font-medium">Anonymized</span>
              </div>
            </div>
          </div>

          <div className="ds-card p-6 space-y-3">
            <h4 className="text-sm font-bold text-ds-text">
              Need Privacy Support?
            </h4>
            <p className="text-xs text-ds-muted-foreground leading-relaxed">
              If you have questions regarding data storage pipelines, automated
              matching parameters, or corporate entity privileges, reach out to
              our desk.
            </p>
            <a
              href="mailto:privacy@b2bapparel.com"
              className="inline-flex text-xs font-semibold text-ds-primary hover:text-ds-primary/80 underline"
            >
              privacy@b2bapparel.com
            </a>
          </div>
        </aside>
      </div>
    </LegalPageShell>
  );
}
