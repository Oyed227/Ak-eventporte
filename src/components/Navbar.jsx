import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [location, setLocation] = useState("All Locations");
  const [menuOpen, setMenuOpen] = useState(false);
  const [ticketCount, setTicketCount] = useState(0);

  useEffect(() => {
    const updateTicketCount = () => {
      const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];

      setTicketCount(savedTickets.length);
    };

    updateTicketCount();

    window.addEventListener("ticketUpdated", updateTicketCount);

    return () => {
      window.removeEventListener("ticketUpdated", updateTicketCount);
    };
  }, []);

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
    "Sweden",
  ];

  return (
    <nav className="bg-[#07061a] text-white px-4 md:px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <Link to="/">
          <img
            src="/eventportelogo.png"
            alt="logo"
            className="w-24 sm:w-28 md:w-36"
          />
        </Link>

        <div className="flex-1 mx-4 relative hidden lg:block max-w-lg">
          <input
            type="search"
            placeholder="Search by events"
            className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
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

        <div className="hidden lg:flex items-center space-x-5">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-gray-800 py-2 px-3 rounded-lg text-white"
          >
            <option>All Locations</option>

            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          <Link to="/about">About Us</Link>

          <Link to="/pricing">Pricing</Link>

          <Link to="/tickets" className="relative">
            My Tickets
            {ticketCount > 0 && (
              <span className="absolute -top-2 -right-5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {ticketCount}
              </span>
            )}
          </Link>

          <Link to="/signin">Sign In</Link>
        </div>

        <Link
          to="/events"
          className="bg-white text-black font-semibold rounded-lg
          px-2 py-2 text-[10px]
          sm:px-3 sm:py-2 sm:text-xs
          md:px-4 md:text-sm
          hover:bg-gray-200 transition whitespace-nowrap"
        >
          Discover Events
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
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
        <div className="lg:hidden mt-4 bg-[#11102b] rounded-xl p-5 flex flex-col gap-4">
          <input
            type="search"
            placeholder="Search events..."
            className="w-full py-2 px-4 rounded-lg bg-gray-800 text-white"
          />

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-gray-800 py-2 px-3 rounded-lg text-white"
          >
            <option>All Locations</option>

            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          <Link to="/about">About Us</Link>

          <Link to="/pricing">Pricing</Link>

          <Link to="/tickets" className="flex items-center justify-between">
            <span>My Tickets</span>

            {ticketCount > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {ticketCount}
              </span>
            )}
          </Link>

          <Link to="/signin">Sign In</Link>
        </div>
      )}
    </nav>
  );
}