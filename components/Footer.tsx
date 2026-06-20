"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="
        bg-[#16352A]
        text-white
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
          py-20
        "
      >
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-12
          "
        >
          {/* BRAND */}

          <div>
            <Image
              src="/logo.png"
              alt="CUFD"
              width={80}
              height={80}
              className="mb-4"
            />

            <h3
              className="
                font-serif
                text-2xl
                font-bold
                leading-tight
                text-[#C89A3E]
              "
            >
              Communities United
              <br />
              for Fair Development
            </h3>

            <p
              className="
                mt-4
                text-white/70
                leading-7
              "
            >
              Organizing Rocky Mount residents
              for fair, enforceable,
              community-benefiting development
              in our corridor.
            </p>

            <p
              className="
                mt-5
                italic
                text-[#C89A3E]
                font-serif
              "
            >
              "On our terms. For our future."
            </p>
          </div>

          {/* LINKS */}

          <div>
            <h4
              className="
                text-lg
                font-semibold
                mb-5
              "
            >
              Quick Links
            </h4>

            <ul className="space-y-3 text-white/70">
              <li><Link href="#why">Why We're Organizing</Link></li>
              <li><Link href="#pillars">Our Demands</Link></li>
              <li><Link href="#standards">The Framework</Link></li>
              <li><Link href="#join">Join CUFD</Link></li>
              <li><Link href="#council">Contact Council</Link></li>
              <li><Link href="#about">About CUFD</Link></li>
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h4
              className="
                text-lg
                font-semibold
                mb-5
              "
            >
              Contact
            </h4>

            <div className="space-y-3 text-white/70">
              <p>info@cufd-rockymount.org</p>
              <p>Rocky Mount, NC</p>
            </div>

            <h4
              className="
                text-lg
                font-semibold
                mt-8
                mb-4
              "
            >
              Follow CUFD
            </h4>

            <div className="flex gap-3">
              <button
                className="
                  border
                  border-white/20
                  px-4
                  py-2
                "
              >
                Facebook
              </button>

              <button
                className="
                  border
                  border-white/20
                  px-4
                  py-2
                "
              >
                X / Twitter
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
            mt-16
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            justify-between
            gap-4
          "
        >
          <p className="text-white/60">
            © 2026 Communities United for Fair Development —
            Rocky Mount, NC
          </p>

          <p
            className="
              text-white
              italic
              font-serif
            "
          >
            A community-organized coalition. "Fair terms. Real prosperity. Built for Rocky Mount."
          </p>
        </div>
      </div>
    </footer>
  );
}