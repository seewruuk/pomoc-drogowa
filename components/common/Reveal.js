"use client"
import {motion, useReducedMotion} from "framer-motion";

/**
 * Delikatne pojawienie się sekcji przy przewijaniu.
 * Używać tylko poniżej pierwszego ekranu (nie opóźnia LCP).
 * Bez JS treść i tak jest widoczna (patrz <noscript> w layout.jsx).
 */
export default function Reveal({children, delay = 0, className = ""}) {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) return <div className={className}>{children}</div>;

    return (
        <motion.div
            data-reveal=""
            className={className}
            initial={{opacity: 0, y: 32}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "0px 0px -80px 0px"}}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1], delay}}
        >
            {children}
        </motion.div>
    );
}
