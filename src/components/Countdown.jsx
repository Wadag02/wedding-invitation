import { useEffect, useState } from "react";
import { wedding } from "../data/wedding";
import { motion } from "framer-motion";

export default function Countdown() {
  const weddingDate = new Date(wedding.date);

  const getTime = () => {
    const diff = weddingDate - new Date();

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
      minutes: Math.floor(diff / (1000 * 60)) % 60,
      seconds: Math.floor(diff / 1000) % 60,
    };
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      value: time.days,
      label: "КҮН",
    },
    {
      value: time.hours,
      label: "САҒАТ",
    },
    {
      value: time.minutes,
      label: "МИНУТ",
    },
    {
      value: time.seconds,
      label: "СЕКУНД",
    },
  ];

  return (
    <section className="py-28 bg-white">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <h2
          style={{ fontFamily: "Cormorant Garamond" }}
          className="text-center text-6xl text-[#2C2C2C]"
        >
          Той салтанатына дейін
        </h2>

        <div className="w-32 h-px bg-[#B88A44] mx-auto mt-6 mb-16"></div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">

          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-[28px] bg-[#F7F4EF] border border-[#D9C49B] shadow-lg p-8 text-center"
            >
              <p className="text-6xl font-bold text-[#2C2C2C]">
                {String(item.value).padStart(2, "0")}
              </p>

              <p className="mt-4 tracking-[3px] text-[#B88A44] text-sm">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </motion.div>
    </section>
  );
}