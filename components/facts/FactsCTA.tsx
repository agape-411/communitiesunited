"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FactsCTA() {
  return (
    <section className="bg-[#16352A] px-8 py-16 text-center">
      <div className="max-w-170 mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/logo.png"
            alt="CUFD"
            width={90}
            height={90}
            className="mx-auto mb-6 object-contain"
          />

          <h2
            className="
              font-serif
              text-white
              text-[clamp(1.6rem,3vw,2.2rem)]
              leading-tight
              mb-4
            "
          >
            Rocky Mount Deserves a Fair Deal.
            <br />
            Join Us in Demanding One.
          </h2>

          <p className="text-[rgba(255,255,255,0.72)] leading-7 mb-8">
            Communities United for Fair Development is
            organizing Rocky Mount residents, workers,
            and business owners to make sure this
            opportunity comes to our community on terms
            that protect and benefit us — in writing,
            with enforcement, and with accountability
            after the ribbon is cut.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4">

            <Link
              href="/#join"
              className="
                inline-block
                uppercase
                tracking-wider
                text-[0.93rem]
                font-bold
                px-8
                py-[0.9rem]
                rounded-xs
                bg-[#C89A3E]
                text-[#16352A]
                transition-all
                duration-200
                hover:bg-[#D9B46B]
              "
            >
              Join the Coalition
            </Link>

            <Link
              href="/#council"
              className="
                inline-block
                uppercase
                tracking-wider
                text-[0.93rem]
                font-bold
                px-8
                py-[0.9rem]
                rounded-xs
                border-2
                border-white/40
                text-white
                transition-all
                duration-200
                hover:border-[#C89A3E]
                hover:text-[#C89A3E]
              "
            >
              Contact Your Council Member
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
}