import Hero from "../Hero/Hero";
import Countdown from "../Countdown/Countdown";
import Location from "../Location/Location";
import RSVP from "../RSVP/RSVP";
import FadeSection from "../FadeSection/FadeSection";
import { wedding } from "../../data/wedding";
import "./Invitation.css";

export default function Invitation() {
  return <main className="invitation">
    <Hero />
    <FadeSection><section className="paper-section invitation-letter">
      <p className="eyebrow">Құрметті қонақтар!</p><div className="ornament"><span>✦</span></div>
      {wedding.invitationText.map((text) => <p key={text}>{text}</p>)}
      <div className="letter-signature">Ізгі ниетпен, <strong>Санжар &amp; Еңлік</strong></div>
    </section></FadeSection>
    <Location /><RSVP /><Countdown />
  </main>;
}
