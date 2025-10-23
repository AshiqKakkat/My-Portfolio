import { motion } from "framer-motion";
import ashikqk from "../assets/ashikqk.jpg"; // adjust path if needed

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 text-gray-900">
            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex justify-center mb-10 md:mb-16 px-2"
            >
                <div className="bg-white shadow-2xl rounded-3xl px-4 py-6 md:px-10 md:py-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 w-full max-w-2xl">
                    {/* Item 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-center cursor-pointer transition-transform flex-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">124+</h2>
                        <p className="text-gray-500 text-base md:text-lg">Happy Clients</p>
                    </motion.div>

                    <div className="hidden md:block border-l border-gray-300"></div>
                    <div className="block md:hidden border-t border-gray-300 my-2"></div>

                    {/* Item 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-center cursor-pointer transition-transform flex-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-green-600">016+</h2>
                        <p className="text-gray-500 text-base md:text-lg">Projects Completed</p>
                    </motion.div>

                    <div className="hidden md:block border-l border-gray-300"></div>
                    <div className="block md:hidden border-t border-gray-300 my-2"></div>

                    {/* Item 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-center cursor-pointer transition-transform flex-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-600">009+</h2>
                        <p className="text-gray-500 text-base md:text-lg">Awards Won</p>
                    </motion.div>
                </div>
            </motion.div>

            <div className="container mx-auto px-4 md:px-6 lg:px-20">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-extrabold text-center mb-12 text-blue-600"
                >
                    About <span className="text-gray-900">Me</span>
                </motion.h2> 

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center"
                    >
                        <img
                            src={ashikqk}
                            alt="Ashiq"
                            className="w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-blue-400 hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-3xl font-bold mb-4">Hi, I’m Ashiq 👋</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            I’m a passionate <span className="font-semibold text-blue-500">Web Developer</span> 
                            skilled in building modern web applications using 
                            <span className="font-semibold text-green-600"> React, Node.js, and the MERN stack</span>. 
                            I love creating attractive, user-friendly, and scalable websites 🚀.
                        </p>

                        {/* Download CV Button */}
                        <a
                            href="/Ashiq_CV.pdf"
                            download
                            className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
                        >
                            📄 Download CV
                        </a>
                        
                    </motion.div>
                </div>
            </div>
        </section>
        // function to reverse a stringCopilot: Enable

    );
}