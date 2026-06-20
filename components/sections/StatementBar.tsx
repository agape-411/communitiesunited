"use client";

import { motion } from "framer-motion";

export default function StatementBar() {
  return (
    <section className="bg-amber-500 py-8">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg md:text-2xl font-bold text-[#1B3A2D]">
            "If it's built here, it's built right — and in writing."
          </p>
        </motion.div>
      </div>
    </section>
  );
}