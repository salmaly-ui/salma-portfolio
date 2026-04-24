import { experiences } from "#/data/experience";
import { Helmet } from "react-helmet-async";

export default function Experience() {
  return (
    <>
      <Helmet><title>Expériences – Salma Laouy</title></Helmet>
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">Parcours</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Expériences professionnelles</h1>
          <p className="text-gray-500 text-sm">Stages en développement web et support technique</p>
        </div>
        <div className="relative pl-6 border-l-2 border-emerald-200 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              <div className="absolute -left-[1.85rem] w-3 h-3 rounded-full bg-emerald-500 shadow-sm"></div>
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow transition">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h2 className="text-lg font-semibold">{exp.position}</h2>
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">{exp.current ? "En poste" : "Stage"}</span>
                </div>
                <p className="text-emerald-700 text-sm font-medium mt-1">{exp.company} · {exp.location}</p>
                <p className="text-xs text-gray-400 mt-1">{exp.startDate} — {exp.current ? "Présent" : exp.endDate}</p>
                <ul className="list-disc list-inside text-gray-600 text-sm mt-3 space-y-1">
                  {exp.description.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.technologies.map(t => <span key={t} className="text-xs bg-gray-100 px-2 py-0.5 rounded">{t}</span>)}
                  </div>
                )}
                {exp.supervisor && <p className="text-xs text-gray-400 mt-2 italic">Encadré par {exp.supervisor}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
