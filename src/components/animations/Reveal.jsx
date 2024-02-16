import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({
  children,
  width = "w-fit",
  className = "",
  amount = 0.25,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: amount });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <span
      ref={ref}
      className={`relative ${width} overflow-hidden ${className}`}>
      <motion.span
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        {children}
      </motion.span>
      <motion.span
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-[4px] bottom-[4px] left-0 right-0 bg-accent-light dark:bg-accent-dark z-20"
      />
    </span>
  );
};
export default Reveal;
