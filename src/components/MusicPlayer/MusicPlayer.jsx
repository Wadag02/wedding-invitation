import { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";

export default function MusicPlayer() {
  const audio = useRef(null);
  const [active, setActive] = useState(false);
  const play = () => audio.current?.play().then(() => setActive(true)).catch(() => setActive(false));
  const playFromIntro = () => {
    if (!audio.current) return;
    audio.current.currentTime = 23;
    play();
  };
  useEffect(() => { window.addEventListener("wedding:play-music", playFromIntro); return () => window.removeEventListener("wedding:play-music", playFromIntro); }, []);
  function toggle() { if (!audio.current) return; if (audio.current.paused) play(); else { audio.current.pause(); setActive(false); } }
  return <><audio ref={audio} loop preload="auto" src="/music/Temirlan%20%26%20Yernat%20-%20Alem.mp3"/><button className={`music-button ${active ? "is-playing" : ""}`} onClick={toggle} aria-label={active ? "Музыканы өшіру" : "Музыканы қосу"}><span>{active ? "♫" : "♪"}</span></button></>;
}
