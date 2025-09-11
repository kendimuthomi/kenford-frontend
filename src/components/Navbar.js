import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl tracking-wide">Kenford Progressive Academy</h1>
        <div className="space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/academics" className="hover:text-yellow-400">Academics</Link>
          <Link to="/admissions" className="hover:text-yellow-400">Admissions</Link>
          <Link to="/news" className="hover:text-yellow-400">News</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
