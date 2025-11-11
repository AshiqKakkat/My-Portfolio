import React from "react";

// ✅ Skill Icons Function
const getSkillIcon = (skill) => {
  switch (skill) {
    case "React":
      return (
        <svg className="w-12 h-12 text-cyan-400" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="11" fill="#61DAFB" />
          <path stroke="#61DAFB" strokeWidth="6" fill="none" d="M64 23c-22 0-40 9-40 21s18 21 40 21 40-9 40-21-18-21-40-21z"></path>
          <path stroke="#61DAFB" strokeWidth="6" fill="none" d="M41 41c-11 19-11 38 0 57s22 19 23 0c1-19-10-38-23-57z"></path>
          <path stroke="#61DAFB" strokeWidth="6" fill="none" d="M87 41c11 19 11 38 0 57s-22 19-23 0c-1-19 10-38 23-57z"></path>
        </svg>
      );

    case "Node.js":
      return (
        <svg className="w-12 h-12 text-green-500" viewBox="0 0 128 128">
          <path fill="#83CD29" d="M63.6 1l58.2 33.6v58.8L63.6 127 5.4 93.4V34.6z"></path>
        </svg>
      );

    case "MongoDB":
      return (
        <svg className="w-12 h-12 text-green-700" viewBox="0 0 128 128">
          <path fill="#4FAA41" d="M64 0c-2 25-20 36-20 62s18 43 20 64c2-21 20-38 20-64S66 25 64 0z"></path>
        </svg>
      );

    case "Express":
      return (
        <svg className="w-12 h-12 text-gray-400" viewBox="0 0 128 128">
          <text x="10" y="85" fontSize="60" fontFamily="sans-serif" fill="currentColor">Ex</text>
        </svg>
      );

    case "TailwindCSS":
      return (
        <svg className="w-12 h-12 text-sky-400" viewBox="0 0 128 128">
          <path fill="#38BDF8" d="M64 40c-12 0-20 6-24 17 4-4 8-6 14-6 7 0 12 3 16 9 3 6 9 9 17 9 12 0 20-6 24-17-4 4-8 6-14 6-7 0-12-3-16-9-3-6-9-9-17-9z"></path>
        </svg>
      );

    case "Redux":
      return (
        <svg className="w-12 h-12 text-purple-500" viewBox="0 0 128 128">
          <path fill="#764ABC" d="M64 18C38 18 17 39 17 65s21 47 47 47 47-21 47-47S90 18 64 18z"></path>
        </svg>
      );

    case "Git":
      return (
        <svg className="w-12 h-12 text-orange-600" viewBox="0 0 128 128">
          <path fill="#F05032" d="M124 58L70 4c-2-2-6-2-8 0L50 16l13 13c2-1 4-1 5 0l45 45c2 2 2 5 0 7l-13 13c-2 2-5 2-7 0L49 52c-1-1-1-3 0-4l13-13-6-6-14 14c-2 2-2 6 0 8l54 54c2 2 6 2 8 0l20-20c2-2 2-6 0-8z"></path>
        </svg>
      );

    case "GitHub":
      return (
        <svg className="w-12 h-12 text-gray-200" viewBox="0 0 128 128">
          <path fill="currentColor" d="M64 2C30 2 3 29 3 63c0 27 17 50 41 58 3 1 4-1 4-3v-11c-17 4-20-8-20-8-2-6-6-8-6-8-5-3 0-3 0-3 6 0 9 6 9 6 5 9 13 6 17 5 0-4 2-7 3-8-13-1-27-7-27-29 0-6 2-11 6-15-1-1-3-7 1-15 0 0 5-2 15 6a54 54 0 0128 0c10-8 15-6 15-6 4 8 2 14 1 15 4 4 6 9 6 15 0 22-14 28-27 29 2 2 4 5 4 10v15c0 2 1 4 4 3 24-8 41-31 41-58C125 29 98 2 64 2z"></path>
        </svg>
      );

    case "WordPress":
      return (
        <svg className="w-12 h-12 text-blue-700" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="60" fill="#21759B"></circle>
          <path fill="#FFF" d="M64 12c29 0 52 23 52 52s-23 52-52 52S12 93 12 64 35 12 64 12zM47 88L34 49h10l6 20 5-20h9l-10 39H47zm45-39c-2 0-4 1-6 2l-5 20-7-22h9l2 7 3-7h8l-8 22 5 13h-9l-5-13 7-22z"></path>
        </svg>
      );

    case "Shopify":
      return (
        <svg className="w-12 h-12 text-green-700" viewBox="0 0 128 128">
          <path fill="#95BF47" d="M88 24L74 14c-3-2-9-2-13 0l-14 10-8 80 34 10 34-10z"></path>
          <path fill="#5E8E3E" d="M64 4s-12 3-18 14c-6 11-6 24-6 24l20-6s0-14 4-20c3-6 10-8 10-8z"></path>
        </svg>
      );

    case "JavaScript":
      return (
        <svg className="w-12 h-12 text-yellow-400" viewBox="0 0 128 128">
          <path fill="#F7DF1E" d="M2 2v124h124V2z"></path>
        </svg>
      );

    case "Bootstrap":
      return (
        <svg className="w-12 h-12 text-purple-600" viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#7952B3"></rect>
          <text x="38" y="88" fontSize="70" fontFamily="sans-serif" fill="white">B</text>
        </svg>
      );

    default:
      return null;
  }
};

// ✅ Skill List
const skills = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "TailwindCSS",
  "Redux",
  "Git",
  "GitHub",
  "WordPress",
  "Shopify",
  "JavaScript",
  "Bootstrap",
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
          {skills.map((name, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 bg-gray-800 bg-opacity-80"
            >
              {getSkillIcon(name)}
              <span className="text-xl font-semibold text-white mt-3">{name}</span>

              {(name === "React" || name === "Node.js") && (
                <div className="flex gap-2 mt-3">
                  {/* <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">HTML</span>
                  <span className="bg-blue-700 text-white px-2 py-1 rounded text-xs font-bold">CSS</span> */}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
