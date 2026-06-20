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

      <section className="bg-[#C89A3E] py-5">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="
              text-center
              italic
              font-serif
              font-bold
              text-[#16352A]
              text-lg
              md:text-xl
            "
          >
            "If it&apos;s built here, it&apos;s built right — and in writing."
          </p>
        </div>
      </section>

      {/* NARRATIVE */}

      <section
        id="why"
        className="
          bg-[#F6F0E6]
          py-24
          lg:py-32
        "
      >
        <div
          className="
            max-w-5xl
            mx-auto
            px-6
          "
        >
          {/* Eyebrow */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-sm
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
            transition={{ delay: 0.1 }}
            className="
              font-serif
              text-[#16352A]
              font-bold
              leading-tight
              text-4xl
              md:text-5xl
              max-w-175
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
            transition={{ delay: 0.2 }}
            className="
              relative
              mt-10
              border-l-[5px]
              border-[#C89A3E]
              bg-white
              px-8
              md:px-10
              py-10
              text-lg
              leading-[1.9]
              text-[#2B2B2B]
              italic
              shadow-sm
            "
          >
            <span
              className="
                absolute
                left-4
                top-0
                text-[6rem]
                text-[#C89A3E]/20
                leading-none
                font-serif
              "
            >
              “
            </span>

            The data center economy is one of the largest investments to
            reach communities like ours in a generation — new revenue for
            our schools, skilled careers for our people, new businesses in
            our corridor. That opportunity is real, and we intend to
            capture it.

            <br />
            <br />

            But it comes to communities like ours whether we organize or
            not, and the only real question is whether Rocky Mount sets the
            terms or has them set for us.

            <br />
            <br />

            We are not here to sell anyone a data center, and we are not
            here to fight one for the sake of fighting.

            <br />
            <br />

            We are here to make sure that if one is built on our land, our
            water is protected, our bills are protected, our people get the
            jobs, our schools get the revenue, and the company is held in
            writing to every commitment it makes — or it does not get our
            support.

            <br />
            <br />

            That is how an overlooked community stops being a passive host
            and starts capturing its fair share.
          </motion.blockquote>

          <p
            className="
              mt-4
              text-sm
              uppercase
              tracking-[0.12em]
              font-bold
              text-gray-500
            "
          >
            — Communities United for Fair Development
          </p>

          {/* WHY GRID */}

          <div
            className="
              mt-16
              grid
              md:grid-cols-2
              gap-8
            "
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  bg-white
                  border
                  border-[#C89A3E]
                  p-8
                "
              >
                <h3
                  className="
                    text-[#16352A]
                    font-serif
                    text-2xl
                    font-bold
                    mb-4
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    text-gray-700
                    leading-8
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