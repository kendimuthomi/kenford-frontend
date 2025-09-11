import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // nice icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white fixed w-full z-20 top-0 left-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-2xl font-bold tracking-wide">
            Kenford
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/about" className="hover:text-yellow-300">About</Link>
            <Link to="/academics" className="hover:text-yellow-300">Academics</Link>
            <Link to="/admissions" className="hover:text-yellow-300">Admissions</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-4 pb-4 space-y-3">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/about" className="block hover:text-yellow-300">About</Link>
          <Link to="/academics" className="block hover:text-yellow-300">Academics</Link>
          <Link to="/admissions" className="block hover:text-yellow-300">Admissions</Link>
          <Link to="/contact" className="block hover:text-yellow-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}
