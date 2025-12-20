import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(""); // "success" or "error"

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessageStatus("");

    emailjs
      .sendForm(
        "service_031jigp",      // Your Service ID
        "template_9tx9hjn",     // Your Template ID
        formRef.current,
        "gQt7tlbUno0UfRMlb"     // Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setMessageStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
          setMessageStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="p-10 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left side - Contact Form */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
          <p className="text-gray-400 mb-6">
            Drop me a message and I'll get back to you soon.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition flex items-center justify-center ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : null}
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Inline success/error message */}
            {messageStatus === "success" && (
              <p className="text-green-400 font-semibold mt-2">
                Your message has been sent successfully!
              </p>
            )}
            {messageStatus === "error" && (
              <p className="text-red-400 font-semibold mt-2">
                Failed to send message. Please try again.
              </p>
            )}
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
          className="mt-10 md:mt-0"
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
        </motion.div>
      </div>
    </section>
  );
}