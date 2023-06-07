import React from "react";
import generate from "../assets/generate.jpg";
const Generating = () => {
  return (
    <section className="p-10 w-full flex justify-center items-center">
      <div className=" flex p-3 justify-evenly p-10">
        <div className="flex flex-col justify-center gap-[10%] p-3 ml-[8%]">
          <h2 className="font-extrabold text-[#3a86ff] text-[32px] w-fit">
            Text-to-Image Generation
          </h2>
          <div className="text-[#222328] text-[18px] w-[80%]">
            Experience the magic of our website's Text-to-Image Generation
            feature. Just type in your text, and watch as it transforms into
            beautiful images before your eyes. Our advanced algorithms bring
            your words to life, creating stunning visuals that capture your
            imagination.{" "}
          </div>
          <button className="w-fit text-white bg-gradient-to-b from-cyan-500 to-blue-500 py-2 px-4 rounded-md transition-opacity hover:scale-110 duration-300">
            Annotate
          </button>
        </div>
        <img
          src={generate}
          alt="annotate"
          className="h-[40%] w-[35%] mr-[5%]"
        />
      </div>
    </section>
  );
};
export default Generating;
