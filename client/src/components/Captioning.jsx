import React from "react";
import annotate from "../assets/annotate.jpg";
import {useNavigate} from 'react-router-dom'
const Captioning = () => {
  const nav=useNavigate();
  return (
    <section className="p-10 bg-[#FFFFFF]  w-full flex justify-center items-center min-h-[50%]">
      <div className=" flex p-3 justify-evenly ">
        <img src={annotate} alt="annotate" className="h-[30%] w-[30%] ml-[5%]" />

        <div className="flex flex-col justify-center gap-[10%] p-3 ml-[8%]">
          <h2 className="font-extrabold text-[#3a86ff] text-[32px] w-fit">
            Image Captioning
          </h2>
          <div className="text-[#222328] text-[18px] w-[80%]">
            Experience seamless image captioning on our website, powered by
            advanced machine learning and deep learning models. With MERN as our
            technology stack, we generate accurate and descriptive captions for
            your images, enhancing user engagement. Unlock the potential of your
            visual content with our efficient image captioning feature.
          </div>
          <button className='w-fit text-white bg-gradient-to-b from-cyan-500 to-blue-500 py-2 px-4 rounded-md transition-opacity hover:scale-110 duration-300' onClick={()=>{nav('/captivate')}}>Annotate</button>
        </div>
      </div>
    </section>
  );
};
export default Captioning;
