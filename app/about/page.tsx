"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Udayan Mishra",
      role: "Frontend Developer",
      email: "udayanmishra77z@gmail.com",
    },
    {
      name: "Saurav Panigrahi",
      role: "Backend Engineer",
      email: "saurav.edutech@gmail.com",
    },
    {
      name: "Harsh Pandey",
      role: "AI/ML developer",
      email: "harsh081101@gmail.com",
    },
    {
      name: "Gunwant Kumar",
      role: "UI/UX Designer",
      email: "victopowers@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800 flex flex-col items-center justify-center px-6 py-12">
      
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="max-w-3xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-green-100 p-10 text-center transition hover:shadow-xl hover:scale-[1.01] duration-300 ease-out"
      >
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-4xl font-semibold text-green-700 mb-6"
        >
          About <span className="font-bold text-green-800">Carbon Tracker</span>
        </motion.h1>

        {[
          "Carbon Tracker empowers organizations to measure, monitor, and reduce their carbon footprint with precision and efficiency. Our mission is to simplify sustainability by providing actionable, data-driven insights into your operations and energy usage.",
          "By analyzing organizational activities — from logistics and operations to energy consumption — we enable businesses to gain a transparent view of their environmental footprint. Carbon Tracker empowers companies to identify high-impact areas, optimize resource efficiency, and implement strategies to achieve sustainability goals.",
          "Together, we can drive impactful change and contribute to a more sustainable global economy. 🌍",
        ].map((text, idx) => (
          <motion.p
            key={idx}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg mb-4 leading-relaxed text-gray-700"
          >
            {text}
          </motion.p>
        ))}
      </motion.div>

      
      <section className="mt-20 text-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-green-700 mb-12"
        >
          Meet the Team
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center w-full max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="bg-white/85 backdrop-blur-lg border border-green-100 shadow-lg rounded-3xl p-10 w-full max-w-md transition-all duration-300 ease-out"
            >
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center text-white font-bold text-3xl shadow-inner"
              >
                {member.name.charAt(0)}
              </motion.div>

              
              <h3 className="text-2xl font-semibold text-green-700 mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-2 text-lg">{member.role}</p>
              <p className="text-sm text-green-600">{member.email}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 text-gray-500 text-sm"
      >
        Building a sustainable future together 🌱
      </motion.footer>
    </div>
  );
}
