import Link from "next/link";

export default function Foot() {
  return (
    <footer
      className="
        bg-[#0F2019]
        border-t-[3px]
        border-[#C89A3E]
        text-center
        px-8
        py-10
        text-[0.85rem]
        text-white/50
      "
    >
      <p>
        © 2026 Communities United for Fair Development
        — Rocky Mount, NC
        <span className="hidden sm:inline">
          {" "} · {" "}
        </span>

        <br className="sm:hidden" />

        <Link
          href="/"
          className="text-[#D9B46B] hover:underline"
        >
          cufd-rockymount.org
        </Link>

        <span className="hidden sm:inline">
          {" "} · {" "}
        </span>

        <br className="sm:hidden" />

        <a
          href="mailto:info@cufd-rockymount.org"
          className="text-[#D9B46B] hover:underline"
        >
          info@cufd-rockymount.org
        </a>
      </p>

      <p className="mt-2 italic">
        "On our terms. For our future."
      </p>
    </footer>
  );
}