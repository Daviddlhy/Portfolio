/**
 * @typedef {{ label: string, href: string, external?: boolean, download?: boolean }} ProfileLink
 * @typedef {{ company: string, role: string, period: string, place: string, context?: string, highlights: string[], technologies: string[] }} Experience
 * @typedef {{ category: string, items: string[] }} SkillGroup
 * @typedef {{ degree: string, school: string, period: string, place: string }} Education
 */

/** @type {{
 * name: string,
 * title: string,
 * location: string,
 * language: string,
 * email: string,
 * phone: string,
 * phoneDisplay: string,
 * linkedin: string,
 * cv: string,
 * valueProposition: string,
 * summary: string[],
 * links: ProfileLink[],
 * experiences: Experience[],
 * skillGroups: SkillGroup[],
 * education: Education[],
 * projects: unknown[],
 * approach: { title: string, description: string, tools: string }[],
 * missingInformation: string[]
 * }}
 */
export const profile = {
    name: "David Delhaye",
    title: "Data Engineer",
    location: "Île-de-France",
    language: "Français",
    email: "david.ddelhaye@gmail.com",
    phone: "+33672590422",
    phoneDisplay: "+33 6 72 59 04 22",
    linkedin: "https://www.linkedin.com/in/d-delhaye/",
    cv: "CV_DELHAYE.pdf",
    valueProposition:
        "Je conçois, fiabilise et automatise des pipelines qui transforment la donnée en leviers opérationnels.",
    summary: [
        "Spécialisé en Azure, Snowflake, CI/CD et orchestration Dagster, j’accompagne les entreprises dans la conception et l’automatisation de leurs pipelines de données.",
        "Mon parcours se situe à l’intersection de l’ingénierie data, de la gouvernance avec DataGalaxy et de la BI avec MicroStrategy, avec une attention constante portée à la fiabilité et aux usages métier.",
    ],
    links: [
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/d-delhaye/",
            external: true,
        },
        {
            label: "E-mail",
            href: "mailto:david.ddelhaye@gmail.com",
        },
        {
            label: "Téléphone",
            href: "tel:+33672590422",
        },
        {
            label: "CV",
            href: "CV_DELHAYE.pdf",
            download: true,
        },
    ],
    experiences: [
        {
            company: "Franprix",
            role: "Data Engineer",
            period: "Depuis novembre 2023",
            place: "Ivry-sur-Seine",
            highlights: [
                "Mise en place de pipelines CI/CD avec GitLab et Azure DevOps pour accélérer et sécuriser les déploiements.",
                "Conception de tables et de schémas sous Snowflake pour garantir la fiabilité des données.",
                "Automatisation des processus de Data Gouvernance pour améliorer la qualité et la conformité des données.",
                "Développement de tables analytics et de reportings MicroStrategy pour faciliter le pilotage métier.",
                "Animation et accompagnement de la démarche Data Driven auprès des équipes métier.",
            ],
            technologies: [
                "Python",
                "GitLab",
                "Linux",
                "Docker",
                "Azure DevOps",
                "DataGalaxy",
                "MicroStrategy",
                "Snowflake",
            ],
        },
        {
            company: "Orange Business Services",
            role: "Consultant confirmé Data Scientist",
            period: "Juin 2022 — octobre 2023",
            place: "Paris, France",
            context: "Mission EDF — CSC Datascience & IA",
            highlights: [
                "Développement de dashboards R Shiny pour optimiser les campagnes marketing et faciliter la prise de décision.",
                "Création d’ETL avec PySpark et SparkR pour alimenter les dashboards métier avec des données fiables et à jour.",
                "Analyse et recalibration d’un modèle de scoring afin d’améliorer la précision et la performance des prédictions.",
                "Développement de modules Python réutilisables pour automatiser et standardiser les traitements analytiques.",
            ],
            technologies: [
                "R",
                "Docker",
                "SQL",
                "Oracle Developer",
                "PySpark",
                "SparkR",
                "GitLab",
                "R Shiny",
            ],
        },
        {
            company: "Iliad / Free",
            role: "Data Scientist",
            period: "Novembre 2019 — juin 2022",
            place: "Paris, France",
            highlights: [
                "Création d’ETL alimentant des tables analytics MySQL pour les modèles Tableau, afin de fiabiliser et rendre disponibles les données de reporting.",
                "Automatisation de reportings destinés aux CDT et au directeur Free Réseau.",
                "Mentoring Python et R pour partager les bonnes pratiques et renforcer les compétences de l’équipe.",
                "Participation aux entretiens de stages et CDI, avec évaluation technique et culturelle.",
            ],
            technologies: [
                "Linux",
                "GitLab",
                "Python",
                "R",
                "MySQL",
                "Tableau",
            ],
        },
    ],
    skillGroups: [
        {
            category: "Stockage & modélisation",
            items: ["Snowflake", "MySQL", "SQL", "Tables analytics"],
        },
        {
            category: "Transformation & orchestration",
            items: ["ETL", "PySpark", "SparkR", "Dagster"],
        },
        {
            category: "Cloud & livraison",
            items: ["Azure", "Azure DevOps", "GitLab", "CI/CD", "Docker", "Linux"],
        },
        {
            category: "Langages",
            items: ["Python", "R", "SQL"],
        },
        {
            category: "BI & usages",
            items: ["MicroStrategy", "Tableau", "R Shiny", "Data Analysis"],
        },
        {
            category: "Gouvernance & data science",
            items: ["DataGalaxy", "Data Governance", "Machine Learning"],
        },
    ],
    education: [
        {
            degree: "Mastère Spécialisé Big Data",
            school: "Grenoble École de Management · Grenoble-INP Ensimag",
            period: "2018 — 2019",
            place: "Grenoble, France",
        },
        {
            degree: "Master 2 Mathématiques et Applications",
            school: "Aix-Marseille Université",
            period: "2017 — 2018",
            place: "Marseille, France",
        },
    ],
    projects: [],
    approach: [
        {
            title: "Cadrer l’usage",
            description:
                "Partir du besoin métier, des décisions à éclairer et des contraintes de disponibilité.",
            tools: "Métier · Data Driven",
        },
        {
            title: "Ingest & transform",
            description:
                "Construire des flux reproductibles pour collecter, nettoyer et transformer la donnée.",
            tools: "Python · SQL · PySpark · SparkR",
        },
        {
            title: "Modéliser",
            description:
                "Structurer des tables et schémas fiables, adaptés aux usages analytics et BI.",
            tools: "Snowflake · MySQL",
        },
        {
            title: "Orchestrer",
            description:
                "Automatiser les dépendances et rendre l’exécution des pipelines maintenable.",
            tools: "Dagster · ETL",
        },
        {
            title: "Gouverner",
            description:
                "Documenter les actifs data et renforcer qualité, conformité et appropriation.",
            tools: "DataGalaxy · Data Governance",
        },
        {
            title: "Livrer",
            description:
                "Industrialiser les déploiements pour les rendre plus rapides, sûrs et reproductibles.",
            tools: "GitLab · Azure DevOps · Docker · CI/CD",
        },
        {
            title: "Activer",
            description:
                "Mettre la donnée à disposition dans des reportings et dashboards lisibles par les métiers.",
            tools: "MicroStrategy · Tableau · R Shiny",
        },
    ],
    missingInformation: [
        "Projets personnels ou études de cas détaillées",
        "Certifications",
        "Profil GitHub",
    ],
};
