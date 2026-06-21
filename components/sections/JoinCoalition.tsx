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
      className="
        bg-[#F6F0E6]
        py-16
        sm:py-20
        lg:py-28
        xl:py-32
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
            lg:grid-cols-[1fr_560px]
            gap-12
            lg:gap-16
            xl:gap-24
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
              Join CUFD
            </p>

            <h2
              className="
                mt-4
                text-[#16352A]
                font-serif
                font-bold
                leading-[1.05]
                text-[clamp(2rem,6vw,4rem)]
                max-w-4xl
              "
            >
              Add Your Voice.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Rocky Mount Is Listening.
            </h2>

            <p
              className="
                mt-6
                sm:mt-8
                text-gray-700
                text-base
                sm:text-lg
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
                mt-5
                sm:mt-6
                text-gray-700
                text-base
                sm:text-lg
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
              className="mt-8 sm:mt-10 space-y-5"
            >
              {benefits.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex gap-4 items-start"
                >
                  <span className="text-[#C89A3E] font-bold mt-1">
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
                mt-10
                sm:mt-12
                border-l-4
                border-[#C89A3E]
                pl-5
                sm:pl-6
              "
            >
              <p
                className="
                  text-[#16352A]
                  font-serif
                  italic
                  font-medium
                  leading-relaxed
                  text-[clamp(1.6rem,4vw,2.2rem)]
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
            whileHover={{
              y: -4,
            }}
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
              <div className="h-1 bg-[#C89A3E]" />

              <div className="p-6 sm:p-8 lg:p-10">
                <h3
                  className="
                    text-[#16352A]
                    font-serif
                    font-bold
                    text-[clamp(1.6rem,4vw,2rem)]
                  "
                >
                  Join the Coalition
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-600
                    text-sm
                    sm:text-base
                    leading-7
                  "
                >
                  Join thousands of residents, workers,
                  parents, business owners, and community
                  leaders committed to ensuring that major
                  investment benefits Rocky Mount while
                  protecting our future.
                </p>

                {/* BENEFITS BOX */}

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
                  <p className="text-[#16352A] font-semibold mb-3">
                    As a coalition member you'll receive:
                  </p>

                  <ul className="space-y-3">
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
                          leading-6
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

                {/* FORM */}

                <form className="mt-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "First Name",
                      "Last Name",
                    ].map((placeholder) => (
                      <input
                        key={placeholder}
                        type="text"
                        placeholder={placeholder}
                        className="
                          border
                          border-gray-300
                          px-4
                          py-3.5
                          w-full
                          rounded-none
                          outline-none
                          text-base
                          appearance-none
                          focus:border-[#C89A3E]
                          transition-colors
                        "
                      />
                    ))}
                  </div>

                  {[
                    "Email Address",
                    "Phone Number",
                    "ZIP Code",
                  ].map((placeholder) => (
                    <input
                      key={placeholder}
                      type="text"
                      placeholder={placeholder}
                      className="
                        border
                        border-gray-300
                        px-4
                        py-3.5
                        w-full
                        rounded-none
                        outline-none
                        text-base
                        appearance-none
                        focus:border-[#C89A3E]
                        transition-colors
                      "
                    />
                  ))}

                  {/* PARTICIPATION */}

                  <div
                    className="
                      border
                      border-[#E6DACA]
                      p-5
                    "
                  >
                    <p className="text-[#16352A] font-medium mb-4">
                      I'd like to:
                    </p>

                    <div className="space-y-3">
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
                            cursor-pointer
                          "
                        >
                          <input
                            type="checkbox"
                            className="
                              h-4
                              w-4
                              accent-[#C89A3E]
                              shrink-0
                            "
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
                      rounded-none
                      outline-none
                      appearance-none
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

                {/* DISCLOSURE */}

                <div
                  className="
                    mt-6
                    pt-6
                    border-t
                    border-[#E5D9CA]
                  "
                >
                  <p className="text-xs leading-6 text-gray-500">
                    By joining CUFD, you agree to receive
                    updates regarding community meetings,
                    public hearings, development agreement
                    negotiations, and coalition activities.
                  </p>

                  <p className="mt-3 text-xs text-gray-500">
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