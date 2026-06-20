"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  MapPin,
  School,
  Trees,
  Road,
} from "lucide-react";

const InteractiveMap = dynamic(
  () => import("./interactiveMap"),
  {
    ssr: false,
    loading: () => (
      <div className="h-150 bg-gray-200 animate-pulse" />
    ),
  }
);

const features = [
  {
    icon: MapPin,
    title: "Proposed Development Site",
    description:
      "3031 Treatment Plant Rd, Rocky Mount, NC 27801",
  },
  {
    icon: School,
    title: "Schools & Community Facilities",
    description:
      "Nearby schools, churches, and public institutions.",
  },
  {
    icon: Trees,
    title: "Environmental Resources",
    description:
      "Important environmental and water resources surrounding the corridor.",
  },
  {
    icon: Road,
    title: "Transportation Corridors",
    description:
      "Major roads and supporting infrastructure serving the area.",
  },
];

export default function CorridorMap() {
  return (
    <section
      id="corridor-map"
      className="bg-[#F6F0E6] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p
            className="
              text-[#C89A3E]
              uppercase
              tracking-[0.3em]
              text-xs
              font-bold
            "
          >
            Corridor Overview
          </p>

          <h2
            className="
              mt-4
              text-[#16352A]
              font-serif
              font-bold
              text-4xl
              md:text-5xl
              lg:text-6xl
              leading-tight
            "
          >
            Understanding the
            <br />
            Growth Corridor
          </h2>

          <p className="mt-6 text-gray-700 leading-8 text-lg">
            Explore the proposed development area and
            understand the surrounding communities,
            infrastructure, and environmental assets.
          </p>
        </motion.div>

        {/* Content */}

        <div
          className="
            mt-16
            grid
            lg:grid-cols-[360px_1fr]
            gap-8
            items-stretch
          "
        >
          {/* Sidebar */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              bg-white
              border border-[#DED4C5]
              shadow-sm
              p-8
            "
          >
            <div className="h-1 w-20 bg-[#C89A3E] mb-6" />

            <h3
              className="
                text-2xl
                font-serif
                font-bold
                text-[#16352A]
              "
            >
              Community Context
            </h3>

            <div className="mt-8 space-y-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4"
                >
                  <feature.icon
                    size={22}
                    className="text-[#C89A3E] shrink-0 mt-1"
                  />

                  <div>
                    <h4 className="font-semibold text-[#16352A]">
                      {feature.title}
                    </h4>

                    <p className="text-gray-600 mt-1 leading-7">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="
                mt-10
                border-l-4
                border-[#C89A3E]
                pl-5
              "
            >
              <p
                className="
                  italic
                  font-serif
                  text-xl
                  text-[#16352A]
                "
              >
                "Our Community. Our Environment.
                Our Future."
              </p>
            </div>
          </motion.div>

          {/* Map */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              overflow-hidden
              rounded-xl
              border border-[#DED4C5]
              shadow-xl
            "
          >
            <InteractiveMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}