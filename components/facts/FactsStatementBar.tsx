"use client";

import { motion } from "framer-motion";

export default function FactsStatementBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        bg-[#C89A3E]
        py-5
        px-6
      "
    >
      <div className="max-w-7xl mx-auto">
        <p
          className="
            text-center
            text-[#16352A]
            font-semibold
            text-base
            md:text-lg
            tracking-wide
          "
        >
          "If it's built here, it's built right — and in writing."
          <span className="hidden sm:inline">
            {" "}
            · Communities United for Fair Development
          </span>
        </p>
      </div>
    </motion.div>
  );
}