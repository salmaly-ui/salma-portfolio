import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useTheme } from "#/context/ThemeContext";

export default function RootLayout() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/projects", label: "Projets" },
    { to: "/experience", label: "Expériences" },
    { to: "/education", label: "Formation" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" },
  ];

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
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `hover:text-emerald-600 dark:hover:text-emerald-400 transition ${
                        isActive ? "text-emerald-600 dark:text-emerald-400" : ""
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Changer de thème"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 00-1.414 0l-.707.707-1.414-1.415a1 1 0 00-1.414 1.415l1.414 1.414-.707.708a1 1 0 001.414 1.414l2.121-2.121a1 1 0 000-1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-900 dark:bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`w-full h-0.5 bg-gray-900 dark:bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-gray-900 dark:bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col gap-2 pb-4 border-t border-gray-200 dark:border-slate-700 pt-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                        : "text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              {/* Theme Toggle Button for Mobile */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-slate-800 transition"
                aria-label="Changer de thème"
              >
                {theme === 'dark' ? (
                  <>
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 00-1.414 0l-.707.707-1.414-1.415a1 1 0 00-1.414 1.415l1.414 1.414-.707.708a1 1 0 001.414 1.414l2.121-2.121a1 1 0 000-1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1z" clipRule="evenodd" />
                    </svg>
                    <span>Mode clair</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    <span>Mode sombre</span>
                  </>
                )}
              </button>
            </nav>
          </div>
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
