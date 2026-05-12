import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const slides = [
    {
      image: "/religion.png",
      title: "Religion & Faith",
      text: "Worship nights, prayer meetings, church crusades, concerts and conferences. Gather, grow and serve together.",
    },
    {
      image: "/artculture.png",
      title: "Health & Wellness",
      text: "Breathe, stretch, restore. Yoga, meditation and mindful retreats.",
    },
    {
      image: "/business.png",
      title: "Business & Networking",
      text: "confrences, meet-ups and workshops for builders",
    },
    {
      image: "/sport.png",
      title: "Sports & Fitness",
      text: "City runs, wellness festivals,  bigger community. ",
    },
    {
      image: "/religion.png",
      title: "Religion & Faith",
      text: "Worship nights, concerts and conferences. Gather, grow and serve together.",
    },
    {
      image: "/artculture.png",
      title: "Health & Wellness",
      text: "Breathe, stretch, restore. Yoga, meditation and mindful retreats.",
    },
    {
      image: "/business.png",
      title: "Business & Networking",
      text: "confrences, meet-ups and workshops for builders and leaders. Share ideas, find partners,  one smart connection at a time.",
    },
    {
      image: "/sport.png",
      title: "Sports & Fitness",
      text: "City runs, wellness festivals, outdoor bootcamps: big energy, bigger community. Secure your spot early, movement, and momentum",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function fetchAllEvents() {
      try {
        const res = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events.json?size=12&apikey=rlatpGJeXjRglnGqXX4urYYbBmDAzDzF",
        );
        const data = await res.json();

        if (data?._embedded?.events) {
          setEvents(data._embedded.events);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAllEvents();
  }, []);

  if (loading) {
    return (
      <p className="p-10 text-center text-lg font-semibold">
        Loading Events...
      </p>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative mt-10 sm:mt-20 h-[300px] sm:h-[400px] md:h-[400px] overflow-hidden">
        {" "}
        <img
          src={slides[currentSlide].image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-16 text-white max-w-md sm:max-w-lg md:max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
            {slides[currentSlide].title}
          </h1>

          <p className="text-sm md:text-base opacity-90 mb-6">
            {slides[currentSlide].text}
          </p>

          <div className="flex gap-4">
            <div className="w-8 h-8 border rounded-full flex items-center justify-center">
              <BsTwitterX />
            </div>
            <div className="w-8 h-8 border rounded-full flex items-center justify-center">
              <FaTiktok />
            </div>
            <div className="w-8 h-8 border rounded-full flex items-center justify-center">
              <BsInstagram />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === currentSlide ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-4 p-4">
        {[
          "/others.png",
          "/religionandfaith.png",
          "/nightlife.png",
          "/healthwellness.png",
          "/sportsfitness.png",
          "/fashionbeauty.png",
          "/others.png",
          "/religionandfaith.png",
          "/nightlife.png",
          "/healthwellness.png",
          "/sportsfitness.png",
          "/fashionbeauty.png",
        ].map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl object-cover flex-shrink-0 hover:scale-105 transition duration-300"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
          Recently Viewed
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {events.map((event) => {
            const img =
              event.images?.find((i) => i.ratio === "3_2")?.url ||
              event.images?.[0]?.url;

            const venue = event._embedded?.venues?.[0]?.name || "Unknown venue";

            const date = event.dates?.start?.localDate
              ? new Date(event.dates.start.localDate).toDateString()
              : "TBA";

            const price = event.priceRanges?.[0]?.min
              ? `$${event.priceRanges[0].min}`
              : "TBA";

            return (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={img}
                    alt={event.name}
                    className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
                    {event.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">{date}</p>
                  <p className="text-sm text-gray-600">{venue}</p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-bold">{price}</span>
                    <span className="text-sm text-gray-700 hover:text-blue-600">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Events;
