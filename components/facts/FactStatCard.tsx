"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";



interface Props {
  end?: number;
  value?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  description: string;
  source?: string;
}

export default function FactStatCard({
  end,
  value,
  prefix,
  suffix,
  decimals,
  description,
  source,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="
        bg-white
        border
        border-[#D4CABC]
        p-8
        shadow-sm
      "
    >
      <div className="text-[#1B3A2D] text-5xl font-bold">
        {end !== undefined ? (
          <AnimatedCounter
            end={end}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
          />
        ) : (
          value
        )}
      </div>

      <div className="mt-5 text-gray-700 leading-7">
        {description}
      </div>

      {source && (
        <div className="mt-5 text-sm italic text-gray-500">
          {source}
        </div>
      )}
    </motion.div>
  );
}