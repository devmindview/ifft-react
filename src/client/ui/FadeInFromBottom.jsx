import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInFromBottom({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // ✅ animate every time it's in view
    margin: "0px 0px -100px 0px",
  });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
