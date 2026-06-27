"use client";

import { useState } from "react";

export default function CoalitionForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    role: "",
    meetingUpdates: false,
    publicHearing: false,
    businessRep: false,
    tradesWorker: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/coalition", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus(
          "Thank you for joining CUFD."
        );

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          zip: "",
          role: "",
          meetingUpdates: false,
          publicHearing: false,
          businessRep: false,
          tradesWorker: false,
        });
      } else {
        setStatus("Unable to submit form.");
      }
    } catch {
      setStatus("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <div className="grid lg:grid-cols-[1fr_480px] gap-14 items-start">
      {/* LEFT */}

      <div>
        <p className="text-[#C89A3E] uppercase tracking-[0.25em] text-xs font-bold">
          Join CUFD
        </p>

        <h2 className="mt-4 text-[#16352A] font-serif font-bold text-4xl md:text-5xl">
          Add Your Voice.
          <br />
          Rocky Mount Is Listening.
        </h2>

        <div className="mt-8 space-y-6 text-gray-700 leading-8">
          <p>
            Communities United for Fair
            Development is organizing
            residents, workers, business
            owners, and community leaders
            across Rocky Mount.
          </p>

          <p>
            Your voice matters at the
            council chamber. Sign up to
            stay informed, attend community
            meetings, and ensure elected
            officials hear directly from
            residents.
          </p>
        </div>

        <ul className="mt-8 space-y-4 text-gray-700">
          <li>
            ✓ Updates on council votes and
            development agreements
          </li>

          <li>
            ✓ Attend town halls and
            listening sessions
          </li>

          <li>
            ✓ Learn how to speak at public
            hearings
          </li>

          <li>
            ✓ Connect with community
            stakeholders
          </li>

          <li>
            ✓ Hold developers accountable
          </li>
        </ul>

        <blockquote className="mt-10 border-l-4 border-[#C89A3E] pl-5 italic font-serif text-xl text-[#16352A]">
          "Fair terms. Real prosperity.
          Built for Rocky Mount."
        </blockquote>
      </div>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl border border-[#DED4C5] shadow-sm space-y-5"
      >
        <h3 className="text-2xl font-bold text-[#16352A]">
          Join the Coalition
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <input
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="border p-3 rounded-lg"
          />

          <input
            required
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border p-3 rounded-lg"
          />
        </div>

        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="border p-3 rounded-lg w-full"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border p-3 rounded-lg"
          />

          <input
            required
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="ZIP Code"
            className="border p-3 rounded-lg"
          />
        </div>

        <select
          required
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full"
        >
          <option value="">
            I am a...
          </option>

          <option>
            Rocky Mount resident
          </option>

          <option>
            Construction / trades worker
          </option>

          <option>
            Local business owner
          </option>

          <option>
            Parent / school community
            member
          </option>

          <option>
            Faith community member
          </option>

          <option>
            Student or young professional
          </option>

          <option>
            Community organization leader
          </option>

          <option>Other</option>
        </select>

        <div className="space-y-3 text-sm">
          <label className="flex gap-3">
            <input
              type="checkbox"
              name="meetingUpdates"
              checked={
                formData.meetingUpdates
              }
              onChange={handleChange}
            />

            Notify me about council votes
            and meetings
          </label>

          <label className="flex gap-3">
            <input
              type="checkbox"
              name="publicHearing"
              checked={
                formData.publicHearing
              }
              onChange={handleChange}
            />

            I'm interested in speaking at
            public hearings
          </label>

          <label className="flex gap-3">
            <input
              type="checkbox"
              name="businessRep"
              checked={
                formData.businessRep
              }
              onChange={handleChange}
            />

            I represent a business or
            organization
          </label>

          <label className="flex gap-3">
            <input
              type="checkbox"
              name="tradesWorker"
              checked={
                formData.tradesWorker
              }
              onChange={handleChange}
            />

            I work in construction or
            skilled trades
          </label>
        </div>

        <button
          disabled={loading}
          className="w-full bg-[#16352A] text-white py-4 rounded-lg font-bold hover:opacity-90"
        >
          {loading
            ? "Submitting..."
            : "Join Communities United for Fair Development"}
        </button>

        {status && (
          <p className="text-center text-sm text-[#16352A]">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}