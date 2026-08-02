import { wedding } from "../data/wedding";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

export default function Location() {
  return (
    <section className="py-28 bg-[#F7F4EF]">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="max-w-5xl mx-auto px-6"
      >

        <div className="bg-white rounded-[35px] border border-[#D8C49A] shadow-xl p-12 text-center">

          <FaLocationDot
            className="mx-auto text-[#B88A44]"
            size={42}
          />

          <h2
            style={{ fontFamily: "Cormorant Garamond" }}
            className="text-6xl mt-6 text-[#2C2C2C]"
          >
            {wedding.venue}
          </h2>

          <p className="mt-3 text-lg text-gray-600">
            {wedding.city}
          </p>

          <div className="w-28 h-px bg-[#B88A44] mx-auto my-10"></div>

          <a
            href={wedding.mapLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-[#B88A44] hover:bg-[#a67936] transition px-10 py-4 text-white tracking-[2px]"
          >
            МАРШРУТТЫ АШУ
          </a>

        </div>

      </motion.div>

    </section>
  );
}