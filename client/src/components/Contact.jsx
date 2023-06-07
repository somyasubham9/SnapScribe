import React from 'react'

const Contact = () => {
    return (
        <div
          id="contact"
          name="contact"
          className="w-full h-fit p-8 mt-8 bg-gradient-to-b  text-[#3a86ff] "
        >
          <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-[#3a86ff]">
                Contact
              </p>
              <p className="py-6 font-bold">Submit the form below to get in touch with me</p>
            </div>
    
            <div className=" flex justify-center items-center">
              <form
                action="https://getform.io/f/65da70f7-2751-403d-ac52-448215a547f0"
                method="POST"
                className=" flex flex-col w-full md:w-1/2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 border-[#3a86ff] rounded-md text-[#1e1e1e] focus:outline-none"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="my-4 p-2 bg-transparent border-2 border-[#3a86ff] rounded-md text-[#1e1e1e] focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  className="p-2 bg-transparent border-2 border-[#3a86ff] rounded-md text-[#1e1e1e] focus:outline-none"
                ></textarea>
    
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-7 mb-0 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Let's talk
                </button>
              </form>
            </div>
          </div>
          
        </div>
      );
}

export default Contact