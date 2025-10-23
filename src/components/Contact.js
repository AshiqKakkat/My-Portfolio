import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";


export default function Contact() {
  return (
    <section id="contact" className="p-10 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side - Contact Form */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Let’s Talk</h2>
          <p className="text-gray-400 mb-6">
            Drop me a message and I’ll get back to you soon.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="relative flex justify-center items-center">
          <div className="absolute -z-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-40"></div>
          <img
            src="/ashiqcontact.png"
            alt="Contact"
            className="rounded-2xl shadow-lg object-cover w-full max-w-sm"
          />
        </div>
        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://github.com/AshiqKakkat"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ashiq-kakkat"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
           
            <a
              href="mailto:ashiqkakkat01@gmail.com"
              className="hover:text-pink-400 transition transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>      </div>
    </section>
  );
}
