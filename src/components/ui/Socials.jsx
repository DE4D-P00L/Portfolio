/* eslint-disable react/prop-types */
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Socials = ({ className }) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      <SocialIcons
        socialIcon={<FaLinkedin />}
        socialUrl="https://www.linkedin.com/in/prashant-webdev/"
        socialColor="text-[#0284c7]"
      />
      <SocialIcons
        socialIcon={<IoIosMail />}
        socialUrl="mailto:prashant200025@gmail.com"
        socialColor="text-red-500"
      />
    </div>
  );
};

const SocialIcons = ({ socialIcon, socialUrl, socialColor }) => {
  return (
    <a
      href={socialUrl}
      className={`${socialColor} flex items-center justify-center p-3 rounded-full shadow-lg bg-gray-100 text-xl sm:text-3xl`}>
      {socialIcon}
    </a>
  );
};
export default Socials;
