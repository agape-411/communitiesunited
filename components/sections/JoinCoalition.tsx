"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
} from "@/lib/animations";

const benefits = [
  "Get updates on the development agreement and council vote schedule",
  "Attend community listening sessions and town halls",
  "Learn how to speak at public hearings on behalf of your community",
  "Connect with workers, parents, and business owners with the same stake",
  "Hold the developer accountable to every written commitment — after approval",
];

export default function JoinSection() {
  return (
    <section
      id="join"
      className="bg-[#F6F0E6] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_560px] gap-16 items-start xl:gap-24">
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
                font-bold
              "
            >
              Join CUFD
            </p>

            <h2
              className="
                mt-4
                text-[#16352A]
                font-serif
                font-bold
                leading-tight
                text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Add Your Voice.
              <br />
              Rocky Mount Is Listening.
            </h2>

            <p
              className="
                mt-8
                text-gray-700
                text-lg
                leading-8
                max-w-2xl
              "
            >
              The decisions being made today will shape
              jobs, schools, infrastructure, and opportunity
              in Rocky Mount for decades to come.
            </p>

            <p
              className="
                mt-6
                text-gray-700
                text-lg
                leading-8
                max-w-2xl
              "
            >
              Join neighbors, workers, parents,
              business owners, and community leaders
              who believe economic development should
              benefit Rocky Mount while protecting
              residents through enforceable standards.
            </p>

            {/* BENEFITS */}

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 space-y-4"
            >
              {benefits.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex gap-4"
                >
                  <span className="text-[#C89A3E] font-bold">
                    →
                  </span>

                  <span className="text-gray-700 leading-7">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* QUOTE */}

            <div
              className="
                mt-12
                border-l-4
                border-[#C89A3E]
                pl-6
              "
            >
              <p
                className="
                  text-[#16352A]
                  font-serif
                  italic
                  text-2xl
                  md:text-3xl
                  leading-relaxed
                "
              >
                Fair terms.
                <br />
                Real prosperity.
                <br />
                Built for Rocky Mount.
              </p>
            </div>
          </motion.div>

          {/* FORM */}

          <motion.div
  variants={fadeRight}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <div
    className="
      bg-white
      border
      border-[#DED4C5]
      shadow-sm
      overflow-hidden
    "
  >
    {/* Top Accent */}

    <div className="h-1 bg-[#C89A3E]" />

    <div className="p-8 lg:p-10">
      <h3
        className="
          text-[#16352A]
          text-2xl
          font-semibold
        "
      >
        Join the Coalition
      </h3>

      <p
        className="
          mt-4
          text-gray-600
          leading-7
        "
      >
        Join thousands of residents, workers,
        parents, business owners, and community
        leaders committed to ensuring that major
        investment benefits Rocky Mount while
        protecting our future.
      </p>

      {/* Benefits */}

      <div
        className="
          mt-6
          rounded-sm
          bg-[#F6F0E6]
          border
          border-[#E6DACA]
          p-5
        "
      >
        <p
          className="
            text-[#16352A]
            font-semibold
            mb-3
          "
        >
          As a coalition member you'll receive:
        </p>

        <ul className="space-y-2">
          {[
            "Development agreement updates",
            "Council meeting alerts",
            "Public hearing opportunities",
            "Community event invitations",
          ].map((item) => (
            <li
              key={item}
              className="
                flex
                gap-3
                text-gray-700
                text-sm
              "
            >
              <span className="text-[#C89A3E]">
                →
              </span>

              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}

      <form className="mt-8 space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="
              border
              border-gray-300
              px-4
              py-3
              w-full
              outline-none
              focus:border-[#C89A3E]
            "
          />

          <input
            type="text"
            placeholder="Last Name"
            className="
              border
              border-gray-300
              px-4
              py-3
              w-full
              outline-none
              focus:border-[#C89A3E]
            "
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="
            border
            border-gray-300
            px-4
            py-3
            w-full
            outline-none
            focus:border-[#C89A3E]
          "
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="
            border
            border-gray-300
            px-4
            py-3
            w-full
            outline-none
            focus:border-[#C89A3E]
          "
        />

        <input
          type="text"
          placeholder="ZIP Code"
          className="
            border
            border-gray-300
            px-4
            py-3
            w-full
            outline-none
            focus:border-[#C89A3E]
          "
        />

        {/* Participation */}

        <div
          className="
            border
            border-[#E6DACA]
            p-4
          "
        >
          <p
            className="
              text-[#16352A]
              font-medium
              mb-3
            "
          >
            I'd like to:
          </p>

          <div className="space-y-2">
            {[
              "Receive updates",
              "Attend community meetings",
              "Volunteer",
              "Speak at public hearings",
            ].map((item) => (
              <label
                key={item}
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-gray-700
                "
              >
                <input
                  type="checkbox"
                  className="accent-[#C89A3E]"
                />

                {item}
              </label>
            ))}
          </div>
        </div>

        <textarea
          rows={4}
          placeholder="Why are you joining CUFD?"
          className="
            border
            border-gray-300
            px-4
            py-3
            w-full
            resize-none
            outline-none
            focus:border-[#C89A3E]
          "
        />

        <button
          type="submit"
          className="
            w-full
            bg-[#16352A]
            text-white
            py-4
            font-semibold
            transition-all
            duration-300
            hover:bg-[#214737]
          "
        >
          Join Communities United for Fair Development
        </button>
      </form>

      {/* Disclosure */}

      <div
        className="
          mt-6
          pt-6
          border-t
          border-[#E5D9CA]
        "
      >
        <p
          className="
            text-xs
            leading-6
            text-gray-500
          "
        >
          By joining CUFD, you agree to receive
          updates regarding community meetings,
          public hearings, development agreement
          negotiations, and coalition activities.
        </p>

        <p
          className="
            mt-3
            text-xs
            text-gray-500
          "
        >
          Your information is never sold or shared.
        </p>
      </div>
    </div>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}