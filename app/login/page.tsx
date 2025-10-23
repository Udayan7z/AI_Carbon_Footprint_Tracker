"use client";

import { useState } from "react";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col justify-center items-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-green-200">
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="text-gray-600 mb-8">
          {isSignUp
            ? "Join Carbon Tracker and start reducing your footprint 🌱"
            : "Sign in to continue tracking your carbon footprint."}
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(isSignUp ? "Account created!" : "Logged in!");
          }}
          className="flex flex-col gap-4 text-left"
        >
          {isSignUp && (
            <div>
              <label className="text-sm text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          )}

          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl shadow-md transition-all"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="flex items-center justify-center my-6">
          <div className="w-1/3 border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <div className="w-1/3 border-t border-gray-300"></div>
        </div>

        
        <button
          onClick={() => alert("Google Sign-In (frontend only)")}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 py-2 rounded-xl shadow-sm transition-all"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>

        <p className="text-sm text-gray-500 mt-6">
          {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-green-600 font-semibold hover:underline"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}