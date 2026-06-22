"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "@/lib/animations";
import { Mail } from "lucide-react";
import Link from "next/link";

const council = [
  "Mayor Sandy Roberson",
  "Council District 1",
  "Council District 2",
  "Council District 3",
  "Council District 4",
  "Council District 5",
  "Council District 6",
  "At-Large Member",
];

export default function ContactCouncil() {
  return (
    <section
      id="contact"
      className="
        bg-[#16352A]
        py-12
        sm:py-18
        lg:py-20
        xl:py-24
        overflow-hidden
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* HEADER */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
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
            Take Action Now
          </p>

          <h2
            className="
              mt-4
              text-white
              font-serif
              font-bold
              leading-[1.05]
              text-[clamp(1.5rem,4vw,2.25rem)]
              max-w-4xl
              mx-auto
            "
          >
            Tell Your Council Member:
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Rocky Mount Deserves
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            a Fair Deal.
          </h2>
        </motion.div>

        {/* MESSAGE */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            mt-10
            sm:mt-12
            bg-white/[0.05]
            border
            border-white/10
            border-l-4
            border-l-[#C89A3E]
            backdrop-blur-sm
            p-6
            sm:p-8
          "
        >
          <p
            className="
              text-white/85
              text-base
              sm:text-lg
              leading-8
            "
          >
            I support economic development,
            jobs, and investment in Rocky Mount.
            However, support should depend on
            enforceable protections for residents,
            accountability for infrastructure costs,
            environmental safeguards, local hiring,
            and measurable community benefits.
            Please ensure every commitment is
            written into the final development agreement
            before any vote is taken.
          </p>
        </motion.div>

        {/* COUNCIL BUTTONS */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="
            mt-8
            sm:mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
          "
        >
          {council.map((member) => (
            <motion.button
              key={member}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="
                border
                border-white/15
                text-white
                text-sm
                sm:text-base
                px-5
                py-4
                hover:border-[#C89A3E]
                hover:bg-white/[0.03]
                transition-all
                duration-300
                min-h-[60px]
              "
            >
              {member}
            </motion.button>
          ))}
        </motion.div>

        {/* CTA */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 text-center"
        >
          <Link
  href="#join"
  className="
    inline-flex
    items-center
    justify-center
    gap-3
    w-full
    sm:w-auto
    bg-[#C89A3E]
    text-[#16352A]
    px-8
    py-4
    font-semibold
    text-base
    min-h-[58px]
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-lg
  "
>
  <Mail
    size={18}
    className="shrink-0"
  />

  <span>
    Send the Email Now
  </span>
</Link>
        </motion.div>
      </div>
    </section>
  );
}