import { FaGoogle, FaFacebookF } from "react-icons/fa";

function SignIn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#07061a] via-[#11102b] to-black flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <img
            src="/eventportelogo.png"
            alt="logo"
            className="w-32 mx-auto mb-4"
          />

          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

          <p className="text-gray-300 mt-2">
            Sign in to manage your tickets and events
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Password</label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white outline-none focus:border-orange-500"
            />
          </div>

          <div className="flex justify-between text-sm">
            <label className="text-gray-300 flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-orange-400 hover:text-orange-300">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-xl font-semibold text-white"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-600"></div>

          <span className="px-4 text-gray-400 text-sm">OR</span>

          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-xl hover:bg-gray-100 transition">
            <FaGoogle />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
            <FaFacebookF />
            Continue with Facebook
          </button>
        </div>

        <p className="text-center text-gray-300 mt-8">
          Don't have an account?{" "}
          <span className="text-orange-400 cursor-pointer hover:text-orange-300">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
