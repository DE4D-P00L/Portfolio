import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import useNavLink from "../../store/store";

const NavAnimation = ({ children, section = "home" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  const { setActiveLink } = useNavLink();

  useEffect(() => {
    if (isInView) {
      setActiveLink(section);
    }
  }, [isInView, section, setActiveLink]);

  return <div ref={ref}>{children}</div>;
};
export default NavAnimation;
