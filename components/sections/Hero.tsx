"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const priorities = [
  "Construction jobs paying $28–$45/hr built by local hands",
  "New school revenue — without new taxes on families",
  "Contracts for local businesses & suppliers",
  "Specialized workforce training for high-tech and construction careers — built for Rocky Mount residents",
  "Written water and environmental protections",
  "Grid-upgrade costs on the developer, not our bills",
  "Enforceable terms — not developer promises",
];

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#16352A]
        min-h-[100svh]
        flex
        items-center
      "
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,150,62,.18),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(200,150,62,.08),transparent_35%)]" />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          px-5
          sm:px-6
          lg:px-10
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div
          className="
            grid
            lg:grid-cols-[1.1fr_0.9fr]
            gap-10
            lg:gap-14
            xl:gap-20
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/images/community.png"
                alt="Communities United for Fair Development logo"
                width={140}
                height={140}
                priority
                className="
                  w-[100px]
                  sm:w-[120px]
                  lg:w-[140px]
                  h-auto
                  object-contain
                  drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]
                "
              />
            </div>

            {/* Eyebrow */}
            <p
              className="
                uppercase
                tracking-[0.25em]
                text-[11px]
                sm:text-[13px]
                font-semibold
                text-[#C89A3E]
              "
            >
              Rocky Mount, NC · North Carolina
            </p>

            {/* Heading */}
            <h1
              className="
                mt-5
                text-[clamp(2.5rem,9vw,5.2rem)]
                font-bold
                leading-[0.95]
                text-white
              "
            >
              On Our Terms.
              <br />

              <span className="text-[#C89A3E]">
                For Our Future.
              </span>
            </h1>

            {/* Main Statement */}
            <p
              className="
                mt-6
                text-lg
                sm:text-xl
                md:text-2xl
                leading-relaxed
                text-white
                font-medium
                border-l-4
                border-[#C89A3E]
                pl-5
                sm:pl-6
                max-w-3xl
              "
            >
              We're not against development.
              <br />
              We're for Rocky Mount getting a fair deal.
            </p>

            {/* Supporting Statement */}
            <p
              className="
                mt-6
                max-w-2xl
                text-base
                sm:text-lg
                leading-relaxed
                text-white/70
                pl-0
                md:pl-10
              "
            >
              Enforceable protections first. Promises don't
              build trust — terms in writing do.
            </p>

            {/* CTA Buttons */}
            <div
              className="
                mt-8
                flex
                flex-col
                sm:flex-row
                gap-4
              "
            >
              <Link
                href="#join"
                className="
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-[#C89A3E]
                  text-[#16352A]
                  font-semibold
                  px-8
                  py-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >
                JOIN THE COALITION

                <ArrowRight
                  size={18}
                  className="flex-shrink-0"
                />
              </Link>

              <Link
                href="#council"
                className="
                  w-full
                  sm:w-auto
                  text-center
                  border
                  border-white/25
                  text-white
                  px-8
                  py-4
                  transition-all
                  duration-300
                  hover:bg-white/5
                "
              >
                CONTACT YOUR COUNCIL MEMBER
              </Link>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-10 lg:mt-0"
          >
            <div
              className="
                border
                border-white/10
                border-t-[3px]
                border-t-[#C89A3E]
                bg-white/4
                backdrop-blur-md
                p-6
                md:p-8
                lg:p-10
              "
            >
              <h3
                className="
                  text-[#C89A3E]
                  uppercase
                  tracking-[0.18em]
                  text-sm
                  sm:text-base
                  font-semibold
                  mb-7
                "
              >
                What We're Organizing For
              </h3>

              <ul className="space-y-5">
                {priorities.map((item) => (
                  <li
                    key={item}
                    className="
                      flex
                      gap-4
                      border-b
                      border-white/10
                      pb-5
                      text-white/85
                      leading-relaxed
                    "
                  >
                    <span
                      className="
                        text-[#C89A3E]
                        font-bold
                        mt-[2px]
                        flex-shrink-0
                      "
                    >
                      →
                    </span>

                    <span className="text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}