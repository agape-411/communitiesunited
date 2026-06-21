"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Our Schools Need Revenue",
    text: "New property-tax revenue goes directly to the school budget — new dollars for programs and teachers without raising taxes on families who are already stretched.",
  },
  {
    title: "Our Workers Need Jobs",
    text: "Construction wages of $28–$45/hr. Permanent operations careers. A reason for young people from our community to stay. Jobs for today. New businesses for tomorrow. Built by local hands.",
  },
  {
    title: "Our Businesses Need Contracts",
    text: "Construction-phase spending with local vendors. Sustained operational procurement. New demand for suppliers across Rocky Mount — money that circulates here.",
  },
  {
    title: "Our Community Needs Protection",
    text: "Written commitments on water, environment, noise, and cost. Not developer promises — enforceable terms in the development agreement with a resident grievance pathway.",
  },
];

export default function WhySection() {
  return (
    <>
      {/* STATEMENT BAR */}

      <section className="bg-[#C89A3E] py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <p
            className="
              text-center
              italic
              font-serif
              font-bold
              text-[#16352A]
              text-base
              sm:text-lg
              md:text-xl
              leading-relaxed
            "
          >
            "If it&apos;s built here, it&apos;s built right —
            and in writing."
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}

      <section
        id="why"
        className="
          bg-[#F6F0E6]
          py-16
          sm:py-20
          lg:py-28
          overflow-hidden
        "
      >
        <div
          className="
            max-w-5xl
            mx-auto
            px-5
            sm:px-6
          "
        >
          {/* Eyebrow */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              text-xs
              sm:text-sm
              font-bold
              tracking-[0.22em]
              uppercase
              text-[#C89A3E]
              mb-4
            "
          >
            Why We&apos;re Organizing
          </motion.p>

          {/* Title */}

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              font-serif
              text-[#16352A]
              font-bold
              leading-tight
              text-[clamp(2.rem,5vw,3.6rem)]
              max-w-4xl
            "
          >
            The Opportunity Is Real.
            <br />
            So Is the Question of Who Captures It.
          </motion.h2>

          {/* Blockquote */}

          <motion.blockquote
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              relative
              mt-8
              sm:mt-10
              border-l-[5px]
              border-[#C89A3E]
              bg-white
              px-6
              sm:px-8
              md:px-10
              py-8
              sm:py-10
              text-base
              sm:text-lg
              leading-8
              sm:leading-[1.9]
              text-[#2B2B2B]
              italic
              shadow-sm
            "
          >
            <span
              className="
                absolute
                left-2
                sm:left-4
                top-0
                text-[4rem]
                sm:text-[6rem]
                text-[#C89A3E]/20
                leading-none
                font-serif
                select-none
              "
            >
              “
            </span>

            The data center economy is one of the largest
            investments to reach communities like ours in a
            generation — new revenue for our schools, skilled
            careers for our people, new businesses in our
            corridor. That opportunity is real, and we intend
            to capture it.

            <br />
            <br />

            But it comes to communities like ours whether we
            organize or not, and the only real question is
            whether Rocky Mount sets the terms or has them set
            for us.

            <br />
            <br />

            We are not here to sell anyone a data center, and
            we are not here to fight one for the sake of
            fighting.

            <br />
            <br />

            We are here to make sure that if one is built on
            our land, our water is protected, our bills are
            protected, our people get the jobs, our schools
            get the revenue, and the company is held in writing
            to every commitment it makes — or it does not get
            our support.

            <br />
            <br />

            That is how an overlooked community stops being a
            passive host and starts capturing its fair share.
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="
              mt-4
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.12em]
              font-bold
              text-gray-500
            "
          >
            — Communities United for Fair Development
          </motion.p>

          {/* GRID */}

          <div
            className="
              mt-12
              sm:mt-16
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
              sm:gap-8
            "
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  bg-white
                  border
                  border-[#C89A3E]
                  p-6
                  sm:p-8
                  shadow-sm
                  transition-all
                "
              >
                <h3
                  className="
                    text-[#16352A]
                    font-serif
                    font-bold
                    text-[clamp(1.4rem,4vw,2rem)]
                    leading-tight
                    mb-4
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    text-gray-700
                    text-sm
                    sm:text-base
                    leading-7
                    sm:leading-8
                  "
                >
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}