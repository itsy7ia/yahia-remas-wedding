"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const weddingDate = new Date("2026-08-26T20:00:00");

  const getTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="details"
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.4,
        ease: "easeOut",
      }}
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
    >

      {/* Background Glow */}
      <div className="absolute w-[900px] h-[900px] rounded-full bg-red-700/20 blur-[220px]" />

      <div className="text-center relative z-20">

        <motion.h2
          initial={{ opacity: 0, letterSpacing: "25px" }}
          whileInView={{ opacity: 1, letterSpacing: "8px" }}
          transition={{ duration: 1.5 }}
          className="text-red-500 text-5xl font-light mb-16"
        >
          COUNTDOWN TO OUR BIG DAY
        </motion.h2>

        <div className="flex gap-12 justify-center flex-wrap">

          {[
            ["Days", timeLeft.days],
            ["Hours", timeLeft.hours],
            ["Minutes", timeLeft.minutes],
            ["Seconds", timeLeft.seconds],
          ].map(([label, value], index) => (

            <motion.div
              key={label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
              }}
              whileHover={{
                scale: 1.08,
              }}
              className="w-[130px]"
            >

              <motion.div
                key={value}
                initial={{ scale: 0.75 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.25 }}
                className="text-7xl text-red-500 font-light"
              >
                {String(value).padStart(2, "0")}
              </motion.div>

              <div className="uppercase text-gray-400 tracking-[6px] mt-4 text-sm">
                {label}
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>
  );
}