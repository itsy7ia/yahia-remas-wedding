"use client";

import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import { Check, X } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function RSVP() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-6">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-800 blur-[240px]"
      />

      <div className="relative z-10 text-center max-w-2xl">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[12px] text-red-600 text-lg"
        >
          RSVP
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`${cormorant.className} text-6xl md:text-7xl text-white mt-8 leading-tight`}
        >
          Your Presence
          <br />
          Would Mean
          <br />
          The World To Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-gray-400 text-lg leading-8"
        >
          Kindly let us know whether you will be joining us on our special day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex flex-col gap-5 items-center"
        >

          {/* Confirm Button */}
          <motion.a
            href="https://wa.me/962786232226?text=Hello%20Yahia%20%26%20Rimas,%0A%0AI%20am%20delighted%20to%20confirm%20my%20attendance%20at%20your%20wedding.%0A%0ALooking%20forward%20to%20celebrating%20with%20you!%20🤍"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="
              group
              w-full
              md:w-[430px]
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#B11226]
              py-5
              text-white
              tracking-[3px]
              transition-all
              duration-500
              hover:bg-[#CF1630]
              hover:shadow-[0_0_45px_rgba(177,18,38,.65)]
            "
          >
            <Check size={22} />
            <span>Confirm Attendance</span>
          </motion.a>

          {/* Decline Button */}
          <motion.a
            href="https://wa.me/962786232226?text=Hello%20Yahia%20%26%20Rimas,%0A%0AThank%20you%20so%20much%20for%20your%20kind%20invitation.%0AUnfortunately,%20I%20won't%20be%20able%20to%20attend%20your%20wedding.%0A%0AWishing%20you%20both%20a%20lifetime%20of%20love,%20happiness,%20and%20beautiful%20memories.%20🤍"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="
              group
              w-full
              md:w-[430px]
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#2D2D2D]
              py-5
              text-white
              tracking-[3px]
              transition-all
              duration-500
              hover:bg-[#3B3B3B]
              hover:shadow-[0_0_30px_rgba(255,255,255,.08)]
            "
          >
            <X size={22} />
            <span>Unable To Attend</span>
          </motion.a>

        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 text-gray-500 text-sm tracking-wide"
        >
          Please respond at your earliest convenience.
        </motion.p>

      </div>

    </section>
  );
}