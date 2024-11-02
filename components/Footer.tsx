import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <span className="text-purple">
            Let's work together to achieve your digital goals.
          </span>{" "}
          Please feel free to ask any questions you may have.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let's work together to achieve your goals. Contact me today to learn
          more.
        </p>
        <a href="mailto:keithng.096@gmail.com">
          <MagicButton
            title="Email Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Keith Ng
          <p className="md:text-[6px] text-[6px] md:font-normal font-light">
            Special Thanks to Adrian Hajdin
          </p>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.href} download target="_blank">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
