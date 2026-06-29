"use client";

import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function WeddingDetails() {
  return (
    <section
  id="details"
  className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-6"
>
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.3, 0.15],
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
          className={`${cormorant.className} uppercase tracking-[10px] text-red-600 text-xl mb-8`}
        >
          THE VENUE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`${cormorant.className}
            text-7xl
            md:text-9xl
            font-light
            tracking-[4px]
            text-white
            leading-none
            drop-shadow-[0_0_20px_rgba(255,255,255,.15)]
          `}
        >
          ID HALL
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 uppercase tracking-[8px] text-gray-500 text-sm"
        >
          Amman, Jordan
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 180 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-12"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`${cormorant.className} text-5xl md:text-6xl text-white`}
        >
          26 August 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className={`${cormorant.className} mt-5 text-red-500 tracking-[3px] text-3xl`}
        >
          8:00 PM
        </motion.p>

        <motion.a
          href="https://maps.app.goo.gl/hgp7SpVABbYdbZT4A?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
  scale: 1.05,
}}

whileTap={{
  scale: 0.98,
}}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="
            group
            inline-flex
            items-center
            gap-3
            mt-16
            px-12
            py-5
            rounded-full
            border
            border-red-600
            text-white
            tracking-[3px]
            bg-black/40
            backdrop-blur-xl
            transition-all
            duration-500
            hover:bg-red-600
            hover:border-red-500
            hover:shadow-[0_0_40px_rgba(255,0,0,.45)]
          "
        >
          <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
            📍
          </span>

          <span>GET DIRECTIONS</span>
        </motion.a>

      </div>

    </section>
  );
}