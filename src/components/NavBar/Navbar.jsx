import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Logo from "../ui/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { navData } from "../../data/nav.data";
import useNavLink from "../../store/store";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeLink, setActiveLink } = useNavLink();

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <nav className="border-b dark:border-primary-light border-primary-dark dark-container fixed w-full z-50 text-xl font-semibold">
      <div className="flex items-center justify-between h-16 container relative">
        <Logo />
        <ul className="uppercase items-center gap-10 hidden md:flex">
          {navData.map((navItem, i) => (
            <li
              key={navItem.id}
              className={`group relative cursor-pointer `}
              onClick={() => {
                scrollToElement(navItem.nav);
                setActiveLink(navItem.nav);
              }}>
              <span className="dark:text-accent-dark text-accent-light">
                {`0${i + 1}. `}
              </span>
              {navItem.nav}
              <span
                className={` ${
                  activeLink === navItem.nav ? "active-link" : "link-underline"
                }`}></span>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className={`w-8 h-8 flex rounded-lg items-center justify-center ${
                darkMode
                  ? "bg-primary-light text-primary-dark"
                  : "bg-primary-dark text-primary-light"
              }`}>
              {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
            </button>
          </li>
        </ul>
        {/* Mobile Nav */}
        <ul
          className={`uppercase items-start pl-10 gap-10 absolute dark:bg-primary-dark bg-primary-light w-screen h-screen z-10 flex flex-col md:hidden left-0 top-0 justify-evenly text-3xl ${
            isMenuOpen ? "scale-y-100" : "scale-y-0"
          } transition-transform duration-200 origin-top`}>
          <li className="text-xl">
            <Logo />
          </li>
          {navData.map((navItem, i) => (
            <li
              key={navItem.id}
              className="cursor-pointer relative"
              onClick={() => {
                scrollToElement(navItem.nav);
                setActiveLink(navItem.nav);
              }}>
              <span className="dark:text-accent-dark text-accent-light">
                {`0${i + 1}. `}
              </span>
              {navItem.nav}
              <span
                className={` ${
                  activeLink === navItem.nav ? "active-link" : ""
                }`}></span>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className={`w-12 h-12 flex rounded-lg items-center justify-center ${
                darkMode
                  ? "bg-primary-light text-primary-dark"
                  : "bg-primary-dark text-primary-light"
              }`}>
              {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
            </button>
          </li>
        </ul>
        <button
          className="text-2xl md:hidden block z-20"
          onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
