import { projects } from "#/data/projects";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  const techIcons: Record<string, string> = {
    PHP: "", Python: "", JavaScript: "", Java: "", MySQL: "", "C++": ""
  };
  return (
    <>
      <Helmet><title>Projets – Salma Laouy</title></Helmet>
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">Réalisations</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">Projets & ateliers</h1>
          <p className="text-gray-500 text-sm mt-1">Développements web, IA et bases de données</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, idx) => {
            const mainTech = p.tags[0];
            const icon = techIcons[mainTech] || "";
            return (
              <div key={p.id} className="group border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-emerald-200 transition-all duration-200 bg-white">
                <div className="flex items-start justify-between">
                  <div className="text-3xl">{icon}</div>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{p.period}</span>
                </div>
                <h2 className="text-lg font-semibold mt-3">{p.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{p.summary}</p>
                {p.description && p.description !== p.summary && (
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2">{p.description}</p>
                )}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tags.map(t => <span key={t} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">{t}</span>)}
                </div>
                <div className="mt-5 flex gap-3">
                  {p.repo ? (
                    <a href={p.repo} target="_blank" className="text-xs flex items-center gap-1 text-gray-600 hover:text-emerald-700">🔗 GitHub</a>
                  ) : <span className="text-xs text-gray-300">🔒 privé</span>}
                  {p.link && <a href={p.link} target="_blank" className="text-xs text-emerald-600">↗ Démo</a>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}