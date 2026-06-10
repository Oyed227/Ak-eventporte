function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 pt-9">


      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Pricing Plans</h1>

          <p className="text-lg opacity-90">
            Choose a plan that fits your event needs.
          </p>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 py-20">

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Free</h2>

            <h3 className="text-4xl font-bold mb-6">
              $0
              <span className="text-lg font-normal">/month</span>
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>✅ Browse Events</li>
              <li>✅ Register Tickets</li>
              <li>✅ Save Events</li>
              <li>❌ Premium Support</li>
            </ul>

            <button className="w-full mt-8 bg-gray-900 text-white py-3 rounded-xl">
              Get Started
            </button>
          </div>

          <div className="bg-orange-500 text-white rounded-3xl shadow-xl p-8 scale-105">
            <div className="bg-white text-orange-500 inline-block px-3 py-1 rounded-full text-sm font-bold mb-4">
              MOST POPULAR
            </div>

            <h2 className="text-2xl font-bold mb-4">Pro</h2>

            <h3 className="text-4xl font-bold mb-6">
              $19
              <span className="text-lg font-normal">/month</span>
            </h3>

            <ul className="space-y-3">
              <li>✅ Unlimited Tickets</li>
              <li>✅ Priority Access</li>
              <li>✅ Event Reminders</li>
              <li>✅ Premium Support</li>
            </ul>

            <button className="w-full mt-8 bg-white text-orange-500 py-3 rounded-xl font-bold">
              Choose Plan
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Business</h2>

            <h3 className="text-4xl font-bold mb-6">
              $49
              <span className="text-lg font-normal">/month</span>
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>✅ Event Analytics</li>
              <li>✅ Team Management</li>
              <li>✅ Unlimited Access</li>
              <li>✅ Dedicated Support</li>
            </ul>

            <button className="w-full mt-8 bg-gray-900 text-white py-3 rounded-xl">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
