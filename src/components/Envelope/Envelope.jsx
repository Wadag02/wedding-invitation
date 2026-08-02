import { motion } from "framer-motion";
import { wedding } from "../../data/wedding";

import "./Envelope.css";

export default function Envelope({ onOpen }) {
  return (
    <motion.section
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="backgroundGlow" />

      <motion.div
        className="inviteCard"
        initial={{ y: 40, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
        }}
      >
        <p className="smallTitle">{wedding.title}</p>

        <div className="goldLine" />

        <h1 className="names">
          {wedding.groom}
          <br />
          <span>&</span>
          <br />
          {wedding.bride}
        </h1>

        <p className="date">
          {wedding.dateText}
        </p>

        <button
          className="openButton"
          onClick={onOpen}
        >
          АШУ
        </button>
      </motion.div>
    </motion.section>
  );
}