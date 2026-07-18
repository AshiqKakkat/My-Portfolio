import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/portbanner1.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter"
        >
          {(() => {
            const hour = new Date().getHours();
            if (hour < 12) return "Good Morning,";
            if (hour < 18) return "Good Afternoon,";
            return "Good Evening,";
          })()} I'm <br />
          <span className="text-blue-400">Mohammed Ashiq K</span> 
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl text-gray-200 font-mono tracking-widest"
        >
          Software Engineer | MERN Stack & Web Developer
        </motion.p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-500 text-white rounded-full font-bold shadow-xl hover:bg-blue-600 transition-all"
          >
            View My Work
          </motion.a>
          
          <motion.a
            href="/MOHAMMED_ASHIQ_K.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
}