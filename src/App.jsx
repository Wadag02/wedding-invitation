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
        ? <div className="site-reveal"><Invitation/></div>
        : <Intro onOpen={() => setOpened(true)}/>
      }

    </>

  );

}
