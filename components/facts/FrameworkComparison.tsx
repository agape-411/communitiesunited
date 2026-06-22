"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const withoutFramework = [
  "Developer promises — not contractual commitments",
  "Outside workers, no local hiring requirement",
  "Grid-upgrade costs shifted to existing ratepayers",
  "No independent environmental monitoring",
  "No workforce pipeline for the community",
  "No school revenue projection or mechanism",
  "No grievance pathway for residents",
  "Tarboro voted to reject a $6.4B project — no deal, no benefit",
];

const withFramework = [
  "Enforceable terms in the development agreement — in writing",
  "30–40% local hire, verified by certified payroll quarterly",
  "Developer-assigned grid-upgrade costs — no rate-shifting",
  "Independent environmental monitoring with public dashboard",
  "Developer-funded OIC apprenticeship pipeline",
  "Property-tax revenue to school budget — zero new taxes on families",
  "Resident grievance pathway — real accountability after approval",
  "Rocky Mount captures its fair share",
];

export default function FrameworkDifference() {
  return (
    <section
      id="difference"
      className="py-15 lg:py-20 bg-[#F4EFE7]"
    >
      <div className="max-w-250 mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.25em] text-[#C89A3E] text-xs font-bold">
            What Makes Rocky Mount Different
          </p>

          <h2 className="mt-3 font-serif text-[#16352A] text-2xl md:text-3xl font-bold">
            A Framework Changes Everything.
          </h2>

          <p className="mt-6 text-gray-700 leading-8 text-lg">
            Most data center deals in North Carolina have
            been negotiated without a community benefit
            framework — leaving communities as passive hosts
            rather than active participants. Rocky Mount is
            doing something different.
          </p>
        </motion.div>

        <div className="mt-9 grid lg:grid-cols-2 gap-8">

          {/* WITHOUT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-red-200 bg-white"
          >
            <div className="border-t-4 border-red-600 p-8">

              <h3 className="text-2xl font-bold text-red-700">
                ✕ Without a Framework
              </h3>

              <ul className="mt-6 space-y-5">
                {withoutFramework.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4"
                  >
                    <X
                      className="text-red-600 shrink-0 mt-1"
                      size={18}
                    />

                    <span className="text-gray-700 leading-7">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>

          {/* WITH */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-green-200 bg-white"
          >
            <div className="border-t-4 border-[#C89A3E] p-8">

              <h3 className="text-2xl font-bold text-[#16352A]">
                ✓ With the Grid-Positive Framework
              </h3>

              <ul className="mt-6 space-y-5">
                {withFramework.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4"
                  >
                    <Check
                      className="text-green-600 shrink-0 mt-1"
                      size={18}
                    />

                    <span className="text-gray-700 leading-7">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>

        </div>

        {/* TARBORO QUOTE */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <div
            className="
              border-l-4
              border-[#C89A3E]
              bg-white
              px-8
              py-8
            "
          >
            <p className="italic text-gray-700 leading-8">
              In September 2025, Tarboro voted to reject a
              $6.4 billion data center proposal in the
              corridor — citing concerns over water, sewer,
              and quality of life — with no community benefit
              framework in place to answer those concerns.
              Rocky Mount came to this negotiation with a
              framework. That is the difference between a
              community that captures its fair share and one
              that gets nothing.
            </p>
          </div>

          <p className="mt-3 text-sm italic text-gray-500">
            Source: Business North Carolina, 2025
          </p>
        </motion.div>

      </div>
    </section>
  );
}