"use client";

import { Great_Vibes } from "next/font/google";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Background from "./Background";
import TransitionOverlay from "./TransitionOverlay";
import { useRef } from "react";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  const [leaving, setLeaving] = useState(false);
  const [smokeScale, setSmokeScale] = useState(1);
  const [transition, setTransition] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.section
  animate={{
    scale: leaving ? 1.05 : 1,
    opacity: leaving ? 0 : 1,
  }}
  transition={{
    duration: 0.9,
    ease: "easeInOut",
  }}
  className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative"
>
      <Background smokeScale={smokeScale} leaving={leaving} />
      <TransitionOverlay show={transition} />
     
      {/* Red Glow */}
      <div className="absolute w-[900px] h-[900px] rounded-full bg-red-700/30 blur-[220px]" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-red-500/20 blur-[150px]" />

    <motion.div
  animate={{
    opacity: leaving ? 0 : 1,
    scale: leaving ? 1.08 : 1,
    filter: leaving ? "blur(12px)" : "blur(0px)",
  }}
  transition={{
    duration: 0.8,
    ease: "easeInOut",
  }}
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

{showButton && (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
  >
    <button
  onClick={() => {
    audioRef.current?.play();

    setTransition(true);
    setSmokeScale(1.35);
    setLeaving(true);

    setTimeout(() => {
      document.getElementById("details")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 700);

    setTimeout(() => {
      setTransition(false);
    }, 1400);
  }}
  className="
    group
    relative
    mt-12
    overflow-hidden
    rounded-md
    border
    border-red-500
    px-12
    py-4
    text-red-400
    transition-all
    duration-500
    hover:scale-105
    hover:border-red-400
    hover:text-white
    shadow-[0_0_25px_rgba(255,0,0,0.35)]
  "
>
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

  <span className="relative z-10 tracking-[3px]">
    ENTER INVITATION
  </span>
</button>
  </motion.div>
)}

      </motion.div>

    <audio
  ref={audioRef}
  src="/music.mp3"
  loop
/>
    </motion.section>
  );
}