export type Project = {
  id: string;
  title: string;
  period: string;
  tags: string[];
  summary: string;
  description?: string;
  repo?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "gestion-etudiants",
    title: "Système de gestion des étudiants (Web & Mobile)",
    period: "2025 - 2026",
    tags: ["React", "Node.js", "Express", "MySQL", "Kotlin", "REST API"],
    summary:
      "Plateforme complète de gestion des étudiants avec application web et mobile.",
    description:
      "Développement d’un système full-stack avec API REST en Node.js/Express, interface web en React et application mobile Android en Kotlin. Gestion des étudiants, absences, notes et authentification sécurisée avec MySQL.",
    repo: "https://github.com/salmaly-ui/ProjetGestionAbs.git",
    link: "https://github.com/salmaly-ui/ProjetGestionAbs.git"
  },

  {
    id: "gestion-incidents",
    title: "Système de gestion des incidents",
    period: "2025",
    tags: ["PHP", "MySQL", "MVC", "DataTables"],
    summary: "Application pour déclarer et gérer les incidents.",
    description:
      "Architecture MVC avec gestion des utilisateurs, affichage dynamique des incidents, filtres avancés et statistiques avec Chart.js.",
    repo: "https://github.com/ASMALAOUY/Gestion-des-Incidents"
  },

  {
    id: "medicab",
    title: "MediCab+",
    period: "2025",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    summary: "Site de gestion de cabinet médical.",
    description:
      "Interface pour patients et médecins avec gestion des rendez-vous, authentification et suivi des consultations.",
    
  },

  {
    id: "portfolio",
    title: "Portfolio personnel",
    period: "2026",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    summary: "Portfolio moderne avec animations et SEO.",
    description:
      "Portfolio professionnel avec React, routing avancé, dark mode, SEO optimisé et déploiement Vercel.",
    repo: "https://github.com/salmaly-ui/ProjetGestionAbs.git",
    link: "https://ton-portfolio.vercel.app"
  },
  {
  id: "course-recommendation",
  title: "Système de recommandation de cours (Machine Learning)",
  period: "2026",
  tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
  summary: "Moteur intelligent de recommandation de cours basé sur les préférences utilisateur.",
  description:
    "Projet de Machine Learning utilisant Python, Pandas et Scikit-learn pour analyser les données utilisateurs et recommander des cours pertinents selon leurs compétences et intérêts. Modèle basé sur le filtrage collaboratif et contenu.",
  repo: "https://github.com/ASMALAOUY/course-recommendation",
  link: "https://github.com/ASMALAOUY/course-recommendation"
}
];
