import React from "react";
import community from "../assets/community.jpg";
import {useNavigate} from 'react-router-dom'
const Community = () => {
  const nav=useNavigate();
  return (
    <section className="p-10 bg-[#FFFFFF] min-h-[50%] w-full flex justify-center items-center">
      <div className=" flex p-3 justify-evenly ">
        <img
          src={community}
          alt="annotate"
          className="h-[30%] w-[30%] ml-[5%]"
        />

        <div className="flex flex-col itemscenter justify-center gap-[10%] p-3 ml-[8%]">
          <h2 className="font-extrabold text-[#3a86ff] text-[32px] w-fit">
            Share With Community
          </h2>
          <div className="text-[#222328] text-[18px] w-[80%]">
            Share your generated images with our community effortlessly. Engage
            with fellow members by posting and discussing your captivating
            visuals. Join a vibrant community where creativity and inspiration
            flow freely. Celebrate the power of visual storytelling as you
            connect, inspire, and collaborate with like-minded individuals
            through sharing your generated images in our thriving community.
          </div>
          <button onClick={()=>nav('/community')} className="w-fit text-white bg-gradient-to-b from-cyan-500 to-blue-500 py-2 px-4 rounded-md transition-opacity hover:scale-110 duration-300">
            Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
