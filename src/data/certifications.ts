export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialUrl?: string;
  skills: string[];
  tags: string[];
  status: string;
};

export const certifications: Certification[] = [
  {
    id: "mlia-php-mvc",
    title: "Ingénierie Logicielle Web avec PHP 7 : Architecture Multicouche et Accès aux Données Sécurisé",
    issuer: "MLIAEdu",
    credentialUrl:
      "https://mliaedu.toubkalit.com/verify-certificate/15-ef626c4b-153c-4edc-a133-1b5d717ebe61-209493",
    skills: ["PHP", "MVC", "Architecture logicielle", "MySQL", "Sécurité Web"],
    tags: ["Backend", "Web"],
    status: "completed"
  },

  {
    id: "mlia-java",
    title: "Java Certificate",
    issuer: "MLIAEdu",
    credentialUrl:
      "https://mliaedu.toubkalit.com/verify-certificate/40-ef626c4b-153c-4edc-a133-1b5d717ebe61-518744",
    skills: ["Java", "POO", "Collections"],
    tags: ["Java", "Programming"],
    status: "completed"
  },

  {
    id: "sololearn-sql-intro",
    title: "Introduction to SQL",
    issuer: "SoloLearn",
    credentialUrl: "https://www.sololearn.com/certificates/CC-ALCOS8HE",
    skills: ["SQL", "Bases de données"],
    tags: ["Database"],
    status: "completed"
  },

  {
    id: "sololearn-sql-intermediate",
    title: "Intermediate SQL",
    issuer: "SoloLearn",
    credentialUrl: "https://www.sololearn.com/certificates/CC-8DKZ4SRO",
    skills: ["SQL", "Requêtes avancées", "Jointures"],
    tags: ["Database"],
    status: "completed"
  },

  {
    id: "datacamp-ml",
    title: "Understanding Machine Learning",
    issuer: "DataCamp",
    credentialUrl:
      "https://www.datacamp.com/completed/statement-of-accomplishment/course/2a079bf7389391efbe60a5838ba4bb8697e8ba18",
    skills: ["Machine Learning", "Data Science", "Python"],
    tags: ["AI", "ML"],
    status: "completed"
  },

  {
    id: "mlia-cpp",
    title: "C++ Certificate",
    issuer: "MLIAEdu",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/12-ef626c4b-153c-4edc-a133-1b5d717ebe61-722107",
    skills: ["C++", "POO", "Algorithmique"],
    tags: ["Programming"],
    status: "completed"
  },

  {
    id: "cisco-networking",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    issueDate: "2025-05-06",
    credentialUrl:
      "https://www.credly.com/badges/596cefc2-f007-4776-a496-eb7fe8b79956/linked_in?t=t5ekft",
    skills: ["Réseaux", "TCP/IP", "OSI Model"],
    tags: ["Networking"],
    status: "completed"
  },

  {
    id: "cisco-python-essentials",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    issueDate: "2025-05-11",
    credentialUrl:
      "https://www.netacad.com/certificates/python-essentials-1",
    skills: ["Python", "Programmation de base"],
    tags: ["Python"],
    status: "completed"
  },

  {
    id: "datacamp-python-oop",
    title: "Introduction à la POO en Python",
    issuer: "DataCamp",
    credentialUrl:
      "https://www.datacamp.com/completed/statement-of-accomplishment/course/2a079bf7389391efbe60a5838ba4bb8697e8ba18",
    skills: ["Python", "OOP"],
    tags: ["Python", "Programming"],
    status: "completed"
  }
];