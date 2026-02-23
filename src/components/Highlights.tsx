import { siteConfig } from "@/content/site.config";

export default function Highlights() {
  return (
    <section className="section bg-surface-muted" id="highlights">
      <div className="max-w-desktop mx-auto">
        <h2 className="text-section-title font-bold text-text-heading text-center mb-10">
          Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.highlights.map((item) => (
            <div key={item.title} className="highlight-card text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-text-heading mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
