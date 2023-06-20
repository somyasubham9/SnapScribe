import React,{useRef} from "react";
import {useNavigate } from "react-router-dom";
import Captioning from "../components/Captioning";
import Generating from "../components/Generating";
import Community from "../components/Community";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import body from "../assets/body.png";
import "./HomePage.css";
const HomePage = () => {
  const navigate=useNavigate();
  const ref = useRef(null);
  const handleClick=()=>{
    navigate('/captivate');
  }
  return (
    // <div className=''>HomePage</div>
    <div>
      <div className=" min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#00ADFF] mb-8 animate-pulse flex justify-center gap-5">
            SnapScribe
            <span className=" flex justify-center items-center">
              <img
                src={body}
                alt="img"
                className="object-contain w-12 h-12 rotate-45"
              />
            </span>
          </h1>
          <p className="text-gray-500 text-xl mb-8">
            The ultimate image captioning and image generation tool powered by
            AI.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <button class="cssbuttons-io-button" onClick={handleClick}>
              {" "}
              Get started
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
            <button onClick={()=>{ref.current?.scrollIntoView({behavior: 'smooth'});}} className="px-6 py-3 bg-transparent text-sky-500 border border-[#3a86ff] rounded hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div ref={ref}>
      <Captioning />
      <Generating />
      <Community />
      <Contact />
      <ScrollToTop />
      </div>
    </div>
  );
};

export default HomePage;
