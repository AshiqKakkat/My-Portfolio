import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Taxi Kerala",
    link: "https://taxiskerala.com",
    image: "/logo taxikerala.png",
    description:
      "WordPress developed website for a taxi booking service, featuring a user-friendly interface and seamless booking experience.",
    tech: ["WordPress", "PHP", "MySQL"],
    status: "deployed",
  },
  {
    title: "Home Decor Booking",
    link: "https://shaalah.com",
    image: "/shaalah logo-01.png",
    description:
      "Shopify-based online store for home decor products with seamless browsing and booking experience.",
    tech: ["Shopify", "Liquid", "JS"],
    status: "live",
  },
  {
    title: "House Boat Booking",
    link: "https://kadathuhouseboat.com",
    image: "/houseboat logodark-02-02.png",
    description:
      "WordPress developed website for a houseboat booking service, featuring a user-friendly interface and seamless booking experience.",
    tech: ["WordPress", "Custom Theme", "API"],
    status: "deployed",
  },
  {
    title: "Style That Speaks",
    link: "https://secretscrush.com",
    image: "/secrets crush png.png",
    description:
      "Shopify-based e-commerce website for fashion and accessories, featuring a modern and engaging shopping experience.",
    tech: ["Shopify", "React", "GraphQL"],
    status: "live",
  },
  {
    title: "Ladies Fashion",
    link: "https://sangriti.com",
    image: "/Sankriti black.png",
    description:
      "Shopify-based e-commerce website for ladies fashion, featuring a modern and engaging shopping experience.",
    tech: ["Shopify", "Liquid", "CSS3"],
    status: "live",
  },
  {
    title: "Weather Forecast",
    link: "https://github.com/AshiqKakkat/weather-app",
    image: "/How-to-use-weather-app-on-iPhone-and-iPad.jpg",
    description:
      "A React-based weather app that fetches real-time weather data from an API, displays current conditions, and provides a 5-day forecast with a clean, responsive UI.",
    tech: ["React", "API", "Hooks"],
    status: "github",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [terminalText, setTerminalText] = useState("$ _");

  const handleMouseEnter = (index, title) => {
    setHoveredIndex(index);
    setTerminalText(`$ cat ${title.toLowerCase().replace(/\s+/g, "_")}.json`);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-black text-green-400 relative overflow-hidden py-24"
    >
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Math.random().toString(36).substring(7)}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse pointer-events-none"></div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-6 z-10">
        <motion.div
          className="bg-gray-900 border-2 border-green-500 rounded-t-lg p-4 mb-8 font-mono"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-gray-400">root@portfolio:~/projects</span>
          </div>
          <div className="text-green-400 text-sm">
            <span className="text-blue-400">const</span> projects = <span className="text-yellow-400">[</span>
            <span className="animate-pulse">█</span>
            <span className="text-yellow-400">]</span>;
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold mb-4 font-mono">
            <span className="text-gray-500">{"<"}</span>
            <span className="text-green-400">Projects</span>
            <span className="text-gray-500">{" />"}</span>
          </h2>
          <div className="text-gray-400 font-mono text-sm mb-4">
            // {terminalText}
          </div>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto font-mono">
            /* Building scalable solutions with modern tech stacks */
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onMouseEnter={() => handleMouseEnter(i, p.title)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setTerminalText("$ _");
              }}
            >
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="block bg-gray-900 border-2 border-green-500/30 hover:border-green-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] hover:-translate-y-1"
              >
                <div className="bg-gray-800 border-b border-green-500/30 p-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-400 font-mono ml-2">
                    {p.title.toLowerCase().replace(/\s+/g, "_")}.exe
                  </span>
                  <div className="ml-auto">
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      p.status === "deployed" || p.status === "live" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-blue-500/20 text-blue-400"
                    }`}>
                      {p.status}
                    </span>
                  </div>
                </div>

                <div className="relative h-48 overflow-hidden bg-black">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 font-mono text-xs text-green-400 overflow-hidden">
                    <div className="animate-pulse">
                      <div>{"{"}</div>
                      <div className="ml-4">"project": "{p.title}",</div>
                      <div className="ml-4">"status": "{p.status}",</div>
                      <div className="ml-4">"tech": {JSON.stringify(p.tech)},</div>
                      <div className="ml-4">"url": "{p.link}"</div>
                      <div>{"}"}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-900">
                  <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">
                    {"> "}{p.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 font-mono leading-relaxed">
                    // {p.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              {hoveredIndex === i && (
                <div className="absolute -inset-0.5 bg-green-500/20 blur-sm -z-10 animate-pulse"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-gray-900 border-2 border-green-500 rounded-lg p-4 font-mono text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-green-400">
            $ projects.length <span className="text-gray-500">=&gt;</span>{" "}
            <span className="text-yellow-400">{projects.length}</span>
          </div>
          <div className="text-gray-500 text-xs mt-1">
            // End of project listing. Press Ctrl+C to exit.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
