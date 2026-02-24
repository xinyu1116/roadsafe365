import { assetPath } from "@/content/basePath";

export default function Overview() {
  return (
    <section className="section" id="overview">
      <div className="max-w-desktop mx-auto">
        <h2 className="text-section-title font-bold text-text-heading text-center mb-10">
          Overview
        </h2>
        <div className="max-w-[80%] mx-auto">
          <img
            src={assetPath("/pipeline_roadsafe.png")}
            alt="RoadSafe365 pipeline overview"
            className="w-full rounded-card shadow-card"
          />
          <p className="text-center text-text-muted mt-4 text-sm">
            Figure: RoadSafe365 data collection and annotation pipeline.
          </p>
        </div>
      </div>
    </section>
  );
}
