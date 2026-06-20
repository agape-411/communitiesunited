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
        py-24
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <p
            className="
              text-[#C89A3E]
              uppercase
              tracking-[0.22em]
              text-xs
              font-bold
            "
          >
            The Framework
          </p>

          <h2
            className="
              mt-4
              text-[#16352A]
              font-serif
              font-bold
              text-4xl
              md:text-5xl
              leading-tight
            "
          >
            Grid-Positive Community
            <br />
            Integration Framework
          </h2>

          <p
            className="
              mt-6
              text-gray-700
              text-lg
              leading-relaxed
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

        <div className="mt-14">
          {standards.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="
                border-t
                border-[#D8CFC2]
                py-8
              "
            >
              <div
                className="
                  grid
                  md:grid-cols-[90px_280px_1fr]
                  gap-6
                "
              >
                <div
                  className="
                    text-[#C89A3E]
                    text-3xl
                    font-black
                  "
                >
                  {item.number}
                </div>

                <div
                  className="
                    text-[#16352A]
                    font-semibold
                    text-lg
                  "
                >
                  {item.label}
                </div>

                <div
                  className="
                    text-gray-700
                    leading-8
                  "
                >
                  {item.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}