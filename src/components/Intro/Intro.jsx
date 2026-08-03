import { useState } from "react";
import "./Intro.css";

export default function Intro({ onOpen }) {
  const [opening, setOpening] = useState(false);

  function handleOpen() {
    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 2500);
  }

  return (
    <section className={`intro ${opening ? "opening" : ""}`}>

      <div className={`curtain left ${opening ? "open" : ""}`}></div>
      <div className={`curtain right ${opening ? "open" : ""}`}></div>

      <img
        src="/images/intro/chandelier.png"
        alt=""
        className="chandelier"
      />

      <div className="intro-overlay"></div>

      <div className="intro-content">

        <p className="subtitle">
          ТОЙҒА ШАҚЫРУ
        </p>

        <h1>Санжар</h1>

        <div className="and">&</div>

        <h1>Еңлік</h1>

        <div className="gold-line"></div>

        <p className="date">
          10 • 10 • 2026
        </p>

        <button
          className="open-btn"
          onClick={handleOpen}
        >
          АШУ
        </button>

      </div>

    </section>
  );
}