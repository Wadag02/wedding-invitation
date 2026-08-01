import { useState } from "react";

import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Location from "./components/Location";
import Timeline from "./components/Timeline";
import DressCode from "./components/DressCode";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {

  const [opened, setOpened] = useState(false);

  if (!opened) {

    return (

      <main className="min-h-screen bg-[#0B1215] flex items-center justify-center px-6">

        <div className="text-center">

          <h1 className="text-6xl md:text-7xl font-serif">
            Wedding Invitation
          </h1>

          <p className="mt-6 text-gray-400">
            Together Forever
          </p>

          <button
            onClick={() => setOpened(true)}
            className="mt-10 rounded-full border border-yellow-500 px-8 py-4 transition hover:bg-yellow-500 hover:text-black"
          >
            Open Invitation
          </button>

        </div>

      </main>

    );

  }

  return (

    <main className="bg-[#0B1215] text-white">

      <Hero />
      <Countdown />
      <Location />
      <Timeline />
      <DressCode />
      <RSVP />
      <Footer />

    </main>

  );

}