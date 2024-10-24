import logo from "../assets/krishRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a href="https://www.linkedin.com/in/krishna-singh-5b4402253/" target={"blank"}><FaLinkedin /></a>
        <a href="https://github.com/KrishTechverse" target={"blank"}><FaGithub /></a>
        <a href="https://app.rezi.ai/s/vYM6SUKrym8MybvjyWB0" target={"blank"}><TbFileCv /></a>
        <a href="https://x.com/Krish_byte" target={"blank"}><FaSquareXTwitter /></a>
    </div>
  </nav>
  );
};

export default Navbar
