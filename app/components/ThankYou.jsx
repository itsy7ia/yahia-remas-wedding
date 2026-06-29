"use client";

import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function ThankYou() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-6">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-800 blur-[240px]"
      />

      <div className="relative z-10 text-center max-w-3xl">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[12px] text-red-600 text-lg"
        >
          THANK YOU
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`${cormorant.className} text-6xl md:text-7xl text-white mt-8 leading-tight`}
        >
          Thank You
          <br />
          For Celebrating
          <br />
          With Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-gray-400 text-lg leading-8"
        >
          Your love, support, and presence
          <br />
          made our day truly unforgettable.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 180 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-12"
        />

        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className={`${cormorant.className} text-5xl md:text-6xl text-white`}
        >
          Yahia & Remas
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-6 text-red-500 tracking-[6px] text-lg"
        >
          26 August 2026
        </motion.p>

      </div>

    </section>
  );
}