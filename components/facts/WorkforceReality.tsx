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
    number: (
      <AnimatedCounter
        end={117000}
        suffix="+"
      />
    ),
    desc:
      "Total jobs supported by NC data centers statewide in 2024, including construction and indirect employment",
    source:
      "Source: WRAL / NC industry testimony, 2026",
  },

  {
    number: "$28–45",
    desc:
      "Per-hour construction wages on data center projects in North Carolina — above local market rates",
    source: "Source: ABC Carolinas, 2026",
  },

  {
    number: "4.5×",
    desc:
      "Indirect jobs created for every direct data center job — in supply chain, services, and local businesses",
    source:
      "Source: Data Center Coalition national data",
  },

  {
    number: (
      <AnimatedCounter
        end={77000}
        prefix="$"
      />
    ),
    desc:
      "Average starting wage for registered apprentices who complete data center training programs nationally",
    source:
      "Source: US Dept. of Labor, 2025",
  },
];

export default function JobsWorkforceReality() {
  return (
    <section
      id="jobs"
      className="
        bg-[#16352A]
        text-white
        py-16
        lg:py-20
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl"
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
            Jobs & Workforce
          </p>

          <h2
            className="
              mt-3
              font-serif
              text-2xl
              md:text-3xl
              lg:text-4xl
              font-bold
              leading-tight
            "
          >
            High-Wage Careers
            Built by Local Hands
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-white/80
            "
          >
            The data center industry creates
            employment across a broad range
            of educational backgrounds —
            construction trades, technical
            operations, logistics, and management.
            For Rocky Mount, the key is making
            sure those jobs go to local workers
            through enforceable hiring standards.
          </p>
        </motion.div>

        {/* STAT GRID */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mt-9
            grid
            sm:grid-cols-2
            xl:grid-cols-4
            gap-6
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="
                bg-[#234536]
                border
                border-white/10
                p-8
              "
            >
              <div
                className="
                  text-[#E8B86D]
                  text-5xl
                  font-bold
                "
              >
                {stat.number}
              </div>

              <p
                className="
                  mt-4
                  text-white/80
                  leading-7
                "
              >
                {stat.desc}
              </p>

              <p
                className="
                  mt-5
                  text-xs
                  italic
                  text-white/40
                "
              >
                {stat.source}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CONTENT BLOCK */}

        <div
          className="
            mt-15
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
              text-white/80
              leading-8
            "
          >
            <p>
              Data center construction is drawing
              skilled trades workers from across
              North Carolina, with{" "}
              <strong className="text-white">
                high wages, per-diem compensation,
                and overtime
              </strong>{" "}
              on hyperscale projects. Rocky Mount's
              workforce standards lock in a share
              of those jobs for local residents —
              not just workers brought in from
              outside the corridor.
            </p>

            <p>
              Under the Grid-Positive Framework,
              the Rocky Mount agreement requires:
            </p>

            <ul className="space-y-5">
              <li>
                • 30–40% of construction hours
                awarded to Rocky Mount residents,
                verified by certified payroll
                quarterly
              </li>

              <li>
                • Developer-funded
                pre-apprenticeship pipeline through
                OIC Rocky Mount — skills that stay
                in the community
              </li>

              <li>
                • Employer-sponsored training in
                electrical safety, data center
                operations, and liquid cooling —
                nationally recognized credentials
              </li>

              <li>
                • Liquidated damages for
                shortfalls — enforcement teeth,
                not just aspirational language
              </li>
            </ul>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              space-y-8
              text-white/80
            "
          >
            <p className="leading-8">
              North Carolina's data center boom is
              creating an urgent need for trained
              workers.
              <strong className="text-white">
                {" "}
                ApprenticeshipNC
              </strong>{" "}
              reports strong retention and wage
              outcomes for registered apprentices
              statewide. The Rocky Mount deal
              structures that pipeline specifically
              for our community — connecting local
              residents to careers that pay living
              wages and offer long-term advancement.
            </p>

            <div
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
                  leading-relaxed
                  text-white
                "
              >
                "Jobs for today.
                New businesses for tomorrow.
                Built by local hands."
              </p>
            </div>

            <p className="text-white/40 italic">
              — CUFD tagline
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}