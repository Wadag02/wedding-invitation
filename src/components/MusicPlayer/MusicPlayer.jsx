import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ playing }) {

  const audio = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {

    if (!audio.current) return;

    if (playing) {

      audio.current.play().catch(() => {});

    } else {

      audio.current.pause();

    }

  }, [playing]);

  useEffect(() => {

    if (audio.current) {

      audio.current.muted = muted;

    }

  }, [muted]);

  return (
    <>

      <audio
        ref={audio}
        loop
        src="/music/music.mp3"
      />

      <button
        onClick={() => setMuted(!muted)}
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-[#C6A86A] text-black shadow-lg"
      >
        {muted ? "🔇" : "🔊"}
      </button>

    </>
  );

}