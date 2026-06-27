"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
} from "@/lib/animations";

const principles = [
  {
    number: "01",
    title: "Fair Terms, Not Just Promises",
    description:
      "Every commitment the developer makes must be enforceable and written into the development agreement. Promises don't build trust — terms in writing do.",
  },
  {
    number: "02",
    title: "Rocky Mount Sets the Terms",
    description:
      "This community does not accept development on the developer's terms. We organize so that Rocky Mount — its residents, workers, and elected officials — sets the standard and holds the company to it.",
  },
  {
    number: "03",
    title: "Real Jobs for Real People Here",
    description:
      "Local hiring commitments with enforcement teeth. Certified payroll verification quarterly. Developer-funded apprenticeships. A written standard with consequences for shortfalls.",
  },
  {
    number: "04",
    title: "Our Environment Is Non-Negotiable",
    description:
      "Water protections, environmental monitoring, and noise limits must be in the agreement. The corridor's natural resources belong to this community — not to the developer.",
  },
  {
    number: "05",
    title: "We Speak for Ourselves",
    description:
      "Every voice in this coalition is freely given by people with a genuine stake. We do not use scripts. The most credible voice in any room is a real person saying why they personally care.",
  },
];

export default function AboutCUFD() {
  return (
    <section
      id="about"
      className="
        bg-[#F6F0E6]
        py-12
        sm:py-18
        lg:py-20
        xl:py-24
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        <div
          className="
            grid
            lg:grid-cols-[1fr_1.1fr]
            gap-12
            lg:gap-16
            xl:gap-20
            items-start
          "
        >
          {/* LEFT */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
              About CUFD
            </p>

            <h2
              className="
                mt-3
                text-[#16352A]
                font-serif
                font-bold
                leading-[1.05]
                text-[clamp(1.75rem,4vw,2.5rem)]
                max-w-3xl
              "
            >
              Who We Are
            </h2>

            <div
              className="
                mt-8
                space-y-6
                text-gray-700
                text-base
                sm:text-lg
                leading-8
                max-w-2xl
              "
            >
              <p>
                Communities United for Fair Development is a coalition
                of Rocky Mount residents, workers, business owners,
                faith leaders, and community organizations organizing
                to ensure that large-scale economic development in our
                corridor comes to us on terms that protect and benefit
                our community.
              </p>

              <p>
                The name says what we stand for.
                <em className="font-medium text-[#16352A]">
                  {" "}Communities{" "}
                </em>
                — plural, because this corridor is Rocky Mount,
                and because we are a partnership of distinct
                community institutions, not a single front group.

                <em className="font-medium text-[#16352A]">
                  {" "}United{" "}
                </em>
                — institutions standing together to set terms.

                <em className="font-medium text-[#16352A]">
                  {" "}Fair Development{" "}
                </em>
                — we do not pretend development is automatically
                good. We stake our identity on whether the terms
                are fair and enforceable.
              </p>

              <p>
                We are not anti-development.
                We are pro-Rocky Mount.
                We believe this corridor deserves to capture
                the full economic benefit of major investment —
                with water, environmental, cost, and workforce
                protections written into the agreement and
                enforced after the ribbon is cut.
              </p>

              <p>
                CUFD was organized with support from Garvey Labs LLC, a community-side strategic advisory firm that works exclusively on the public and community side of data center negotiations — not the developer side. Garvey Labs was engaged by Carolinas Gateway Partnership to ensure Rocky Mount came to this negotiation with a framework. CUFD is the community voice that holds the resulting agreement accountable.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p
              className="
                text-[#C89A3E]
                uppercase
                tracking-[0.25em]
                text-xs
                sm:text-sm
                font-bold
                mb-6
                sm:mb-8
              "
            >
              Our Principles
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-8"
            >
              {principles.map((principle) => (
                <motion.div
                  key={principle.number}
                  variants={fadeUp}
                  whileHover={{
                    x: 6,
                  }}
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-4
                    sm:gap-6
                    pb-8
                    border-b
                    border-[#DDD2C4]
                  "
                >
                  <div
                    className="
                      text-[#C89A3E]
                      text-3xl
                      sm:text-4xl
                      font-black
                      shrink-0
                      min-w-[70px]
                    "
                  >
                    {principle.number}
                  </div>

                  <div>
                    <h3
                      className="
                        text-[#16352A]
                        font-serif
                        font-bold
                        text-xl
                        sm:text-2xl
                        leading-tight
                        mb-3
                      "
                    >
                      {principle.title}
                    </h3>

                    <p
                      className="
                        text-gray-700
                        leading-7
                        text-base
                      "
                    >
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}