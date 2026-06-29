import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Invitation() {
  return (
    <section
      id="invitation"
      className="min-h-screen bg-black text-white flex items-center justify-center"
    >
      <div className="text-center">

        <p className="tracking-[12px] text-red-500 uppercase text-sm mb-8">
          You Are Invited
        </p>

        <h2
          className={`${greatVibes.className} text-[90px] md:text-[150px] leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]`}
        >
          Celebrate
        </h2>

        <h2
          className={`${greatVibes.className} text-[90px] md:text-[150px] leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]`}
        >
          Our Wedding
        </h2>

        <p className="mt-10 tracking-[8px] text-gray-300 uppercase">
          Thursday, 26 August 2026
        </p>

        <p className="mt-4 text-xl text-gray-400">
          7:00 PM
        </p>

        <p className="mt-10 text-red-500 text-3xl">
          Amman, Jordan
        </p>

      </div>
    </section>
  );
}