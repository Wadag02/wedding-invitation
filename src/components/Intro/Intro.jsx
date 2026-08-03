import { useState } from "react";
import { wedding } from "../../data/wedding";
import "./Intro.css";

export default function Intro({ onOpen }) {
  const [opening, setOpening] = useState(false);
  function handleOpen() { if (!opening) { setOpening(true); window.setTimeout(onOpen, 2400); } }
  return <section className={`intro ${opening ? "is-opening" : ""}`}>
    <div className="intro-backdrop" /><div className="curtain curtain-left" aria-hidden="true" /><div className="curtain curtain-right" aria-hidden="true" />
    <img src="/images/intro/chandelier.png.png" alt="" className="chandelier" /><div className="intro-vignette" />
    <div className="intro-content"><p className="intro-kicker">{wedding.title}</p><span className="intro-star">✦</span><h1>{wedding.groom}<i>&amp;</i>{wedding.bride}</h1><p className="intro-date">{wedding.dateText}</p><button className="open-btn" onClick={handleOpen}>АШУ</button></div>
  </section>;
}
