"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  {href: "/", label: "Home"},
  { href: "#tax", label: "Tax Revenue" },
  { href: "#jobs", label: "Jobs" },
  { href: "#energy", label: "Clean Energy" },
  { href: "#difference", label: "The Difference" },
];

export default function FactsHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          sticky
          top-0
          z-50
          bg-[#1B3A2D]/95
          backdrop-blur-md
          border-b-2
          border-[#C8963E]
          shadow-sm
        "
      >
        <nav
          className="
            max-w-[1600px]
            mx-auto
            h-[72px]
            px-4
            sm:px-6
            lg:px-8
            flex
            items-center
            justify-between
            gap-6
          "
        >
          {/* Brand */}

          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
          >
            <Image
              src="/logo.png"
              alt="CUFD Logo"
              width={52}
              height={52}
              priority
              className="
                w-11
                h-11
                sm:w-13
                sm:h-13
                object-contain
              "
            />

            <div className="hidden sm:block">
              <h1
                className="
                  font-serif
                  font-bold
                  text-[#C8963E]
                  leading-tight
                  text-sm
                  lg:text-base
                  max-w-[280px]
                "
              >
                Communities United for
                Fair Development
              </h1>

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.08em]
                  text-white/60
                  mt-1
                "
              >
                Rocky Mount, NC
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}

          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  relative
                  text-white/80
                  uppercase
                  tracking-[0.05em]
                  text-sm
                  font-semibold
                  hover:text-[#E8B86D]
                  transition-colors
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-[#C8963E]
                  after:transition-all
                  hover:after:w-full
                "
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#join"
              className="
                inline-flex
                items-center
                gap-2
                bg-[#C8963E]
                text-[#1B3A2D]
                px-5
                py-3
                text-sm
                font-bold
                hover:opacity-90
                transition-all
              "
            >
              Join CUFD
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle */}

          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              z-[60]
              bg-[#1B3A2D]
              md:hidden
            "
          >
            <div className="flex justify-end p-6">
              <button
                aria-label="Close Menu"
                onClick={() => setOpen(false)}
              >
                <X
                  size={32}
                  className="text-white"
                />
              </button>
            </div>

            <div
              className="
                flex
                flex-col
                justify-center
                items-center
                h-[80vh]
                gap-8
                px-6
              "
            >
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-2xl
                    font-serif
                    text-white
                    hover:text-[#C8963E]
                    transition-colors
                    text-center
                  "
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/#join"
                onClick={() => setOpen(false)}
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  bg-[#C8963E]
                  text-[#1B3A2D]
                  px-8
                  py-4
                  font-semibold
                "
              >
                Join CUFD
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="
                  text-white/70
                  mt-2
                "
              >
                ← Back to Main Website
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}