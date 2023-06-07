import React from "react";
import Captioning from "../components/Captioning";
import Generating from "../components/Generating";
import Community from "../components/Community";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import body from '../assets/body.png'
import "./HomePage.css";
const HomePage = () => {
  return (
    // <div className=''>HomePage</div>
    <div >
      <div className=" min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#00ADFF] mb-8 animate-pulse flex justify-center gap-5">
            SnapScribe
            <span className=" flex justify-center items-center"><img src={body} alt="img" className="object-contain w-12 h-12 rotate-45" /></span>
          </h1>
          <p className="text-gray-500 text-xl mb-8">
            The ultimate image captioning and image generation tool powered by
            AI.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <button className="px-6 py-3 bg-[#3a86ff] text-white rounded hover:bg-[#3f37c9] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent text-sky-500 border border-[#3a86ff] rounded hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Captioning />
      <Generating />
      <Community />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
