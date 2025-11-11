import React, { useState } from "react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      period: "Present",
      location: "Calicut, Kerala",
      role: "Junior Software Engineer",
      company: "Codenex Solutions Pvt LLP",
      details: [
        "Currently working as a Junior Software Engineer, contributing to full-stack projects using modern web technologies.",
        "Collaborating with the development team to deliver scalable and high-performance applications.",
        "Improving existing codebases, optimizing workflows, and ensuring high-quality software delivery.",
      ],
      tech: ["React", "Node.js", "MongoDB", "Express","WordPress", "Shopify", "Liquid" ]
    },
    {
      period: "05/2025 – 09/2025",
      location: "Kochi, Kerala",
      role: "Web Developer",
      company: "Addax Digital",
      details: [
        "Designed and built many custom websites using WordPress and Shopify, focusing on clean design, fast performance, and mobile responsiveness.",
        "Created and customized themes using HTML, CSS, JavaScript, and Liquid to align with each client's brand and business goals.",
        "Developed eCommerce sites for small businesses and dropshipping stores, including automated product sourcing and order fulfillment.",
        "Integrated third-party tools, plugins, and payment gateways to enhance site functionality and improve user experience.",
        "Optimized websites for SEO, loading speed, and accessibility, boosting client visibility and engagement.",
      ],
      tech: ["WordPress", "Shopify", "Liquid", "JavaScript"]
    },
    {
      period: "08/2024 – 04/2025",
      location: "Calicut, Kerala",
      role: "MERN Stack Developer Intern",
      company: "Techolas Technologies Pvt Ltd",
      details: [
        "Built full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) to handle real-world business needs and high-traffic environments.",
        "Developed rich front-end interfaces with React and Redux, ensuring seamless user experiences and responsive design across devices.",
        "Created a custom UI component library that reduced development time by 15% and improved code consistency and reusability.",
        "Optimized back-end performance through MongoDB query optimization and implemented caching strategies to support large user loads.",
      ],
      tech: ["MongoDB", "Express", "React", "Node.js", "Redux"]
    },
  ];

  // SVG Icons as components
  const TerminalIcon = () => (
    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const CodeIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

  const BriefcaseIcon = () => (
    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  return (
    <section id="experience" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 px-6 lg:px-16 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-12">
          <TerminalIcon />
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 ml-3">
            ~/experience
          </h2>
          <span className="ml-3 text-cyan-400 animate-pulse">_</span>
        </div>

        {/* Command Line Style Subtitle */}
        <div className="text-center mb-12">
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-green-400">user@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-500">$ </span>
            cat work_history.log
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-4 sticky top-24">
              <div className="flex items-center mb-4 text-cyan-400 font-mono text-sm">
                <CodeIcon />
                <span className="ml-2">positions.json</span>
              </div>
              <div className="space-y-2">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-mono text-sm ${
                      activeIndex === index
                        ? 'bg-cyan-500/20 border-l-4 border-cyan-400 text-cyan-400'
                        : 'text-gray-400 hover:bg-slate-800/50 border-l-4 border-transparent hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold">{exp.company}</div>
                    <div className="text-xs opacity-70 mt-1">{exp.period}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-slate-800/50 px-4 py-3 flex items-center border-b border-slate-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 font-mono text-xs text-gray-400">
                  {experiences[activeIndex].company.toLowerCase().replace(/\s+/g, '-')}.sh
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start mb-4">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <BriefcaseIcon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experiences[activeIndex].role}
                    </h3>
                    <div className="text-cyan-400 font-semibold mb-3 text-lg">
                      @ {experiences[activeIndex].company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
                      <div className="flex items-center">
                        <span className="mr-2 text-blue-400"><CalendarIcon /></span>
                        {experiences[activeIndex].period}
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2 text-purple-400"><MapPinIcon /></span>
                        {experiences[activeIndex].location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-6 space-y-4">
                  {experiences[activeIndex].details.map((item, i) => (
                    <div key={i} className="flex items-start group">
                      <span className="text-cyan-400 mr-3 mt-1 font-mono text-sm group-hover:text-cyan-300 transition-colors">▹</span>
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="text-gray-400 text-sm font-mono mb-3">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeIndex].tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800/50 text-cyan-400 rounded-md text-sm font-mono border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Command */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 font-mono text-sm">
            <span className="text-green-400">✓</span> Loaded {experiences.length} positions successfully
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;