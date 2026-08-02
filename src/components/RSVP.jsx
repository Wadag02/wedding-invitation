import { useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbyH8FE8aw4tRSk4DmDDh_JGG8gXii4jXBVWiAEjNzf1s1h88Ew5PSJYJpRofmGIl2vg/exec";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attendance: "Келемін",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("❤️ Рақмет! Жауабыңыз қабылданды.");

        setForm({
          name: "",
          attendance: "Келемін",
        });
      } else {
        setMessage("Жіберу кезінде қате орын алды.");
      }
    } catch {
      setMessage("Интернетке қосылу қатесі.");
    }

    setLoading(false);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-xl mx-auto">

        <div className="w-24 h-px bg-[#B88A44] mx-auto mb-8"></div>

        <h2
          className="text-center text-5xl mb-12 text-[#2C2C2C]"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Тойға қатысуыңызды
          <br />
          растауыңызды сұраймыз!
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-[#F7F4EF] border border-[#D8C49A] rounded-[30px] p-8 shadow-lg"
        >
          <label className="block mb-3 text-[#555]">
            Аты-жөніңіз
          </label>

          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full rounded-xl border border-[#D8C49A] bg-white px-5 py-4 outline-none mb-8"
          />

          <label className="block mb-4 text-[#555]">
            Қатысуыңыз
          </label>

          <div className="space-y-4 mb-10">

            <label className="flex items-center gap-3 cursor-pointer">

              <input
                type="radio"
                name="attendance"
                value="Келемін"
                checked={form.attendance === "Келемін"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    attendance: e.target.value,
                  })
                }
              />

              Келемін

            </label>

            <label className="flex items-center gap-3 cursor-pointer">

              <input
                type="radio"
                name="attendance"
                value="Келе алмаймын"
                checked={form.attendance === "Келе алмаймын"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    attendance: e.target.value,
                  })
                }
              />

              Келе алмаймын

            </label>

          </div>

          <button
            disabled={loading}
            className="w-full bg-[#B88A44] hover:bg-[#a67936] transition text-white rounded-full py-4 tracking-[2px]"
          >
            {loading ? "Жіберілуде..." : "ЖІБЕРУ"}
          </button>

          {message && (
            <p className="mt-6 text-center text-[#2C2C2C]">
              {message}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}