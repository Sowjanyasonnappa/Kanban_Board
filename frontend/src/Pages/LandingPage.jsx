import React from 'react'
import landing from '../assets/landing.jpg';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
      
      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 25 }).map((_, i) => {
          const size = Math.random() * 40 + 20;
          const left = Math.random() * 100;
          const duration = 15 + Math.random() * 10;
          const delay = Math.random() * 5;
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

      {/* Navbar */}
      <header className="flex justify-between items-center px-6 md:px-10 py-6 relative z-10">
        <div className="flex items-center space-x-2">
          <span className="text-white font-bold text-2xl">SKB</span>
          <span className="text-white font-semibold">Kanban Bord</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Our Mission</a>
          <a href="#">Menu</a>
        </nav>
        <button className="md:hidden text-white">☰</button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-12 space-y-10 md:space-y-0 relative z-10">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            A Todo list <br /> But on Steroids <br /> 
            <span className='text-pink-300'>Introducing Kanban Board</span>
          </h1>
          <p className="text-white/90 max-w-lg mx-auto md:mx-0">
            Create smart tasks, set reminders, and achieve more every day. 
            Learn how to build a personal to-do system that helps you focus 
            on what truly matters.
          </p>
          <Link 
            to="/login" 
            className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Right Illustration */}
        <div className="md:w-1/2 flex flex-col items-center relative">
          {/* Card with tasks */}
          <div className="bg-indigo-500/90 shadow-lg ml-10 rounded-2xl p-6 w-full max-w-sm relative z-10 border border-purple-400">
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <input type="checkbox" checked readOnly className="w-5 h-5 accent-pink-300" />
                <span className="text-white font-medium">Plan my day</span>
              </li>
              <li className="flex items-center space-x-3">
                <input type="checkbox" checked readOnly className="w-5 h-5 accent-pink-300" />
                <span className="text-white font-medium">Finish project work</span>
              </li>
              <li className="flex items-center space-x-3">
                <input type="checkbox" checked readOnly className="w-5 h-5 accent-pink-300" />
                <span className="text-white font-medium">Read 10 pages</span>
              </li>
              <li className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 accent-purple-300" />
                <span className="text-white font-medium">Workout session</span>
              </li>
            </ul>
          </div>

          <img src={landing} alt="Illustration" className="mt-6 w-1/2 rounded-xl shadow-lg" />
        </div>
      </main>

      {/* Footer Decoration */}
      <div className="mt-auto relative z-10">
        <div className="bg-purple-600/60 h-20 md:h-32 w-full rounded-t-[40px]"></div>
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

export default LandingPage;
