// import React from "react";
import FB from "../assets/fb.png";
import IG from "../assets/ig.png";
import X from "../assets/X.png";
import LN from "../assets/LinkedIn.png";
import YT from "../assets/Youtube.png";
import FooterLogo from "../assets/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="pt-[52px] pb-[32px] mx-[64px]">
        <div className="flex flex-col  justify-center items-center border-b border-black  pb-[32px] md:flex-row md:justify-around">
          <img
            src={FooterLogo}
            alt="FooterLogo"
            className="min-w-[100.7px] max-h-[95px] md:min-w-[133px] md:min-h-[127px] "
          />
          <ul className="pt-[32px] space-y-[32px] md:flex md:space-y-0 md:space-x-[32px] font-semibold">
            <li className="font-[16px]">About HCG</li>
            <li className="font-[16px]">Our Work</li>
            <li className="font-[16px]">Blogs/News</li>
            <li className="font-[16px]">Contact</li>
          </ul>
          <div className="pt-[32px] flex space-x-[12px]">
            <img src={FB} alt="Facebook" />
            <img src={IG} alt="Instagram" />
            <img src={X} alt="X" />
            <img src={LN} alt="LinkedIn" />
            <img src={YT} alt="Youtube" />
          </div>
        </div>
        <div>
          <div className="pt-[32px] flex flex-col items-center space-y-[16px] ">
            <h1 className="font-[14px]">2023 HCG. All right reserved.</h1>
            <ul className="flex space-x-[24px] font-[14px]">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
