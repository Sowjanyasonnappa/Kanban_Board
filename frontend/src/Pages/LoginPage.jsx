import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/board");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
    >
      {/* 🫧 Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 25 }).map((_, i) => {
          const size = Math.random() * 30 + 20;
          const left = Math.random() * 100;
          const duration = 15 + Math.random() * 20;
          const delay = Math.random() * 10;
          return (
            <span
              key={i}
              className="absolute bottom-[-100px] rounded-full bg-white/30 [animation:move_25s_linear_infinite]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-indigo-500/90 shadow-2xl rounded-2xl px-8 py-10 w-11/12 max-w-md border border-purple-400">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login Page
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-400 focus:outline-none bg-white/20 text-white placeholder-white/70"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-400 focus:outline-none bg-white/20 text-white placeholder-white/70"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition shadow-md"
          >
            Login
          </button>
        </form>

        {/* Back Button */}
        <div className="mt-6 flex justify-center">
          <BackButton />
        </div>
      </div>

      {/* Bubble Animation */}
      <style>
        {`
          @keyframes move {
            0% { transform: translateY(0) scale(1); opacity: 0.6; }
            50% { opacity: 1; }
            100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default LoginPage;
