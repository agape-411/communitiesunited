"use client";

import { motion } from "framer-motion";

const standards = [
  {
    number: "01",
    label: "Developer Cost Accountability",
    description:
      "Grid-upgrade and infrastructure costs are contractually assigned to the developer — not shifted onto Rocky Mount ratepayers. Annual reconciliation. Our bills are protected.",
  },
  {
    number: "02",
    label: "Grid-Positive Community Integration",
    description:
      "Siting, buffering, and infrastructure standards that make the project an asset to our corridor — integrated with Rocky Mount Electric Department's renewable energy infrastructure and ElectriCities' wholesale procurement capacity.",
  },
  {
    number: "03",
    label: "Community Workforce Investment",
    description:
      "30–40% local-hire construction standard, verified by certified payroll every quarter. Developer-funded apprenticeship pipeline through OIC Rocky Mount and Rocky Mount Community College.",
  },
  {
    number: "04",
    label: "Environmental Accountability",
    description:
      "Non-potable water default. Pre-construction baseline study. Independent weekly environmental monitoring. Public dashboard. Well-impact protection fund. Enforceable noise limits with continuous monitoring.",
  },
  {
    number: "05",
    label: "Community & Civic Engagement",
    description:
      "Developer Qualification Gate before approval. Open, sincere, and transparent community engagement and dialogue. A standing resident grievance pathway with a documented response process.",
  },
];

export default function Framework() {
  return (
    <section
      id="standards"
      className="
        bg-[#F6F0E6]
        py-14
        sm:py-18
        lg:py-20
        xl:py-24
        overflow-hidden
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p
            className="
              text-[#C89A3E]
              uppercase
              tracking-[0.22em]
              text-xs
              sm:text-sm
              font-bold
            "
          >
            The Framework
          </p>

          <h2
            className="
              mt-3
              text-[#16352A]
              font-serif
              font-bold
              leading-[1.05]
              text-[clamp(1.75rem,4vw,2.5rem)]
              max-w-4xl
            "
          >
            Grid-Positive Community
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Integration Framework
          </h2>

          <p
            className="
              mt-4
              text-gray-700
              text-base
              leading-8
              max-w-3xl
            "
          >
            CUFD supports this project only if it meets all
            five standards of the Grid-Positive Community
            Integration Framework — published,
            enforceable terms, not developer promises.
          </p>
        </motion.div>

        {/* Framework Table */}

        <div className="mt-10 sm:mt-12">
          {standards.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                border-t
                border-[#D8CFC2]
                py-7
                sm:py-9
              "
            >
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-[80px_240px_1fr]
                  lg:grid-cols-[90px_280px_1fr]
                  gap-3
                  md:gap-5
                  lg:gap-6
                "
              >
                {/* Number */}

                <div
                  className="
                    text-[#C89A3E]
                    text-2xl
                    sm:text-3xl
                    font-black
                    leading-none
                  "
                >
                  {item.number}
                </div>

                {/* Label */}

                <div
                  className="
                    text-[#16352A]
                    font-semibold
                    text-lg
                    sm:text-xl
                    leading-snug
                  "
                >
                  {item.label}
                </div>

                {/* Description */}

                <div
                  className="
                    text-gray-700
                    text-sm
                    sm:text-base
                    leading-7
                    sm:leading-8
                  "
                >
                  {item.description}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom Border */}

          <div className="border-t border-[#D8CFC2]" />
        </div>
      </div>
    </section>
  );
}