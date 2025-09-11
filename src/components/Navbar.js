import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-wide">
              Kenford
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-yellow-300">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Hamburger button (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {/* Hamburger icon */}
              {!isOpen && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
              {/* X icon */}
              {isOpen && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-blue-800 px-4 pb-4 overflow-hidden"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block py-2 px-2 rounded hover:bg-blue-700 hover:text-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
