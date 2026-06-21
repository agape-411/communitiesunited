"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  X,
  Mail,
  MapPin,
} from "lucide-react";

const quickLinks = [
  {
    title: "Why We're Organizing",
    href: "#why",
  },
  {
    title: "Our Demands",
    href: "#pillars",
  },
  {
    title: "The Framework",
    href: "#standards",
  },
  {
    title: "Join CUFD",
    href: "#join",
  },
  {
    title: "Contact Council",
    href: "#contact",
  },
  {
    title: "About CUFD",
    href: "#about",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#16352A] text-white overflow-hidden">
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          xl:px-10
          py-14
          sm:py-16
          lg:py-20
        "
      >
        <div
          className="
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-16
          "
        >
          {/* BRAND */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/logo.png"
              alt="Communities United for Fair Development"
              width={90}
              height={90}
              className="
                mb-5
                w-[70px]
                h-auto
                sm:w-[90px]
              "
            />

            <h2
              className="
                font-serif
                font-bold
                text-[#C89A3E]
                leading-tight
                text-[clamp(1.75rem,4vw,2.25rem)]
              "
            >
              Communities United
              <br />
              for Fair Development
            </h2>

            <p
              className="
                mt-5
                text-white/70
                leading-8
                max-w-md
              "
            >
              Organizing Rocky Mount residents
              for fair, enforceable,
              community-benefiting development
              throughout our corridor.
            </p>

            <p
              className="
                mt-6
                italic
                font-serif
                text-lg
                text-[#C89A3E]
              "
            >
              "On our terms. For our future."
            </p>
          </motion.div>

          {/* LINKS */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3
              className="
                text-xl
                font-semibold
                mb-6
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="
                      text-white/70
                      hover:text-[#C89A3E]
                      transition-colors
                      duration-300
                      inline-flex
                    "
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3
              className="
                text-xl
                font-semibold
                mb-6
              "
            >
              Contact
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:info@cufd-rockymount.org"
                className="
                  flex
                  items-center
                  gap-3
                  text-white/70
                  hover:text-[#C89A3E]
                  transition-colors
                "
              >
                <Mail size={18} />
                info@cufd-rockymount.org
              </a>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-white/70
                "
              >
                <MapPin size={18} />
                Rocky Mount, NC
              </div>
            </div>

            {/* SOCIALS */}

            <h3
              className="
                text-xl
                font-semibold
                mt-10
                mb-5
              "
            >
              Follow CUFD
            </h3>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  items-center
                  gap-2
                  border
                  border-white/20
                  px-4
                  py-3
                  hover:border-[#C89A3E]
                  hover:bg-white/5
                  transition-all
                  duration-300
                "
              >
                
                Facebook
              </a>

              <a
                href="#"
                aria-label="X / Twitter"
                className="
                  flex
                  items-center
                  gap-2
                  border
                  border-white/20
                  px-4
                  py-3
                  hover:border-[#C89A3E]
                  hover:bg-white/5
                  transition-all
                  duration-300
                "
              >
                <X size={18} />
                X / Twitter
              </a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}

        <div
          className="
            mt-14
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            lg:flex-row
            justify-between
            items-start
            lg:items-center
            gap-5
          "
        >
          <p
            className="
              text-white/60
              text-sm
            "
          >
            © 2026 Communities United for Fair Development —
            Rocky Mount, NC
          </p>

          <p
            className="
              text-white
              italic
              font-serif
              text-sm
              sm:text-base
              leading-relaxed
              max-w-xl
            "
          >
            A community-organized coalition. "Fair terms. Real prosperity. Built for Rocky Mount."


          </p>
        </div>
      </div>
    </footer>
  );
}