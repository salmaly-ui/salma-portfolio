import { profile } from "#/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet><title>{profile.name} · Portfolio créatif</title></Helmet>
      <div className="space-y-16 animate-fade-in">
        {/* Hero section */}
        <section className="grid md:grid-cols-[1fr_200px] gap-10 items-start">
          <div className="space-y-5">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-full">Ingénierie web & IA</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{profile.name}</h1>
            <p className="text-gray-500 leading-relaxed max-w-lg text-sm">{profile.about}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/projects" className="px-4 py-2 bg-emerald-700 text-white rounded-full text-sm shadow-md hover:bg-emerald-800 transition">Explorer les projets →</Link>
              <Link to="/contact" className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition">Me contacter</Link>
            </div>
          </div>
          <div className="hidden md:block bg-gradient-to-br from-emerald-200 to-teal-200 rounded-2xl p-5 shadow-inner">
            <div className="space-y-3 text-center">
              <p className="text-xs font-mono text-emerald-800">📍 {profile.location}</p>
              <p className="text-xs break-all font-mono">{profile.email}</p>
              <div className="flex justify-center gap-3 text-xs">
                <a href={profile.github} target="_blank" className="underline decoration-emerald-300">GitHub</a>
                <a href={profile.linkedin} target="_blank" className="underline decoration-emerald-300">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills compact */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-emerald-400"></div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700">Compétences clés</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {profile.skills.map(s => <span key={s} className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700">{s}</span>)}
          </div>
        </section>

        {/* Quick nav blocks */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-emerald-400"></div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700">Explorer</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { to: "/projects", label: "Projets", icon: "⚙️" },
              { to: "/experience", label: "Expériences", icon: "💼" },
              { to: "/education", label: "Formation", icon: "🎓" },
              { to: "/certifications", label: "Certifications", icon: "📜" }
            ].map(card => (
              <Link key={card.to} to={card.to} className="group flex items-center gap-2 p-3 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition">
                <span className="text-xl">{card.icon}</span>
                <span className="font-medium text-sm">{card.label}</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition">→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.5s ease both; }
      `}</style>
    </>
  );
}