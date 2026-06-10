function About() {
  return (
    <div className="bg-gray-50 min-h-screen pt-9">
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About EventPorte
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Discover, explore, and book amazing events around the world.
            EventPorte makes event discovery simple, fast, and enjoyable.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
            alt="Event"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>

            <p className="text-gray-600 leading-8 mb-4">
              EventPorte was created to help people easily find and attend
              exciting events. Whether it's music concerts, conferences, sports,
              cultural festivals, or local gatherings, our goal is to connect
              people with unforgettable experiences.
            </p>

            <p className="text-gray-600 leading-8">
              We believe that every event creates memories, connections, and
              opportunities. That's why we built a platform designed to make
              event discovery effortless.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-2xl p-8 text-center shadow">
              <h3 className="text-5xl font-bold text-orange-500">10K+</h3>
              <p className="mt-3 text-gray-600">Events Listed</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center shadow">
              <h3 className="text-5xl font-bold text-orange-500">50K+</h3>
              <p className="mt-3 text-gray-600">Happy Users</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center shadow">
              <h3 className="text-5xl font-bold text-orange-500">100+</h3>
              <p className="mt-3 text-gray-600">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose EventPorte?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-5xl mb-4">🎟️</div>
            <h3 className="text-xl font-bold mb-3">Easy Ticket Booking</h3>
            <p className="text-gray-600">
              Register and manage your event tickets with just a few clicks.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-3">Worldwide Events</h3>
            <p className="text-gray-600">
              Discover events happening across different countries and cities.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Fast & Reliable</h3>
            <p className="text-gray-600">
              Enjoy a smooth experience when browsing and booking events.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#07061a] text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Discover Your Next Event?
          </h2>

          <p className="text-gray-300 mb-8">
            Explore thousands of events and create unforgettable memories.
          </p>

          <a
            href="/events"
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Explore Events
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
