import { useEffect, useState } from "react";

function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const loadTickets = () => {
      const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
      setTickets(savedTickets);
    };

    loadTickets();

    window.addEventListener("ticketUpdated", loadTickets);

    return () => {
      window.removeEventListener("ticketUpdated", loadTickets);
    };
  }, []);

  const handleDeleteClick = (index) => {
    setSelectedTicket(index);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    const updatedTickets = tickets.filter(
      (_, index) => index !== selectedTicket,
    );

    setTickets(updatedTickets);

    localStorage.setItem("tickets", JSON.stringify(updatedTickets));

    window.dispatchEvent(new Event("ticketUpdated"));

    setShowConfirm(false);
    setSelectedTicket(null);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setSelectedTicket(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 sm:px-6 mb-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">My Tickets</h1>

        {tickets.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No Tickets Yet
            </h2>

            <p className="text-gray-500 mt-2">
              Register for an event to see your tickets here.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tickets.map((ticket, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={ticket.image}
                  alt={ticket.eventName}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">
                  <h2 className="font-bold text-lg line-clamp-2">
                    {ticket.eventName}
                  </h2>

                  <p className="text-sm text-gray-500 mt-2">{ticket.date}</p>

                  <p className="text-sm text-gray-600">{ticket.venue}</p>

                  <p className="font-bold text-orange-600 mt-3">
                    {ticket.price}
                  </p>

                  <hr className="my-4" />

                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-semibold">Name:</span> {ticket.name}
                    </p>

                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      {ticket.email}
                    </p>

                    <p>
                      <span className="font-semibold">Phone:</span>{" "}
                      {ticket.phone}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDeleteClick(index)}
                    className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
                  >
                    Delete Ticket
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm text-center shadow-xl">
            <h2 className="text-xl font-bold mb-3">Delete Ticket?</h2>

            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this ticket?
            </p>

            <div className="flex gap-3">
              <button
                onClick={cancelDelete}
                className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-100"
              >
                No
              </button>

              <button
                onClick={confirmDelete}
                className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyTickets;
