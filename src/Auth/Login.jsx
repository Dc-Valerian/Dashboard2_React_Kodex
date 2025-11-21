import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 p-7">
      <div className="bg-blue-600 w-full max-w-md p-8 rounded-2xl shadow-xl animate-fadeIn">
        <h2>Login Page</h2>

        <form className="mt-6 space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
            required
          />

          <Link to="/dashboard">
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Login
            </button>
          </Link>
        </form>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="text-[white] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
