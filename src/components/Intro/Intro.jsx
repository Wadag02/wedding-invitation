import { useRef, useState } from "react";
import "./Intro.css";

export default function Intro({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const video = useRef(null);
  function finishOpening() { onOpen(); }
  function handleOpen() {
    if (opening) return;
    setOpening(true);
    window.dispatchEvent(new Event("wedding:play-music"));
    const clip = video.current;
    if (clip) { clip.currentTime = 0; clip.play().catch(finishOpening); }
  }
  return <button type="button" className={`intro ${opening ? "is-opening" : ""}`} onClick={handleOpen} aria-label="Open invitation">
    <video ref={video} className="intro-video" muted playsInline preload="auto" poster="/media/gold-curtain.png" onEnded={finishOpening}><source src="/media/curtain-opening.mp4" type="video/mp4"/></video>
  </button>;
}
