import { useState } from "react";
import Intro from "./components/Intro/Intro";
import Invitation from "./components/Invitation/Invitation";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  return <>
    <MusicPlayer/>
    <Invitation/>
    {!introDone && <Intro onOpen={() => setIntroDone(true)}/>}
  </>;
}
