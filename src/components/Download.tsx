import { siteConfig } from "@/content/site.config";

export default function Download() {
  return (
    <section className="section bg-surface-muted" id="download">
      <div className="max-w-desktop mx-auto">
        <h2 className="text-section-title font-bold text-text-heading text-center mb-6">
          Download
        </h2>
        <p className="text-body text-text text-center mb-8 max-w-2xl mx-auto">
          {siteConfig.download.description}
        </p>
        <div className="max-w-lg mx-auto flex flex-col gap-4">
          {siteConfig.download.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="download-card group"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="font-medium text-text-heading group-hover:text-accent transition-colors">
                  {link.label}
                </span>
              </div>
              <span className="text-sm text-text-muted">{link.size}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
