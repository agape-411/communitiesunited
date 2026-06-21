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
        py-16
        sm:py-20
        lg:py-28
        xl:py-32
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
          initial={{ opacity: 0, y: 20 }}
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
            Our Demands
          </p>

          <h2
            className="
              mt-4
              text-white
              font-serif
              font-bold
              leading-[1.05]
              text-[clamp(2rem,6vw,3.5rem)]
              max-w-4xl
            "
          >
            Five Things Rocky Mount
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Requires. In Writing.
          </h2>

          <p
            className="
              mt-6
              text-white/70
              text-base
              sm:text-lg
              lg:text-xl
              leading-8
              max-w-3xl
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
            mt-12
            sm:mt-14
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-5
            sm:gap-6
          "
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                bg-white/5
                border
                border-white/10
                border-t-[3px]
                border-t-[#C89A3E]
                backdrop-blur-sm
                p-6
                sm:p-7
                lg:p-8
                transition-all
                duration-300
                min-h-full
              "
            >
              <h3
                className="
                  text-[#C89A3E]
                  font-serif
                  font-bold
                  text-[clamp(1.35rem,4vw,1.7rem)]
                  leading-tight
                  mb-4
                "
              >
                {pillar.title}
              </h3>

              <p
                className="
                  text-white/75
                  text-sm
                  sm:text-base
                  leading-7
                "
              >
                {pillar.description}
              </p>

              <div
                className="
                  mt-6
                  pt-5
                  border-t
                  border-white/10
                  text-[11px]
                  sm:text-xs
                  uppercase
                  tracking-[0.12em]
                  font-bold
                  text-[#C89A3E]/80
                  leading-relaxed
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