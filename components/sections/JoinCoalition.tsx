"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
} from "@/lib/animations";
import { useState } from "react";

const benefits = [
  "Get updates on the development agreement and council vote schedule",
  "Attend community listening sessions and town halls",
  "Learn how to speak at public hearings on behalf of your community",
  "Connect with workers, parents, and business owners with the same stake",
  "Hold the developer accountable to every written commitment — after approval",
];

export default function JoinSection() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    message: "",
    interests: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckbox = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((item) => item !== value)
        : [...prev.interests, value],
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(
          "Thank you for joining Communities United for Fair Development!"
        );

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          zip: "",
          message: "",
          interests: [],
        });
      } else {
        alert("Unable to submit form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="join"
      className="bg-[#F6F0E6] py-14 md:py-18 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_560px] gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* LEFT */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-[#C89A3E] uppercase tracking-[0.25em] text-xs font-bold">
              Join CUFD
            </p>

            <h2 className="mt-4 text-[#16352A] font-serif font-bold leading-tight text-2xl md:text-3xl lg:text-4xl">
              Add Your Voice.
              <br />
              Rocky Mount Is Listening.
            </h2>

            <p className="mt-6 md:mt-8 text-gray-700 text-base md:text-lg leading-8 max-w-2xl">
              The decisions being made today will shape
              jobs, schools, infrastructure, and opportunity
              in Rocky Mount for decades to come.
            </p>

            <p className="mt-6 text-gray-700 text-base md:text-lg leading-8 max-w-2xl">
              Join neighbors, workers, parents,
              business owners, and community leaders
              who believe economic development should
              benefit Rocky Mount while protecting
              residents through enforceable standards.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 space-y-4"
            >
              {benefits.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex gap-4"
                >
                  <span className="text-[#C89A3E] font-bold">
                    →
                  </span>

                  <span className="text-gray-700 leading-7">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 md:mt-12 border-l-4 border-[#C89A3E] pl-5 md:pl-6">
              <p className="text-[#16352A] font-serif italic text-xl md:text-2xl lg:text-3xl leading-relaxed">
                Fair terms.
                <br />
                Real prosperity.
                <br />
                Built for Rocky Mount.
              </p>
            </div>
          </motion.div>

          {/* FORM */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-white border border-[#DED4C5] shadow-sm overflow-hidden">
              <div className="h-1 bg-[#C89A3E]" />

              <div className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-[#16352A] text-2xl font-semibold">
                  Join the Coalition
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Join thousands of residents, workers,
                  parents, business owners, and community
                  leaders committed to ensuring that major
                  investment benefits Rocky Mount while
                  protecting our future.
                </p>

                <div className="mt-6 rounded-sm bg-[#F6F0E6] border border-[#E6DACA] p-5">
                  <p className="text-[#16352A] font-semibold mb-3">
                    As a coalition member you'll receive:
                  </p>

                  <ul className="space-y-2">
                    {[
                      "Development agreement updates",
                      "Council meeting alerts",
                      "Public hearing opportunities",
                      "Community event invitations",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-gray-700 text-sm"
                      >
                        <span className="text-[#C89A3E]">
                          →
                        </span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      type="text"
                      placeholder="First Name"
                      required
                      className="border border-gray-300 px-4 py-3 w-full outline-none focus:border-[#C89A3E]"
                    />

                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      type="text"
                      placeholder="Last Name"
                      required
                      className="border border-gray-300 px-4 py-3 w-full outline-none focus:border-[#C89A3E]"
                    />
                  </div>

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Address"
                    required
                    className="border border-gray-300 px-4 py-3 w-full outline-none focus:border-[#C89A3E]"
                  />

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Phone Number"
                    className="border border-gray-300 px-4 py-3 w-full outline-none focus:border-[#C89A3E]"
                  />

                  <input
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    type="text"
                    placeholder="ZIP Code"
                    className="border border-gray-300 px-4 py-3 w-full outline-none focus:border-[#C89A3E]"
                  />

                  <div className="border border-[#E6DACA] p-4">
                    <p className="text-[#16352A] font-medium mb-3">
                      I'd like to:
                    </p>

                    <div className="space-y-2">
                      {[
                        "Receive updates",
                        "Attend community meetings",
                        "Volunteer",
                        "Speak at public hearings",
                      ].map((item) => (
                        <label
                          key={item}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(item)}
                            onChange={() =>
                              handleCheckbox(item)
                            }
                            className="accent-[#C89A3E]"
                          />

                          {item}
                        </label>
                      ))}
                    </div>
                  </div>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Why are you joining CUFD?"
                    className="border border-gray-300 px-4 py-3 w-full resize-none outline-none focus:border-[#C89A3E]"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#16352A] text-white py-4 font-semibold transition-all duration-300 hover:bg-[#214737] disabled:opacity-70"
                  >
                    {loading
                      ? "Submitting..."
                      : "Join Communities United for Fair Development"}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-[#E5D9CA]">
                  <p className="text-xs leading-6 text-gray-500">
                    By joining CUFD, you agree to receive
                    updates regarding community meetings,
                    public hearings, development agreement
                    negotiations, and coalition activities.
                  </p>

                  <p className="mt-3 text-xs text-gray-500">
                    Your information is never sold or shared.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}