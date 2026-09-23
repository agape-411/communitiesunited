"use client";

import { Body, COLORS, Meta, Title } from "./Editorial";

const interests = [
  "Get hearing and vote alerts",
  "Come to coalition meetings",
  "Speak at a public hearing",
  "Volunteer",
  "Bring my organization in as a member",
  "Join the coalition",
];

export default function CoalitionForm() {
  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      style={{ backgroundColor: COLORS.paper }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div
          className="grid gap-8 border-b pb-14 sm:grid-cols-3"
          style={{ borderColor: COLORS.border }}
        >
          <Meta label="When">
            [e.g. Second Tuesdays, 6:30 p.m.]
          </Meta>

          <Meta label="Where">
            [Venue and street address]
            <br />
            Rocky Mount, NC
          </Meta>

          <Meta label="Also">
            [Call-in or livestream detail, if offered]
          </Meta>
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            

            <Title>Add your name</Title>

            <Body className="mt-7">
              Coalition members get notice of public hearings and council
              votes before they happen, an invitation to every open meeting,
              and a plain-language summary of what is actually in the
              agreements being negotiated here.
            </Body>

            <Body className="mt-5">
              We ask for your ward because it lets us show your council member
              how many of their own constituents are standing behind these
              standards. That is the part that moves a vote.
            </Body>
          </div>

          <form className="space-y-8">
            <div className="grid gap-7 sm:grid-cols-2">
              <Field label="First name" />
              <Field label="Last name" />
            </div>

            <div className="grid gap-7 sm:grid-cols-2">
              <Field label="Email" type="email" />
              <Field label="ZIP code" />
            </div>

            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: COLORS.gold }}>
                Rocky Mount ward
              </span>

              <select
                defaultValue=""
                className="w-full border-b bg-transparent px-0 py-3 font-serif text-lg outline-none"
                style={{ borderColor: COLORS.border }}
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

            <Field
              label="Organization, church, or business (optional)"
            />

            <fieldset>
              <legend
                className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em]"
                style={{ color: COLORS.gold }}
              >
                I'd like to
              </legend>

              <div className="space-y-4">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className="flex items-start gap-3 font-serif text-[16px]"
                    style={{ color: COLORS.muted }}
                  >
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 accent-[#1B3A2D]"
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <button
              type="button"
              className="border bg-[#1B3A2D] px-6 py-4 text-[11px] text-white font-bold uppercase tracking-[0.16em]"
              style={{
                borderColor: COLORS.green,
                
              }}
            >
              Join the coalition
            </button>

            <p
              className="font-serif text-sm leading-6"
              style={{ color: COLORS.muted }}
            >
              We never sell or share your information, and we never give it to
              a developer or an elected official.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span
        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em]"
        style={{ color: COLORS.gold }}
      >
        {label}
      </span>

      <input
        type={type}
        className="w-full border-b bg-transparent px-0 py-3 font-serif text-lg outline-none"
        style={{ borderColor: COLORS.border }}
      />
    </label>
  );
}