import FadeSection from "../FadeSection/FadeSection";
import { wedding } from "../../data/wedding";
import "./Location.css";
const copy={label:"\u0422\u043e\u0439 \u04e9\u0442\u0435\u0442\u0456\u043d \u043e\u0440\u044b\u043d",open:"\u041a\u0430\u0440\u0442\u0430\u043d\u044b \u0430\u0448\u0443"};
export default function Location(){return <FadeSection><section className="location-section"><div className="location-card"><p className="location-label">{copy.label}</p><h2>{wedding.venue}</h2><p className="location-city">{wedding.city}</p><a href={wedding.mapLink} target="_blank" rel="noreferrer">{copy.open}</a></div></section></FadeSection>}
