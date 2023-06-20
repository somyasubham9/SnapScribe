import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import { logo1 } from "../assets";
import './Navbar.css'
const Navbar = () => {
  const navigate=useNavigate();
  const handleScrollClick = async () => {
     navigate('/');
     window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b bordeer-b-[#e6ebf4] bg-sky-100 shadow-2xl">
      <Link to="/" className="flex jutsify-center items-center gap-3 px-2  ">
        <img src={logo1} alt="logo" className="h-[48px]" />
        <span className="font-inter font-large text-4xl text-[#ef] heading">
          SnapScribe
        </span>
      </Link>
      <ButtonGroup
        color="primary"
        variant="text"
        aria-label="text button group"
      >
        <Link
          to="/"
          className="font-inter font-medium  text-black px-4 py-2 rounded-md hover:bg-sky-300"
        >
          Home
        </Link>
        <Link
          to="/captivate"
          className="font-inter font-medium  text-black px-4 py-2 rounded-md hover:bg-sky-300"
        >
          CaptiVate
        </Link>
        <Link
          to="/generate"
          className="font-inter font-medium  text-black px-4 py-2 rounded-md hover:bg-sky-300"
        >
          Generate
        </Link>
        <Link
          to="/community"
          className="font-inter font-medium  text-black px-4 py-2 rounded-md hover:bg-sky-300"
        >
          Community
        </Link>
        <Link
          to="/about"
          className="font-inter font-medium  text-black px-4 py-2 rounded-md hover:bg-sky-300"
        >
          About
        </Link>
        <button
          onClick={handleScrollClick}
          className="font-inter font-medium  text-black px-4 py-2 rounded-md hover:bg-sky-300"
        >
          Contact
        </button>
      </ButtonGroup>
    </div>
  );
};

export default Navbar;
