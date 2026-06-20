"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
}: Props) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          end={end}
          duration={2.4}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          separator=","
        />
      ) : (
        "0"
      )}
    </span>
  );
}