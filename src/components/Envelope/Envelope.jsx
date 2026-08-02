import { motion } from "framer-motion";
import { wedding } from "../../data/wedding";
import "./Envelope.css";

export default function Envelope({ onOpen }) {
  return (
    <motion.section
      className="envelope-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-pattern"></div>

      <motion.div
        className="invite-envelope"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="envelope-border">

          <div className="top-decoration">
            ✦
          </div>

          <p className="invite-title">
            {wedding.title}
          </p>

          <div className="gold-divider"></div>

          <h1 className="invite-names">
            {wedding.groom}
            <span>&</span>
            {wedding.bride}
          </h1>

          <p className="invite-date">
            {wedding.dateText}
          </p>

          <button
            className="open-btn"
            onClick={onOpen}
          >
            АШУ
          </button>

          <p className="tap-text">
            Түртіңіз
          </p>

        </div>
      </motion.div>
    </motion.section>
  );
}