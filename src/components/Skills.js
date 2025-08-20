import React from "react";

const skills = [
  { name: "React", color: "bg-blue-500", icon: "⚛️" },
  { name: "Node.js", color: "bg-green-600", icon: "🟩" },
  { name: "MongoDB", color: "bg-green-800", icon: "🍃" },
  { name: "Express", color: "bg-gray-800", icon: "🚂" },
  { name: "TailwindCSS", color: "bg-cyan-500", icon: "🌬️" },
  { name: "Redux", color: "bg-purple-600", icon: "🔄" },
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center">
      <section className="w-full max-w-3xl p-10 rounded-xl shadow-2xl bg-gray-900 bg-opacity-90 mt-10 mb-10">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          My <span className="text-cyan-400">Skills</span>
        </h1>
        <p className="text-gray-300 mb-10 text-lg">
          Here are some of the technologies and tools I work with:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            ...skills,
            { name: "Git", color: "bg-orange-600", icon: "🔧" },
            { name: "GitHub", color: "bg-gray-700", icon: "🐙" },
            { name: "WordPress", color: "bg-blue-800", icon: "📝" },
            { name: "Shopify", color: "bg-green-500", icon: "🛒" },
            { name: "JavaScript", color: "bg-yellow-400", icon: "🟨" },
            { name: "Bootstrap", color: "bg-purple-700", icon: "🅱️" },
          ].map((skill, i) => (
            <div
              key={i}
              className={`flex flex-col items-center p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 ${skill.color} bg-opacity-80`}
            >
              <span className="text-4xl mb-3">{skill.icon}</span>
              <span className="text-xl font-semibold text-white">{skill.name}</span>
              {/* Add HTML & CSS badges */}
              {(skill.name === "React" || skill.name === "Node.js") && (
                <div className="flex gap-2 mt-3">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">HTML</span>
                  <span className="bg-blue-700 text-white px-2 py-1 rounded text-xs font-bold">CSS</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
