import { useState } from "react";

import Intro from "./components/Intro/Intro";
import Invitation from "./components/Invitation/Invitation";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

export default function App() {

  const [opened, setOpened] = useState(false);

  return (

    <>

      <MusicPlayer playing={opened}/>

      {opened
        ? <Invitation/>
        : <Intro onOpen={() => setOpened(true)}/>
      }

    </>

  );

}