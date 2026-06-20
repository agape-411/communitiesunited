"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Why This Matters", href: "#why" },
    { label: "Our Demands", href: "#pillars" },
    { label: "Join CUFD", href: "#join" },
    { label: "Contact Council", href: "#contact" },
    { label: "The Facts", href: "facts" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-amber-500 bg-[#1B3A2D]/95 backdrop-blur-md">
      <div className=" flex h-16 w-full px-4 md:px-8 xl:px-12 items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="CUFD Logo" width={50} height={50} className="rounded-full" />
          <h2 className="font-serif text-amber-400 font-bold">
            Communities United for Fair Development Coalition
            <br />
          <p className="text-xs text-white/50">
            Rocky Mount, NC
          </p>
          </h2>
          
        </div>

        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-wide text-white/70 hover:text-amber-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
  <motion.div
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "100%" }}
    className="fixed inset-0 bg-[#1B3A2D] z-50 md:hidden"
  >
    <div className="flex justify-end p-6">
      <button onClick={() => setOpen(false)}>
        <X className="text-white" />
      </button>
    </div>

    <div className="flex flex-col items-center justify-center h-full gap-8">

      <a
        href="#why"
        onClick={() => setOpen(false)}
        className="text-3xl text-white"
      >
        Why This Matters
      </a>

      <a
        href="#pillars"
        onClick={() => setOpen(false)}
        className="text-3xl text-white"
      >
        Our Demands
      </a>

      <a
        href="#join"
        onClick={() => setOpen(false)}
        className="text-3xl text-white"
      >
        Join Coalition
      </a>

      <a
        href="#contact"
        onClick={() => setOpen(false)}
        className="text-3xl text-white"
      >
        Contact Council
      </a>

    </div>
  </motion.div>
)}
      </div>
    </nav>
  );
}