import { assetPath } from "@/content/basePath";

export default function Teaser() {
  return (
    <section className="pb-12 px-6">
      <div className="max-w-desktop mx-auto">
        <div className="pt-0 pb-12">
          <img
            src={assetPath("/overview.png")}
            alt="RoadSafe365 framework overview"
            className="w-full rounded-card"
          />
          <h2 className="font-display text-center text-text-muted mt-4 text-body-lg">
            RoadSafe365 framework overview.
          </h2>
        </div>
      </div>
    </section>
  );
}
