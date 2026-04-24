export type Education = {
  id: string;
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  courses: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    id: "ens-licence",
    school: "École Normale Supérieure de Marrakech",
    degree: "Licence en Éducation",
    field: "Informatique",
    location: "Marrakech, Maroc",
    startDate: "2023",
    endDate: "Présent",
    courses: [
      "Programmation Web (HTML, CSS, JavaScript, Bootstrap)",
      "PHP & MySQL",
      "Architecture MVC",
      "Algorithmique avancée",
      "Bases de données",
      "Réseaux informatiques",
      "Développement Mobile Android (Kotlin)"
    ],
    highlights: [
      "Développement d’un système de gestion des incidents (PHP, MVC, MySQL)",
      "Conception d’une application de gestion des étudiants (Web + API)",
      "Création d’une application mobile Android en Kotlin connectée à une API REST",
      "Développement du projet MediCab+ (gestion cabinet médical)",
      "Intégration de tableaux dynamiques (DataTables)",
      "Visualisation de données avec Chart.js",
      "Création d’interfaces modernes avec React + TypeScript"
    ]
  },

  {
    id: "fstg-mipc",
    school: "Faculté des Sciences et Techniques de Marrakech",
    degree: "1ère année MIPC",
    field: "Mathématiques, Informatique, Physique",
    location: "Marrakech, Maroc",
    startDate: "2022",
    endDate: "2023",
    courses: [
      "Mathématiques générales",
      "Physique",
      "Algorithmique",
      "Programmation C"
    ],
    highlights: [
      "Acquisition des bases solides en logique et programmation",
      "Premiers projets en algorithmique et structures de données"
    ]
  },

  {
    id: "bac",
    school: "Lycée Almoaatid Ibn Abbad",
    degree: "Baccalauréat Scientifique",
    field: "Sciences",
    location: "Maroc",
    startDate: "2021",
    endDate: "2022",
    courses: [
      "Mathématiques",
      "Sciences physiques",
      "Informatique"
    ],
    highlights: [
      "Obtention du baccalauréat scientifique",
      "Orientation vers les études en informatique"
    ]
  }
];