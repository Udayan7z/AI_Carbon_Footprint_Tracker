"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 10 }}
      className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50"
    >
      {/* Logo Section */}
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div whileTap={{ scale: 0.9 }}>
          <Image
            className="pr-2"
            src="/earth.png"
            alt="Logo"
            width={32}
            height={32}
          />
        </motion.div>

        <motion.h1
          className="font-bold text-lg"
          whileHover={{ color: "#bbf7d0", scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Carbon Tracker
        </motion.h1>
      </motion.div>

      {/* Links Section */}
      <div className="flex gap-6 text-sm font-medium">
        {["Home", "About", "Tracker", "Login"].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          >
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group hover:text-green-200 transition"
            >
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {item}
              </motion.span>

              {/* Animated underline */}
              <motion.span
                className="absolute left-0 bottom-[-2px] h-[2px] bg-white w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                layoutId="underline"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
