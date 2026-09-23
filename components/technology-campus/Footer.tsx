"use client";

import { COLORS } from "./Editorial";

export default function TechnologyCampusFooter() {
  return (
    <footer
      className="px-6 py-14 sm:px-8 lg:px-12"
      style={{
        backgroundColor: "#112319",
        color: COLORS.paper,
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Label>Coalition</Label>

            <h3 className="mt-4 font-serif text-3xl leading-tight">
              Communities United
              <br />
              for Fair Development
            </h3>

            <p className="mt-5 font-serif text-[15px] leading-7 text-white/55">
              Rocky Mount, North Carolina
            </p>
          </div>

          <div>
            <Label>Who we are</Label>

            <ul className="mt-5 space-y-3 font-serif text-[15px] text-white/65">
              <li>Founding charter</li>
              <li>Member organizations</li>
              <li>Our work</li>
              <li>The five standards</li>
              <li>Rocky Mount Technology Campus</li>
            </ul>
          </div>

          <div>
            <Label>Take part</Label>

            <ul className="mt-5 space-y-3 font-serif text-[15px] text-white/65">
              <li>Join the coalition</li>
              <li>Meeting calendar</li>
              <li>How to speak at a hearing</li>
              <li>Contact your ward representative</li>
            </ul>

            <Label className="mt-10">Contact</Label>

            <div className="mt-5 space-y-2 font-serif text-[15px] text-white/65">
              <p>info@cufd-rockymount.org</p>
              <p>[Mailing address]</p>
              <p>Facebook</p>
            </div>
          </div>
        </div>

        <div
          className="mt-12 border-t pt-8"
          style={{ borderColor: "rgba(255,255,255,0.12)" }}
        >
          <p className="max-w-4xl font-serif text-xs leading-6 text-white/40">
            [FUNDING AND ADVISORY DISCLOSURE — name the funder, name the
            advisor, and state the relationship exactly as the contracts read.
            This is now the only place on the site where funding and advisory
            relationships appear, so it carries the full statement rather than
            a summary.]
          </p>

          <p className="mt-5 font-serif text-xs text-white/40">
            © 2026 Communities United for Fair Development · [Legal entity
            name and status] · Rocky Mount, North Carolina
          </p>
        </div>
      </div>
    </footer>
  );
}

function Label({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[10px] font-bold uppercase tracking-[0.2em] ${className}`}
      style={{ color: COLORS.gold }}
    >
      {children}
    </p>
  );
}