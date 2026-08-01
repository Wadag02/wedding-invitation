export default function DressCode() {

  const colors = [
    "#FFFFFF",
    "#DDD6CE",
    "#B48A5A",
    "#1A1A1A"
  ];

  return (

    <section className="py-28">

      <h2 className="text-center text-5xl font-serif">
        Dress Code
      </h2>

      <div className="flex justify-center gap-8 mt-14">

        {colors.map((color) => (

          <div
            key={color}
            style={{ background: color }}
            className="w-16 h-16 rounded-full border border-white shadow-lg"
          />

        ))}

      </div>

    </section>

  );

}