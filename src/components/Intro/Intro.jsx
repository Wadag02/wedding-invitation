import { useRef, useState } from "react";
import "./Intro.css";

export default function Intro({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const video = useRef(null);
  function handleOpen() {
    if (opening) return;
    setOpening(true);
    const clip = video.current;
    if (clip) { clip.currentTime = 0; clip.play().catch(() => {}); }
    window.setTimeout(() => { window.dispatchEvent(new Event("wedding:play-music")); onOpen(); }, 4800);
  }
  return <button type="button" className={`intro ${opening ? "is-opening" : ""}`} onClick={handleOpen} aria-label="Шторларды ашу">
    <video ref={video} className="intro-video" muted playsInline preload="auto" poster="/media/gold-curtain.png"><source src="/media/curtain-opening.mp4" type="video/mp4"/></video>
  </button>;
}
