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
    period: "Sep 2023 - Present",
    bullets: [
      "Built retrieval and QA pipelines over 26.8M PubMed documents using BM25, MedCPT, cross-encoder reranking, and evidence selection.",
      "Ran quantized Qwen inference on GPU-based HPC using vLLM and Slurm for large-scale generation and evaluation.",
      "Developed evaluation workflows to separate retrieval, answer quality, grounding, and citation failures for TREC and BioCreative shared-task systems.",
      "Trained BERT-family, CRF, hierarchical, and PPO models for sequence labeling, and built NER pipelines across biomedical and news text."
    ]
  },
  {
    id: "concordia-ta",
    role: "Teaching Assistant",
    organization: "Concordia University",
    location: "Montreal, Canada",
    period: "Sep 2024 - May 2026",
    bullets: [
      "Led tutorials and office hours for Information Retrieval and Web Search (COMP 479/6791) and Discrete Mathematics (COMP 232).",
      "Supported assignments, grading, and technical questions."
    ]
  },
  {
    id: "orangescape",
    role: "Solution Developer",
    organization: "OrangeScape Technologies Pvt Ltd",
    location: "Chennai, India",
    period: "Jul 2022 - Aug 2023",
    bullets: [
      "Developed procurement workflows and product features for Kissflow Procurement Cloud across purchasing, approvals, supplier management, and source-to-pay processes.",
      "Built API services on Google Cloud Platform and translated business requirements into workflow rules, validations, and approval paths with backend and product teams."
    ]
  },
  {
    id: "basik-intern",
    role: "Software Engineering Intern",
    organization: "Basik Marketing Pvt Ltd",
    location: "Chennai, India",
    period: "May 2022 - Jul 2022",
    bullets: [
      "Developed a real-time esports broadcast overlay with Python and Node.js, including backend logic for live match and event counters."
    ]
  }
];
