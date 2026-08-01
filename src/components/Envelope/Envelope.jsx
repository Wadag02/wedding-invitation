import { motion } from "framer-motion";

import "./Envelope.css";

export default function Envelope({ onOpen }) {

    return (

        <motion.section
            className="screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

            <div className="glow"/>

            <motion.p

                initial={{ opacity:0,y:-20 }}
                animate={{ opacity:1,y:0 }}
                transition={{ delay:.2 }}

                className="title"

            >
                Wedding Invitation
            </motion.p>

            <motion.div

                whileHover={{
                    scale:1.05,
                    y:-10
                }}

                whileTap={{
                    scale:.98
                }}

                transition={{
                    type:"spring",
                    stiffness:250
                }}

                className="envelope"

                onClick={onOpen}

            >

                <div className="letter">

                    ✦

                </div>

                <div className="front"/>

                <div className="flap"/>

            </motion.div>

            <motion.p

                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:1 }}

                className="hint"

            >

                Tap the envelope

            </motion.p>

        </motion.section>

    );

}