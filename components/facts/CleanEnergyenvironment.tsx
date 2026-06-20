"use client";

import { motion } from "framer-motion";

import {
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
} from "@/lib/animations";
import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  {
    value: (
      <>
        #<AnimatedCounter end={2} />
      </>
    ),
    desc:
      "North Carolina ranks second nationally in installed solar capacity — behind only California",
    source: "Source: SEIA, 2025",
  },

  {
    value: (
      <>
        <AnimatedCounter end={6433} suffix=" MW" />
      </>
    ),
    desc:
      "NC's current clean energy capacity, with $15B+ invested and major growth projected through 2030",
    source:
      "Source: American Clean Power Association, 2024",
  },

  {
    value: (
      <AnimatedCounter end={3000} suffix="+" />
    ),
    desc:
      "Acres of operating solar in the Rocky Mount corridor, available for PPA integration into the data center's energy supply",
  },
];

export default function CleanEnergy() {
  return (
    <section
      id="energy"
      className="
        py-24
        lg:py-32
        bg-[#F9F6F1]
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[#C89A3E]
              text-xs
              font-bold
            "
          >
            Clean Energy & Environment
          </p>

          <h2
            className="
              mt-4
              font-serif
              text-[#16352A]
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
            "
          >
            Rocky Mount's Solar Assets
            Make This Deal Different
          </h2>

          <p
            className="
              mt-8
              text-lg
              leading-8
              text-gray-700
              max-w-5xl
            "
          >
            North Carolina ranks among the top solar
            states in the nation. The Rocky Mount
            corridor has over 3,000 acres of operating
            solar capacity — a strategic asset that
            makes this deployment substantively different
            from a generic data center extracting power
            from the grid.
          </p>
        </motion.div>

        {/* STAT GRID */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mt-16
            grid
            md:grid-cols-3
            gap-6
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="
                bg-white
                border
                border-[#DED4C5]
                p-8
                shadow-sm
              "
            >
              <div
                className="
                  text-5xl
                  font-bold
                  text-[#16352A]
                "
              >
                {stat.value}
              </div>

              <p className="mt-5 text-gray-700 leading-7">
                {stat.desc}
              </p>

              {stat.source && (
                <p className="mt-5 text-sm italic text-gray-500">
                  {stat.source}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CONTENT */}

        <div
          className="
            mt-20
            grid
            lg:grid-cols-2
            gap-14
          "
        >

          {/* LEFT */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              space-y-8
              text-gray-700
            "
          >
            <p className="leading-8">
              The Rocky Mount Electric Department
              will serve as the sole electric supplier
              for the data center — and the deal
              includes developer support for Rocky
              Mount's solar power purchase agreement
              (PPA), integrating the corridor's
              existing renewable capacity directly
              into the project's energy supply.
            </p>

            <p className="leading-8">
              This is not a standard data center
              deployment. It is a grid-positive
              deployment — one where the facility
              contributes to the community's energy
              infrastructure rather than simply
              extracting from it.
            </p>

            <ul className="space-y-5 leading-8">
              <li>
                • Developer support for Rocky Mount
                solar PPA — integrating 3,000+ acres
                of existing corridor solar
              </li>

              <li>
                • ElectriCities of North Carolina
                providing wholesale procurement and
                capacity coordination — the same
                statewide municipal utility
                infrastructure that serves 70 NC cities
              </li>

              <li>
                • FREEDM Systems Center at NC State
                — advanced grid technology partnership
                differentiating Rocky Mount from
                generic deployments
              </li>

              <li>
                • Non-potable water default — the
                facility is designed to minimize
                aquifer impact from day one
              </li>
            </ul>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-gray-700 leading-8">
              North Carolina's data center industry
              has become one of the largest drivers
              of clean energy procurement in the
              Southeast.
              <strong className="text-[#16352A]">
                {" "}
                Duke Energy reached agreement with
                Amazon, Google, Microsoft, and Nucor
              </strong>{" "}
              in 2024 to accelerate renewable
              procurement specifically tied to data
              center load growth.
            </p>

            <p className="text-gray-700 leading-8">
              Rocky Mount's deal is structured to
              capture that momentum — using the data
              center's power demand as leverage for
              new renewable investment in our corridor,
              not as a strain on existing ratepayers.
            </p>

            {/* Pull Quote */}

            <motion.div
              whileHover={{ y: -5 }}
              className="
                border-l-4
                border-[#C89A3E]
                pl-8
                py-4
              "
            >
              <p
                className="
                  font-serif
                  italic
                  text-3xl
                  text-[#16352A]
                  leading-relaxed
                "
              >
                "Our water and quality of life
                come first. In writing."
              </p>
            </motion.div>

            <p className="italic text-gray-500">
              — CUFD · Grid-Positive Framework
              Standard 4
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}