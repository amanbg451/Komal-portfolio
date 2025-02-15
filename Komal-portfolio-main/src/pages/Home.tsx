import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useSpring, animated } from "react-spring";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const fade = useSpring({
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0%,0,0)" },
  });

  return (
    <div className="flex flex-row flex-wrap justify-center items-center h-screen bg-black overflow-hidden pb-10">
      <animated.div style={fade} className="flex justify-center relative px-14">
        <div className="">
          <img
            src="/klogo.png"
            alt="George"
            className="filter drop-shadow-xl"
          />
        </div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      </animated.div>
      <animated.div style={fade} className=" flex flex-col justify-center p-4 -mt-40 md:-mt-0 ">
        <h1 className="font-extrabold text-white text-2xl md:text-3xl lg:text-4xl">
          Komal Sha
        </h1>
        <hr className="my-4 mx-auto w-2/3 md:w-full"></hr>
        <h2 className="text-xl font-semibold text-white md:text-2xl ">
          Creative Video Editor
        </h2>
        <div className="flex flex-row space-x-6  pt-2 md:items-center justify-center">
          <a href="https://www.instagram.com/komalsha_/">
            <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
          </a>
          <a href="mailto:ruben.nicolaysen.pedersen@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} color="white" size="2x" />
          </a>{" "}
        </div>
       {/* <div className="flex justify-center items-center pt-4">
        <a href="https://www.youtube.com/watch?v=TlqRMjk37nw" target="_blank" rel="noopener noreferrer">
          <div className="p-4 max-w-xs bg-white rounded-full text-center cursor-pointer transform transition duration-500 hover:scale-105">
            <h2 className="text-sm font-semibold text-black md:text-xl flex items-center justify-center">
              <img src="/clapper-board-joypixels.gif" alt="Video Pitch" className="inline-block w-6 h-6 mr-2 -mt-2" />
              Click Here for Video Pitch
            </h2>
          </div>
        </a>
      </div> */}
      </animated.div>
    </div>
  );
}

export default Home;