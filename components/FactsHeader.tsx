"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#tax", label: "Tax Revenue" },
  { href: "#jobs", label: "Jobs" },
  { href: "#energy", label: "Clean Energy" },
  { href: "#difference", label: "The Difference" },
];

export default function FactsHeader() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        sticky top-0 z-50
        bg-[#1B3A2D]
        border-b-[3px]
        border-[#C8963E]
      "
    >
      <nav
        className="
          h-16
          px-6 lg:px-8
          flex items-center justify-between
          max-w-350
          mx-auto
        "
      >
        {/* Brand */}

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="CUFD"
            width={44}
            height={44}
            className="rounded-full object-contain"
          />

          <div
            className="
              font-serif
              text-[0.95rem]
              font-bold
              text-[#C8963E]
              leading-tight
            "
          >
            Communities United for Fair Development

            <span
              className="
                block
                text-[0.68rem]
                font-sans
                uppercase
                tracking-[0.08em]
                text-white/55
                font-normal
              "
            >
              Rocky Mount, NC
            </span>
          </div>
        </Link>

        {/* Desktop Links */}

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="
                  text-white/80
                  uppercase
                  tracking-[0.04em]
                  text-[0.86rem]
                  font-semibold
                  hover:text-[#E8B86D]
                  transition-colors
                "
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <Link
              href="/#join"
              className="
                bg-[#C8963E]
                text-[#1B3A2D]
                px-4 py-2
                text-[0.86rem]
                uppercase
                font-bold
                rounded-xs
              "
            >
              Join CUFD
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}