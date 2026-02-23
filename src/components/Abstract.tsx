import { siteConfig } from "@/content/site.config";

export default function Abstract() {
  return (
    <section className="section" id="abstract">
      <div className="max-w-desktop mx-auto">
        <div className="max-w-[80%] mx-auto text-center">
          <h2 className="text-section-title font-bold text-text-heading mb-6">
            Abstract
          </h2>
          <div
            className="text-body text-justify leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{
              __html: siteConfig.abstract
                .split("\n\n")
                .map((p) => `<p>${p.trim()}</p>`)
                .join(""),
            }}
          />
        </div>
      </div>
    </section>
  );
}
