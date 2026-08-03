import { useState } from "react";
import FadeSection from "../FadeSection/FadeSection";

const API_URL =
  "https://script.google.com/macros/s/AKfycbyH8FE8aw4tRSk4DmDDh_JGG8gXii4jXBVWiAEjNzf1s1h88Ew5PSJYJpRofmGIl2vg/exec";

export default function RSVP() {

  const [form, setForm] = useState({
    name: "",
    attendance: "Келемін",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: form.name,
          phone: "",
          attendance: form.attendance,
          guests: 1,
          comment: "",
        }),
      });

      const result = await response.json();

      if (result.success) {

        setMessage("❤️ Рақмет! Жауабыңыз қабылданды.");

        setForm({
          name: "",
          attendance: "Келемін",
        });

      } else {

        setMessage("Қате орын алды.");

      }

    } catch {

      setMessage("Интернет қатесі.");

    }

    setLoading(false);

  }

  return (
    <FadeSection>

      <section className="py-24 px-6">

        <div className="max-w-md mx-auto">

          <h2 className="text-center text-5xl font-serif mb-12">
            Тойға қатысуыңызды
            <br />
            растауыңызды сұраймыз
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Аты-жөніңіз"
              className="w-full mb-5 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
              required
            />

            <select
              name="attendance"
              value={form.attendance}
              onChange={handleChange}
              className="w-full mb-6 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <option>Келемін</option>
              <option>Келе алмаймын</option>
            </select>

            <button
              disabled={loading}
              className="w-full rounded-xl bg-[#C6A86A] py-4 text-black font-semibold hover:opacity-90 transition"
            >
              {loading ? "Жіберілуде..." : "Жіберу"}
            </button>

          </form>

          {message && (
            <p className="text-center mt-6 text-[#C6A86A]">
              {message}
            </p>
          )}

        </div>

      </section>

    </FadeSection>
  );
}