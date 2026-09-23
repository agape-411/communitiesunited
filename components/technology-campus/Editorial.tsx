"use client";

import React from "react";

export const COLORS = {
  paper: "#FCFAF7",
  green: "#1B3A2D",
  cream: "#F5F0E8",
  gold: "#C8963E",
  dark: "#13211B",
  muted: "#40514A",
  border: "#E7E2D7",
  paleGold: "#E4C68A",
};

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] sm:text-[11px]"
      style={{ color: light ? COLORS.paleGold : COLORS.gold }}
    >
      {children}
    </p>
  );
}

export function Title({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`font-serif text-2xl leading-[1.06] sm:text-3xl lg:text-[3rem] ${className}`}
      style={{ color: light ? COLORS.paper : COLORS.green }}
    >
      {children}
    </h2>
  );
}

export function Body({
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
      className={`font-serif text-[16px] leading-8 sm:text-[17px] ${className}`}
      style={{
        color: light ? "rgba(252,250,247,0.76)" : COLORS.muted,
      }}
    >
      {children}
    </p>
  );
}

export function EditorialSection({
  children,
  background = "paper",
  className = "",
}: {
  children: React.ReactNode;
  background?: "paper" | "cream" | "green";
  className?: string;
}) {
  const backgroundColor =
    background === "green"
      ? COLORS.green
      : background === "cream"
      ? COLORS.cream
      : COLORS.paper;

  return (
    <section
      className={`px-6 py-20 sm:px-8 lg:px-12 lg:py-28 ${className}`}
      style={{ backgroundColor }}
    >
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}

export function Standard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="border-t py-8"
      style={{ borderColor: COLORS.border }}
    >
      <h3
        className="font-serif text-2xl leading-tight sm:text-3xl"
        style={{ color: COLORS.green }}
      >
        {title}
      </h3>

      <Body className="mt-4 max-w-4xl">{children}</Body>
    </div>
  );
}

export function Investment({
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
        style={{ backgroundColor: COLORS.paleGold }}
      />

      <h3
        className="text-sm font-bold uppercase tracking-[0.08em]"
        style={{ color: COLORS.dark }}
      >
        {title}
      </h3>

      <Body className="mt-4">{children}</Body>
    </div>
  );
}

export function Meta({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="border-l-2 pl-5"
      style={{ borderColor: COLORS.gold }}
    >
      <p
        className="text-[10px] font-bold uppercase tracking-[0.18em]"
        style={{ color: COLORS.gold }}
      >
        {label}
      </p>

      <p
        className="mt-2 font-serif text-lg leading-7"
        style={{ color: COLORS.dark }}
      >
        {children}
      </p>
    </div>
  );
}