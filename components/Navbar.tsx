"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    label: "Why This Matters",
    href: "#why",
  },
  {
    label: "Our Demands",
    href: "#pillars",
  },
  {
    label: "Join CUFD",
    href: "/join",
  },
  {
    label: "Contact Council",
    href: "#contact",
  },
  {
    label: "The Facts",
    href: "/facts",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          bg-[#16352A]/95
          backdrop-blur-md
          border-b
          border-[#C89A3E]/30
          shadow-sm
        "
      >
        <div
          className="
            max-w-[1600px]
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            xl:px-10
          "
        >
          <div
            className="
              h-18
              flex
              items-center
              justify-between
              gap-6
            "
          >
            {/* LOGO */}

            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
            >
              <Image
                src="/logo.png"
                alt="CUFD Logo"
                width={58}
                height={58}
                priority
                className="
                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  object-contain
                "
              />

              <div className="hidden sm:block">
                <h1
                  className="
                    font-serif
                    font-bold
                    text-[#C89A3E]
                    leading-tight
                    text-xs
                    lg:text-sm
                    max-w-70
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
                  text-white/80
                  mt-1  
                "
              >
                Rocky Mount, NC
              </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}

            <nav className="hidden lg:flex items-center gap-8">
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    relative
                    text-sm
                    uppercase
                    tracking-[0.08em]
                    text-white/75
                    hover:text-[#C89A3E]
                    transition-colors
                    duration-300
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-[#C89A3E]
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + MOBILE BUTTON */}

            <div className="flex items-center gap-4">
              <Link
                href="/join"
                className="
                  hidden
                  md:inline-flex
                  items-center
                  gap-2
                  bg-[#C89A3E]
                  text-[#16352A]
                  px-5
                  py-3
                  font-semibold
                  text-sm
                  hover:opacity-90
                  transition-all
                "
              >
                Join CUFD
                <ArrowRight size={16} />
              </Link>

              <button
                aria-label="Toggle Menu"
                onClick={() => setOpen(!open)}
                className="
                  lg:hidden
                  text-white
                  p-2
                "
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}

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
              z-60
              bg-[#16352A]
              lg:hidden
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
                items-center
                justify-start
                gap-6
                px-6
                pt-12
                sm:pt-14
                md:pt-20
                pb-10
                min-h-[calc(100dvh-72px)]
                overflow-y-auto
              "
            >
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    font-serif
                    text-white
                    hover:text-[#C89A3E]
                    transition-colors
                    text-center
                  "
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/join"
                onClick={() => setOpen(false)}
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  bg-[#C89A3E]
                  text-[#16352A]
                  px-8
                  py-4
                  font-semibold
                "
              >
                Join the Coalition
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}