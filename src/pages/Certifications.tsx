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
      <Helmet><title>Certifications – Salma  Laouy</title></Helmet>
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">Attestations</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Certifications & badges</h1>
        </div>
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3">
          <button onClick={() => setFilter("")} className={`text-xs px-3 py-1 rounded-full ${!filter ? "bg-emerald-600 text-white" : "bg-gray-100"}`}>Toutes</button>
          {allTags.map(tag => (
            <button key={tag} onClick={() => setFilter(tag)} className={`text-xs px-3 py-1 rounded-full ${filter === tag ? "bg-emerald-600 text-white" : "bg-gray-100"}`}>{tag}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map(cert => (
            <div key={cert.id} className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{cert.title}</h3>
                  <p className="text-emerald-700 text-xs">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 mt-1">📅 {cert.issueDate}</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{cert.status}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-3">
                {cert.skills.map(s => <span key={s} className="text-xs bg-gray-100 px-2 rounded">{s}</span>)}
              </div>
              {cert.credentialUrl && (
                <a href={cert.credentialUrl} target="_blank" className="inline-block mt-3 text-xs text-emerald-600 underline">Voir le diplôme →</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}