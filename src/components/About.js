import React, { useState } from "react";
import ashikqk from "../assets/ashikqk.jpg";

export default function About() {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    { number: "024+", label: "Happy Clients", color: "cyan" },
    { number: "016+", label: "Projects Completed", color: "blue" },
    { number: "009+", label: "Awards Won", color: "purple" },
  ];

  const skills = [
    "JavaScript", "React", "Node.js", "MongoDB", "Express",
    "WordPress", "Shopify", "AWS", "Azure", "GCP", "REST APIs"
  ];

  // SVG Icons
  const TerminalIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const DownloadIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );

  const CodeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

  return (
    <section id="about" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-16">
          <TerminalIcon />
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 ml-3">
            ~/about
          </h2>
          <span className="ml-3 text-cyan-400 animate-pulse">_</span>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className="relative group cursor-pointer"
                >
                  <div className={`text-center p-6 rounded-xl border transition-all duration-300 ${
                    hoveredStat === index
                      ? 'border-cyan-400 bg-cyan-500/10 scale-105'
                      : 'border-slate-700 bg-slate-800/30'
                  }`}>
                    <div className={`text-5xl font-bold mb-2 font-mono transition-all duration-300 ${
                      stat.color === 'cyan' ? 'text-cyan-400' :
                      stat.color === 'blue' ? 'text-blue-400' :
                      'text-purple-400'
                    }`}>
                      {stat.number}
                    </div>
                    <p className="text-gray-400 text-sm font-mono">{stat.label}</p>
                  </div>
                  {hoveredStat === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Profile Image & Command Box */}
          <div className="space-y-6">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center mb-3 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-gray-500 font-mono ml-auto">profile.img</span>
                </div>
                <img
                  src={ashikqk}
                  alt="Ashiq"
                    className="w-full h-auto object-contain max-h-[500px] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Command Box */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
              <div className="flex items-center mb-4 text-cyan-400 font-mono text-sm">
                <CodeIcon />
                <span className="ml-2">quick_facts.json</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex">
                  <span className="text-purple-400 mr-2">"name":</span>
                  <span className="text-green-400">"Ashiq"</span>
                </div>
                <div className="flex">
                  <span className="text-purple-400 mr-2">"role":</span>
                  <span className="text-green-400">"MERN Stack Developer"</span>
                </div>
                <div className="flex">
                  <span className="text-purple-400 mr-2">"location":</span>
                  <span className="text-green-400">"Kerala, India"</span>
                </div>
                <div className="flex">
                  <span className="text-purple-400 mr-2">"status":</span>
                  <span className="text-green-400">"Available for work"</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info & Description */}
          <div className="space-y-6">
            {/* Introduction */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 lg:p-8">
              <div className="flex items-center mb-4">
                <span className="text-cyan-400 font-mono text-sm mr-2">$</span>
                <h3 className="text-2xl font-bold text-white font-mono">whoami</h3>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <span className="text-cyan-400 font-semibold">Hi, I'm Ashiq </span>
                </p>
                <p>
                  Passionate <span className="text-blue-400 font-semibold">MERN Stack & Web Developer</span> with hands-on experience building secure, scalable, and user-focused applications. Skilled in JavaScript, React, Node.js, and MongoDB with strong knowledge of RESTful APIs and cloud platforms.
                </p>
                <p>
                  Also experienced in <span className="text-purple-400 font-semibold">WordPress and Shopify development</span>, enabling businesses with modern e-commerce solutions. Adept at working in Agile teams and delivering clean, efficient code.
                </p>
                <p className="text-green-400 font-mono text-sm">
                  → Seeking opportunities to contribute to innovative digital solutions 
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-cyan-400 font-mono text-sm mr-2">$</span>
                <h4 className="text-lg font-bold text-white font-mono">ls ./skills</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-slate-800/50 text-cyan-400 rounded-md text-sm font-mono border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800 hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <div className="flex gap-4">
              <a
                href="/Ashiq_CV.pdf"
                download
                className="relative group flex-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-sm group-hover:blur-md transition-all"></div>
                <div className="relative px-6 py-4 bg-slate-950 rounded-lg border border-cyan-500/50 group-hover:border-cyan-400 transition-all flex items-center justify-center space-x-2">
                  <DownloadIcon />
                  <span className="text-cyan-400 font-mono font-semibold">Download Resume</span>
                </div>
              </a>
            </div>

            {/* Command Line Output */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-4">
              <p className="text-green-400 font-mono text-xs">
                <span className="text-gray-500">$</span> echo $STATUS
                <br />
                <span className="text-white">Ready to build amazing things ✨</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}