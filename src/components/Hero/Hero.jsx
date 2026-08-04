import { wedding } from "../../data/wedding";
import "./Hero.css";
const invitation = "\u0421\u0456\u0437\u0434\u0435\u0440\u0434\u0456 \u0442\u043e\u0439\u044b\u043c\u044b\u0437\u0493\u0430 \u0448\u0430\u049b\u044b\u0440\u0430\u043c\u044b\u0437";
export default function Hero() { return <section className="hero"><video className="hero-video" autoPlay muted loop playsInline src="/media/stol.mp4"/><div className="hero-content"><p className="hero-invitation">{invitation}</p><h1><span>{wedding.groom}</span><i>&amp;</i><span>{wedding.bride}</span></h1><p className="hero-date">{wedding.dateText}</p></div></section>; }
