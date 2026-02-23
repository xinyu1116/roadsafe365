import { siteConfig } from "@/content/site.config";

export default function Statistics() {
  return (
    <section className="section bg-surface-muted" id="statistics">
      <div className="max-w-desktop mx-auto">
        <h2 className="text-section-title font-bold text-text-heading text-center mb-10">
          Dataset Statistics
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.statsCards.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-text-heading mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
