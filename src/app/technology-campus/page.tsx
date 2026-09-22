"use client";

import Navbar from "../../../components/Navbar";

const paper = "#FCFAF7";
const green = "#1B3A2D";
const cream = "#F5F0E8";
const gold = "#C8963E";
const dark = "#13211B";
const muted = "#40514A";
const border = "#E7E2D7";
const paleGold = "#E4C68A";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em]"
      style={{ color: gold }}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className="font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-[4rem]"
      style={{ color: light ? "#FCFAF7" : green }}
    >
      {children}
    </h2>
  );
}

function BodyText({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`font-serif text-[17px] leading-8 sm:text-[18px] ${className}`}
      style={{ color: light ? "rgba(252,250,247,0.78)" : muted }}
    >
      {children}
    </p>
  );
}

function Standard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t py-8" style={{ borderColor: border }}>
      <h3
        className="font-serif text-2xl leading-tight sm:text-3xl"
        style={{ color: green }}
      >
        {title}
      </h3>

      <BodyText className="mt-4 max-w-3xl">{children}</BodyText>
    </div>
  );
}

function InvestmentItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        className="mb-5 h-px w-full"
        style={{ backgroundColor: paleGold }}
      />

      <h3
        className="text-sm font-bold uppercase tracking-[0.08em]"
        style={{ color: dark }}
      >
        {title}
      </h3>

      <BodyText className="mt-4">{children}</BodyText>
    </div>
  );
}

function MetaItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="border-l-2 pl-5"
      style={{ borderColor: gold }}
    >
      <p
        className="text-[10px] font-bold uppercase tracking-[0.18em]"
        style={{ color: gold }}
      >
        {label}
      </p>

      <p
        className="mt-2 font-serif text-lg leading-7"
        style={{ color: dark }}
      >
        {children}
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className="px-6 py-14 sm:px-8 lg:px-12"
      style={{ backgroundColor: "#112319", color: "#FCFAF7" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: gold }}
            >
              Coalition
            </p>

            <h3 className="mt-4 font-serif text-3xl leading-tight">
              Communities United
              <br />
              for Fair Development
            </h3>

            <p className="mt-5 max-w-sm font-serif text-[15px] leading-7 text-white/65">
              Rocky Mount, North Carolina
            </p>
          </div>

          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: gold }}
            >
              Who we are
            </p>

            <ul className="mt-5 space-y-3 font-serif text-[15px] text-white/70">
              <li>Founding charter</li>
              <li>Member organizations</li>
              <li>Our work</li>
              <li>The five standards</li>
              <li>Rocky Mount Technology Campus</li>
            </ul>
          </div>

          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: gold }}
            >
              Take part
            </p>

            <ul className="mt-5 space-y-3 font-serif text-[15px] text-white/70">
              <li>Join the coalition</li>
              <li>Meeting calendar</li>
              <li>How to speak at a hearing</li>
              <li>Contact your ward representative</li>
            </ul>

            <p
              className="mt-10 text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: gold }}
            >
              Contact
            </p>

            <div className="mt-5 space-y-2 font-serif text-[15px] text-white/70">
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
          <p className="max-w-4xl font-serif text-xs leading-6 text-white/45">
            [FUNDING AND ADVISORY DISCLOSURE — name the funder, name the
            advisor, and state the relationship exactly as the contracts read.
            This is now the only place on the site where funding and advisory
            relationships appear, so it carries the full statement rather than
            a summary.]
          </p>

          <p className="mt-5 font-serif text-xs text-white/45">
            © 2026 Communities United for Fair Development · [Legal entity
            name and status] · Rocky Mount, North Carolina
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function TechnologyCampusPage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: paper,
        color: dark,
      }}
    >
      <Navbar />

      {/* =========================================================
          PAGE 1 — WHO WE ARE
      ========================================================= */}

      <section
        className="pt-28 sm:pt-32"
        style={{ backgroundColor: green }}
      >
        <div className="mx-auto max-w-[1200px] px-6 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <div
            className="border-b pb-5 text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px]"
            style={{
              borderColor: "rgba(228,198,138,0.35)",
              color: "#E4C68A",
            }}
          >
            Next coalition meeting: [DAY], [DATE] · [TIME] · [VENUE], Rocky
            Mount · Open to the public
          </div>

          <div className="mt-16 max-w-5xl">
            <Eyebrow>Communities United for Fair Development</Eyebrow>

            <p className="font-serif text-xl text-white/65 sm:text-2xl">
              Rocky Mount, North Carolina
            </p>

            <h1 className="mt-8 max-w-5xl font-serif text-3xl leading-[0.98] text-[#FCFAF7] sm:text-4xl lg:text-[4.8rem]">
              We want Rocky Mount to grow. We're organizing to make sure it
              grows right.
            </h1>

            <BodyText light className="mt-10 max-w-4xl text-lg sm:text-xl">
              Communities United for Fair Development is a coalition of Rocky
              Mount institutions and residents working to bring investment,
              jobs, and revenue to this city — and to make sure the terms that
              come with it are written into the agreement and enforced after
              the vote.
            </BodyText>
          </div>

          <div className="mt-16 grid gap-5 border-t pt-8 sm:grid-cols-3" style={{ borderColor: "rgba(255,255,255,0.16)" }}>
            {["Good jobs", "Local revenue", "Protected ratepayers"].map(
              (item) => (
                <div key={item}>
                  <p className="font-serif text-2xl text-[#FCFAF7] sm:text-3xl">
                    {item}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section
        className="border-b"
        style={{
          backgroundColor: paper,
          borderColor: border,
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>Founding institutions</Eyebrow>

          <div className="grid gap-0 md:grid-cols-2">
            <div className="border-t py-8 md:pr-10" style={{ borderColor: border }}>
              <h3 className="font-serif text-2xl" style={{ color: green }}>
                Rocky Mount Opportunities Industrialization Center
              </h3>

              <BodyText className="mt-4">
                Workforce training and community development in Rocky Mount
                since 1968. Brings the training infrastructure that turns
                hiring commitments into actual careers.
              </BodyText>
            </div>

            <div
              className="border-t py-8 md:border-l md:pl-10"
              style={{ borderColor: border }}
            >
              <h3 className="font-serif text-2xl" style={{ color: green }}>
                Word Tabernacle Church
              </h3>

              <BodyText className="mt-4">
                A regional congregation of roughly 3,500 members drawing from
                ten North Carolina counties, with community meeting space,
                small business support, and a five-generation membership.
              </BodyText>
            </div>

            <div className="border-t py-8 md:pr-10" style={{ borderColor: border }}>
              <h3 className="font-serif text-2xl" style={{ color: green }}>
                Rocky Mount Area Chamber of Commerce
              </h3>

              <BodyText className="mt-4">
                [One line on what the Chamber brings — local employers, small
                business membership, and the business case for investment that
                works for the whole city.]
              </BodyText>
            </div>

            <div
              className="border-t py-8 md:border-l md:pl-10"
              style={{ borderColor: border }}
            >
              <h3 className="font-serif text-2xl" style={{ color: green }}>
                [FOURTH ANCHOR]
              </h3>

              <BodyText className="mt-4">
                [A resident-membership organization — neighborhood association
                coalition, NAACP branch, or similar. Aim for a founding roster
                where no single constituency is more than half of it.]
              </BodyText>
            </div>
          </div>

          <div
            className="mt-8 border-t pt-8"
            style={{ borderColor: border }}
          >
            <BodyText className="max-w-5xl">
              Nash Community College and Edgecombe Community College
              participate as workforce and education partners under separate
              training agreements. As public institutions they are not members
              of the coalition and take no position on any specific development
              proposal.
            </BodyText>
          </div>
        </div>
      </section>

      {/* =========================================================
          PAGE 2 — WHY INVESTMENT MATTERS
      ========================================================= */}

      <section style={{ backgroundColor: cream }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <Eyebrow>Why we're organizing</Eyebrow>

              <SectionTitle>
                Rocky Mount is worth investing in. We intend to make the most
                of it.
              </SectionTitle>
            </div>

            <div>
              <BodyText className="max-w-3xl text-lg">
                This city has spent a long time watching investment go
                elsewhere. When it comes here, we want it — and we want it to
                reach the people who live here.
              </BodyText>

              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <InvestmentItem title="Our schools need revenue">
                  New property tax revenue reaching the school budget means
                  new dollars for programs and teachers, without raising taxes
                  on families who are already stretched.
                </InvestmentItem>

                <InvestmentItem title="Our workers need jobs">
                  Construction wages that support a household, permanent
                  technical careers, and a reason for young people who grew up
                  here to build their lives here.
                </InvestmentItem>

                <InvestmentItem title="Our businesses need contracts">
                  Construction spending with local vendors and sustained
                  procurement afterward. New demand for suppliers across Rocky
                  Mount — money that circulates here.
                </InvestmentItem>

                <InvestmentItem title="Our neighbors need protection">
                  Written commitments on water, noise, and cost. Not promises —
                  terms in the agreement, with a way for any resident to raise a
                  problem and get an answer.
                </InvestmentItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: paper }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <Eyebrow>Five things we ask of any major investment, in writing</Eyebrow>

            <SectionTitle>
              Five things we ask of any major investment, in writing
            </SectionTitle>

            <BodyText className="mt-8 max-w-3xl">
              We apply the same five to every proposal, regardless of industry
              or investor. They are the conditions under which this coalition
              supports a project — and the conditions under which it doesn't.
            </BodyText>
          </div>

          <div className="mt-14">
            <Standard title="Costs stay with the developer">
              Infrastructure and utility upgrades a project creates are paid
              for by the company that creates them, not spread onto household
              bills. Reconciled annually and published.
            </Standard>

            <Standard title="Jobs go to people who live here">
              A local hire standard verified by certified payroll, a funded
              training pipeline that starts before construction does, and
              financial consequences for falling short.
            </Standard>

            <Standard title="New revenue reaches public institutions">
              New tax revenue accounted for publicly with a clear line to
              schools, public safety, and city services — and no new taxes on
              households to make a project work.
            </Standard>

            <Standard title="Environmental limits are monitored, not assumed">
              A baseline study before ground breaks, independent monitoring any
              resident can check, and a defined remedy when a limit is exceeded.
            </Standard>

            <Standard title="Residents keep a way in after approval">
              Open engagement before the vote, and a standing grievance
              pathway with a documented response process after it.
            </Standard>

            <div
              className="border-t py-8"
              style={{ borderColor: border }}
            >
              <p
                className="font-serif text-3xl sm:text-4xl"
                style={{ color: green }}
              >
                Accountability doesn't end at the ribbon cutting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PAGE 3 — WHERE WE ARE APPLYING THEM
      ========================================================= */}

      <section style={{ backgroundColor: cream }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <Eyebrow>Where we're applying them now</Eyebrow>

            <SectionTitle>Where we're applying them now</SectionTitle>

            <BodyText className="mt-8 max-w-3xl">
              The coalition takes up major investment as it comes to Rocky
              Mount.
            </BodyText>

            <BodyText className="mt-4 max-w-3xl">
              This is what is in front of the city today.
            </BodyText>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.25fr_0.75fr]">
            <div>
              <p
                className="text-sm font-bold uppercase tracking-[0.15em]"
                style={{ color: gold }}
              >
                Active
              </p>
            </div>

            <div>
              <h3
                className="font-serif text-4xl sm:text-5xl"
                style={{ color: green }}
              >
                Rocky Mount Technology Campus
              </h3>

              <BodyText className="mt-6 max-w-3xl">
                A large data center is proposed on city-owned land off
                Treatment Plant Road.
              </BodyText>

              <BodyText className="mt-5 max-w-3xl">
                It would bring construction employment, permanent technical
                jobs, and significant new revenue to the city and county — and
                it would draw on our water and our electric system. We are
                working to make sure the terms are settled in the agreement
                before a vote, not negotiated afterward.
              </BodyText>
            </div>
          </div>

          <div
            className="mt-20 border-t pt-10"
            style={{ borderColor: border }}
          >
            <Eyebrow>What we're asking for, and where it stands</Eyebrow>

            <h3
              className="font-serif text-3xl sm:text-4xl"
              style={{ color: green }}
            >
              We meet in public, on a schedule, and anyone can come
            </h3>

            <BodyText className="mt-6 max-w-4xl">
              Coalition meetings are open. Residents, business owners, workers,
              and elected officials are all welcome. You do not need to be a
              member to attend or to speak.
            </BodyText>
          </div>
        </div>
      </section>

      {/* =========================================================
          PAGE 4 — MEETINGS + ADD YOUR NAME
      ========================================================= */}

      <section style={{ backgroundColor: paper }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 border-b pb-14 sm:grid-cols-3" style={{ borderColor: border }}>
            <MetaItem label="When">
              [e.g. Second Tuesdays, 6:30 p.m.]
            </MetaItem>

            <MetaItem label="Where">
              [Venue and street address]
              <br />
              Rocky Mount, NC
            </MetaItem>

            <MetaItem label="Also">
              [Call-in or livestream detail, if offered]
            </MetaItem>
          </div>

          <div className="mt-20 grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <Eyebrow>Add your name</Eyebrow>

              <SectionTitle>Add your name</SectionTitle>

              <BodyText className="mt-7">
                Coalition members get notice of public hearings and council
                votes before they happen, an invitation to every open meeting,
                and a plain-language summary of what is actually in the
                agreements being negotiated here.
              </BodyText>

              <BodyText className="mt-5">
                We ask for your ward because it lets us show your council member
                how many of their own constituents are standing behind these
                standards. That is the part that moves a vote.
              </BodyText>
            </div>

            <div>
              <form className="space-y-8">
                <div className="grid gap-7 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: gold }}>
                      First name
                    </span>
                    <input
                      type="text"
                      className="w-full border-b bg-transparent px-0 py-3 font-serif text-lg outline-none"
                      style={{ borderColor: border }}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: gold }}>
                      Last name
                    </span>
                    <input
                      type="text"
                      className="w-full border-b bg-transparent px-0 py-3 font-serif text-lg outline-none"
                      style={{ borderColor: border }}
                    />
                  </label>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: gold }}>
                      Email
                    </span>
                    <input
                      type="email"
                      className="w-full border-b bg-transparent px-0 py-3 font-serif text-lg outline-none"
                      style={{ borderColor: border }}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: gold }}>
                      ZIP code
                    </span>
                    <input
                      type="text"
                      className="w-full border-b bg-transparent px-0 py-3 font-serif text-lg outline-none"
                      style={{ borderColor: border }}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: gold }}>
                    Rocky Mount ward
                  </span>

                  <select
                    className="w-full border-b bg-transparent px-0 py-3 font-serif text-lg outline-none"
                    style={{ borderColor: border }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select ward
                    </option>
                    <option>Ward 1</option>
                    <option>Ward 2</option>
                    <option>Ward 3</option>
                    <option>Ward 4</option>
                    <option>Ward 5</option>
                    <option>Ward 6</option>
                    <option>Not sure / outside city</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: gold }}>
                    Organization, church, or business (optional)
                  </span>

                  <input
                    type="text"
                    className="w-full border-b bg-transparent px-0 py-3 font-serif text-lg outline-none"
                    style={{ borderColor: border }}
                  />
                </label>

                <fieldset>
                  <legend
                    className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: gold }}
                  >
                    I'd like to
                  </legend>

                  <div className="space-y-4">
                    {[
                      "Get hearing and vote alerts",
                      "Come to coalition meetings",
                      "Speak at a public hearing",
                      "Volunteer",
                      "Bring my organization in as a member",
                      "Join the coalition",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-start gap-3 font-serif text-[16px]"
                        style={{ color: muted }}
                      >
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 accent-[#1B3A2D]"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <button
                  type="button"
                  className="border px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors"
                  style={{
                    borderColor: green,
                    color: green,
                  }}
                >
                  Join the coalition
                </button>
              </form>

              <p className="mt-8 font-serif text-sm leading-6" style={{ color: muted }}>
                We never sell or share your information, and we never give it
                to a developer or an elected official.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PAGE 6 — TECHNOLOGY CAMPUS
      ========================================================= */}

      <section
        className="pt-28 sm:pt-32"
        style={{ backgroundColor: green }}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>Communities United for Fair Development · Initiative</Eyebrow>

          <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] text-[#FCFAF7] sm:text-6xl lg:text-[5.8rem]">
            Rocky Mount Technology Campus
          </h1>

          <BodyText light className="mt-10 max-w-4xl text-lg sm:text-xl">
            A large data center is proposed on city-owned land. We want the
            investment. Here is what we are requiring before this coalition
            supports it, and where the decision stands.
          </BodyText>
        </div>
      </section>

      <section style={{ backgroundColor: paper }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>What is being proposed</Eyebrow>

          <SectionTitle>What is being proposed</SectionTitle>

          <BodyText className="mt-8 max-w-4xl text-lg">
            A data center campus on land the City of Rocky Mount owns off
            Treatment Plant Road. The company has applied to rezone the site,
            which means a public hearing before the Planning Board and then a
            vote by the City Council.
          </BodyText>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <MetaItem label="Location">
              City-owned property, Treatment Plant Road, Rocky Mount
            </MetaItem>

            <MetaItem label="Current stage">
              Rezoning application [filed / expected], Planning Board hearing
              to follow
            </MetaItem>

            <MetaItem label="Who decides">
              Rocky Mount City Council, after a Planning Board recommendation
            </MetaItem>
          </div>

          <div className="mt-10">
            <MetaItem label="Where to read it">
              [Link to the rezoning application — a public record]
            </MetaItem>
          </div>

          <BodyText className="mt-10 max-w-4xl">
            Specific figures — size, phasing, water use, and electrical load —
            are in the application. We will publish them here as they are
            confirmed by the City, rather than repeating numbers we have not
            verified.
          </BodyText>
        </div>
      </section>

      {/* =========================================================
          PAGE 6–7 — WHY WE WANT THE INVESTMENT
      ========================================================= */}

      <section style={{ backgroundColor: cream }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <Eyebrow>Why we want this investment</Eyebrow>

            <SectionTitle>Why we want this investment</SectionTitle>

            <BodyText className="mt-8 max-w-4xl text-lg">
              Rocky Mount has watched this kind of investment land somewhere
              else for a long time. What it can mean here:
            </BodyText>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <InvestmentItem title="Construction work">
              Years of building trades employment at wages that support a
              household, with a local hire standard so the hours go to people
              who live here.
            </InvestmentItem>

            <InvestmentItem title="Revenue for schools and services">
              New tax revenue to the county that funds our schools, and to the
              city that funds police, fire, streets, and utility work long
              deferred.
            </InvestmentItem>

            <InvestmentItem title="A training pipeline">
              Developer-funded apprenticeships through OIC and the community
              colleges — credentials that carry beyond this one employer.
            </InvestmentItem>

            <InvestmentItem title="Wastewater infrastructure">
              Investment in the city's treatment capacity that Rocky Mount
              could not otherwise fund, if it is structured so residents are
              not paying for it.
            </InvestmentItem>
          </div>
        </div>
      </section>

      {/* =========================================================
          PAGE 7 — WHAT WE REQUIRE
      ========================================================= */}

      <section style={{ backgroundColor: paper }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>What we require before we support it</Eyebrow>

          <SectionTitle>What we require before we support it</SectionTitle>

          <BodyText className="mt-8 max-w-4xl text-lg">
            Our five standards, applied to this project. Each one has to be in
            the binding conditions or the agreement to count.
          </BodyText>

          <div className="mt-14">
            <Standard title="Our water">
              Non-potable water by default, a baseline study before construction
              begins, independent monitoring residents can check, protection
              for nearby wells, and the same curtailment rules as everyone else
              during a water emergency.
            </Standard>

            <Standard title="Our quality of life">
              Noise limits at the property line with continuous monitoring,
              restricted generator testing hours, and an honest account of what
              changes for the nearest neighbors.
            </Standard>

            <Standard title="Our bills">
              Every grid and infrastructure cost this facility creates paid by
              the developer, not spread across Rocky Mount electric bills,
              reconciled every year in public.
            </Standard>

            <Standard title="Our people and schools">
              A local hire standard for construction hours verified by certified
              payroll, developer-funded apprenticeships through OIC and the
              community colleges, and new revenue to schools without new taxes
              on families.
            </Standard>
          </div>
        </div>
      </section>

      {/* =========================================================
          PAGE 8 — ACCOUNTABILITY
      ========================================================= */}

      <section style={{ backgroundColor: paper }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>Holding them to it</Eyebrow>

          <SectionTitle>Holding them to it</SectionTitle>

          <BodyText className="mt-8 max-w-4xl text-lg">
            The developer vetted before approval, a decommissioning bond so it
            cannot walk away, a community-majority oversight body with the
            developer excluded, and a grievance pathway open to any resident.
          </BodyText>
        </div>
      </section>

      <section
        className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
        style={{ backgroundColor: green }}
      >
        <div className="mx-auto max-w-[1200px]">
          <h2 className="max-w-4xl font-serif text-4xl leading-tight text-[#FCFAF7] sm:text-5xl lg:text-6xl">
            We reserve the right to say no.
          </h2>

          <p className="mt-8 max-w-4xl font-serif text-lg leading-8 text-white/75">
            If these protections are not in the agreement, Communities United
            for Fair Development does not support this project. We will publish
            our position before the vote, not after it.
          </p>
        </div>
      </section>

      {/* =========================================================
          PAGE 8 — HOW THIS GETS DECIDED
      ========================================================= */}

      <section style={{ backgroundColor: paper }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <Eyebrow>How this gets decided</Eyebrow>

            <SectionTitle>How this gets decided</SectionTitle>

            <BodyText className="mt-8 max-w-4xl text-lg">
              Four stages. Residents can speak at two of them, and both are
              public.
            </BodyText>
          </div>

          <div className="mt-14">
            <Standard title="Application filed">
              The company submits its rezoning request. From this point the
              application is a public record and anyone can read it.
            </Standard>

            <Standard title="Staff review">
              City planning staff review the application and prepare a report
              with a recommendation.
            </Standard>

            <Standard title="Planning Board hearing">
              A public hearing. Residents may speak. The Board recommends
              approval, denial, or approval with conditions.
            </Standard>

            <Standard title="City Council vote">
              The decision. Residents may speak. Conditions adopted here become
              part of the zoning and run with the land — they bind whoever owns
              the property later.
            </Standard>
          </div>

          <div
            className="mt-12 border-t pt-10"
            style={{ borderColor: border }}
          >
            <BodyText className="max-w-4xl text-lg">
              That last point is the one that matters most. A promise made in a
              meeting binds nobody. A condition adopted into the zoning binds
              the property. That is why we push for commitments to land in the
              conditions rather than in a letter.
            </BodyText>
          </div>
        </div>
      </section>

      {/* =========================================================
          PAGE 8 — DATES
      ========================================================= */}

      <section style={{ backgroundColor: green }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>Dates for this project</Eyebrow>

          <h2 className="font-serif text-4xl leading-tight text-[#FCFAF7] sm:text-5xl">
            Dates for this project
          </h2>

          <p className="mt-7 max-w-3xl font-serif text-lg leading-8 text-white/70">
            Updated as the City sets them. If you want these in your inbox,
            join the coalition.
          </p>

          <div className="mt-14 border-l-2 pl-6 sm:pl-8" style={{ borderColor: gold }}>
            <div className="border-b py-7" style={{ borderColor: "rgba(255,255,255,0.16)" }}>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: gold }}
              >
                Community information session
              </p>

              <p className="mt-3 font-serif text-xl text-[#FCFAF7]">
                [Date, time, venue]
              </p>
            </div>

            <div className="border-b py-7" style={{ borderColor: "rgba(255,255,255,0.16)" }}>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: gold }}
              >
                Planning Board hearing
              </p>

              <p className="mt-3 font-serif text-xl text-[#FCFAF7]">
                [Date, time, venue]
              </p>
            </div>

            <div className="py-7">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: gold }}
              >
                City Council vote
              </p>

              <p className="mt-3 font-serif text-xl text-[#FCFAF7]">
                [Date, time, venue]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PAGE 9 — FOOTER / SITE NAVIGATION
      ========================================================= */}

      <Footer />
    </main>
  );
}