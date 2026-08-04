import { useRef, useState } from "react";
import { wedding } from "../../data/wedding";
import "./Intro.css";

export default function Intro({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const video = useRef(null);
  function handleOpen() {
    if (opening) return;
    setOpening(true);
    window.dispatchEvent(new Event("wedding:play-music"));
    const clip = video.current;
    if (clip) { clip.currentTime = 0; clip.play().catch(() => {}); }
    window.setTimeout(onOpen, 4800);
  }
  return <section className={`intro ${opening ? "is-opening" : ""}`}>
    <video ref={video} className="intro-video" muted playsInline preload="auto" poster="/media/gold-curtain.png"><source src="/media/curtain-opening.mp4" type="video/mp4"/></video>
    <div className="intro-shade" />
    <img className="intro-top-drape" src="/media/drapery-chandelier.webp" alt="" />
    <div className="intro-content"><p>{wedding.title}</p><span>✦</span><h1>{wedding.groom}<i>&amp;</i>{wedding.bride}</h1><b>{wedding.dateText}</b><button onClick={handleOpen}>АШУ</button></div>
  </section>;
}
