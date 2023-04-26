import React, { useState } from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import ub_1 from "../assets/ub_1.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);

  let handleClick = () => {
    setNavBar(!navBar);
  };
  let handleXClick = () => {
    setNavBar(!navBar);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <img
          src={ub_1}
          alt="umesh bhagtani"
          srcset=""
          style={{ width: "160px" }}
        />
      </div>
      {/* menu */}
      <div className="hidden md:flex">
        <ul className="flex  justify-between mr-2">
          <li>
            {" "}
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link to="skills" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            {" "}
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            {" "}
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* hamburger */}
      <div className="md:hidden cursor-pointer">
        <FaBars onClick={handleClick} size=" 2rem" />
      </div>
      {/* mobile menu  */}
      {navBar && (
        <div className="absolute top-0 left-0 bg-[#0a192f] w-full h-screen justify-center items-center  flex flex-col p-4">
          <div className="fixed ml-auto relative cursor-pointer">
            <AiOutlineClose size=" 4rem" onClick={handleXClick} />
          </div>
          <ul>
            <li className="py-6 text-4xl px-8">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={handleXClick}
              >
                Home
              </Link>
            </li>
            <li className="py-6 text-4xl" onClick={handleXClick}>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={handleXClick}
              >
                About
              </Link>
            </li>
            <li className="py-6 text-4xl" onClick={handleXClick}>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={handleXClick}
              >
                Experience
              </Link>
            </li>
            <li className="py-6 text-4xl" onClick={handleXClick}>
              <Link
                to="work"
                smooth={true}
                duration={500}
                onClick={handleXClick}
              >
                Work
              </Link>
            </li>
            <li className="py-6 text-4xl" onClick={handleXClick}>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={handleXClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/umesh-bhagtani/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/amanbhag"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:amanbhagtani@gmail.com"
              target="_newtab"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/16vjrg3BR-CqnNkgNTzcNO1uguWSo42Jt/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
