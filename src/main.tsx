import { useState } from "react";
import { profile } from "#/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <Helmet><title>{profile.name} · Portfolio créatif</title></Helmet>
      
      {/* Menu Responsive */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-emerald-200/40 dark:border-slate-800 mb-8">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold">{profile.name}</Link>
            
            {/* Desktop */}
            <nav className="hidden md:flex gap-6">
              {navItems.map(item => (
                <Link key={item.path} to={item.path} className="text-sm hover:text-emerald-600">{item.label}</Link>
              ))}
            </nav>
            
            {/* Mobile Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 bg-black dark:bg-white transition ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`h-0.5 bg-black dark:bg-white transition ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 bg-black dark:bg-white transition ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-slate-700 flex flex-col gap-3">
              {navItems.map(item => (
                <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className="text-sm py-2 hover:text-emerald-600">
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Reste de ton contenu Home */}
      <div className="space-y-16 animate-fade-in max-w-5xl mx-auto px-6">
        <section className="grid md:grid-cols-[1fr_200px] gap-10 items-start">
          <div className="space-y-5">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">Ingénierie web & IA</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">{profile.name}</h1>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg text-sm">{profile.about}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/contact" className="px-4 py-2 bg-emerald-700 dark:bg-emerald-600 text-white rounded-full text-sm shadow-md hover:bg-emerald-800 dark:hover:bg-emerald-700 transition">Me contacter →</Link>
            </div>
          </div>
          <div className="hidden md:block bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-900 dark:to-teal-900 rounded-2xl p-5 shadow-inner">
            <div className="space-y-3 text-center">
              <p className="text-xs font-mono text-emerald-800 dark:text-emerald-200">📍 {profile.location}</p>
              <p className="text-xs break-all font-mono text-gray-700 dark:text-gray-300">{profile.email}</p>
              <div className="flex justify-center gap-3 text-xs">
                <a href={profile.github} target="_blank" className="underline decoration-emerald-300 dark:decoration-emerald-500 text-emerald-800 dark:text-emerald-200">GitHub</a>
                <a href={profile.linkedin} target="_blank" className="underline decoration-emerald-300 dark:decoration-emerald-500 text-emerald-800 dark:text-emerald-200">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-emerald-400 dark:bg-emerald-500"></div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Compétences clés</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {profile.skills?.map(s => <span key={s} className="px-3 py-1 text-xs bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full">{s}</span>)}
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
