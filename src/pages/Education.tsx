import { education } from "#/data/education";
import { Helmet } from "react-helmet-async";

export default function EducationPage() {
  return (
    <>
      <Helmet><title>Formation – Salma Laouy</title></Helmet>
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">Académique</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Parcours universitaire</h1>
        </div>
        <div className="grid gap-5">
          {education.map(edu => (
            <div key={edu.id} className="border-l-4 border-emerald-400 bg-white rounded-r-xl shadow-sm p-5">
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{edu.degree} – {edu.field}</h2>
                  <p className="text-emerald-700 font-medium">{edu.school} · {edu.location}</p>
                  <p className="text-xs text-gray-400 mt-1">{edu.startDate} – {edu.endDate}</p>
                </div>
                {edu.endDate === "Présent" && <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">En cours</span>}
              </div>
              <div className="mt-4">
                <p className="text-xs font-mono uppercase text-gray-400 mb-2">Cours principaux</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map(c => <span key={c} className="text-xs bg-gray-100 px-2 py-0.5 rounded">{c}</span>)}
                </div>
              </div>
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  {edu.highlights.map((h,i) => <div key={i}>{h}</div>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}