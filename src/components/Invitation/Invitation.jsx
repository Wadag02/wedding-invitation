import Hero from "../Hero/Hero";
import Countdown from "../Countdown/Countdown";
import Location from "../Location/Location";
import RSVP from "../RSVP/RSVP";
import FadeSection from "../FadeSection/FadeSection";
import { wedding } from "../../data/wedding";
import "./Invitation.css";

const greeting = "\u049a\u04b1\u0440\u043c\u0435\u0442\u0442\u0456 \u049b\u043e\u043d\u0430\u049b\u0442\u0430\u0440!";
const signature = "\u0406\u0437\u0433\u0456 \u043d\u0438\u0435\u0442\u043f\u0435\u043d,";
export default function Invitation() { return <main className="invitation"><Hero /><FadeSection><section className="paper-section invitation-letter"><p className="eyebrow">{greeting}</p><div className="ornament"><span>✦</span></div>{wedding.invitationText.map((text) => <p key={text}>{text}</p>)}<div className="letter-signature">{signature}<strong>{wedding.groom} &amp; {wedding.bride}</strong></div></section></FadeSection><Location /><RSVP /><Countdown /></main>; }
