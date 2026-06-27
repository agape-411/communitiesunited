"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WorkforceRegistryPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    zip: "",
    email: "",
    phone: "",
    pathway: "",
    education_status: "none",
    veteran_status: "no",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "/api/workforce-intake",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(
          "Thank you. Your information has been added to the workforce registry."
        );

        setFormData({
          name: "",
          zip: "",
          email: "",
          phone: "",
          pathway: "",
          education_status: "none",
          veteran_status: "no",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#F6F0E6] py-28 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          max-w-4xl
          mx-auto
          bg-white
          rounded-2xl
          shadow-xl
          border
          border-[#DED4C5]
          overflow-hidden
          p-6
          sm:p-10
        "
      >
        {/* Header */}

        <div className="text-center border-b border-[#E8DED0] pb-8 mb-10">
          <span
            className="
              inline-block
              bg-[#C89A3E]/10
              text-[#C89A3E]
              text-xs
              uppercase
              tracking-[0.2em]
              font-bold
              px-4
              py-2
              rounded-full
            "
          >
            Grid-Positive Framework: Standard 3
          </span>

          <h1
            className="
              mt-6
              font-serif
              font-bold
              text-[#16352A]
              text-4xl
              md:text-5xl
              leading-tight
            "
          >
            Register for Future
            <br />
            Project Opportunities
          </h1>

          <p
            className="
              mt-6
              text-lg
              text-gray-600
              max-w-2xl
              mx-auto
              leading-8
            "
          >
            If it's built here, it's built by local
            hands. Secure your spot in the local
            talent pool while we negotiate
            enforceable hiring standards.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-10"
        >
          {/* CONTACT */}

          <div
            className="
              bg-[#F8F5EF]
              border
              border-[#E8DED0]
              rounded-xl
              p-6
              space-y-6
            "
          >
            <h3
              className="
                text-sm
                uppercase
                tracking-[0.15em]
                font-bold
                text-[#16352A]
                flex
                items-center
              "
            >
              <span
                className="
                  h-6
                  w-6
                  rounded-full
                  bg-[#C89A3E]
                  text-white
                  flex
                  items-center
                  justify-center
                  mr-3
                  text-xs
                "
              >
                1
              </span>
              Contact Information
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />

              <Input
                label="ZIP Code"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="27804"
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />

              <Input
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(252) 555-0199"
              />
            </div>
          </div>

          {/* PATHWAYS */}

          <div className="space-y-5">
            <h3
              className="
                text-sm
                uppercase
                tracking-[0.15em]
                font-bold
                text-[#16352A]
                flex
                items-center
              "
            >
              <span
                className="
                  h-6
                  w-6
                  rounded-full
                  bg-[#C89A3E]
                  text-white
                  flex
                  items-center
                  justify-center
                  mr-3
                  text-xs
                "
              >
                2
              </span>
              Select Your Primary Area of Interest
            </h3>

            <p className="text-sm text-gray-500 italic">
              Select the pathway that best
              matches your experience or goals.
            </p>

            <div className="space-y-4">
              <PathCard
                title="Path 1: Commercial Construction & Craft Trades"
                description="Commercial electrical, mechanical, civil masonry, earthmoving, heavy equipment operation, and certified safety personnel."
                value="construction"
                selected={formData.pathway}
                onChange={handleChange}
              />

              <PathCard
                title="Path 2: Long-Term Facility Operations & Infrastructure Management"
                description="Permanent campus runtime roles, industrial HVAC, switchgear operators, and infrastructure management."
                value="operations"
                selected={formData.pathway}
                onChange={handleChange}
              />

              <PathCard
                title="Path 3: Future Training & Apprenticeship Opportunities"
                description="Earn-while-you-learn pipelines, union pre-apprenticeships, and technical training programs."
                value="training"
                selected={formData.pathway}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* PROFILE */}

          <div
            className="
              bg-[#F8F5EF]
              border
              border-[#E8DED0]
              rounded-xl
              p-6
            "
          >
            <h3
              className="
                text-sm
                uppercase
                tracking-[0.15em]
                font-bold
                text-[#16352A]
                flex
                items-center
                mb-6
              "
            >
              <span
                className="
                  h-6
                  w-6
                  rounded-full
                  bg-[#C89A3E]
                  text-white
                  flex
                  items-center
                  justify-center
                  mr-3
                  text-xs
                "
              >
                3
              </span>
              Workforce Profile Context
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">
              <SelectInput
                label="Current Training Alignment"
                name="education_status"
                value={formData.education_status}
                onChange={handleChange}
                options={[
                  {
                    value: "none",
                    label:
                      "Not currently enrolled in trade training",
                  },
                  {
                    value: "high_school",
                    label:
                      "High School Senior / Vocational Track",
                  },
                  {
                    value: "community_college",
                    label:
                      "Regional Community College Student",
                  },
                  {
                    value: "local_oic",
                    label:
                      "OIC Career Program Participant",
                  },
                  {
                    value: "union_apprentice",
                    label:
                      "Active Union Apprentice",
                  },
                ]}
              />

              <SelectInput
                label="Military Veteran Status"
                name="veteran_status"
                value={formData.veteran_status}
                onChange={handleChange}
                options={[
                  {
                    value: "no",
                    label: "No",
                  },
                  {
                    value: "yes",
                    label:
                      "Yes, Transitioning Service Member or Veteran",
                  },
                ]}
              />
            </div>
          </div>

          {/* DISCLAIMER */}

          <div
            className="
              text-xs
              text-gray-500
              leading-7
              border-t
              border-[#E8DED0]
              pt-6
              space-y-4
            "
          >
            <p>
              By submitting this registry, you
              grant permission to Communities
              United for Fair Development (CUFD)
              to include anonymized residency and
              workforce-interest data in
              aggregated community impact
              reporting.
            </p>

            <p>
              Your personal information is
              confidential, will never be sold,
              and will only be shared with
              accredited training partners or
              authorized contractors if projects
              move forward.
            </p>
          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-[#C89A3E]
              hover:bg-[#b48532]
              text-[#16352A]
              py-4
              font-bold
              text-sm
              uppercase
              tracking-[0.08em]
              transition
              disabled:opacity-60
            "
          >
            {loading
              ? "Submitting..."
              : "Submit Information to Project Pool"}
          </button>
        </form>
      </motion.div>
    </main>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
}

function Input({
  label,
  ...props
}: InputProps) {
  return (
    <div>
      <label className="block text-xs uppercase font-semibold text-gray-600 mb-2">
        {label}
      </label>

      <input
        {...props}
        required
        className="
          w-full
          border
          border-gray-300
          rounded-md
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-[#C89A3E]
        "
      />
    </div>
  );
}

function SelectInput({
  label,
  options,
  ...props
}: SelectInputProps) {
  return (
    <div>
      <label className="block text-xs uppercase font-semibold text-gray-600 mb-2">
        {label}
      </label>

      <select
        {...props}
        className="
          w-full
          border
          border-gray-300
          rounded-md
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-[#C89A3E]
        "
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function PathCard({
  title,
  description,
  value,
  selected,
  onChange,
}: {
  title: string;
  description: string;
  value: string;
  selected: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label
      className={`
        block
        border
        rounded-xl
        p-5
        cursor-pointer
        transition
        ${
          selected === value
            ? "border-[#C89A3E] bg-[#FFF8EB]"
            : "border-gray-200 hover:border-[#C89A3E]"
        }
      `}
    >
      <div className="flex gap-4">
        <input
          type="radio"
          name="pathway"
          value={value}
          checked={selected === value}
          onChange={onChange}
          required
          className="mt-1"
        />

        <div>
          <h4 className="font-bold text-[#16352A]">
            {title}
          </h4>

          <p className="text-gray-600 text-sm leading-7 mt-2">
            {description}
          </p>
        </div>
      </div>
    </label>
  );
}