import { wedding } from "../../data/wedding";
import "./Hero.css";

export default function Hero() {
  return <section className="hero">
    <video className="hero-video" autoPlay muted loop playsInline src="/media/ballroom.mp4" />
    <div className="hero-wash" />
    <div className="hero-content">
      <p className="eyebrow">{wedding.title}</p>
      <div className="ornament"><span>✦</span></div>
      <h1>{wedding.groom} <i>&amp;</i> {wedding.bride}</h1>
      <p className="hero-date">{wedding.dateText}</p>
    </div>
    <p className="hero-scroll">төмен сырғытыңыз <span>↓</span></p>
  </section>;
}
