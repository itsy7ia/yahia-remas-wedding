"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function TransitionOverlay({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.35 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-black/75" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,0,0,.35),transparent_70%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}