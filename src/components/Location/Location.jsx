import FadeSection from "../FadeSection/FadeSection";
import { wedding } from "../../data/wedding";
import "./Location.css";

export default function Location() { return <FadeSection><section className="paper-section location-section">
  <p className="eyebrow">Той салтанаты өтетін орын</p><div className="ornament"><span>✦</span></div>
  <div className="location-card"><div className="location-pin">⌖</div><h2>{wedding.venue}</h2><p>{wedding.city}</p><span className="location-rule" />
  <a href={wedding.mapLink} target="_blank" rel="noreferrer">Картадан ашу <b>↗</b></a></div>
</section></FadeSection>; }
