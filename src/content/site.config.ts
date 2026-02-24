export const siteConfig = {
  title: "RoadSafe365",
  fullTitle:
    "Understanding Real-World Traffic Safety through RoadSafe365 Benchmark",
  description:
    "A comprehensive benchmark for understanding real-world traffic safety scenarios.",

  authors: [
    { name: "Xinyu Liu", affiliations: [1] },
    { name: "Darryl C. Jacob", affiliations: [1] },
    { name: "Yuxin Liu", affiliations: [2] },
    { name: "Xinsong Du", affiliations: [3] },
    { name: "Muchao Ye", affiliations: [4] },
    { name: "Bolei Zhou", affiliations: [2] },
    { name: "Pan He", affiliations: [1], corresponding: true },
  ],

  affiliations: [
    { id: 1, name: "Auburn University" },
    { id: 2, name: "University of California, Los Angeles" },
    { id: 3, name: "Harvard Medical School" },
    { id: 4, name: "The University of Iowa" },
  ],

  links: {
    paper: "#",
    code: "#",
    dataset: "#",
    demo: "#",
    bibtex: "#BibTeX",
  },

  navItems: [
    { label: "Abstract", href: "#abstract" },
    { label: "Highlights", href: "#highlights" },
    { label: "Overview", href: "#overview" },
    { label: "Statistics", href: "#statistics" },
    { label: "Tasks", href: "#tasks" },
    { label: "Examples", href: "#examples" },
    { label: "Benchmark", href: "#benchmark" },
    { label: "Download", href: "#download" },
    { label: "BibTeX", href: "#BibTeX" },
  ],

  abstract: `Traffic safety analysis is critical for reducing road fatalities and injuries worldwide. However, existing datasets and benchmarks often fall short in capturing the full complexity of real-world traffic scenarios. They tend to focus on limited geographic regions, specific weather conditions, or narrow sets of safety-critical events, making it difficult to develop models that generalize across diverse environments. To address these limitations, we introduce <strong>RoadSafe365</strong>, a large-scale benchmark designed for comprehensive traffic safety understanding. Our dataset covers a wide range of real-world driving scenarios across different seasons, weather conditions, times of day, and geographic locations. Each scenario is richly annotated with detailed safety-relevant attributes, enabling fine-grained analysis of traffic safety factors. RoadSafe365 supports multiple tasks including hazard detection, risk assessment, and safety-critical event prediction. We provide extensive baseline evaluations using state-of-the-art models, revealing significant room for improvement in current approaches. Our benchmark establishes a new standard for evaluating traffic safety understanding systems.  The dataset and benchmark are released to facilitate research in traffic safety analysis and autonomous driving safety.`,

  highlights: [
    {
      icon: "🎯",
      title: "Comprehensive Coverage",
      description:
        "Spanning diverse geographic locations, weather conditions, and times of day for robust real-world traffic safety analysis.",
    },
    {
      icon: "📊",
      title: "Rich Annotations",
      description:
        "Detailed safety-relevant attributes including hazard types, risk levels, and environmental factors for each scenario.",
    },
    {
      icon: "🔬",
      title: "Multi-Task Benchmark",
      description:
        "Supporting hazard detection, risk assessment, safety prediction, and more with comprehensive evaluation protocols.",
    },
    {
      icon: "🚀",
      title: "Scalable Pipeline",
      description:
        "Automated annotation pipeline enabling efficient dataset expansion while maintaining high annotation quality.",
    },
  ],

  datasetStats: {
    videos: "36,000+",
    qa_pairs: "210,000+",
    attributes: "150+",
    scenarios: "50+",
  },

  statsCards: [
    { label: "Videos", value: "36,000+", icon: "🎬" },
    { label: "QA Pairs", value: "210,000+", icon: "💬" },
    { label: "Attributes", value: "150+", icon: "🏷️" },
    { label: "Scenarios", value: "50+", icon: "🗂️" },
  ],

  tasks: [
    {
      title: "Hazard Detection",
      description:
        "Identify and localize potential hazards in driving scenarios including pedestrians, obstacles, and adverse road conditions.",
    },
    {
      title: "Risk Assessment",
      description:
        "Evaluate the risk level of driving scenarios based on environmental factors, traffic density, and road conditions.",
    },
    {
      title: "Safety Prediction",
      description:
        "Predict future safety-critical events based on current driving context and historical patterns.",
    },
    {
      title: "Scene Understanding",
      description:
        "Comprehensive understanding of traffic scenes including weather, lighting, road type, and traffic participant behaviors.",
    },
  ],

  benchmarkResults: [
    { model: "Baseline-A", hazardDet: "42.3", riskAssess: "38.7", safetyPred: "35.2", sceneUnder: "51.4" },
    { model: "Baseline-B", hazardDet: "48.1", riskAssess: "43.5", safetyPred: "39.8", sceneUnder: "55.2" },
    { model: "Baseline-C", hazardDet: "51.6", riskAssess: "46.2", safetyPred: "42.1", sceneUnder: "58.7" },
    { model: "GPT-4V", hazardDet: "56.3", riskAssess: "52.8", safetyPred: "47.5", sceneUnder: "63.1" },
    { model: "Human", hazardDet: "89.2", riskAssess: "85.6", safetyPred: "78.3", sceneUnder: "92.4" },
  ],

  bibtex: `@article{liu2026understanding,
  title={Understanding Real-World Traffic Safety through RoadSafe365 Benchmark},
  author={Liu, Xinyu and Jacob, Darryl C and Liu, Yuxin and Du, Xinsong and Ye, Muchao and Zhou, Bolei and He, Pan},
  journal={arXiv preprint arXiv:2602.07212},
  year={2026}
}`,

  download: {
    description:
      "The RoadSafe365 dataset is available for download for academic research purposes. Please review our terms of use before downloading.",
    links: [
      { label: "Full Dataset", href: "#", size: "Coming Soon" },
      { label: "Annotations Only", href: "#", size: "Coming Soon" },
      { label: "Evaluation Kit", href: "#", size: "Coming Soon" },
    ],
  },

  footer: {
    projectName: "RoadSafe365",
    email: "contact@example.com",
    copyright: `© ${new Date().getFullYear()} RoadSafe365 Team. All rights reserved.`,
    templateCredit:
      'This website is adapted from <a href="https://github.com/nerfies/nerfies.github.io" class="underline hover:text-accent" target="_blank" rel="noopener noreferrer">Nerfies</a>, licensed under a <a href="https://creativecommons.org/licenses/by-sa/4.0/" class="underline hover:text-accent" target="_blank" rel="noopener noreferrer">Creative Commons Attribution-ShareAlike 4.0 International License</a>.',
  },
};
