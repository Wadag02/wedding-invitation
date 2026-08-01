import { useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbyH8FE8aw4tRSk4DmDDh_JGG8gXii4jXBVWiAEjNzf1s1h88Ew5PSJYJpRofmGIl2vg/exec";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    attendance: "Will attend",
    guests: 1,
    comment: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
        setMessage("✅ Thank you! Your RSVP has been received.");

        setForm({
          name: "",
          phone: "",
          attendance: "Will attend",
          guests: 1,
          comment: "",
        });
      } else {
        setMessage("❌ Failed to send.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Network error.");
    }

    setLoading(false);
  };

  return (
    <section className="py-28 px-6">
      <div className="max-w-lg mx-auto">

        <h2 className="text-center text-5xl font-serif mb-12">
          RSVP
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full mb-4 rounded-xl bg-white/5 border border-white/10 px-5 py-4"
            required
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full mb-4 rounded-xl bg-white/5 border border-white/10 px-5 py-4"
            required
          />

          <select
            name="attendance"
            value={form.attendance}
            onChange={handleChange}
            className="w-full mb-4 rounded-xl bg-white/5 border border-white/10 px-5 py-4"
          >
            <option>Will attend</option>
            <option>Can't attend</option>
          </select>

          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            min="1"
            className="w-full mb-4 rounded-xl bg-white/5 border border-white/10 px-5 py-4"
          />

          <textarea
            rows="4"
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="Comment"
            className="w-full mb-6 rounded-xl bg-white/5 border border-white/10 px-5 py-4 resize-none"
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-yellow-500 py-4 text-black font-semibold hover:bg-yellow-400 transition"
          >
            {loading ? "Sending..." : "Send RSVP"}
          </button>

        </form>

        {message && (
          <p className="mt-6 text-center">
            {message}
          </p>
        )}

      </div>
    </section>
  );
}