import { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";

export default function MusicPlayer({ playing }) {
  const audio = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => { const player = audio.current; if (!player) return; const setStart = () => { player.currentTime = 18; }; player.addEventListener("loadedmetadata", setStart); return () => player.removeEventListener("loadedmetadata", setStart); }, []);
  useEffect(() => { if (playing && audio.current) audio.current.play().then(() => setActive(true)).catch(() => setActive(false)); }, [playing]);
  function toggle() { if (!audio.current) return; if (audio.current.paused) audio.current.play().then(() => setActive(true)).catch(() => setActive(false)); else { audio.current.pause(); setActive(false); } }
  return <><audio ref={audio} loop preload="auto" src="/music/Indila%20-%20Love%20Story.mp3"/><button className={`music-button ${active ? "is-playing" : ""}`} onClick={toggle} aria-label={active ? "Музыканы өшіру" : "Музыканы қосу"}><span>{active ? "♫" : "♪"}</span></button></>;
}
