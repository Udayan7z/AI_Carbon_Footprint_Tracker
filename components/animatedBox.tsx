"use client";

import { motion } from "framer-motion";

interface AnimatedBoxProps {
  imageUrl: string; // ✅ Image URL required
  size?: number; // Optional size
}

export default function AnimatedBox({ imageUrl, size = 60 }: AnimatedBoxProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    />
  );
}
