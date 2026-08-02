import { wedding } from "../data/wedding";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Фон */}
      <div className="absolute inset-0 bg-[#F7F4EF]" />

      {/* Световое пятно */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-[#D8C49A]/20 blur-[140px]" />

      {/* Орнамент */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#B88A44 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6"
      >
        <p className="uppercase tracking-[10px] text-[#B88A44] text-sm">
          {wedding.title}
        </p>

        <div className="w-32 h-px bg-[#B88A44]/50 mx-auto mt-8 mb-10" />

        <h1
          style={{ fontFamily: "Cormorant Garamond" }}
          className="text-7xl md:text-8xl leading-none font-medium text-[#2C2C2C]"
        >
          {wedding.groom}
        </h1>

        <div
          style={{ fontFamily: "Cormorant Garamond" }}
          className="text-5xl text-[#B88A44] my-4"
        >
          &
        </div>

        <h1
          style={{ fontFamily: "Cormorant Garamond" }}
          className="text-7xl md:text-8xl leading-none font-medium text-[#2C2C2C]"
        >
          {wedding.bride}
        </h1>

        <div className="w-32 h-px bg-[#B88A44]/50 mx-auto mt-10 mb-8" />

        <p className="tracking-[8px] text-[#666] text-lg">
          {wedding.dateText}
        </p>
      </motion.div>
    </section>
  );
}