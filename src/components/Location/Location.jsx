import FadeSection from "../FadeSection/FadeSection";
import { wedding } from "../../data/wedding";
import "./Location.css";
const open="\u041a\u0430\u0440\u0442\u0430\u043d\u044b \u0430\u0448\u0443";
export default function Location(){return <FadeSection><section className="art-page location-section" aria-label="Location"><img src="/media/page-location.png" alt="Sanzhar Grand Ballroom"/><a className="location-map" href={wedding.mapLink} target="_blank" rel="noreferrer">{open}</a></section></FadeSection>}
