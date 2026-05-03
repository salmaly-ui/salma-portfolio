export type Project = {
  id: string;
  title: string;
  period: string;
  tags: string[];
  summary: string;
  description?: string;
  repo?: string;
  link?: string;
  demo?: string;
};

export const projects: Project[] = [
{
  id: "gestion-atelier-auto",
  title: "Système de gestion d'un atelier automobile",
  period: "2025 - 2026",
  tags: ["Java", "POO", "Swing", "MySQL"],
  summary: "Application de gestion d’un atelier automobile pour le suivi des clients, véhicules et réparations.",
  description: "Développement d’une application en Java basée sur la programmation orientée objet (POO). Le système permet de gérer les clients, les véhicules, les interventions (réparations), ainsi que la facturation. Une interface graphique a été réalisée avec Java Swing et les données sont stockées dans une base MySQL.",
  repo: "",
  link: ""
},
  {
    id: "gestion-incidents",
    title: "Système de gestion des incidents",
    period: "2025",
    tags: ["PHP", "MySQL", "MVC", "DataTables"],
    summary: "Application pour déclarer et gérer les incidents.",
    description: "Architecture MVC avec gestion des utilisateurs, affichage dynamique des incidents, filtres avancés et statistiques avec Chart.js.",
    repo: "https://github.com/ASMALAOUY/Gestion-des-Incidents"
  },
  {
    id: "medicab",
    title: "MediCab+",
    period: "2025",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    summary: "Site de gestion de cabinet médical.",
    description: "Interface pour patients et médecins avec gestion des rendez-vous, authentification et suivi des consultations."
  },
  {
    id: "portfolio",
    title: "Portfolio personnel",
    period: "2026",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    summary: "Portfolio moderne avec animations et SEO.",
    description: "Portfolio professionnel avec React, routing avancé, dark mode, SEO optimisé et déploiement Vercel.",
    repo: "https://github.com/salmaly-ui/salma-portfolio.git",
    link: "https://github.com/salmaly-ui/salma-portfolio.git"
  },
  {
    id: "course-recommendation",
    title: "Système de recommandation de cours (Machine Learning)",
    period: "2026",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    summary: "Moteur intelligent de recommandation de cours basé sur les préférences utilisateur.",
    description: "Projet de Machine Learning utilisant Python, Pandas et Scikit-learn pour analyser les données utilisateurs et recommander des cours pertinents selon leurs compétences et intérêts. Modèle basé sur le filtrage collaboratif et contenu.",
    repo: "https://github.com/ASMALAOUY/course-recommendation",
    link: "https://github.com/ASMALAOUY/course-recommendation"
  },
  {
    id: "gestion-absences-medicales",
    title: "Plateforme de Gestion des Absences Médicales",
    period: "2026",
    tags: ["React", "TypeScript", "Tailwind CSS", "API"],
    summary: "Application web complète pour gérer les absences médicales des étudiants.",
    description: "Plateforme développée avec React et TypeScript permettant la gestion des absences, la justification avec justificatifs, et le suivi en temps réel. Interface responsive, moderne et intuitive.",
    repo: "https://github.com/salmaly-ui/ProjetGestionAbsences.git",
    demo: "https://youtu.be/ObvHp1lmP58?si=cDIsZb9fZdr3NR8f"
  }
];