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
    period: "Sep 2023 - Aug 2026",
    bullets: [
      "Built retrieval and QA pipelines over 26.8M PubMed documents using BM25, MedCPT, cross-encoder reranking, evidence selection, and LLM generation for thesis and shared-task research.",
      "Ran quantized Qwen inference with vLLM and Slurm on V100/A100 GPUs, making 32B-model generation practical for large-scale evaluation runs.",
      "Developed evaluation workflows to separate retrieval, answer quality, grounding, and citation failures, helping compare system variants and identify where errors originated.",
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
      "Led tutorials and office hours for Information Retrieval and Web Search (COMP 479/6791) and Discrete Mathematics (COMP 232), helping students work through assignments and technical questions."
    ]
  },
  {
    id: "orangescape",
    role: "Solution Developer",
    organization: "OrangeScape Technologies Pvt Ltd",
    location: "Chennai, India",
    period: "Jul 2022 - Aug 2023",
    bullets: [
      "Built GCP-backed API services and translated product requirements into workflow rules, validations, and approval paths for Kissflow Procurement Cloud.",
      "Developed product features across purchasing, approvals, supplier management, and source-to-pay workflows with backend and product teams."
    ]
  },
  {
    id: "basik-intern",
    role: "Software Engineering Intern",
    organization: "Basik Marketing Pvt Ltd",
    location: "Chennai, India",
    period: "May 2022 - Jul 2022",
    bullets: [
      "Developed a real-time esports broadcast overlay with Python and Node.js, automating live match and event-counter updates for the broadcast interface."
    ]
  }
];
