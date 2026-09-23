"use client";

import { Body, COLORS,  Standard, Title } from "./Editorial";

const stages = [
  {
    title: "Application filed",
    text: "The company submits its rezoning request. From this point the application is a public record and anyone can read it.",
  },
  {
    title: "Staff review",
    text: "City planning staff review the application and prepare a report with a recommendation.",
  },
  {
    title: "Planning Board hearing",
    text: "A public hearing. Residents may speak. The Board recommends approval, denial, or approval with conditions.",
  },
  {
    title: "City Council vote",
    text: "The decision. Residents may speak. Conditions adopted here become part of the zoning and run with the land — they bind whoever owns the property later.",
  },
];

export default function ProjectStages() {
  return (
    <>
      <section className="bg-[#FCFAF7] px-6 py-10 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
         

          <Title>Holding them to it</Title>

          <Body className="mt-8 max-w-4xl text-lg">
            The developer vetted before approval, a decommissioning bond so it
            cannot walk away, a community-majority oversight body with the
            developer excluded, and a grievance pathway open to any resident.
          </Body>
        </div>
      </section>

      <section className="bg-[#1B3A2D] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
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

      <section className="bg-[#FCFAF7] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          

          <Title>How this gets decided</Title>

          <Body className="mt-8 max-w-4xl text-lg">
            Four stages. Residents can speak at two of them, and both are
            public.
          </Body>

          <div className="mt-14">
            {stages.map((stage) => (
              <Standard key={stage.title} title={stage.title}>
                {stage.text}
              </Standard>
            ))}
          </div>

          <div
            className="mt-12 border-t pt-10"
            style={{ borderColor: COLORS.border }}
          >
            <Body className="max-w-4xl text-lg">
              That last point is the one that matters most. A promise made in a
              meeting binds nobody. A condition adopted into the zoning binds
              the property. That is why we push for commitments to land in the
              conditions rather than in a letter.
            </Body>
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A2D] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          

          <h2 className="font-serif text-4xl leading-tight text-[#FCFAF7] sm:text-5xl">
            Dates for this project
          </h2>

          <p className="mt-7 max-w-3xl font-serif text-lg leading-8 text-white/70">
            Updated as the City sets them. If you want these in your inbox,
            join the coalition.
          </p>

          <div className="mt-14 border-l-2 border-[#C8963E] pl-6 sm:pl-8">
            <DateItem
              title="Community information session"
              date="[Date, time, venue]"
            />

            <DateItem
              title="Planning Board hearing"
              date="[Date, time, venue]"
            />

            <DateItem
              title="City Council vote"
              date="[Date, time, venue]"
              last
            />
          </div>
        </div>
      </section>
    </>
  );
}

function DateItem({
  title,
  date,
  last = false,
}: {
  title: string;
  date: string;
  last?: boolean;
}) {
  return (
    <div
      className={`py-7 ${!last ? "border-b border-white/15" : ""}`}
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C8963E]">
        {title}
      </p>

      <p className="mt-3 font-serif text-xl text-[#FCFAF7]">
        {date}
      </p>
    </div>
  );
}