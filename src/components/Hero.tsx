import { siteConfig } from "@/content/site.config";

export default function Hero() {
  return (
    <section className="pt-24 pb-6 px-6">
      <div className="max-w-desktop mx-auto">
        <div className="text-center">
          <h1 className="publication-title text-hero-title-mobile md:text-hero-title font-bold text-text-heading mb-6 leading-tight">
            {siteConfig.fullTitle}
          </h1>

          {/* Authors */}
          <div className="publication-authors text-body-lg mb-3">
            {siteConfig.authors.map((author, i) => (
              <span key={author.name} className="author-block">
                {author.name}
                <sup>{author.affiliations.join(", ")}{author.corresponding ? "*" : ""}</sup>
                {i < siteConfig.authors.length - 1 ? ",\u00A0\u00A0" : ""}
              </span>
            ))}
          </div>

          <p className="text-sm text-text-muted mb-4">* Corresponding author</p>

          {/* Affiliations */}
          <div className="publication-authors text-body-lg mb-6">
            {siteConfig.affiliations.map((aff, i) => (
              <span key={aff.id} className="author-block">
                <sup>{aff.id}</sup>{aff.name}
                {i < siteConfig.affiliations.length - 1 ? "\u00A0\u00A0\u00A0" : ""}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a href={siteConfig.links.paper} className="btn-paper">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z"/>
              </svg>
              Paper
            </a>
            <a href={siteConfig.links.code} className="btn-paper">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Code
            </a>
            <a href={siteConfig.links.dataset} className="btn-paper">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
              </svg>
              Dataset
            </a>
            <a href={siteConfig.links.demo} className="btn-paper">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Demo
            </a>
            <a href={siteConfig.links.bibtex} className="btn-paper">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 15h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2z"/>
              </svg>
              BibTeX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
