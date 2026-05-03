export type Experience = {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
  supervisor?: string;
};
export const experiences: Experience[] = [
  {
    id: "college-alqods",
    company: "Collège Al Qods",
    position: "Stagiaire Informatique",
    location: "Marrakech, Maroc",
    startDate: "2025-10",
    endDate: "2026-07",
    current: true,
    description: [
      "Accompagnement des activités pédagogiques numériques",
      "Assistance à l’utilisation des outils informatiques en classe",
      "Soutien scolaire aux élèves dans l’utilisation des outils numériques",
      "Support technique de base (installation et maintenance)",
      "Participation à l’intégration du numérique dans l’enseignement"
    ],
    technologies: ["Bureautique", "Réseaux", "Windows"]
  },
  {
    id: "prefecture-safi",
    company: "Préfecture de Safi",
    position: "Stagiaire Développement Informatique",
    location: "Safi, Maroc",
    startDate: "2025-08",
    endDate: "2025-09",
    current: false,
    description: [
      "Développement d’un système de gestion des incidents basé sur l’architecture MVC",
      "Gestion des utilisateurs et suivi des incidents",
      "Implémentation de statistiques pour l’analyse des données",
      "Amélioration des processus internes par la digitalisation"
    ],
    technologies: ["PHP", "MySQL", "MVC", "Bootstrap"]
  },
  {
    id: "ghm-labs",
    company: "GHM Labs",
    position: "Stagiaire Développement Web",
    location: "Kénitra, Maroc",
    startDate: "2025-07",
    endDate: "2025-08",
    current: false,
    description: [
      "Développement de fonctionnalités backend avec PHP et MySQL",
      "Optimisation de l’interface utilisateur et du responsive design",
      "Correction de bugs et amélioration des performances",
      "Travail en équipe sur des projets web"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "CSS"]
  },
  {
    id: "lycee-zineb",
    company: "Lycée Zineb Ennafzaoui",
    position: "Stage en milieu scolaire",
    location: "El Jadida, Maroc",
    startDate: "2024-11",
    endDate: "2025-06",
    current: false,
    description: [
      "Assistance à la gestion informatique de l’établissement",
      "Participation à l’accompagnement pédagogique numérique",
      "Soutien à l’utilisation des outils informatiques",
      "Support technique pour enseignants et élèves"
    ],
    technologies: ["Bureautique", "Réseaux", "Windows"]
  },
  {
    id: "college-almajd",
    company: "Collège Almajd",
    position: "Stagiaire Informatique",
    location: "Maroc",
    startDate: "2023-11",
    endDate: "2025-06",
    current: false,
    description: [
      "Gestion des absences via la plateforme Massar",
      "Création de documents et supports pédagogiques",
      "Assistance technique (ordinateurs et réseau)",
      "Initiation des élèves à l’outil informatique"
    ],
    technologies: ["Massar", "Bureautique", "Réseaux"]
  }
];