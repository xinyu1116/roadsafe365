import { siteConfig } from "@/content/site.config";

export default function Benchmark() {
  return (
    <section className="section" id="benchmark">
      <div className="max-w-desktop mx-auto">
        <h2 className="text-section-title font-bold text-text-heading text-center mb-10">
          Benchmark Results
        </h2>
        <div className="max-w-[80%] mx-auto overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-text-heading">
                <th className="text-left py-3 px-4 font-bold text-text-heading">
                  Model
                </th>
                <th className="text-center py-3 px-4 font-bold text-text-heading">
                  Hazard Det.
                </th>
                <th className="text-center py-3 px-4 font-bold text-text-heading">
                  Risk Assess.
                </th>
                <th className="text-center py-3 px-4 font-bold text-text-heading">
                  Safety Pred.
                </th>
                <th className="text-center py-3 px-4 font-bold text-text-heading">
                  Scene Under.
                </th>
              </tr>
            </thead>
            <tbody>
              {siteConfig.benchmarkResults.map((row, idx) => (
                <tr
                  key={row.model}
                  className={`border-b border-surface-border ${
                    idx === siteConfig.benchmarkResults.length - 1
                      ? "font-bold bg-surface-muted"
                      : ""
                  }`}
                >
                  <td className="py-3 px-4 text-text-heading font-medium">
                    {row.model}
                  </td>
                  <td className="py-3 px-4 text-center">{row.hazardDet}</td>
                  <td className="py-3 px-4 text-center">{row.riskAssess}</td>
                  <td className="py-3 px-4 text-center">{row.safetyPred}</td>
                  <td className="py-3 px-4 text-center">{row.sceneUnder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
