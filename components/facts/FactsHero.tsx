"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";


const stats = [
  {
    number: "$18.5B",
    content: (
      <>
        NC GDP contribution
        <br />
        from data centers, 2024
      </>
    ),
  },
  {
    number: <AnimatedCounter end={117000} suffix="+" />,
    content: (
      <>
        Jobs supported
        <br />
        statewide, 2024
      </>
    ),
  },
  {
    number: "$1.4B",
    content: (
      <>
        State & local tax revenue
        <br />
        generated, 2024
      </>
    ),
  },
  {
    number: "#9",
    content: (
      <>
        NC ranked nationally
        <br />
        in data center count
      </>
    ),
  },
];

export default function FactsHero() {
  return (
    <>
      <section
        className="
          relative overflow-hidden
          bg-[#1B3A2D]
          text-center
          px-8 py-26 lg:py-28
        "
      >
        {/* Vertical grid lines */}

        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div
            className="
              h-full w-full
              [background:repeating-linear-gradient(90deg,transparent,transparent_80px,rgba(255,255,255,0.015)_80px,rgba(255,255,255,0.015)_81px)]
            "
          />
        </div>

        <div className="relative z-10 max-w-205 mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              uppercase
              tracking-[0.22em]
              text-[#C8963E]
              text-xs
              font-bold
              mb-4
            "
          >
            Communities United for Fair Development · Rocky Mount, NC
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              font-serif
              text-white
              font-black
              leading-none
              text-[clamp(2.2rem,5vw,3.8rem)]
              mb-2
            "
          >
            Data Center Facts:
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              font-serif
              italic
              text-[#C8963E]
              font-bold
              text-[clamp(1.2rem,2.5vw,1.8rem)]
              mb-6
            "
          >
            The Benefits for Rocky Mount
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              max-w-155
              mx-auto
              text-white/70
              leading-8
              text-[1.05rem]
            "
          >
            North Carolina is one of the fastest-growing
            data center markets in the country. The question
            is not whether this investment is coming — it is
            whether Rocky Mount captures its fair share.
            Here are the facts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="
              mt-10
              flex flex-wrap
              justify-center
              gap-8
            "
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center"
              >
                <div className="text-center">
                  <span
                    className="
                      block
                      font-serif
                      font-black
                      text-[#C8963E]
                      text-[clamp(2rem,4vw,3rem)]
                      leading-none
                    "
                  >
                    {stat.number}
                  </span>

                  <span
                    className="
                      mt-2 block
                      uppercase
                      tracking-[0.04em]
                      text-[0.82rem]
                      text-white/65
                      font-semibold
                    "
                  >
                    {stat.content}
                  </span>
                </div>

                {index !== stats.length - 1 && (
                  <div className="hidden md:block w-px h-15 bg-white/20 ml-8" />
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Statement Bar */}

      <div className="bg-[#C8963E] py-4 px-6 text-center">
        <p
          className="
            font-serif
            italic
            font-bold
            text-[#1B3A2D]
            text-[clamp(0.95rem,1.8vw,1.15rem)]
          "
        >
          "If it's built here, it's built right — and in writing."
          &nbsp;·&nbsp;
          Communities United for Fair Development
        </p>
      </div>
    </>
  );
}