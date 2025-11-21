import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const SignUp = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({ name: form.name });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 p-7">
      <div className="bg-blue-600 w-full max-w-md p-8 rounded-2xl shadow-xl animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-white-700">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className=" mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Enter your valid email"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
            Sign Up
          </button>

        </form>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[white] font-semibold hover:underline"
            >
              Log In
            </Link>
          </p>
      </div>
    </div>
  );
};

export default SignUp;
