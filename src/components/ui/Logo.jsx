import useNavLink from "../../store/store";

const Logo = () => {
  const { setActiveLink } = useNavLink();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <h1
      className="text-xl font-bold select-none cursor-pointer"
      onClick={() => {
        scrollToTop();
        setActiveLink("home");
      }}>
      <span className="dark:text-accent-dark text-accent-light">{"<"}</span>
      Prashant
      <span className="dark:text-accent-dark text-accent-light">{"/>"}</span>
    </h1>
  );
};
export default Logo;
