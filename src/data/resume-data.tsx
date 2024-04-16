import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tony Kabilan Okeke",
  initials: "TKO",
  location: "Philadelphia, PA",
  locationLink: "https://www.google.com/maps/place/Philadelphia",
  about:
    "Data scientist with a passion for leveraging AI/ML to solve complex biomedical problems",
  summary:
    "Data scientist with experience applying machine learning and bioinformatics to drive scientific discovery. Provien track record delivering end-to-end data science solutions, from data infestion and analysis to model development and deployment. Experienced in leading cross-disciplinary teams. Seeking opportunities to leverage my skills in healthcare and AI.",
  avatarUrl: "https://avatars.githubusercontent.com/u/58089381",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "tonykabilanokeke@gmail.com",
    tel: "+16466594319",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kabilan108",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kabilan108/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/kabilan108",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Drexel University",
      degree: "Masters's Degree in Biomedical Engineering",
      comments: "Concentration in Bioinformatics",
      start: "2022",
      end: "2024",
    },
    {
      school: "Drexel University",
      degree: "Bachelor's Degree in Biomedical Engineering",
      comments: "Concentration in Neuroengineering",
      start: "2019",
      end: "2024",
    },
  ],
  work: [
    {
      company: "GSK",
      link: "https://www.gsk.com/",
      badges: [],
      title: "Data Scientist",
      start: "Apr 2023",
      end: "Sep 2023",
      description:
        "Led the development of an internal web app for intuitive visualization and interactive exploration of spatial transcriptiomics data. Enabling data-driven decision making and accelerating research by empowering scientists with tools to derive actionable insights from complex datasets.",
    },
    {
      company: "GSK",
      link: "https://www.gsk.com/",
      badges: [],
      title: "Data Scientist",
      start: "Apr 2022",
      end: "Sep 2022",
      description:
        "Developed state-of-the-art machine learning models for biomarker discovery and toxicity assessment from high-content imaging data. Automated and optimized data analysis workflows, enhancing the efficiency and scalability of safety assessment pipelines."
    },
    {
      company: "Penn Medicine",
      link: "https://www.pennmedicine.org/",
      badges: [],
      title: "Computational Research Assistant",
      start: "Mar 2021",
      end: "Aug 2022",
      description:
        "Advanced the scientific community's understanding of COVID-19 immunology through leading data analysis efforts that resulted in 4 peer-reviewed publications. Empowered the lab's research capabilities by developing automated pipelines for efficient data ingestion and analysis."
    },
    {
      company: "Children's Hospital of Philadelphia",
      link: "https://zhou-lab.github.io/",
      badges: [],
      title: "Research Assistant",
      start: "May 2020",
      end: "June 2021",
      description:
        "Collaborated on the development of a novel software package to support epigenetics research through streamlined methylation data analysis. Ensured robustness and versatility of the tool by validating performance on diverse public datasets.",
    },
  ],
  skills: [
    "Python",
    "R",
    "C++",
    "TypeScript",
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "React/Next.js",
    "FastAPI",
    "Seurat",
    "SquidPy",
    "CellProfiler",
  ],
  projects: [
    {
      title: "MLGO: Machine Learning for Gene Ontology Prediction",
      techStack: [
        "Python",
        "scikit-learn",
        "keras",
        "Deep Learning",
        "Bioinformatics",
      ],
      description: "A autoencoder-based model for gene ontology prediction",
      link: {
        label: "GitHub",
        href: "https://github.com/Kabilan108/mlgo/tree/submission",
      },
    },
    {
      title: "ASD Biomarkers",
      techStack: [
        "bctpy",
        "scikit-learn",
        "Machine Learning",
        "Connectomics",
        "Biomarker discovery"
      ],
      description: "A machine learning-based approach to biomarker discovery for autism spectrum disorder",
      link: {
        label: "GitHub",
        href: "https://github.com/Kabilan108/asd-biomarkers",
      },
    },
    {
      title: "geass",
      techStack: [
        "Side Project",
        "Python",
        "FastAPI",
        "Modal",
        "Transformers",
        "Whisper",
      ],
      description: "A CLI and serverless API for audio transcription using OpenAI Whisper",
      link: {
        label: "GitHub",
        href: "https://github.com/Kabilan108/geass",
      },
    },
  ],
} as const;
