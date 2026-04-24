import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-emerald-50 via-white to-teal-50 text-gray-800 font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-emerald-200/40 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-3">
          <NavLink to="/" className="text-xl font-semibold tracking-tight bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
            Salma Laouy
          </NavLink>
          <nav className="hidden md:flex gap-7 text-sm font-medium">
            <NavLink to="/projects" className="hover:text-emerald-600 transition">Projets</NavLink>
            <NavLink to="/experience" className="hover:text-emerald-600 transition">Expériences</NavLink>
            <NavLink to="/education" className="hover:text-emerald-600 transition">Formation</NavLink>
            <NavLink to="/certifications" className="hover:text-emerald-600 transition">Certifications</NavLink>
            <NavLink to="/contact" className="hover:text-emerald-600 transition">Contact</NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">
        <Outlet />
      </main>
      <footer className="border-t border-emerald-100 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} — Salma Laouy—  Portfolio construit avec React & Tailwind
      </footer>
    </div>
  );
}