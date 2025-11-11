import React, { useState } from 'react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Web Development",
      description: "Building fast, responsive, and modern websites with clean code and smooth performance.",
      icon: "code",
      command: "npm run build",
      tech: ["React", "Node.js", "MongoDB"],
      color: "cyan"
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly and visually appealing interfaces that enhance user experience.",
      icon: "palette",
      command: "figma --design",
      tech: ["Figma", "Adobe XD", "Tailwind"],
      color: "purple"
    },
    {
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications with intuitive design and high performance.",
      icon: "smartphone",
      command: "expo start",
      tech: ["React Native", "Flutter", "Firebase"],
      color: "blue"
    },
    {
      title: "SEO Optimization",
      description: "Improving search engine rankings and boosting online visibility with smart SEO strategies.",
      icon: "rocket",
      command: "lighthouse --optimize",
      tech: ["Analytics", "Core Web Vitals", "Keywords"],
      color: "green"
    },
  ];

  const CodeBracket = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

  const TerminalIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const getServiceIcon = (iconType) => {
    const iconClass = "w-8 h-8";
    switch(iconType) {
      case 'code':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'palette':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case 'smartphone':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'rocket':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Terminal Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <TerminalIcon />
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-mono">
              ~/services
            </h2>
            <span className="text-cyan-400 animate-pulse text-3xl">_</span>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center space-x-2 text-green-400">
                <span className="text-gray-500">$</span>
                <span>cat services.txt</span>
              </div>
              <p className="text-gray-300 mt-2 text-left">
                High-quality digital solutions to help you grow your brand and business online.
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`
              }}
            >
              {/* Glow effect on hover */}
              {hoveredCard === i && (
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                  service.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                  service.color === 'purple' ? 'from-purple-500 to-pink-500' :
                  service.color === 'blue' ? 'from-blue-500 to-indigo-500' :
                  'from-green-500 to-emerald-500'
                } rounded-2xl blur-lg opacity-75 animate-pulse`}></div>
              )}

              {/* Card */}
              <div className={`relative bg-slate-900/80 backdrop-blur-sm border-2 rounded-2xl p-6 h-full transition-all duration-300 ${
                hoveredCard === i 
                  ? 'border-cyan-400 translate-y-[-8px] shadow-2xl' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}>
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <CodeBracket />
                </div>

                {/* Icon with gradient background */}
                <div className="mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${
                    service.color === 'cyan' ? 'from-cyan-500/20 to-blue-500/20 text-cyan-400' :
                    service.color === 'purple' ? 'from-purple-500/20 to-pink-500/20 text-purple-400' :
                    service.color === 'blue' ? 'from-blue-500/20 to-indigo-500/20 text-blue-400' :
                    'from-green-500/20 to-emerald-500/20 text-green-400'
                  } border border-slate-700 group-hover:border-cyan-400/50 transition-colors`}>
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-white font-mono">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Command Line */}
                <div className="bg-slate-950/50 rounded-lg p-3 mb-3 border border-slate-800">
                  <div className="flex items-center space-x-2 font-mono text-xs">
                    <span className="text-green-400">$</span>
                    <span className={`${
                      service.color === 'cyan' ? 'text-cyan-400' :
                      service.color === 'purple' ? 'text-purple-400' :
                      service.color === 'blue' ? 'text-blue-400' :
                      'text-green-400'
                    }`}>{service.command}</span>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-800/50 text-cyan-400 rounded text-xs font-mono border border-slate-700 hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1">
                  <div className={`w-2 h-2 rounded-full ${
                    hoveredCard === i ? 'bg-green-400 animate-pulse' : 'bg-gray-600'
                  }`}></div>
                  <span className="text-xs text-gray-500 font-mono">
                    {hoveredCard === i ? 'active' : 'ready'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Terminal Output */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center space-x-2 text-green-400">
                <span className="text-gray-500">$</span>
                <span>git commit -m "Ready to build amazing projects"</span>
              </div>
              <div className="text-gray-400">
                <span className="text-cyan-400">[main {Math.floor(Math.random() * 1000)}a{Math.floor(Math.random() * 100)}]</span> Ready to build amazing projects
              </div>
              <div className="text-gray-400">
                4 services available, 100% uptime guaranteed ✨
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </section>
  );
}