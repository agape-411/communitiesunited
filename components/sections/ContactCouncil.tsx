"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "@/lib/animations";
import { Mail } from "lucide-react";

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
        py-24
        lg:py-32
      "
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* HEADER */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
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
            Take Action Now
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
            "
          >
            Tell Your Council Member:
            <br />
            Rocky Mount Deserves
            <br />
            a Fair Deal.
          </h2>
        </motion.div>

        {/* MESSAGE */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mt-12
            bg-white/[0.05]
            border
            border-white/10
            border-l-4
            border-l-[#C89A3E]
            p-8
          "
        >
          <p
            className="
              text-white/85
              leading-8
              text-lg
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
          viewport={{ once: true }}
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          {council.map((member) => (
            <motion.button
              key={member}
              variants={fadeUp}
              className="
                border
                border-white/15
                text-white
                px-5
                py-3
                hover:border-[#C89A3E]
                transition
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
          className="mt-12 text-center"
        >
          <button
            className="
              inline-flex
              items-center
              gap-3
              bg-[#C89A3E]
              text-[#16352A]
              px-8
              py-4
              font-semibold
              hover:scale-[1.02]
              transition
            "
          >
            <Mail size={18} />
            Send the Email Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}