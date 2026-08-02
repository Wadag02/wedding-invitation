import { useState } from "react";

import Envelope from "./components/Envelope/Envelope";

import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import Countdown from "./components/Countdown";
import Location from "./components/Location";
import RSVP from "./components/RSVP";

export default function App() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return <Envelope onOpen={() => setOpened(true)} />;
  }

  return (
    <main className="bg-[#F7F4EF] text-[#2C2C2C]">
      <Hero />
      <Invitation />
      <Countdown />
      <Location />
      <RSVP />
    </main>
  );
}