export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "clac-ra",
    role: "Research Assistant",
    organization: "CLaC Lab, Concordia University",
    location: "Montreal, Canada",
    period: "09/2023 - Present",
    bullets: [
      "Develop classification, sequence-labeling, span-prediction, and information extraction systems with Python, PyTorch, Transformers, CRFsuite, and scikit-learn.",
      "Built hierarchical and PPO-based approaches for class-imbalanced negation detection and related biomedical NLP analysis.",
      "Designed sparse and dense retrieval pipelines with BM25, Pyserini/Lucene, MedCPT, FAISS, cross-encoder reranking, and TF-IDF/MMR.",
      "Processed 26.8 million PubMed documents and built evaluation workflows for answer accuracy, retrieval quality, evidence grounding, and citation reliability."
    ]
  },
  {
    id: "concordia-ta",
    role: "Teaching Assistant",
    organization: "Concordia University",
    location: "Montreal, Canada",
    period: "09/2024 - 05/2026",
    bullets: [
      "Supported COMP 479 (Information Retrieval and Web Search) and COMP 232 (Discrete Mathematics) through tutorials, office hours, grading, and assignment guidance.",
      "Helped undergraduate and graduate students translate core information retrieval and discrete mathematics concepts into working solutions.",
      "Provided technical clarification on assignments, evaluation criteria, and project implementation details."
    ]
  },
  {
    id: "orangescape",
    role: "Solution Developer",
    organization: "OrangeScape Technologies Pvt Ltd",
    location: "Chennai, India",
    period: "07/2022 - 08/2023",
    bullets: [
      "Developed application features and workflow automation for Kissflow Procurement Cloud across purchasing, approvals, supplier management, and source-to-pay flows.",
      "Designed workflow rules, forms, validations, and approval paths from business requirements in Kissflow's low-code platform.",
      "Built API services on Google Cloud Platform and partnered with backend and product teams to integrate procurement data and ship tested features."
    ]
  },
  {
    id: "basik-intern",
    role: "Software Engineering Intern",
    organization: "Basik Marketing Pvt Ltd",
    location: "Chennai, India",
    period: "05/2022 - 07/2022",
    bullets: [
      "Developed a real-time esports broadcast overlay using Python and Node.js.",
      "Built backend logic that updated match and event counters dynamically during live streams."
    ]
  }
];
