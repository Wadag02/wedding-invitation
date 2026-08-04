import Hero from "../Hero/Hero";
import Calendar from "../Calendar/Calendar";
import Countdown from "../Countdown/Countdown";
import Location from "../Location/Location";
import RSVP from "../RSVP/RSVP";
import FadeSection from "../FadeSection/FadeSection";
import { wedding } from "../../data/wedding";
import "./Invitation.css";
const copy={title:"\u0411\u0456\u0437\u0434\u0456\u04a3 \u0431\u0430\u049b\u044b\u0442\u0442\u044b \u043a\u04af\u043d\u0456\u043c\u0456\u0437",hostsLabel:"\u0422\u043e\u0439 \u0438\u0435\u043b\u0435\u0440\u0456",hosts:"\u049a\u0430\u0439\u0440\u0430\u0442 & \u0413\u04af\u043b\u0431\u0430\u0440\u0448\u044b\u043d",star:"\u2726"};
export default function Invitation(){return <main className="invitation"><Hero/><FadeSection><section className="paper-section invitation-letter"><p className="invitation-title">{copy.title}</p><div className="ornament"><span>{copy.star}</span></div>{wedding.invitationText.map(text=><p key={text}>{text}</p>)}<div className="letter-signature">{copy.hostsLabel}<strong>{copy.hosts}</strong></div></section></FadeSection><Calendar/><Location/><RSVP/><Countdown/></main>}
