"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";


export default function NationalContext() {
  return (
    <section className="bg-[#16352A] py-12 lg:py-19">
      <div className="max-w-250 mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.25em] text-[#C89A3E] text-xs font-bold">
            National Context
          </p>

          <h2 className="mt-4 text-white font-serif text-[clamp(1.75rem,3vw,3.2rem)] font-bold">
            The Data Center Economy Is Not Slowing Down.
            The Question Is Who Benefits.
          </h2>

          <p className="mt-6 text-white/80 text-lg leading-8">
            The capital being deployed in data center
            infrastructure is measured in the hundreds of
            billions of dollars. Communities that come to
            the table with a framework capture the benefit.
            Communities that don't become passive hosts —
            or lose the project entirely.
          </p>
        </motion.div>

        {/* STATS */}

        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8"
          >
            <div className="text-[#E6BC72] text-4xl font-semibold">
              $
              <AnimatedCounter end={375} suffix="B" />
            </div>

            <div className="mt-4 text-white/80 leading-7">
              Projected global AI infrastructure spending
              in 2025 alone — the single largest driver of
              data center construction
            </div>

            <div className="mt-4 text-xs italic text-white/40">
              Source: UBS, 2025
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8"
          >
            <div className="text-[#E6BC72] text-4xl font-semibold">
              <AnimatedCounter end={50} />
              %+
            </div>

            <div className="mt-4 text-white/80 leading-7">
              Share of US corporate clean energy
              procurement represented by data center
              companies in 2024
            </div>

            <div className="mt-4 text-xs italic text-white/40">
              Source: S&P Global, 2024
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8"
          >
            <div className="text-[#E6BC72] text-4xl font-semibold">
              <AnimatedCounter end={550} />
              %
            </div>

            <div className="mt-4 text-white/80 leading-7">
              Increase in data center computing workloads
              2010–2018, while electricity consumption
              grew only 6% — due to efficiency gains
            </div>

            <div className="mt-4 text-xs italic text-white/40">
              Source: DOE / Lawrence Berkeley National Lab
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 max-w-185"
        >
          <p className="text-white/80 leading-8">
            North Carolina ranks 9th nationally with 91
            data centers — well behind Virginia (600+),
            Texas (379), and California (318). The state
            is actively competing for a larger share of
            this investment. Communities that establish
            clear, enforceable standards attract the
            developers who can meet them. Communities
            without standards become negotiating targets
            for developers looking for the path of least
            resistance.
          </p>

          <p className="mt-5 text-white/80 leading-8">
            Rocky Mount is not competing to be a passive
            host. It is establishing itself as a community
            with the framework, the institutional partners,
            and the political will to do this right — and
            to capture the full benefit when it does.
          </p>
        </motion.div>

      </div>
    </section>
  );
}