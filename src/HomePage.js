import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ares from './images/ares.webp';

import rbac from './images/rbac.webp';
import rt from './images/rt.webp';

import {
  ChevronDown,
  Calendar,
  Activity,
  Bell,
  Users,
  ClipboardCheck,
  GraduationCap,
  BookOpen,
  FileCheck,
  ShieldCheck,
  Trophy,
  Heart,
} from "lucide-react";

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeForm, setActiveForm] = useState(null); // State to track active form
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToLogin = () => {
    navigate("/login");
  };

//   const teamMembers = [
//     {
//       image: Catherine, // Proper image path
//       name: "Catherine Davidson",
//       role: "Frontend Developer",
//       linkedin: "https://www.linkedin.com/in/catherine-davidson-a-63b4a6290/",
//       github: "https://github.com/CatherineDavidson",
//     },
//     {
//       image: Vaibhav, // Proper image path
//       name: "Vaibhav Sharma",
//       role: "Full Stack Developer",
//       linkedin: "https://www.linkedin.com/in/itsvaibhavsharma/",
//       github: "https://github.com/itsVaibhavSharma/",
//     },
//     {
//       image: Sania, // Proper image path
//       name: "Sania Begum",
//       role: "Full Stack Developer",
//       linkedin: "https://www.linkedin.com/in/sania-begum-shaik-735948256/",
//       github: "https://github.com/ShaikSaniaBegum",
//     },
//   ];

  const navigateToRegister = () => {
    navigate("/register");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full overflow-hidden relative ">
      
      {/* Modern Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-blue-900 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center ">
          {/* Brand Logo */}
          <div className="text-2xl font-bold text-blue-900 cursor-pointer">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="hover:text-white transition"
            >
              <span className="text-white">Project</span> Management System
            </ScrollLink>
          </div>

          {/* Navigation Links */}
          <nav
            className={`fixed inset-0 bg-blue-900 bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-navy-900 md:relative md:inset-auto md:bg-transparent md:flex-row md:space-y-0 md:space-x-8 md:items-center ${
              isMenuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className="text-lg hover:text-blue-300 transition cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </ScrollLink>
            <ScrollLink
              to="roles"
              smooth={true}
              duration={500}
              className="text-lg hover:text-blue-300 transition cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Who It's For
            </ScrollLink>
            {/* <ScrollLink
              to="team"
              smooth={true}
              duration={500}
              className="text-lg hover:text-blue-300 transition cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </ScrollLink> */}

            {/* Call-to-Actions */}
            <div className="flex space-x-4">
              <button
                onClick={navigateToLogin}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full text-white font-medium hover:shadow-lg transition transform hover:scale-105"
              >
                Login
              </button>
              {/* <button
                onClick={navigateToRegister}
                className="bg-transparent border-2 border-white px-4 py-2 rounded-full text-white font-medium hover:bg-white hover:text-blue-900 transition transform hover:scale-105"
              >
                Register
              </button> */}
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>
     

      {/* Hero Section */}
      {/* <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-black">
       */}
       <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-400 to-slate-400">

        <div className="absolute inset-0 overflow-hidden ">
          <svg
            className="absolute animate-spin-slow opacity-10"
            viewBox="0 0 100 100"
            width="1000"
            height="1000"
          >
            <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate" />

        <div className="relative z-10 text-center text-navy-600">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">Project Management System</h1>
          <p className="text-xl mb-12 animate-slide-up">
          Transforming project management — smart, seamless, and stress-free!
          </p>
          <div className="space-x-6 animate-fade-in-up">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
              onClick={navigateToLogin}
            >
              Login
            </button>
            {/* <button
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
              onClick={navigateToRegister}
            >
              Register
            </button> */}
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 text-white animate-bounce w-8 h-8" />
      </section>
      {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative bg-transparent rounded-lg shadow-lg w-full max-w-md p-6">
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        onClick={closeModal}
      >
        ✕
      </button>
      {activeForm === "login" && {navigateToLogin}}
      {activeForm === "register" && {navigateToRegister}}
    </div>
  </div>
)}
      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-slate-400 to-slate-400">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {/* Feature 1 */}
            <div
              className="flex items-center gap-12"
              style={{
                opacity: Math.min(1, (scrollPosition - 300) / 400),
                transform: `translateX(${Math.max(0, 100 - (scrollPosition - 300) / 4)}px)`,
              }}
            >
              <div className="w-1/2">
                <Users className="w-16 h-16 text-black mb-4" />
                <h2 className="text-3xl font-bold text-navy-900 mb-4">Role-Based Access Control (RBAC)</h2>
                <p className="text-navy-900">
                Ensure security by providing different functionalities for students, faculty, PRC members, and coordinators. Each user gets access based on their role, preventing unauthorized actions.
                </p>
              </div>
              <img src={rbac} alt="Event"  style={{
    width: "500px",
    height: "300px",
    objectFit: "cover", // Ensures the image fits nicely within the bounds
  }}/>
            </div>

            {/* Feature 2 */}
            <div
              className="flex items-center gap-12"
              style={{
                opacity: Math.min(1, (scrollPosition - 600) / 400),
                transform: `translateX(${Math.min(0, -100 + (scrollPosition - 600) / 4)}px)`,
              }}
            >
              <img src={ares} alt="Event"  style={{
    width: "500px",
    height: "300px",
    objectFit: "cover", // Ensures the image fits nicely within the bounds
  }}/>
              <div className="w-1/2">
                <ClipboardCheck className="w-16 h-16 text-black mb-4" />
                <h2 className="text-3xl font-bold text-navy-900 mb-4">Automated Review & Evaluation System</h2>
                <p className="text-navy-900">
                Allow PRC members to assess projects, give marks, and provide feedback directly on presentation days, streamlining the evaluation process without paperwork.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              className="flex items-center gap-12"
              style={{
                opacity: Math.min(1, (scrollPosition - 900) / 400),
                transform: `translateX(${Math.max(0, 100 - (scrollPosition - 900) / 4)}px)`,
              }}
            >
              <div className="w-1/2">
                <Bell className="w-16 h-16 text-black mb-4" />
                <h2 className="text-3xl font-bold text-navy-900 mb-4">Real-Time Progress Tracking & Notifications</h2>
                <p className="text-navy-900">
                Enable students to update project milestones, share documents, and receive feedback instantly while faculty and mentors monitor progress, ensuring better guidance and timely reviews.
                </p>
              </div>
              <img src={rt} alt="Event"  style={{
    width: "500px",
    height: "300px",
    objectFit: "cover", // Ensures the image fits nicely within the bounds
  }}/>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles"className="py-20 bg-gradient-to-b from-slate-400 to-slate">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy-900 mb-16">Who It's For</h2>
          <div className="grid grid-cols-4 gap-8">
            {/* Admin Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-600 p-8 rounded-xl text-white transform hover:scale-105 transition-all">
              <ShieldCheck className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Administrators</h3>
              <ul className="space-y-2 text-blue-100">
                <li>Oversee the entire project management system</li>
                <li>Manage user roles and permissions</li>
              </ul>
            </div>

            {/* Coach Card */}
            <div className="bg-gradient-to-br from-indigo-800 to-indigo-600 p-8 rounded-xl text-white transform hover:scale-105 transition-all">
              <FileCheck className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">PRC Members</h3>
              <ul className="space-y-2 text-purple-100">
                <li>Assess project feasibility and innovation</li>
                <li>Provide constructive feedback for improvements</li>
              </ul>
            </div>

            {/* Athlete Card */}
            <div className="bg-gradient-to-br from-teal-800 to-teal-600 p-8 rounded-xl text-white transform hover:scale-105 transition-all">
              <BookOpen className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Faculty</h3>
              <ul className="space-y-2 text-green-100">
                <li>Guide students through project development</li>
                <li>Monitor student progress and provide feedback</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-800 to-cyan-600 p-8 rounded-xl text-white transform hover:scale-105 transition-all">
              <GraduationCap className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Students</h3>
              <ul className="space-y-2 text-blue-100">
                <li>Collaborate with mentors</li>
                <li>Submit project updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
       {/* <section id="team" className="py-20 bg-black text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
    <div className="grid grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="text-center group hover:scale-105 transition-transform duration-300"
        >
          <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500">
            <img
              src={member.image}
              alt={`${member.name}`}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
          <h4 className="text-xl mb-2">{member.role}</h4>

          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={member.linkedin}
              className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-600 mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href={member.github}
              className="flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5" /> GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </div> */}
{/* </div></section> */}

      
      {/* Footer */}
      <footer className="py-8 bg-slate-400 text-white text-center">
        <p color="text-navy-900">&copy; 2025 Project Management System</p>
      </footer>

      {/* Developer Section */}
      
    </div>
  );
};

export default HomePage;