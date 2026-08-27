import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="w-full h-20 bg-[#111219] border-b border-white/10 px-8 flex items-center justify-between">

      {/* Left Navigation */}
      <div className="flex items-center gap-1 bg-[#090a0f] border border-white/10 rounded-xl p-1">

        <Link
          to="/login"
          className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold text-sm"
        >
          Login
        </Link>

        <Link
          to="/student-dashboard"
          className="px-5 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-semibold text-sm transition"
        >
          Student Dashboard
        </Link>

        <Link
          to="/interviewer-dashboard"
          className="px-5 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-semibold text-sm transition"
        >
          Interviewer Dashboard
        </Link>

      </div>

      {/* Theme Toggle */}
      <div className="flex items-center gap-1 bg-[#090a0f] border border-white/10 rounded-full p-1">

        <button
          onClick={() => setDarkMode(true)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition ${
            darkMode
              ? "bg-purple-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Moon size={15} />
          Dark
        </button>

        <button
          onClick={() => setDarkMode(false)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition ${
            !darkMode
              ? "bg-purple-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Sun size={15} />
          Light
        </button>

      </div>

    </nav>
  );
}

export default Navbar;