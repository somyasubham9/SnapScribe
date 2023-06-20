import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import ssd from "../assets/ssd.jpg";
import sarit from "../assets/sarit.jpg";

const TeamCard = ({ name, role, image, hashtags, socialLinks }) => {
  return (
    <div className="max-w-xs  h-fit rounded-lg overflow-hidden shadow-lg object-contain">
      <img className="w-full  " src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{role}</p>
      </div>
      <div className="px-6 py-4">
        {hashtags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="px-6 py-4 flex justify-evenly">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            className="text-gray-500 hover:text-gray-700 mr-2 h-fit w-fit shadow-inner p-2 rounded-lg"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
const Contact = () => {
  const teamMembers = [
    {
      name: "Somya Subham Dash",
      role: "Web Developer",
      image: ssd,
      hashtags: ["#JavaScript", "#ReactJS", "#MERN"],
      socialLinks: [
        {
          platform: "Instagram",
          icon: <FaInstagram />,
          url: "https://www.instagram.com/somya_subham/",
        },
        {
          platform: "LinkedIn",
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/somya-subham-dash-7a83211b7/",
        },
        {
          platform: "GitHub",
          icon: <FaGithub />,
          url: "https://github.com/somyasubham9",
        },
      ],
    },
    {
      name: "Sarit Samyak Rath",
      role: "ML Developer",
      image: sarit,
      hashtags: ["#ML","#DL" ,"#LLM", "#LangChain"],
      socialLinks: [
        {
          platform: "Instagram",
          icon: <FaInstagram />,
          url: "https://www.instagram.com/saritrath/",
        },
        {
          platform: "LinkedIn",
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/sarit-samyak-rath-6677a3204/"
        },
        {
          platform: "GitHub",
          icon: <FaGithub />,
          url: "https://github.com/SARIT42",
        },
      ],
    },
    
  ];

  return (
    <div className="flex flex-col gap-5 ">
      <div className="font-extrabold text-[#0EA5E9] text-[32px] h-fit w-fit ml-[45%] shadow-inner p-1.5 rounded-lg flex ">
        About Us
        <span class="relative flex h-3 w-3 top-[0%] ">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </div>
      <div className="flex flex-wrap justify-evenly mt-0 ">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Contact;