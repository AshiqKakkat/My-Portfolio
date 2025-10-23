import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/portbanner1.jpg')" }} // 👈 background image
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-white"
        >
          Hi, I’m <span className="text-blue-400">Ashiq</span> 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl text-gray-200"
        >
          Web Developer | React | Node.js | MERN Stack
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}
