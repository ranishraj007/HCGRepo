import { useState } from "react";
import LogoMain from "../assets/Logo.png";
import Hamburger from "../assets/Vector.svg";
import Cross from "../assets/Vector.png";
import AboutHCGUP from "../assets/Vector (1).png";
import AboutHCGDOWN from "../assets/Vector (2).png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [blogNews, setBlogNews] = useState(false);

  const toggleMenu = () => setClick((prev) => !prev);
  const toggleDropDown = () => setDropDown((prev) => !prev);
  const toggleBlogNewsDropdown = () => setBlogNews((prev) => !prev);

  return (
    <nav className="bg-white border-b border-black">
      <div className="flex md:flex-row items-center justify-between px-10 py-2">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src={LogoMain} alt="Logo" className="h-[63px] w-[60px]" />
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="relative">
            <button onClick={toggleDropDown} className="flex items-center">
              <span className="text-green-700 font-semibold">About HCG</span>
              <img
                src={dropDown ? AboutHCGUP : AboutHCGDOWN}
                alt={dropDown ? "Collapse About HCG" : "Expand About HCG"}
                className="ml-2 h-[6.48px] w-[13.48px]"
              />
            </button>
            {dropDown && (
              <div className="absolute left-0 mt-2 bg-white border border-black rounded shadow-lg">
                <ul className="flex flex-col p-2">
                  <li className="py-1 px-2">Mission & Vision</li>
                  <li className="py-1 px-2">Board of Director</li>
                  <li className="py-1 px-2">Teams</li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={toggleBlogNewsDropdown}
              className="flex items-center"
            >
              <span className="text-green-700 font-semibold">Blogs/ News</span>
              <img
                src={blogNews ? AboutHCGUP : AboutHCGDOWN}
                alt={blogNews ? "Collapse Blogs/ News" : "Expand Blogs/ News"}
                className="ml-2 h-[6.48px] w-[13.48px]"
              />
            </button>
            {blogNews && (
              <div className="absolute left-0 mt-2 bg-white border border-black rounded shadow-lg">
                <ul className="flex flex-col p-2">
                  {/* Content for Blogs/ News */}
                </ul>
              </div>
            )}
          </div>

          <div className="text-green-700 font-semibold">Our Initiatives</div>
        </div>

        {/* Submit Proposal Button */}
        <div className="flex items-center">
          <button className="border primary w-[174px] h-[48px] p-[12px 24px] md:flex gap-[8px] bg-green-950 justify-center items-center text-white hover:border-blue-800 hidden ">
            <span>Submit Proposal</span>
          </button>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button onClick={toggleMenu} className="md:hidden flex items-center">
          <img
            src={click ? Cross : Hamburger}
            alt={click ? "Close menu" : "Open menu"}
            className="h-[24px] w-[24px]"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {click && (
        <div className="md:hidden flex flex-col items-start px-10 py-2 bg-white border-t border-black">
          {/* <div className="w-full flex justify-between items-center mb-4 border border-red-500">
            <img src={LogoMain} alt="Logo" className="h-[46px] w-[44px]" />
            <button onClick={toggleMenu} aria-label="Close menu">
              <img src={Cross} alt="Close menu" className="h-[24px] w-[24px]" />
            </button>
          </div> */}

          <div className="flex flex-col w-full">
            <button
              onClick={toggleDropDown}
              className="flex items-center w-full text-left py-2 border-b border-black"
            >
              <span className="text-green-700 font-semibold">About HCG</span>
              <img
                src={dropDown ? AboutHCGUP : AboutHCGDOWN}
                alt={dropDown ? "Collapse About HCG" : "Expand About HCG"}
                className="ml-2 h-[6.48px] w-[13.48px]"
              />
            </button>
            {dropDown && (
              <div className="flex flex-col w-full border-b border-black">
                <ul className="flex flex-col">
                  <li className="py-2">Mission & Vision</li>
                  <li className="py-2">Board of Director</li>
                  <li className="py-2">Teams</li>
                </ul>
              </div>
            )}

            <button
              onClick={toggleBlogNewsDropdown}
              className="flex items-center w-full text-left py-2 border-b border-black"
            >
              <span className="text-green-700 font-semibold">Blogs/ News</span>
              <img
                src={blogNews ? AboutHCGUP : AboutHCGDOWN}
                alt={blogNews ? "Collapse Blogs/ News" : "Expand Blogs/ News"}
                className="ml-2 h-[6.48px] w-[13.48px]"
              />
            </button>
            {blogNews && (
              <div className="flex flex-col w-full border-b border-black">
                <ul className="flex flex-col">
                  {/* Content for Blogs/ News */}
                </ul>
              </div>
            )}

            <div className="text-green-700 font-semibold py-2 border-b border-black">
              Our Initiatives
            </div>
          </div>

          <button className="border primary w-full h-[48px] p-[12px 24px] flex gap-[8px] bg-green-950 justify-center items-center text-white hover:border-blue-800 mt-4">
            <span>Submit Proposal</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
