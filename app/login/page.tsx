"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  // Handle form submit for register/login
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: any = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const url = isSignUp
        ? "http://localhost:3001/api/v1/users/register"
        : "http://localhost:3001/api/v1/users/login";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(isSignUp ? "Account created!" : "Logged in!");
        if (!isSignUp && result.token) {
          localStorage.setItem("token", result.token);
          window.location.href = "/tracker";
        }
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again later.");
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      // Replace this with actual Google OAuth token retrieval
      const googleToken = prompt("Paste Google ID Token here"); // placeholder

      if (!googleToken) return;

      const response = await fetch("http://localhost:3001/api/v1/users/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: googleToken }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Google login successful!");
        if (result.token) {
          localStorage.setItem("token", result.token);
          window.location.href = "/tracker";
        }
      } else {
        alert(result.message || "Google login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-green-200"
      >
        <motion.h1
          key={isSignUp ? "signup" : "login"}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-green-700 mb-2"
        >
          {isSignUp ? "Create Account" : "Welcome Back"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 mb-8"
        >
          {isSignUp
            ? "Join Carbon Tracker and start reducing your footprint 🌱"
            : "Sign in to continue tracking your carbon footprint."}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {isSignUp && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <label className="text-sm text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
                required
              />
            </motion.div>
          )}

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
              required
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl shadow-md transition-all"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center my-6"
        >
          <div className="w-1/3 border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <div className="w-1/3 border-t border-gray-300"></div>
        </motion.div>

        <motion.button
          onClick={handleGoogleLogin}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 py-2 rounded-xl shadow-sm transition-all"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">Continue with Google</span>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-sm text-gray-500 mt-6"
        >
          {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-green-600 font-semibold hover:underline"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </motion.p>
      </motion.div>
    </div>
  );
}