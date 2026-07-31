import type {
  ContactItem,
  Education,
  Experience,
  NavigationItem,
  Profile,
  SkillCategory,
} from "@/types/content";

// INFORMATIONS PRINCIPALES
export const profile: Profile = {
  name: "David Delhaye",
  initials: "DD",
  title: "Data Engineer",
  summary: [
    "Issu d’un parcours en Data Science et BI, je me suis spécialisé en Data Engineering autour des technologies Azure et Snowflake.",
    "J’interviens sur l’industrialisation des traitements, les pipelines de données et l’automatisation des déploiements.",
  ],
  stack: [
    "Azure",
    "Snowflake",
    "Python",
    "SQL",
    "PySpark",
    "Docker",
    "CI/CD",
    "DevOps",
    "Data Platform",
  ],
  location: "Île-de-France",
  workMode: "Télétravail ou présentiel",
  language: "Français",
  email: "david.ddelhaye@gmail.com",
  phone: "+33672590422",
  phoneDisplay: "+33 6-72-59-04-22",
  linkedin: "https://www.linkedin.com/in/d-delhaye/",
  image: "/profile.jpeg",
  imageAlt: "Portrait de David Delhaye",
  cv: "/CV_DELHAYE.pdf",
};

export const site = {
  title: "David Delhaye — Data Engineer",
  description:
    "David Delhaye, Data Engineer spécialisé en Data Engineering autour des technologies Azure et Snowflake.",
  locale: "fr_FR",
};

export const navigation: NavigationItem[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Profil", href: "#a-propos" },
  { label: "Parcours", href: "#experiences" },
  { label: "Expertise", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Blog", href: "#journal" },
  { label: "Formation", href: "#formations" },
  { label: "Contact", href: "#contact" },
];

export const interfaceLabels = {
  skipToContent: "Aller au contenu principal",
  backHome: "David Delhaye — accueil",
  mainNavigation: "Navigation principale",
  mobileNavigation: "Navigation mobile",
  openMenu: "Ouvrir le menu",
  closeMenu: "Fermer le menu",
  viewExperience: "Voir mon parcours",
  contactMe: "Me contacter",
  mainStack: "Stack principale",
  downloadCv: "Télécharger le CV",
  backToTop: "Retour en haut",
  availability: "Disponible pour de nouveaux projets",
  heroEyebrow: "Data engineering · Cloud · Industrialisation",
  experienceCount: "4 expériences",
  skillsIntro: "Des outils choisis pour construire, automatiser et fiabiliser les plateformes data.",
  contactKicker: "Un projet data à structurer ?",
  contactHeadline: "Parlons data.",
  contactIntro: "Échangeons sur vos enjeux de plateforme, de migration ou d’industrialisation.",
  previousSection: "Vue précédente",
  nextSection: "Vue suivante",
  sectionNavigation: "Navigation par vues",
  keyboardHint: "Flèches gauche / droite",
  selectExperience: "Sélectionner une expérience",
  projectsSoonTitle: "Projets personnels",
  projectsSoonMessage: "Cette section sera bientôt créée.",
  blogSoonTitle: "Blog & photographies",
  blogSoonMessage: "Cette section sera bientôt créée.",
  comingSoon: "Bientôt",
  profileStatementLead: "Je transforme les besoins data en systèmes",
  profileStatementAccent: "fiables et durables.",
  skillsHeadingLead: "Stack",
  skillsHeadingAccent: "& outils",
  educationHeadingLead: "Formation",
  educationHeadingAccent: "académique",
};

export const sectionContent = {
  home: { index: "01", title: "Accueil" },
  about: { index: "02", title: "Profil" },
  experience: { index: "03", title: "Parcours" },
  skills: { index: "04", title: "Expertise" },
  projects: { index: "05", title: "Projets" },
  journal: { index: "06", title: "Blog" },
  education: { index: "07", title: "Formation" },
  contact: { index: "08", title: "Contact" },
};

export const profileFocus = ["Data Science", "BI", "Data Engineering"];

// EXPÉRIENCES PROFESSIONNELLES
export const experiences: Experience[] = [
  {
    role: "Data Engineer",
    company: "Franprix",
    location: "Ivry-sur-Seine",
    period: "Depuis nov. 2023 (2 ans ½)",
    missions: [
      "Migration de solutions Data On-Premise vers Azure (Azure DevOps, Azure Pipelines).",
      "Industrialisation des déploiements via Azure Artifacts et développement d’images Docker.",
      "Conception et automatisation de traitements sous Snowflake (bases analytiques, Tasks, Stored Procedures).",
      "Automatisation des processus de gouvernance via les API DataGalaxy.",
      "Contrôle de cohérence des indicateurs entre MicroStrategy et DataGalaxy.",
      "Interface entre les équipes Data et IT, animation de formations et mentorat.",
      "Réalisation de reportings et d’analyses ad hoc.",
    ],
  },
  {
    role: "Consultant Confirmé Data Scientist",
    company: "Orange Business Services",
    location: "Paris, France",
    period: "De juin 2022 à oct. 2023 (1 an+)",
    missions: [
      "Conception de pipelines de données avec PySpark.",
      "Développement et déploiement d’environnements Docker.",
      "Développement de dashboards sous Dash et R Shiny.",
      "Audit et optimisation d’un modèle de recouvrement des créances.",
      "Référent Spark : accompagnement des équipes sur les bonnes pratiques et l’environnement technique.",
    ],
  },
  {
    role: "Data Scientist",
    company: "Iliad / Free",
    location: "Paris, France",
    period: "De nov. 2019 à juin 2022 (2 ans ½)",
    missions: [
      "Conception de bases de données analytiques et de tableaux de bord décisionnels sous Tableau.",
      "Réalisation d’études ad hoc et développement de modèles de Machine Learning.",
      "Administration et optimisation de serveurs Linux.",
      "Participation au recrutement de profils Data (évaluation technique).",
    ],
  },
  {
    role: "Mentor – Parcours Data Engineer",
    company: "OpenClassrooms",
    location: "Paris",
    period: "Depuis oct. 2025 (10 mois)",
    missions: [
      "Coaching : définition d’objectifs, cadrage de sprints et suivi de la progression pour booster l’autonomie des apprenants.",
      "Transmission des bonnes pratiques sur Python, SQL, la modélisation de données et le software engineering (Git, Clean Code).",
    ],
  },
];

// COMPÉTENCES
export const skills: SkillCategory[] = [
  { name: "Cloud", items: ["Microsoft Azure", "Snowflake"] },
  {
    name: "Data Engineering",
    items: ["PySpark", "SQL", "ELT/ETL", "Data Modeling"],
  },
  {
    name: "DevOps",
    items: ["Docker", "Azure DevOps", "Azure Pipelines", "Git"],
  },
  { name: "BI & Gouvernance", items: ["MicroStrategy", "DataGalaxy"] },
  { name: "Langages", items: ["Python", "SQL", "R"] },
];

// FORMATIONS
export const education: Education[] = [
  {
    degree: "Mastère Spécialisé Big Data (parcours académique validé)",
    school: "Grenoble École de Management - Grenoble-INP Ensimag",
    location: "Grenoble, France",
    period: "De 2018 à 2019",
  },
  {
    degree: "Master 2 Mathématiques et Applications",
    school: "Aix Marseille Université",
    location: "Marseille, France",
    period: "De 2017 à 2018",
  },
];

// CONTACT
export const contactItems: ContactItem[] = [
  {
    kind: "email",
    label: "E-mail",
    value: "david.ddelhaye@gmail.com",
    href: "mailto:david.ddelhaye@gmail.com",
  },
  {
    kind: "phone",
    label: "Téléphone",
    value: "+33 6-72-59-04-22",
    href: "tel:+33672590422",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/d-delhaye",
    href: "https://www.linkedin.com/in/d-delhaye/",
    external: true,
  },
  {
    kind: "location",
    label: "Localisation",
    value: "Île-de-France",
  },
  {
    kind: "workMode",
    label: "Mode de travail",
    value: "Télétravail ou présentiel",
  },
];

export const footerContent = {
  identity: "David Delhaye — Data Engineer",
};
