"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Workforce() {
  const [track, setTrack] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",

    tradeSkill: "",
    operationSkill: "",
    experience: "",
    certifications: "",
    employmentStatus: "",

    resident: false,
    apprenticeship: false,
    notifyHiring: false,
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
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/workforce", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pathway: track,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setSuccess(
        "Your workforce registration has been submitted successfully."
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zip: "",

        tradeSkill: "",
        operationSkill: "",
        experience: "",
        certifications: "",
        employmentStatus: "",

        resident: false,
        apprenticeship: false,
        notifyHiring: false,
      });

      setTrack("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    }

    setLoading(false);
  }

  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-10 xl:gap-16">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              font-bold
              text-[#C89A3E]
            "
          >
            Workforce Interest Portal
          </p>

          <h2
            className="
              mt-4
              text-4xl
              lg:text-5xl
              font-serif
              font-bold
              text-[#16352A]
              leading-tight
            "
          >
            Register for Future
            <br />
            Project Opportunities.
          </h2>

          <p className="mt-8 text-gray-700 leading-8">
            The KDC data center project is still moving
            through the zoning and approval process.
            No jobs are being offered or guaranteed
            at this time.
          </p>

          <p className="mt-5 text-gray-700 leading-8">
            What this registration does is simple:
            it creates a verified record of Rocky
            Mount residents who want to work on this
            project — in construction, trades, and
            facility operations. That record matters.
          </p>

          <ul className="mt-8 space-y-5">
            {[
              "When this project goes before the planning board, a database of local residents who have signed up for work becomes one of the strongest arguments for community benefit.",
              "Your registration demonstrates demand for the local hiring standard written into the development agreement.",
              "You will be notified directly when project phases move into active hiring — before outside contractors are brought in.",
              "Your skills and experience help CUFD advocate for the specific training programs Rocky Mount's workforce actually needs.",
            ].map((item) => (
              <li
                key={item}
                className="
                  flex
                  gap-4
                  items-start
                "
              >
                <div
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#C89A3E]
                    mt-3
                    shrink-0
                  "
                />

                <span className="text-gray-700 leading-8">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div
            className="
              mt-10
              bg-[#F6F0E6]
              border-l-4
              border-[#C89A3E]
              p-6
            "
          >
            <h4
              className="
                font-bold
                text-[#16352A]
                mb-3
              "
            >
              Important Notice
            </h4>

            <p className="text-gray-700 leading-7 text-sm">
              Registering here is not a job application
              and does not guarantee employment. This
              portal exists to document community
              workforce interest during the project
              approval process. All hiring will be
              conducted through the developer's formal
              processes once the project receives final
              approval.
            </p>
          </div>
        </motion.div>

        {/* FORM */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            bg-white
            border
            border-[#DED4C5]
            rounded-xl
            shadow-xl
            p-6
            lg:p-8
          "
        >
          <h3
            className="
              text-3xl
              font-serif
              font-bold
              text-[#16352A]
            "
          >
            Register Your Interest
          </h3>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="border rounded-lg p-3"
              />

              <input
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="border rounded-lg p-3"
              />
            </div>

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border rounded-lg p-3"
            />

            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded-lg p-3"
            />

            <input
              required
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="ZIP Code"
              className="w-full border rounded-lg p-3"
            />

            <select
              required
              value={track}
              onChange={(e) =>
                setTrack(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            >
              <option value="">
                Select a track
              </option>

              <option value="trades">
                Commercial Trades & Construction
              </option>

              <option value="operations">
                Critical Facility Operations
              </option>
            </select>

            <AnimatePresence mode="wait">
              {track === "trades" && (
                <motion.div
                  key="trades"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <select
                    name="tradeSkill"
                    value={formData.tradeSkill}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                  >
                    <option value="">
                      Primary Trade or Skill
                    </option>

                    <option>Electrical</option>
                    <option>Welding / Ironwork</option>
                    <option>Concrete / Masonry</option>
                    <option>Earthmoving / Excavation</option>
                    <option>Heavy Equipment Operation</option>
                    <option>Plumbing / Pipefitting</option>
                    <option>Carpentry / Framing</option>
                    <option>HVAC / Sheet Metal</option>
                    <option>General Labor</option>
                    <option>Other Construction Trade</option>
                  </select>
                </motion.div>
              )}

              {track === "operations" && (
                <motion.div
                  key="ops"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <select
                    name="operationSkill"
                    value={formData.operationSkill}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                  >
                    <option value="">
                      Primary Skill Area
                    </option>

                    <option>HVAC / Cooling Systems</option>
                    <option>Network Infrastructure / Cabling</option>
                    <option>Physical Security / Access Control</option>
                    <option>IT / Systems Administration</option>
                    <option>Electrical Systems / Power Management</option>
                    <option>Facilities Management</option>
                    <option>Fire Suppression / Life Safety</option>
                    <option>Other Operations Role</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              <option value="">Years of Experience</option>
              <option>Less than 1 year</option>
              <option>1–3 years</option>
              <option>4–9 years</option>
              <option>10+ years</option>
            </select>

            <input
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
              placeholder="Certifications or Licenses"
              className="w-full border rounded-lg p-3"
            />

            <select
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              <option value="">
                Current Employment Status
              </option>

              <option>Employed full-time</option>
              <option>Employed part-time</option>
              <option>Seeking work</option>
              <option>In training or school</option>
              <option>Self-employed / contractor</option>
            </select>

            <div className="space-y-4">
              <label className="flex gap-3">
                <input
                  type="checkbox"
                  name="resident"
                  checked={formData.resident}
                  onChange={handleChange}
                />
                <span>
                  I am a Rocky Mount or Nash County resident
                </span>
              </label>

              <label className="flex gap-3">
                <input
                  type="checkbox"
                  name="apprenticeship"
                  checked={formData.apprenticeship}
                  onChange={handleChange}
                />
                <span>
                  Interested in apprenticeship or pre-apprenticeship training
                </span>
              </label>

              <label className="flex gap-3">
                <input
                  type="checkbox"
                  name="notifyHiring"
                  checked={formData.notifyHiring}
                  onChange={handleChange}
                />
                <span>
                  Notify me when this project moves into active hiring
                </span>
              </label>
            </div>

            {success && (
              <p className="text-green-700">{success}</p>
            )}

            {error && (
              <p className="text-red-600">{error}</p>
            )}

            <button
              disabled={loading}
              className="
                w-full
                py-4
                rounded-lg
                bg-[#16352A]
                text-white
                font-bold
              "
            >
              {loading
                ? "Submitting..."
                : "Register My Interest"}
            </button>

            <p className="text-xs text-center text-gray-500">
              This is not a job application. Registration
              documents community workforce interest during
              the approval process only.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}