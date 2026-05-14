import { Helmet } from "react-helmet-async";
import { profile } from "#/data/profile";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact – {profile.name}</title>
      </Helmet>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/50 px-3 py-1 rounded-full">
            Discutons
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Contact</h1>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Ouvert aux opportunités de stage, alternance ou collaboration en développement web & mobile.
          </p>
          <div className="inline-flex items-center gap-2 mt-2 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 px-4 py-1 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Disponible actuellement
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition rounded-2xl p-6 space-y-5">
          {/* Email - lien direct sans JavaScript */}
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition w-full"
          >
            <div className="w-6 text-gray-500 dark:text-gray-400 text-sm font-mono">[e]</div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="text-gray-900 dark:text-white font-medium">
                {profile.email}
              </p>
            </div>
          </a>

          {/* Localisation */}
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition">
            <div className="w-6 text-gray-500 dark:text-gray-400 text-sm font-mono">[l]</div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Localisation</p>
              <p className="text-gray-900 dark:text-white font-medium">{profile.location}</p>
            </div>
          </div>

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition"
          >
            <div className="w-6 text-gray-500 dark:text-gray-400 text-sm font-mono">[g]</div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
              <p className="text-gray-900 dark:text-white font-medium">Voir mes projets</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition"
          >
            <div className="w-6 text-gray-500 dark:text-gray-400 text-sm font-mono">[in]</div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
              <p className="text-gray-900 dark:text-white font-medium">Profil professionnel</p>
            </div>
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-500">Réponse rapide sous 24–48h</p>
      </div>
    </>
  );
}
