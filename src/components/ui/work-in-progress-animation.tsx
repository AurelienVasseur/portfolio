"use client";

import { motion } from "framer-motion";

export function WorkInProgressAnimation() {
  return (
    <div className="relative w-16 h-16">
      {/* Moving elements */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-3 h-3 bg-white/90 rounded-sm"
          animate={{
            x: [0, 40, 0],
            y: [0, 20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            delay: index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${index * 8}px`,
            top: `${index * 8}px`,
          }}
        />
      ))}

      {/* Center element */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/80 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
} 