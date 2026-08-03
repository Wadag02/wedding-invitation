import { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";

export default function MusicPlayer({ playing }) {
  const audio = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => { if (playing && audio.current) audio.current.play().then(() => setActive(true)).catch(() => setActive(false)); }, [playing]);
  function toggle() { if (!audio.current) return; if (audio.current.paused) audio.current.play().then(() => setActive(true)).catch(() => setActive(false)); else { audio.current.pause(); setActive(false); } }
  return <><audio ref={audio} loop preload="auto" src="/music/music.mp3"/><button className={`music-button ${active ? "is-playing" : ""}`} onClick={toggle} aria-label={active ? "Музыканы өшіру" : "Музыканы қосу"}><span>{active ? "♫" : "♪"}</span></button></>;
}
