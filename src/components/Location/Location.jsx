import FadeSection from "../FadeSection/FadeSection";

export default function Location() {
  return (
    <FadeSection>
      <section className="py-24 px-6 text-center">

        <h2 className="text-5xl font-serif mb-8">
          Өтетін орны
        </h2>

        <p className="text-2xl mb-3">
          Sanzhar Grand Ballroom
        </p>

        <p className="text-gray-400 mb-10">
          Алматы, Қазақстан
        </p>

        <a
          href="https://2gis.kz/almaty/geo/70000001054095105/77.048761,43.305975"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full border border-[#C6A86A] px-8 py-4 hover:bg-[#C6A86A] hover:text-black transition"
        >
          2GIS арқылы ашу
        </a>

      </section>
    </FadeSection>
  );
}