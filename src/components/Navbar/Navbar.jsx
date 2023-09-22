import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./NavBar.css";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="flex justify-between container items-center mx-auto py-8 lg:w-full w-[90%]">
      <div className="site-logo">
        <h1 className="text-[#1A1919] text-[2rem] font-bold">CareerCafe</h1>
      </div>
      <nav
        className={`flex lg:flex-row flex-col lg:gap-5 gap-8 justify-center items-center absolute top-[10%] bg-[#7E90FE] lg:bg-white w-[50%] h-screen lg:h-auto ${
          isOpen ? "right-0" : "right-[-100%]"
        } lg:static duration-700 z-50`}
      >
        <NavLink
          className="text-[18px] font-medium hover:text-[#4400fd]"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-[18px] font-medium hover:text-[#4400fd]"
          to="/statistics"
        >
          Statistics
        </NavLink>
        <NavLink
          className="text-[18px] font-medium hover:text-[#4400fd]"
          to="/applied-jobs"
        >
          Applied Jobs
        </NavLink>
        <NavLink
          className="text-[18px] font-medium hover:text-[#4400fd]"
          to="/blog"
        >
          Blog
        </NavLink>
      </nav>
      <div className="lg:block hidden">
        <button className="px-5 py-2 rounded-md border-none text-white text-[20px] font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873ff]">
          Start Applying
        </button>
      </div>
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      
    </header>
  );
};

export default Navbar;
