import { useEffect, useState } from "react";

export default function Countdown() {

  const weddingDate = new Date("2027-08-24T15:00:00");

  const getTime = () => {

    const diff = weddingDate - new Date();

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

  return (

    <section className="py-28">

      <h2 className="text-center text-5xl font-serif">
        Countdown
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mt-14">

        {[
          ["Days", time.days],
          ["Hours", time.hours],
          ["Minutes", time.minutes],
          ["Seconds", time.seconds],
        ].map(([label, value]) => (

          <div
            key={label}
            className="w-36 h-36 rounded-3xl bg-white/5 border border-white/10 backdrop-blur flex flex-col justify-center items-center"
          >

            <p className="text-5xl font-bold">
              {value}
            </p>

            <span className="mt-2 text-gray-400">
              {label}
            </span>

          </div>

        ))}

      </div>

    </section>

  );

}