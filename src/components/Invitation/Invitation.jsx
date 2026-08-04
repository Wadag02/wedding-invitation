import Hero from "../Hero/Hero";
import Calendar from "../Calendar/Calendar";
import Countdown from "../Countdown/Countdown";
import Location from "../Location/Location";
import RSVP from "../RSVP/RSVP";
import FadeSection from "../FadeSection/FadeSection";
import "./Invitation.css";
export default function Invitation(){return <main className="invitation"><Hero/><FadeSection><section className="art-page invitation-page" aria-label="Invitation"><img src="/media/page-invitation.png" alt="Wedding invitation"/></section></FadeSection><Location/><Calendar/><RSVP/><Countdown/></main>}
