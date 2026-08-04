import FadeSection from "../FadeSection/FadeSection";
import { wedding } from "../../data/wedding";
import "./Location.css";
const title="\u0422\u043e\u0439 \u0441\u0430\u043b\u0442\u0430\u043d\u0430\u0442\u044b \u04e9\u0442\u0435\u0442\u0456\u043d \u043e\u0440\u044b\u043d", open="\u041a\u0430\u0440\u0442\u0430\u0434\u0430\u043d \u0430\u0448\u0443";
export default function Location(){return <FadeSection><section className="paper-section location-section"><p className="eyebrow">{title}</p><div className="ornament"><span>✦</span></div><div className="location-card"><div className="location-pin">⌖</div><h2>{wedding.venue}</h2><p>{wedding.city}</p><span className="location-rule"/><a href={wedding.mapLink} target="_blank" rel="noreferrer">{open}<b>↗</b></a></div></section></FadeSection>}
