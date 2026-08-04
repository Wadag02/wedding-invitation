import { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";

export default function MusicPlayer({ playing }) {
  const audio = useRef(null);
  const [active, setActive] = useState(false);
  const play = () => audio.current?.play().then(() => setActive(true)).catch(() => setActive(false));
  useEffect(() => { const player = audio.current; if (!player) return; const setStart = () => { player.currentTime = 12; }; player.addEventListener("loadedmetadata", setStart); window.addEventListener("wedding:play-music", play); return () => { player.removeEventListener("loadedmetadata", setStart); window.removeEventListener("wedding:play-music", play); }; }, []);
  useEffect(() => { if (playing) play(); }, [playing]);
  function toggle() { if (!audio.current) return; if (audio.current.paused) play(); else { audio.current.pause(); setActive(false); } }
  return <><audio ref={audio} loop preload="auto" src="/music/love-song-cover.mp3"/><button className={`music-button ${active ? "is-playing" : ""}`} onClick={toggle} aria-label={active ? "Музыканы өшіру" : "Музыканы қосу"}><span>{active ? "♫" : "♪"}</span></button></>;
}
