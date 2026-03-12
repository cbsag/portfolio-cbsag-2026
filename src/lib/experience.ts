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
      "Work on information retrieval, biomedical text analysis, and retrieval-augmented generation with LLMs and PLMs.",
      "Built systems for MedHopQA and TREC BioGen Task-B with evidence-linked generation pipelines.",
      "Created annotation and preprocessing pipelines using GATE for structured analysis.",
      "Collaborated on retrieval workflows for corpus-based journalism research."
    ]
  },
  {
    id: "concordia-ta",
    role: "Teaching Assistant",
    organization: "Concordia University",
    location: "Montreal, Canada",
    period: "09/2024 - Present",
    bullets: [
      "Teaching Assistant for COMP 479/6791 (Information Retrieval and Web Search).",
      "Teaching Assistant for COMP 232 (Mathematics for Computer Science).",
      "Support coursework, assignment feedback, project development, and grading.",
      "Help students translate core IR concepts into practical implementations."
    ]
  },
  {
    id: "orangescape",
    role: "Solution Developer",
    organization: "OrangeScape Technologies Pvt Ltd",
    location: "Chennai, India",
    period: "07/2022 - 08/2023",
    bullets: [
      "Developed product features for the Kissflow Procurement Cloud team.",
      "Integrated backend scripts in a low-code/no-code platform architecture.",
      "Worked on workflow automation and software testing for stable deployments."
    ]
  },
  {
    id: "basik-intern",
    role: "Software Engineering Intern (Backend)",
    organization: "Basik Marketing Pvt Ltd",
    location: "Chennai, India",
    period: "05/2022 - 07/2022",
    bullets: [
      "Built backend components for The Esports Club platform.",
      "Evaluated platform specifications and implemented performance-oriented services.",
      "Supported production reliability for gaming and esports use cases."
    ]
  },
  {
    id: "solarillion-ra",
    role: "Undergraduate Research Assistant",
    organization: "Solarillion Foundation",
    location: "India",
    period: "01/2021 - 01/2022",
    bullets: [
      "Developed a two-stage machine learning engine for flight delay prediction.",
      "Worked on citation intent classification and supervised text analysis tasks."
    ]
  },
  {
    id: "pals-intern",
    role: "Software Engineering Intern",
    organization: "PALS (Initiative by Alumni Fraternity of IITs)",
    location: "India",
    period: "01/2021 - 06/2021",
    bullets: [
      "Developed a simulator for Synchro-Transmitter and Receiver Characteristics experiments.",
      "Built under NIT Karnataka supervision with Ministry of Education guideline compliance."
    ]
  }
];
