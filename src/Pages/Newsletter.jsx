import React from "react";

const Newsletter = () => {
  return (
    <>
      <div>
        <section className="flex flex-col items-center justify-center py-[44px] px-[28px] gap-[12px] bg-[#19A999] md:flex-row">
          <h1 className="text-white text-[32px] font-semibold">
            Stay Informed with Our Newsletter
          </h1>
          <div className=" flex flex-col gap-[12px] ">
            <h2 className="text-white">
              Sign up to receive the latest news and updates from HCG
            </h2>
            <div className="flex justify-center items-center gap-5 h-15 pt-[40px] pb-[16px] ">
              <input
                type="text"
                placeholder="Enter your email"
                className="h-12 w-full border border-black md:min-w-[360px]"
              />
              <button className="text-white bg-[#0C4E47] h-12 min-w-[108px] ">
                Sign Up
              </button>
            </div>
            <h3 className="text-white text-[12px]">
              By Clicking Sign Up you're confirming that you agree with our
              Terms and Conditions.
            </h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default Newsletter;
