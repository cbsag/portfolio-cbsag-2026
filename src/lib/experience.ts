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
      "Built biomedical QA pipelines that retrieved and reranked evidence before generation, then validated whether final answers were supported by their cited sources.",
      "Separated evaluation by retrieval, answer quality, grounding, and citation behavior to identify the stage responsible when a system failed.",
      "Trained and compared BERT-family, CRF, hierarchical, and PPO models for NLP tasks, with attention to class imbalance, per-label performance, and failure cases.",
      "Ran quantized language-model inference with vLLM and Slurm on V100/A100 GPUs for repeatable large-scale evaluation experiments."
    ]
  },
  {
    id: "orangescape",
    role: "Solution Developer",
    organization: "OrangeScape Technologies Pvt Ltd",
    location: "Chennai, India",
    period: "Jul 2022 - Aug 2023",
    bullets: [
      "Worked across upstream and downstream procurement workflows in Kissflow Procurement Cloud, including purchasing, supplier management, approvals, and source-to-pay processes.",
      "Built and integrated GCP-backed services, connecting frontend workflows with backend APIs, validations, business rules, and external and internal service integrations.",
      "Prototyped proof-of-concepts and automation ideas, then helped take selected changes through implementation, testing, and release.",
      "Supported product testing, troubleshooting, and production management with backend, product, and QA teams."
    ]
  },
  {
    id: "basik-intern",
    role: "Software Engineering Intern",
    organization: "Basik Marketing Pvt Ltd",
    location: "Chennai, India",
    period: "May 2022 - Jul 2022",
    bullets: [
      "Built a Python and Node.js broadcast overlay that consumed live match state and updated scores, event counters, and on-screen elements during esports broadcasts."
    ]
  },
  {
    id: "solarillion-research",
    role: "Undergraduate Research Assistant",
    organization: "Solarillion Foundation",
    location: "Chennai, India",
    period: "Jan 2021 - Jan 2022",
    bullets: [
      "Built a two-stage flight-delay prediction pipeline from historical flight data, preparing features, training supervised models, and comparing performance across the pipeline.",
      "Designed citation-intent classification experiments from text preprocessing and feature extraction through model training, label-level evaluation, and error analysis."
    ]
  },
  {
    id: "pals-intern",
    role: "Software Engineering Intern",
    organization: "PALS: An Initiative by Alumni Fraternity of IITs",
    location: "India",
    period: "Jan 2021 - Jun 2021",
    bullets: [
      "Built an interactive virtual-lab simulator for the Synchro Transmitter/Receiver experiment, reproducing the experiment flow and expected outputs in software."
    ]
  }
];
