"use client";

import Navbar from "../../../components/Navbar";

import {
  Body,
  COLORS,
  EditorialSection,
  Eyebrow,
  Investment,
  Meta,
  Title,
} from "../../../components/technology-campus/Editorial";

import {
  CoalitionStandards,
  ProjectStandards,
} from "../../../components/technology-campus/Standards";

import CoalitionForm from "../../../components/technology-campus/CoalitionForm";
import ProjectStages from "../../../components/technology-campus/ProjectStages";
import TechnologyCampusFooter from "../../../components/technology-campus/Footer";

const foundingInstitutions = [
  {
    title: "[FIRST INSTITUTION]",
    text: "Workforce training and community development in Rocky Mount since 1968. Brings the training infrastructure that turns hiring commitments into actual careers.",
  },
  {
    title: "[SECOND INSTITUTION]",
    text: "A regional congregation of roughly 3,500 members drawing from ten North Carolina counties, with community meeting space, small business support, and a five-generation membership.",
  },
  {
    title: "[THIRD INSTITUTION]",
    text: "[One line on what the Chamber brings — local employers, small business membership, and the business case for investment that works for the whole city.]",
  },
  {
    title: "[FOURTH INSTITUTION]",
    text: "[A resident-membership organization — neighborhood association coalition, NAACP branch, or similar. Aim for a founding roster where no single constituency is more than half of it.]",
  },
];

const investmentItems = [
  {
    title: "Our schools need revenue",
    text: "New property tax revenue reaching the school budget means new dollars for programs and teachers, without raising taxes on families who are already stretched.",
  },
  {
    title: "Our workers need jobs",
    text: "Construction wages that support a household, permanent technical careers, and a reason for young people who grew up here to build their lives here.",
  },
  {
    title: "Our businesses need contracts",
    text: "Construction spending with local vendors and sustained procurement afterward. New demand for suppliers across Rocky Mount — money that circulates here.",
  },
  {
    title: "Our neighbors need protection",
    text: "Written commitments on water, noise, and cost. Not promises — terms in the agreement, with a way for any resident to raise a problem and get an answer.",
  },
];

const projectBenefits = [
  {
    title: "Construction work",
    text: "Years of building trades employment at wages that support a household, with a local hire standard so the hours go to people who live here.",
  },
  {
    title: "Revenue for schools and services",
    text: "New tax revenue to the county that funds our schools, and to the city that funds police, fire, streets, and utility work long deferred.",
  },
  {
    title: "A training pipeline",
    text: "Developer-funded apprenticeships through OIC and the community colleges — credentials that carry beyond this one employer.",
  },
  {
    title: "Wastewater infrastructure",
    text: "Investment in the city's treatment capacity that Rocky Mount could not otherwise fund, if it is structured so residents are not paying for it.",
  },
];

export default function TechnologyCampusPage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: COLORS.paper,
        color: COLORS.dark,
      }}
    >
      <Navbar />

      {/* =====================================================
          PAGE 1 — WHO WE ARE
      ===================================================== */}

      <EditorialSection background="green" className="pt-28 sm:pt-32">
        <div
          className="border-b pb-5 text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px]"
          style={{
            borderColor: "rgba(228,198,138,0.35)",
            color: COLORS.paleGold,
          }}
        >
          Next coalition meeting: [DAY], [DATE] · [TIME] · [VENUE], Rocky
          Mount · Open to the public
        </div>

        <div className="mt-8 max-w-5xl">
          <Eyebrow light>
            Communities United for Fair Development
          </Eyebrow>

          <p className="font-serif text-xl text-white/60 sm:text-2xl">
            Rocky Mount, North Carolina
          </p>

         

          <h1 className="mt-7 max-w-5xl font-serif text-3xl leading-[0.98] text-[#FCFAF7] sm:text-4xl lg:text-[4.8rem]">
            We want Rocky Mount to grow. We're organizing to make sure it grows
            right.
          </h1>

          <Body light className="mt-9 max-w-4xl text-lg sm:text-xl">
            Communities United for Fair Development is a coalition of Rocky
            Mount institutions and residents working to bring investment, jobs,
            and revenue to this city — and to make sure the terms that come
            with it are written into the agreement and enforced after the vote.
          </Body>
        </div>

        <div
          className="mt-16 grid gap-5 border-t pt-8 sm:grid-cols-3"
          style={{ borderColor: "rgba(255,255,255,0.16)" }}
        >
          {["Good jobs", "Local revenue", "Protected ratepayers"].map(
            (item) => (
              <p
                key={item}
                className="font-serif text-xl text-[#FCFAF7] sm:text-2xl"
              >
                {item}
              </p>
            )
          )}
        </div>
      </EditorialSection>

      <EditorialSection>
        <Eyebrow>Founding institutions</Eyebrow>

        <div className="grid gap-0 md:grid-cols-2">
          {foundingInstitutions.map((institution, index) => (
            <div
              key={institution.title}
              className={`border-t py-8 ${
                index % 2 === 1 ? "md:border-l md:pl-10" : "md:pr-10"
              }`}
              style={{ borderColor: COLORS.border }}
            >
              <h3 className="font-serif text-2xl text-[#1B3A2D]">
                {institution.title}
              </h3>

              <Body className="mt-4">
                {institution.text}
              </Body>
            </div>
          ))}
        </div>

        <div
          className="mt-8 border-t pt-8"
          style={{ borderColor: COLORS.border }}
        >
          <Body className="max-w-5xl">
            Nash Community College and Edgecombe Community College participate
            as workforce and education partners under separate training
            agreements. As public institutions they are not members of the
            coalition and take no position on any specific development proposal. <br/>
            Each founding institution has signed the coalition charter. Any organization may apply to join. 
          </Body>
        </div>
      </EditorialSection>

      {/* =====================================================
          PAGE 2 — WHY INVESTMENT
      ===================================================== */}

      <EditorialSection background="cream">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            

            <Title>
              Rocky Mount is worth investing in. We intend to make the most of
              it.
            </Title>
          </div>

          <div>
            <Body className="max-w-3xl text-lg">
              This city has spent a long time watching investment go elsewhere.
              When it comes here, we want it — and we want it to reach the
              people who live here.
            </Body>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              {investmentItems.map((item) => (
                <Investment key={item.title} title={item.title}>
                  {item.text}
                </Investment>
              ))}
            </div>
          </div>
        </div>
      </EditorialSection>

      <CoalitionStandards />

      {/* =====================================================
          PAGE 3 — WHERE WE APPLY THEM
      ===================================================== */}

      <EditorialSection background="cream">
        <div className="max-w-4xl">
          

          <Title>Where we're applying them now</Title>

          <Body className="mt-8 max-w-3xl">
            The coalition takes up major investment as it comes to Rocky Mount.
          </Body>

          <Body className="mt-4 max-w-3xl">
            This is what is in front of the city today.
          </Body>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.25fr_0.75fr]">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#C8963E]">
            Active
          </p>

          <div>
            <h3 className="font-serif text-3xl text-[#1B3A2D] sm:text-4xl">
              Rocky Mount Technology Campus
            </h3>

            <Body className="mt-6 max-w-3xl">
              A large data center is proposed on city-owned land off Treatment
              Plant Road.
            </Body>

            <Body className="mt-3 max-w-3xl">
              It would bring construction employment, permanent technical jobs,
              and significant new revenue to the city and county — and it would
              draw on our water and our electric system. We are working to make
              sure the terms are settled in the agreement before a vote, not
              negotiated afterward.
            </Body>
          </div>
        </div>

        <div
          className="mt-20 border-t pt-10 bg-[#1B3A2D]"
          style={{ borderColor: COLORS.border, backgroundColor: COLORS.paper,
         }}
        >
          

          <h3 className="font-serif text-3xl text-[#1B3A2D] sm:text-4xl">
            We meet in public, on a schedule, and anyone can come
          </h3>

          <Body className="mt-6 max-w-4xl">
            Coalition meetings are open. Residents, business owners, workers,
            and elected officials are all welcome. You do not need to be a
            member to attend or to speak.
          </Body>
        </div>
      </EditorialSection>

      {/* =====================================================
          PAGES 4–5 — JOIN
      ===================================================== */}

      <CoalitionForm />

      {/* =====================================================
          PAGE 6 — TECHNOLOGY CAMPUS
      ===================================================== */}

      <EditorialSection background="green" className="pt-26 sm:pt-30">
        <Eyebrow light>
          Communities United for Fair Development · Initiative
        </Eyebrow>

        <h1 className="max-w-5xl font-serif text-3xl leading-[0.98] text-[#FCFAF7] sm:text-4xl lg:text-[4.5rem]">
          Rocky Mount Technology Campus
        </h1>

        <Body light className="mt-10 max-w-4xl text-lg sm:text-xl">
          A large data center is proposed on city-owned land. We want the
          investment. Here is what we are requiring before this coalition
          supports it, and where the decision stands.
        </Body>
      </EditorialSection>

      <EditorialSection>
        

        <Title>What is being proposed</Title>

        <Body className="mt-8 max-w-4xl text-lg">
          A data center campus on land the City of Rocky Mount owns off
          Treatment Plant Road. The company has applied to rezone the site,
          which means a public hearing before the Planning Board and then a
          vote by the City Council.
        </Body>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Meta label="Location">
            City-owned property, Treatment Plant Road, Rocky Mount
          </Meta>

          <Meta label="Current stage">
            Rezoning application [filed / expected], Planning Board hearing to
            follow
          </Meta>

          <Meta label="Who decides">
            Rocky Mount City Council, after a Planning Board recommendation
          </Meta>
        </div>

        <div className="mt-10">
          <Meta label="Where to read it">
            [Link to the rezoning application — a public record]
          </Meta>
        </div>

        <Body className="mt-10 max-w-4xl">
          Specific figures — size, phasing, water use, and electrical load —
          are in the application. We will publish them here as they are
          confirmed by the City, rather than repeating numbers we have not
          verified.
        </Body>
      </EditorialSection>

      {/* =====================================================
          PAGE 6–7 — WHY WE WANT IT
      ===================================================== */}

      <EditorialSection background="cream">
        

        <Title>Why we want this investment</Title>

        <Body className="mt-8 max-w-4xl text-lg">
          Rocky Mount has watched this kind of investment land somewhere else
          for a long time. What it can mean here:
        </Body>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {projectBenefits.map((item) => (
            <Investment key={item.title} title={item.title}>
              {item.text}
            </Investment>
          ))}
        </div>
      </EditorialSection>

      <ProjectStandards />

      {/* =====================================================
          PAGE 8 — ACCOUNTABILITY + DECISION
      ===================================================== */}

      <ProjectStages />

      {/* =====================================================
          PAGE 9
      ===================================================== */}

      <TechnologyCampusFooter />
    </main>
  );
}