import { useEffect, useState } from "react";
import FadeSection from "../FadeSection/FadeSection";

export default function Countdown() {
  const weddingDate = new Date("2026-10-10T18:00:00");

  const getTime = () => {
    const diff = weddingDate - new Date();

    return {
      days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor(diff / (1000 * 60 * 60)) % 24),
      minutes: Math.max(0, Math.floor(diff / (1000 * 60)) % 60),
      seconds: Math.max(0, Math.floor(diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <FadeSection>
      <section className="py-24 px-6 text-center">

        <h2 className="text-4xl font-serif mb-12">
          Той салтанатына дейін
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          {[
            ["КҮН", time.days],
            ["САҒАТ", time.hours],
            ["МИНУТ", time.minutes],
            ["СЕКУНД", time.seconds],
          ].map(([label, value]) => (
            <div
              key={label}
              className="w-32 h-32 rounded-3xl border border-[#C6A86A]/30 bg-white/5 backdrop-blur flex flex-col justify-center items-center"
            >
              <p className="text-5xl font-bold text-[#C6A86A]">
                {value}
              </p>

              <span className="mt-3 text-sm tracking-[3px] text-gray-300">
                {label}
              </span>
            </div>
          ))}

        </div>

      </section>
    </FadeSection>
  );
}