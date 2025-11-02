import React from "react";
import { Link } from "react-router-dom";
import { Rocket, ChevronDown, Monitor, Wifi, Terminal, Users, Cpu, Shield, MessageCircle, Share2, Award, Handshake } from "lucide-react";

import CR3 from "../assets/CR3.png";

const Home = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Learning",
      description: "Join study groups, pair programming sessions, and collaborative projects with fellow developers.",
      specs: [],
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Active Forums",
      description: "Engage in technical discussions ask questions and share knowledge with the community.",
      specs: [],
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Knowledge Sharing",
      description: "Share your projects, get feedback, and learn from others experiences.",
      specs: [],
    },
  ];

  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "https://via.placeholder.com/200x100/1e293b/06b6d4?text=Sponsor+1",
      website: "#",
    },
    {
      name: "Sponsor 2",
      logo: "https://via.placeholder.com/200x100/1e293b/8b5cf6?text=Sponsor+2",
      website: "#",
    },
    {
      name: "Sponsor 3",
      logo: "https://via.placeholder.com/200x100/1e293b/06b6d4?text=Sponsor+3",
      website: "#",
    },
    {
      name: "Sponsor 4",
      logo: "https://via.placeholder.com/200x100/1e293b/8b5cf6?text=Sponsor+4",
      website: "#",
    },
  ];

  const communityPartners = [
    {
      name: "Partner 1",
      logo: "https://via.placeholder.com/200x100/1e293b/22c55e?text=Partner+1",
      website: "#",
    },
    {
      name: "Partner 2",
      logo: "https://via.placeholder.com/200x100/1e293b/eab308?text=Partner+2",
      website: "#",
    },
    {
      name: "Partner 3",
      logo: "https://via.placeholder.com/200x100/1e293b/22c55e?text=Partner+3",
      website: "#",
    },
    {
      name: "Partner 4",
      logo: "https://via.placeholder.com/200x100/1e293b/eab308?text=Partner+4",
      website: "#",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm ">
                <Rocket className="w-4 h-4 mr-2 animate-pulse" />
                Stars Aligned by Rangers
              </div>
              <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Code</span>
                <br />
                <span className="text-white">Rangers</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Join the club where coffee meets chaos, ideas dance with snacks and the future is built one meme at a time. Where curiosity fuels code and teamwork powers the journey.
                <br /> ENTER AT YOUR OWN RISK - MAY CAUSE CODE ADDICTION
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="https://chat.whatsapp.com/DsGykbdRTXG2gISvrW2EgJ" className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center font-mono ">
                    🚀 npm run dev
                    <ChevronDown className="w-5 h-5 ml-2 group-hover:animate-bounce" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
                </Link>
                <Link to="/events" className="flex items-center justify-center border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm">
                  View Events
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl transform rotate-3 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-1 shadow-2xl shadow-cyan-500/25">
                <img src={CR3} alt="Code Rangers Logo" className="rounded-3xl w-full h-auto object-cover " />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR AIM */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">OUR AIM</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-auto mx-auto">We strive to foster a community of passionate programmers, provide hands-on learning experiences and bridge the gap between academic knowledge and real-world application. Our goal is to create future tech leaders who can solve tomorrow&#39;s challenges today. Together, we code, innovate and inspire change that shapes the future—building not just technology, but a legacy of innovation that empowers lives and transforms the world.</p>
          </div>
        </div>
      </section>

      {/* Quick Features Preview */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">CORE STRENGTH</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto">Our core strength is transforming ideas into real-world tech solutions, empowering members to innovate, collaborate and lead with impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/features" className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-200 group">
              Explore All Features
              <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="relative py-20 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">OUR SPONSORS</span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powered by industry leaders who believe in our mission to shape the future of technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-cyan-500/20 hover:border-yellow-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-center h-24">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Community Partners Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Handshake className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">COMMUNITY PARTNERS</span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Collaborating with amazing communities to create a stronger tech ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityPartners.map((partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-cyan-500/20 hover:border-green-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-center h-24">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
