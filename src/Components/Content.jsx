import React from "react";
import Frame63 from "../assets/Frame63.png";

const Content = () => {
  return (
    <>
      <div className="flex flex-col text-green-900 m-5 gap-[32px] md:flex-row">
        <div className="h-[160px] w-[300px] md:h-auto  md:w-1/2 md:flex md:flex-col">
          <img src={Frame63} alt="" className="md:h-[52px] md:w-[52px]" />
          <h1 className="text-2xl font-semibold md:w-2/3">
            What is Himalaya Conservation Group?
          </h1>
        </div>
        <div className="p-[0px, 0px, 16px, 0px] md:w-1/2">
          <p className="text-green-900">
            HCG is a non -governmental, non-profit organization dedicated to
            promoting Himalayan environment conservation and dissaster
            management.
          </p>
          <p className="text-green-900 md:pb-5 md:pt-5">
            Our mission is to mitigate various disasters and advocate for safe
            and sustainable development in the region. With a focus on the
            Himalayan environment, we conduct field studies, research works, and
            implement projects to address the challenges posed by climate change
            and geo-disasters. Through our research-based technology framework,
            we aim to create a positive impact and contribute to the well-being
            of the local communities.
          </p>
          <button className="h-[48px] w-[131px] border">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Content;
