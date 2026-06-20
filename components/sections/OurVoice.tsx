"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const taglines = [
  {
    label: "Lead",
    line: "On our terms. For our future.",
  },
  {
    label: "Conditionality",
    line: "Enforceable protections first. Promises don't build trust — terms in writing do.",
  },
  {
    label: "Standards",
    line: "If it's built here, it's built right — and in writing.",
  },
  {
    label: "Prosperity",
    line: "New revenue for our schools without new taxes on our families.",
  },
  {
    label: "Jobs",
    line: "Jobs for today. New businesses for tomorrow. Built by local hands.",
  },
  {
    label: "Generational",
    line: "A generation of skilled, high-wage careers — here, so our young people can stay.",
  },
];

export default function OurVoice() {
  return (
    <section
      className="
        bg-[#173629]
        py-24
        lg:py-32
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl"
        >
          <p
            className="
              text-[#C89A3E]
              uppercase
              tracking-[0.25em]
              text-xs
              font-bold
            "
          >
            Our Voice
          </p>

          <h2
            className="
              mt-4
              text-white
              font-serif
              font-bold
              leading-tight
              text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Rocky Mount Sets the Terms.
            <br />
            Rocky Mount Holds Them to It.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="
            mt-16
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {taglines.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="
                bg-white/4
                border
                border-white/10
                border-t-[3px]
                border-t-[#C89A3E]
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <div
                className="
                  text-[#C89A3E]
                  uppercase
                  tracking-[0.15em]
                  text-xs
                  font-bold
                  mb-4
                "
              >
                {item.label}
              </div>

              <p
                className="
                  text-white
                  text-lg
                  leading-relaxed
                  font-medium
                "
              >
                "{item.line}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}