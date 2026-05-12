import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events.json?size=12&apikey=rlatpGJeXjRglnGqXX4urYYbBmDAzDzF",
        );

        const data = await res.json();

        console.log("FULL DATA:", data);

        setEvents(data._embedded?.events || []);
      } catch (err) {
        console.error("ERROR:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8 sm:py-10">
      <div className="relative w-full overflow-hidden h-[420px] sm:h-[600px] md:h-[450px] lg:h-[550px]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            WHERE MEMORIES BEGIN
          </p>

          <Link to="/events">
            <button className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
              Discover Events
            </button>
          </Link>
        </div>
      </div>

      <div className="p-4 mt-10 mb-10">
        <p className="lg:text-5xl font-bold text-[#21140c] mb-5">
          POPULAR <span className="text-[#e75b04]"> EVENTS</span>
        </p>
        <p className="text-[#21140c] p lg:text-xl">
          Own Your Week with the Most Booked Events on Eventporte
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-xl sm:text-3xl font-bold mb-8 sm:mb-10 text-gray-800">
          Upcoming Events
        </h1>

        {loading && (
          <p className="text-center text-gray-500 animate-pulse">
            Loading events...
          </p>
        )}

        {!loading && events.length === 0 && (
          <p className="text-center text-gray-500">No events available.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-12 p-5">
          {events.slice(0, 12).map((event, index) => {
            const img =
              event.images?.find((img) => img.width > 300)?.url ||
              "https://via.placeholder.com/300x200";

            const venue = event._embedded?.venues?.[0]?.name || "Unknown Venue";

            const date = event.dates?.start?.localDate
              ? new Date(event.dates.start.localDate).toDateString()
              : "TBA";

            return (
              <div key={event.id}>
                <div
                  onClick={() => navigate(`/events/${event.id}`)}
                  className="flex items-start sm:items-center gap-3 sm:gap-4 py-4 sm:py-10 group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={event.name}
                    className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg"
                  />

                  <span className="text-orange-500 text-3xl sm:text-5xl font-light opacity-80 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm sm:text-lg font-semibold text-gray-900 truncate">
                      {event.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1 truncate">
                      {venue}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-400">{date}</p>
                  </div>
                </div>

                <div className="border-b border-gray-300 opacity-70"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 lgp-10">
        <Link to="/events">
          {" "}
          <p className="flex items-center gap-3 text-[#ca4e06] lg:text-2xl font-bold hover:opacity-80 transition-opacity">
            <span className="lg:p-10 p-5">Discover More Events</span>
            <FaArrowRightLong />
          </p>
        </Link>

        <div>
          <img src="/Screenshot.png" alt="" />
        </div>

        <div className="mt-5">
          <img src="/Screenshotsec.png" alt="" />
        </div>
      </div>

      <div className="text-center">
        <p className="text-xl  lg:text-4xl text-[#2d1201] mt-10 font-bold">
          BUILT TO LAST, DESIGNED FOR YOU
        </p>
        <p className="text-[#2d1201] mt-3 p-5">
          Ticketing, Check-ins & Payments processes You Can Trust
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  max-w-xl mx-auto mt-15 p-10">
        <div className="bg-[#F5F2D9] p-5 rounded-3xl flex flex-col justify-center">
          <a href="">
            <h2 className="text-lg font-serif leading-tight">
              Your Tickets. Your Money. Fully{" "}
              <i className="font-light">Protected.</i>
            </h2>
            <p className="text-[10px] mt-3 opacity-70">
              Every ticket purchase is fast, safe, and secure.
            </p>
          </a>
        </div>

        <div className="mb-10 bg-amber-100 p-5 rounded-3xl h-64 flex flex-col justify-between">
          <a href="">
            <div>
              <h2 className="text-lg font-medium leading-tight">
                Mobile-Friendly Experience
              </h2>
              <p className="text-[10px] mt-2 leading-relaxed opacity-80">
                Built for Any Screen. Designed for You. Access events anytime,
                anywhere — your experience is seamless across all devices.
              </p>
            </div>
          </a>
          <div className="flex gap-2 text-xl opacity-50"></div>
        </div>

        <a href="">
          <div className="bg-[#1A4D2E] text-white p-5 rounded-3xl relative overflow-hidden h-64 flex flex-col justify-between">
            <p className="relative text-[9px] text-right ml-auto leading-tight opacity-80 ">
              whether you’re using your card or mobile wallet, every transaction
              is verified, encrypted, and protected from fraud.
            </p>
            <h2 className="relative text-xl font-light">
              Tap. Pay. <span className="italic text-[#D4A373]">Safe.</span>
            </h2>
          </div>
        </a>

        <div className="bg-[#8B1A1A] text-white p-5 rounded-3xl text-center flex flex-col justify-center">
          <a href="">
            <h2 className="text-lg font-serif">
              Designed with you <i className="font-light text-base">in mind</i>
            </h2>
            <p className="text-[9px] mt-2 opacity-70">
              Designed for the people who bring events to life.
            </p>
          </a>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-10 text-[#ca4e06]">
        <Link to="/events">
          <p className="text-xl font-semibold">Discover Events</p>
        </Link>
        <p className="mt-1.5">
          <FaArrowRightLong />
        </p>
      </div>
    </div>
  );
}