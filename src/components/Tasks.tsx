import { siteConfig } from "@/content/site.config";

export default function Tasks() {
  return (
    <section className="section" id="tasks">
      <div className="max-w-desktop mx-auto">
        <h2 className="text-section-title font-bold text-text-heading text-center mb-10">
          Tasks &amp; Taxonomy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.tasks.map((task) => (
            <div key={task.title} className="task-card">
              <h3 className="text-lg font-bold text-text-heading mb-3">
                {task.title}
              </h3>
              <p className="text-sm text-text leading-relaxed">
                {task.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
