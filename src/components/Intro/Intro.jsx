import { useState } from "react";
import { wedding } from "../../data/wedding";
import "./Intro.css";

export default function Intro({ onOpen }) {
  const [opening, setOpening] = useState(false);
  function handleOpen() { if (!opening) { setOpening(true); window.setTimeout(onOpen, 1850); } }
  return <section className={`intro ${opening ? "is-opening" : ""}`}>
    <div className="intro-glow" />
    <button className="envelope" onClick={handleOpen} aria-label="Шақыруды ашу">
      <div className="envelope-letter">
        <p className="envelope-kicker">{wedding.title}</p>
        <span className="envelope-flourish">✦</span>
        <h1>{wedding.groom}<i>&amp;</i>{wedding.bride}</h1>
        <p className="envelope-date">{wedding.dateText}</p>
      </div>
      <div className="envelope-back" />
      <div className="envelope-flap" />
      <div className="envelope-front" />
      <div className="wax-seal"><span>АШУ</span></div>
    </button>
    <p className="tap-hint">шақыруды ашу үшін басыңыз</p>
  </section>;
}
