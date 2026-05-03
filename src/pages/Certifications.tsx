import { certifications } from "#/data/certifications";
import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";

export default function CertificationsPage() {
  const [filter, setFilter] = useState("");
  const allTags = useMemo(() => [...new Set(certifications.flatMap(c => c.tags))], []);
  const filtered = useMemo(() => {
    if (!filter) return certifications;
    return certifications.filter(c => c.tags.includes(filter));
  }, [filter]);

  return (
    <>
      <Helmet><title>Certifications – Salma Laouy</title></Helmet>
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/50 px-2 py-0.5 rounded">Attestations</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">Certifications & badges</h1>
        </div>
        <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-slate-700 pb-3">
          <button onClick={() => setFilter("")} className={`text-xs px-3 py-1 rounded-full transition-colors ${!filter ? "bg-emerald-600 text-white" : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"}`}>Toutes</button>
          {allTags.map(tag => (
            <button key={tag} onClick={() => setFilter(tag)} className={`text-xs px-3 py-1 rounded-full transition-colors ${filter === tag ? "bg-emerald-600 text-white" : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"}`}>{tag}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map(cert => (
            <div key={cert.id} className="border border-gray-200 dark:border-slate-700 rounded-xl p-4 bg-white dark:bg-slate-900 hover:shadow-md dark:hover:shadow-slate-800 transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className="text-emerald-700 dark:text-emerald-400 text-xs">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">📅 {cert.issueDate}</p>
                </div>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">{cert.status}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-3">
                {cert.skills.map(s => <span key={s} className="text-xs bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 px-2 rounded">{s}</span>)}
              </div>
              {cert.credentialUrl && (
                <a href={cert.credentialUrl} target="_blank" className="inline-block mt-3 text-xs text-emerald-600 dark:text-emerald-400 underline hover:no-underline">Voir le diplôme →</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}