import { Helmet } from "react-helmet-async";
import { profile } from "#/data/profile";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact – {profile.name}</title>
      </Helmet>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-10">

        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
            Discutons
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact
          </h1>

          <p className="text-gray-500 leading-relaxed">
            Ouvert aux opportunités de stage, alternance ou collaboration en développement web & mobile.
          </p>

          <div className="inline-flex items-center gap-2 mt-2 bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Disponible actuellement
          </div>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition rounded-2xl p-6 space-y-5">

          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition"
          >
            <span className="text-2xl">✉️</span>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-900 font-medium">{profile.email}</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
            <span className="text-2xl">🌍</span>
            <div>
              <p className="text-sm text-gray-500">Localisation</p>
              <p className="text-gray-900 font-medium">{profile.location}</p>
            </div>
          </div>

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition"
          >
            <span className="text-2xl">🐙</span>
            <div>
              <p className="text-sm text-gray-500">GitHub</p>
              <p className="text-gray-900 font-medium">Voir mes projets</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition"
          >
            <span className="text-2xl">🔗</span>
            <div>
              <p className="text-sm text-gray-500">LinkedIn</p>
              <p className="text-gray-900 font-medium">Profil professionnel</p>
            </div>
          </a>
        </div>

        {/* Footer message */}
        <p className="text-center text-xs text-gray-400">
          Réponse rapide sous 24–48h
        </p>

      </div>
    </>
  );
}