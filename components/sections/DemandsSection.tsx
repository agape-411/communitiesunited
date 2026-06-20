"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Our Water Is Protected",
    description:
      "Non-potable water by default, a baseline study before construction begins, independent monitoring you can check online, and a fund that protects nearby wells if there is any impact.",
    basis: "Standard 4 — Environmental Accountability",
  },
  {
    title: "Our Quality of Life Is Protected",
    description:
      "Enforceable noise limits with continuous monitoring and restricted generator-testing hours. We are honest about what changes and what is protected.",
    basis: "Standard 4 & Standard 2 — Siting",
  },
  {
    title: "Our Bills Are Protected",
    description:
      "Every grid-upgrade cost the data center creates is paid by the developer — not spread onto our electric bills. Costs are reconciled every year and published.",
    basis: "Standard 1 — Developer Cost Accountability",
  },
  {
    title: "Our People and Schools Benefit",
    description:
      "30–40% of construction hours to local residents, verified by certified payroll. Developer-funded apprenticeships through OIC and Rocky Mount Community College. New tax revenue to our schools — zero new taxes on families.",
    basis: "Standard 3 — Community Workforce Investment",
  },
  {
    title: "We Hold Them to It",
    description:
      "The developer is vetted before approval, posts a decommissioning bond so it cannot walk away, and a resident grievance pathway is open to any community member at any time.",
    basis: "Standard 5 — Civic Engagement & Accountability",
  },
];

export default function Pillars() {
  return (
    <section
      id="pillars"
      className="
        bg-[#16352A]
        py-24
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p
            className="
              text-[#C89A3E]
              uppercase
              tracking-[0.22em]
              text-sm
              font-bold
            "
          >
            Our Demands
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
            Five Things Rocky Mount
            <br />
            Requires. In Writing.
          </h2>

          <p
            className="
              mt-6
              text-white/60
              text-xl
              leading-relaxed
              max-w-2xl
            "
          >
            These are not aspirations. They are requirements.
            CUFD supports this project only if every one of
            these standards is in the development agreement
            before a vote is taken.
          </p>
        </motion.div>

        {/* Grid */}

        <div
          className="
            mt-14
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="
                bg-white/5.5
                border
                border-white/10
                border-t-[3px]
                border-t-[#C89A3E]
                p-7
              "
            >
              <h3
                className="
                  text-[#C89A3E]
                  font-serif
                  font-bold
                  text-xl
                  leading-snug
                  mb-4
                "
              >
                {pillar.title}
              </h3>

              <p
                className="
                  text-white/70
                  text-base
                  leading-7
                "
              >
                {pillar.description}
              </p>

              <div
                className="
                  mt-5
                  text-sm
                  uppercase
                  tracking-[0.12em]
                  font-bold
                  text-[#C89A3E]/70
                "
              >
                {pillar.basis}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}