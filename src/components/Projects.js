import { motion } from "framer-motion";

const projects = [
  {
    title: "Taxi Kerala",
    link: "https://taxiskerala.com",
    image: "/logo taxikerala.png",
    description:
      "WordPress developed website for a taxi booking service, featuring a user-friendly interface and seamless booking experience.",
  },
  {
    title: "Home Decor Booking",
    link: "https://shaalah.com",
    image: "/shaalah logo-01.png",
    description:
      "Shopify-based online store for home decor products with seamless browsing and booking experience.",
  },
   {
    title: "House Boat Booking",
    link: "https://kadathuhouseboat.com",
    image: "/houseboat logodark-02-02.png",
    description:
      "WordPress developed website for a houseboat booking service, featuring a user-friendly interface and seamless booking experience.",
  },
  {
    title: "Style That Speaks",
    link: "https://secretscrush.com",
    image: "/secrets crush png.png",
    description:
      "Shopify-based e-commerce website for fashion and accessories, featuring a modern and engaging shopping experience.",
  },
  {
    title: "Ladies Fashion",
    link: "https://sangriti.com",
    image: "/Sankriti black.png",
    description:
      "Shopify-based e-commerce website for ladies fashion, featuring a modern and engaging shopping experience.",
  },
  {
    title: "Weather Forecast",
    link: "https://github.com/AshiqKakkat/weather-app",
    image: "/How-to-use-weather-app-on-iPhone-and-iPad.jpg",
    description:
      "A React-based weather app that fetches real-time weather data from an API, displays current conditions, and provides a 5-day forecast with a clean, responsive UI.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-blue-950 text-white relative overflow-hidden py-24"
    >
      {/* Background glow effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Decorative Divider Line (glow effect at top) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-16 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A collection of my recent works, from web apps to creative portfolio
          sites. Each project reflects my passion for building modern and
          user-friendly digital experiences.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/40 transition transform hover:-translate-y-2 aspect-square min-h-[340px] min-w-[340px] flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              {/* Project Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500 absolute inset-0"
              />
              {/* Text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-gray-300 text-sm italic">
                  {p.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
