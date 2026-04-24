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
    id: "prefecture-safi",
    company: "Préfecture de Safi",
    position: "Stagiaire Développement Web",
    location: "Safi, Maroc",
    startDate: "2025-08",
    endDate: "2025-09",
    current: false,
    description: [
      "Conception et développement d’une application de gestion des incidents",
      "Analyse des besoins fonctionnels et modélisation des données",
      "Implémentation d’un CRUD complet avec PHP et MySQL",
      "Amélioration de l’interface utilisateur (HTML, CSS, Bootstrap)"
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    supervisor: "Encadrant technique"
  },
  {
    id: "ghm-solutions",
    company: "GHM Solutions",
    position: "Développeuse Web Stagiaire",
    location: "Kénitra, Maroc",
    startDate: "2025-07",
    endDate: "2025-08",
    current: false,
    description: [
      "Développement de modules backend en PHP/MySQL",
      "Optimisation du responsive design pour différents écrans",
      "Correction de bugs et amélioration des performances",
      "Collaboration avec l’équipe sur des projets web"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
    supervisor: "Zouhair ELMANTI"
  },
  {
    id: "lycee-zineb",
    company: "Lycée Zineb",
    position: "Assistante Informatique",
    location: "El Jadida, Maroc",
    startDate: "2024-10",
    endDate: "2025-06",
    current: false,
    description: [
      "Initiation des élèves aux outils informatiques de base",
      "Support technique (installation logiciels, dépannage)",
      "Gestion du matériel informatique",
      "Sensibilisation à l’utilisation responsable des technologies"
    ],
    technologies: ["Windows", "Réseaux", "Bureautique"]
  }
];