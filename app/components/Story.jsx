"use client";

import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Story() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      <motion.div
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.15, 0.3, 0.15],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-1/2 top-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700 blur-[220px]"
/>

<motion.div
  animate={{
    x: [-40, 40, -40],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-500/10 blur-[140px]"
/>

<motion.div
  animate={{
    x: [40, -40, 40],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-red-600/10 blur-[160px]"
/>
      <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  viewport={{ once: true }}
  className="max-w-4xl text-center z-10"
>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="uppercase tracking-[10px] text-red-500 mb-10"
  >
    Our Story
  </motion.p>
  <motion.div
  initial={{ width: 0, opacity: 0 }}
  whileInView={{ width: 180, opacity: 1 }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
    delay: 2,
  }}
  className="mx-auto mt-12 h-[2px] rounded-full bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_25px_rgba(255,0,0,0.7)]"
/>

  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    viewport={{ once: true }}
    className={`${greatVibes.className} text-7xl md:text-8xl mb-10`}
  >
    Two Hearts
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    viewport={{ once: true }}
    className="text-3xl text-gray-300 mb-8"
  >
    One Journey
  </motion.p>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 1.4 }}
    viewport={{ once: true }}
    className="text-xl tracking-[4px] text-red-400"
  >
    Forever Begins Now
  </motion.p>

</motion.div>
    </section>
  );
}