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
        py-12
        sm:py-18
        lg:py-20
        xl:py-24
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        {/* Header */}

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
              sm:text-sm
              font-bold
            "
          >
            Our Voice
          </p>

          <h2
            className="
              mt-3
              text-white
              font-serif
              font-semibold
              leading-[1.05]
              text-[clamp(1.75rem,4vw,2.5rem)]
              max-w-5xl
            "
          >
            Rocky Mount Sets the Terms
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Rocky Mount Holds Them to It
          </h2>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="
            mt-9
            sm:mt-12
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-5
            sm:gap-6
          "
        >
          {taglines.map((item) => (
            <motion.article
              key={item.label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="
                bg-white/[0.04]
                border
                border-white/10
                border-t-[3px]
                border-t-[#C89A3E]
                backdrop-blur-sm
                p-6
                sm:p-8
                transition-all
                duration-300
                min-h-[220px]
                flex
                flex-col
                justify-start
              "
            >
              {/* Label */}

              <div
                className="
                  text-[#C89A3E]
                  uppercase
                  tracking-[0.15em]
                  text-[11px]
                  sm:text-xs
                  font-bold
                  mb-3
                "
              >
                {item.label}
              </div>

              {/* Quote */}

              <h3
                className="
                  text-white
                  font-serif
                  font-semibold
                  text-[clamp(1rem,3vw,1.3rem)]
                  leading-relaxed
                "
              >
                &ldquo;{item.line}&rdquo;
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}