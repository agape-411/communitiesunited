"use client";

import { Body, Standard, Title } from "./Editorial";

const coalitionStandards = [
  {
    title: "Costs stay with the developer",
    text: "Infrastructure and utility upgrades a project creates are paid for by the company that creates them, not spread onto household bills. Reconciled annually and published.",
  },
  {
    title: "Jobs go to people who live here",
    text: "A local hire standard verified by certified payroll, a funded training pipeline that starts before construction does, and financial consequences for falling short.",
  },
  {
    title: "New revenue reaches public institutions",
    text: "New tax revenue accounted for publicly with a clear line to schools, public safety, and city services — and no new taxes on households to make a project work.",
  },
  {
    title: "Environmental limits are monitored, not assumed",
    text: "A baseline study before ground breaks, independent monitoring any resident can check, and a defined remedy when a limit is exceeded.",
  },
  {
    title: "Residents keep a way in after approval",
    text: "Open engagement before the vote, and a standing grievance pathway with a documented response process after it. Accountability doesn't end at the ribbon cutting.",
  },
];

const projectStandards = [
  {
    title: "Our water",
    text: "Non-potable water by default, a baseline study before construction begins, independent monitoring residents can check, protection for nearby wells, and the same curtailment rules as everyone else during a water emergency.",
  },
  {
    title: "Our quality of life",
    text: "Noise limits at the property line with continuous monitoring, restricted generator testing hours, and an honest account of what changes for the nearest neighbors.",
  },
  {
    title: "Our bills",
    text: "Every grid and infrastructure cost this facility creates paid by the developer, not spread across Rocky Mount electric bills, reconciled every year in public.",
  },
  {
    title: "Our people and schools",
    text: "A local hire standard for construction hours verified by certified payroll, developer-funded apprenticeships through OIC and the community colleges, and new revenue to schools without new taxes on families.",
  },
];

export function CoalitionStandards() {
  return (
    <section className="px-6 py-18 sm:px-8 lg:px-12 lg:py-25">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-4xl">
          

          <Title>
            Five things we ask of any major investment, in writing
          </Title>

          <Body className="mt-8 max-w-3xl">
            We apply the same five to every proposal, regardless of industry
            or investor. They are the conditions under which this coalition
            supports a project — and the conditions under which it doesn't.
          </Body>
        </div>

        <div className="mt-14">
          {coalitionStandards.map((standard) => (
            <Standard key={standard.title} title={standard.title}>
              {standard.text}
            </Standard>
          ))}

          
        </div>
      </div>
    </section>
  );
}

export function ProjectStandards() {
  return (
    <section className="px-6 py-15 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        

        <Title>What we require before we support it</Title>

        <Body className="mt-8 max-w-4xl text-lg">
          Our five standards, applied to this project. Each one has to be in
          the binding conditions or the agreement to count.
        </Body>

        <div className="mt-14">
          {projectStandards.map((standard) => (
            <Standard key={standard.title} title={standard.title}>
              {standard.text}
            </Standard>
          ))}
        </div>
      </div>
    </section>
  );
}