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
        <svg className="w-12 h-12" viewBox="0 0 128 128" fill="none">
          <path d="M64 10c-3 0-5 2-6 5l-8 35c-1 3 0 6 2 8l10 12c2 2 4 2 6 0l10-12c2-2 3-5 2-8l-8-35c-1-3-3-5-6-5z" fill="#4DB33D" />
          <ellipse cx="64" cy="70" rx="18" ry="8" fill="#3FA037" />
          <path d="M64 70v40" stroke="#3FA037" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="64" cy="110" rx="8" ry="4" fill="#2E7D32" />
        </svg>
      );

    case "Express":
      return (
        <svg className="w-12 h-12" viewBox="0 0 128 128" fill="none">
          <rect x="8" y="8" width="112" height="112" rx="12" fill="#303030" />
          <path d="M25 64h78M25 64l15-15M25 64l15 15" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="95" cy="64" r="8" fill="#fff" />
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
        <svg className="w-12 h-12" viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="58" fill="#21759B" />
          <circle cx="64" cy="64" r="50" fill="#fff" />
          <circle cx="64" cy="64" r="42" fill="#21759B" />
          <path d="M64 22L64 106M22 64L106 64" stroke="#fff" strokeWidth="4" />
          <circle cx="64" cy="64" r="12" fill="#fff" />
        </svg>
      );

    case "Shopify":
      return (
        <svg className="w-12 h-12" viewBox="0 0 128 128" fill="none">
          <path d="M64 10L90 25L95 75L64 95L33 75L38 25z" fill="#95BF47" />
          <path d="M64 10L90 25v50L64 95z" fill="#5E8E3E" opacity="0.8" />
          <path d="M50 35h28v8h-28zM48 48h32l-4 30h-24z" fill="#fff" />
          <circle cx="55" cy="85" r="6" fill="#fff" />
          <circle cx="73" cy="85" r="6" fill="#fff" />
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
