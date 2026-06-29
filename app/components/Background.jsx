"use client";

import { motion } from "framer-motion";

export default function Background({ smokeScale, leaving }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {/* Smoke Video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
      animate={{
  scale: leaving
    ? smokeScale
    : [1, 1.08, 1],
}}

transition={{
  duration: leaving ? 1 : 8,
  repeat: leaving ? 0 : Infinity,
  ease: "easeInOut",
}}
        className="absolute inset-0 w-full h-full object-cover opacity-75 scale-125 brightness-125 contrast-125"
      >
        <source src="/smoke.mp4" type="video/mp4" />
      </motion.video>

      {/* Main Animated Glow */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-20, 20, -20],
          scale: [1, 1.18, 1],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/40 blur-[320px]"
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-60, 60, -60],
          y: [20, -20, 20],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-0 w-[500px] h-[500px] rounded-full bg-red-500/30 blur-[180px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [60, -60, 60],
          y: [-20, 20, -20],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-red-600/30 blur-[220px]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

    </div>
  );
}