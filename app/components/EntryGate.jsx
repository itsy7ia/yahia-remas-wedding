"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function EntryGate({ children }) {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = async () => {
    try {
      await audioRef.current?.play();
    } catch (e) {
      console.log(e);
    }

    setEntered(true);
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />

      <AnimatePresence mode="wait">
        {!entered && (
          <motion.section
            key="gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
          >
            <motion.button
              onClick={handleEnter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="
                group
                relative
                overflow-hidden
                rounded-md
                border
                border-red-500
                px-12
                py-4
                text-red-400
                tracking-[4px]
                transition-all
                duration-500
                hover:border-red-400
                hover:text-white
                shadow-[0_0_25px_rgba(255,0,0,0.35)]
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative z-10">
                ENTER INVITATION
              </span>
            </motion.button>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ duration: 0.8, delay: entered ? 0.3 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
}