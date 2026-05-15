import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useTheme } from "#/context/ThemeContext";

export default function RootLayout() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-gray-800 dark:text-white font-sans transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b border-emerald-200/40 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-6 py-3">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="text-xl font-semibold tracking-tight bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
              Salma Laouy
            </NavLink>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <nav className="flex gap-7 text-sm font-medium">
                <NavLink to="/projects" className="hover:text-emerald-600 transition">Projets</NavLink>
                <NavLink to="/experience" className="hover:text-emerald-600 transition">Expériences</NavLink>
                <NavLink to="/education" className="hover:text-emerald-600 transition">Formation</NavLink>
                <NavLink to="/certifications" className="hover:text-emerald-600 transition">Certifications</NavLink>
                <NavLink to="/contact" className="hover:text-emerald-600 transition">Contact</NavLink>
              </nav>
              <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800">
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-2xl">
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
              <nav className="flex flex-col gap-3">
                <NavLink to="/projects" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-emerald-600">Projets</NavLink>
                <NavLink to="/experience" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-emerald-600">Expériences</NavLink>
                <NavLink to="/education" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-emerald-600">Formation</NavLink>
                <NavLink to="/certifications" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-emerald-600">Certifications</NavLink>
                <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-emerald-600">Contact</NavLink>
                <button onClick={toggleTheme} className="py-2 text-left hover:text-emerald-600">
                  {theme === 'dark' ? '☀️ Mode clair' : '🌙 Mode sombre'}
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      <main className="mx-auto max-w-5xl px-6 py-10">
        <Outlet />
      </main>
      
      <footer className="border-t border-emerald-100 dark:border-slate-800 py-6 text-center text-xs text-gray-400 dark:text-gray-500">
        © {new Date().getFullYear()} — Salma Laouy — Portfolio construit avec React & Tailwind
      </footer>
    </div>
  );
}
