export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1215] via-[#162126] to-[#0B1215]" />

      <div className="absolute w-[700px] h-[700px] rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="relative text-center px-6">

        <div className="w-56 h-56 rounded-full border-2 border-yellow-500 mx-auto overflow-hidden shadow-2xl">
          <img
            src="https://picsum.photos/500"
            alt="Couple"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="mt-10 uppercase tracking-[8px] text-yellow-500">
          Wedding Invitation
        </p>

        <h1 className="mt-6 text-6xl md:text-8xl font-serif">
          Groom
          <span className="mx-5 text-yellow-500">&</span>
          Bride
        </h1>

        <p className="mt-8 text-xl text-gray-300">
          24 August 2027
        </p>

      </div>

    </section>
  );
}