import { wedding } from "../data/wedding";

export default function Invitation() {
  return (
    <section className="py-28 px-6 bg-[#F7F4EF]">
      <div className="max-w-3xl mx-auto text-center">

        <div className="w-28 h-px bg-[#B88A44] mx-auto mb-10"></div>

        <h2
          style={{ fontFamily: "Cormorant Garamond" }}
          className="text-6xl mb-12"
        >
          Құрметті қонақтар!
        </h2>

        <p className="text-xl leading-10 whitespace-pre-line text-gray-700">
          {wedding.invitationText}
        </p>

        <div className="w-28 h-px bg-[#B88A44] mx-auto mt-12"></div>

      </div>
    </section>
  );
}