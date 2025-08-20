import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building fast, responsive, and modern websites with clean code and smooth performance.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-friendly and visually appealing interfaces that enhance user experience.",
      icon: "🎨",
    },
    {
      title: "Mobile Apps",
      description:
        "Developing cross-platform mobile applications with intuitive design and high performance.",
      icon: "📱",
    },
    {
      title: "SEO Optimization",
      description:
        "Improving search engine rankings and boosting online visibility with smart SEO strategies.",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center 
                 bg-gradient-to-b from-black via-gray-900 to-blue-950 
                 text-white relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24"
    >
      {/* Decorative Glow Effects */}
      <div className="absolute top-10 left-2 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-blue-800 rounded-full blur-3xl opacity-30 animate-pulse z-0"></div>
      <div className="absolute bottom-10 right-2 w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse z-0"></div>

      <div className="w-full max-w-6xl mx-auto text-center relative z-20">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-blue-400">Services</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I provide high-quality digital solutions to help you grow your brand and
          business online.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-gray-900/60 backdrop-blur-lg hover:bg-blue-900/60 
                         transition rounded-2xl p-6 sm:p-8 shadow-xl 
                         hover:shadow-blue-500/40 hover:scale-105 transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
