import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // close the mobile menu whenever route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // close mobile menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/academics", label: "Academics" },
    { to: "/admissions", label: "Admissions" },
    { to: "/news", label: "News & Events" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-blue-900 text-white fixed w-full z-50 top-0 left-0 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-wide">
              Kenford
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="hover:text-yellow-300">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(v => !v)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              className="p-2 rounded-md inline-flex items-center justify-center focus:outline-none"
            >
              {/* Hamburger */}
              <svg className={`${isOpen ? "hidden" : "block"} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
              {/* X */}
              <svg className={`${isOpen ? "block" : "hidden"} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (dropdown) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-blue-800`}>
        <div className="px-4 pt-2 pb-4 space-y-2">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setIsOpen(false)}    // close menu on navigation
              className="block py-2 px-2 rounded hover:bg-blue-700 hover:text-yellow-300"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
