export default function Examples() {
  const placeholders = [1, 2, 3, 4, 5, 6];

  return (
    <section className="section bg-surface-muted" id="examples">
      <div className="max-w-desktop mx-auto">
        <h2 className="text-section-title font-bold text-text-heading text-center mb-10">
          Qualitative Examples
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((i) => (
            <div key={i} className="bg-white rounded-card shadow-card overflow-hidden transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5">
              {/* Replace with actual example images in public/examples/ */}
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-text-light text-sm">
                  Example {i} (placeholder)
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm text-text">
                  Sample scenario description for example {i}. Replace with
                  actual qualitative results.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
