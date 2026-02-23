import { siteConfig } from "@/content/site.config";

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-surface-muted">
      <div className="max-w-desktop mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-sm text-text-muted space-y-2">
            <p>
              <strong className="text-text-heading">{siteConfig.footer.projectName}</strong>
              {" — "}
              <a
                href={`mailto:${siteConfig.footer.email}`}
                className="text-accent hover:underline"
              >
                {siteConfig.footer.email}
              </a>
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html: siteConfig.footer.templateCredit,
              }}
            />
            <p>{siteConfig.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
