"use client";

import { Great_Vibes } from "next/font/google";
import { motion } from "framer-motion";
import Background from "./Background";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
 <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative"
>
      <Background smokeScale={1} leaving={false} />

      {/* Red Glow */}
      <div className="absolute w-[900px] h-[900px] rounded-full bg-red-700/30 blur-[220px]" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-red-500/20 blur-[150px]" />

      <motion.div
        className="relative z-20 text-center fadeUp"
      >
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="tracking-[14px] text-red-500 text-sm uppercase mb-8"
        >
          Wedding Invitation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -80, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: "easeOut",
          }}
          className={`${greatVibes.className} text-[110px] md:text-[170px] leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]`}
        >
          Yahia
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 1,
            ease: "easeOut",
          }}
          className="text-red-500 text-6xl my-2"
        >
          &
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1,
            delay: 1.2,
            ease: "easeOut",
          }}
          className={`${greatVibes.className} text-[110px] md:text-[170px] leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]`}
        >
          Remas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.8,
            ease: "easeOut",
          }}
          className="mt-8 tracking-[8px] text-gray-300 uppercase"
        >
          26 August 2026
        </motion.p>
 </motion.div>
    </motion.section>
  );
}