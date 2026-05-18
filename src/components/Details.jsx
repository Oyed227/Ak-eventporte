import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Details() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=rlatpGJeXjRglnGqXX4urYYbBmDAzDzF`,
        );

        if (!res.ok) throw new Error("Event not found");

        const data = await res.json();

        setEvent(data);

        setMainImage(
          data.images?.[0]?.url || "https://via.placeholder.com/400x400",
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [id]);

  useEffect(() => {
    async function fetchRelatedEvents() {
      try {
        const res = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events.json?apikey=rlatpGJeXjRglnGqXX4urYYbBmDAzDzF&size=15",
        );

        const data = await res.json();

        if (data?._embedded?.events) {
          const filtered = data._embedded.events
            .filter((e) => e.id !== id)
            .slice(0, 15);

          setRelatedEvents(filtered);
        }
      } catch (err) {
        console.error("Error fetching related events:", err);
      }
    }

    fetchRelatedEvents();
  }, [id]);

  if (loading) return <p className="p-4 text-center">Loading event...</p>;

  if (error) return <p className="p-4 text-center text-red-500">{error}</p>;

  const venue = event._embedded?.venues?.[0]?.name || "Unknown Venue";

  const date = event.dates?.start?.localDate
    ? new Date(event.dates.start.localDate).toDateString()
    : "TBA";

  const price = event.priceRanges?.[0]?.min
    ? `$${event.priceRanges[0].min}`
    : "TBA";

  return (
    <>
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-xl hover:text-orange-500 transition"
          >
            <FaArrowCircleLeft />
          </button>

          <img
            src={mainImage}
            alt={event.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover"
          />

          <div className="hidden sm:block">
            <h2 className="font-semibold text-sm sm:text-base line-clamp-1">
              {event.name}
            </h2>

            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="hidden sm:block">Sign In</span>

          <div className="w-8 h-8 rounded-full border flex items-center justify-center">
            <CgProfile />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-5 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <img
            src={mainImage}
            alt={event.name}
            className="w-full h-64 sm:h-96 object-cover rounded-lg mb-4"
          />

          <div className="flex gap-2 overflow-x-auto">
            {event.images?.slice(0, 6).map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt=""
                className={`w-20 h-20 sm:w-24 sm:h-24 object-cover rounded cursor-pointer border ${
                  mainImage === img.url
                    ? "border-orange-500"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(img.url)}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              {event.name}
            </h1>

            <p className="text-gray-600 mb-2">{date}</p>

            <p className="text-gray-600 mb-4">Venue: {venue}</p>

            <div className="bg-gray-50 p-4 rounded mb-4 text-gray-700">
              {event.info || event.description || "No description available"}
            </div>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="bg-orange-600 text-white py-3 rounded text-lg hover:bg-orange-500 transition-colors"
          >
            Buy Tickets →
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-5 mt-12 border-t pt-12">
        <h2 className="text-3xl font-bold mb-8">More Events</h2>

        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200">
          <div
            className="flex gap-6 pb-4"
            style={{
              minWidth: "min-content",
            }}
          >
            {relatedEvents.map((relatedEvent) => {
              const relatedImg =
                relatedEvent.images?.find((i) => i.ratio === "3_2")?.url ||
                relatedEvent.images?.[0]?.url;

              const relatedVenue =
                relatedEvent._embedded?.venues?.[0]?.name || "Unknown venue";

              const relatedDate = relatedEvent.dates?.start?.localDate
                ? new Date(relatedEvent.dates.start.localDate).toDateString()
                : "TBA";

              return (
                <Link
                  key={relatedEvent.id}
                  to={`/events/${relatedEvent.id}`}
                  className="w-56 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={relatedImg}
                    alt={relatedEvent.name}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold line-clamp-2">
                      {relatedEvent.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">{relatedVenue}</p>

                    <p className="text-xs text-gray-400">{relatedDate}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Event Registration
            </h2>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.target);

                const ticket = {
                  id: event.id,
                  eventName: event.name,
                  image: mainImage,
                  venue,
                  date,
                  price,
                  name: formData.get("name"),
                  email: formData.get("email"),
                  phone: formData.get("phone"),
                };

                const existingTickets =
                  JSON.parse(localStorage.getItem("tickets")) || [];

                const updatedTickets = [...existingTickets, ticket];

                localStorage.setItem("tickets", JSON.stringify(updatedTickets));

                window.dispatchEvent(new Event("ticketUpdated"));

                alert("Ticket Registered Successfully!");

                setShowForm(false);
                e.target.reset();

                setTimeout(() => {
                  navigate("/tickets");
                }, 100);
              }}
            >
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="text"
                value={price}
                readOnly
                className="w-full border rounded-lg px-4 py-3 bg-gray-100"
              />

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-500"
              >
                Register Ticket
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;