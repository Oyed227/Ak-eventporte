import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [location, setLocation] = useState("All Locations");
  const [menuOpen, setMenuOpen] = useState(false);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Nigeria",
    "South Africa",
    "Brazil",
    "Australia",
    "India",
    "Poland",
    "Sweeden"
  ];

  return (
    <div>
      {/* <div className="bg-black p-4 lg:p-2">
        <p className="text-white text-center font-xs">
          Safe, quick & easy ticket sales.{" "}
          <span className="text-amber-600 underline">
            Create With EventPorte
          </span>
        </p>
      </div> */}
      fhsddfgf
      <div>
        <nav className="bg-[#07061a] text-white px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
          <Link to="/">
            <img src="/eventportelogo.png" alt="logo" />
          </Link>
          <div className="flex-1 mx-6 relative hidden md:block">
            <input
              type="search"
              placeholder="Search by events"
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 mr-6">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-gray-800 py-2 px-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <Link to="">About Us</Link>
            <Link to="">Pricing</Link>
            <Link to="">My Tickets</Link>
            <Link to="">Sign In</Link>
          </div>

          <Link
            to="/events"
            className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Discover Events
          </Link>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="absolute top-20 left-0 w-full bg-[#07061a] text-white px-6 py-4 flex flex-col space-y-4 md:hidden z-50">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-gray-800 py-2 px-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <p>About Us</p>
              <p> Pricing</p>
              <p> My Tickets</p>
              <button className="flex items-center hover:text-indigo-300">
                Sign In
              </button>
              <Link to="/events">
                <button className="bg-white text-black font-bold px-6 py-3 rounded-xl ">
                  Discover Events
                </button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}


