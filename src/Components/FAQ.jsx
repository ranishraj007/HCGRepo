// import React from 'react'
import AboutHCGUP from "../assets/Vector (1).png";
import AboutHCGDOWN from "../assets/Vector (2).png";

import { useState } from "react";

const FAQ = () => {
  const [dropDown, setDropDown] = useState(false);
  const [selected, setSelected] = useState(null);

  // console.log("value", dropDown, selected);
  const changeState = (id) => {
    setDropDown(!dropDown);
    setSelected(id);
  };

  const FAQs = [
    {
      id: 1,
      question: "What is HCG's mission?",
      answer: "This is the answer 1.",
    },
    {
      id: 2,
      question: "How can I get involved?",
      answer: "This is the answer 2. ",
    },
    {
      id: 3,
      question: "Where can I find resources?",
      answer: "This is the answer 3.",
    },
    {
      id: 4,
      question: "How can I contact HCG?",
      answer: "This is the answer 4.",
    },
    {
      id: 5,
      question: "Is HCG looking for volunteers?",
      answer: "This is the answer 5.",
    },
  ];
  return (
    <>
      <div className="px-[28px]">
        {FAQs.map((items, index) => (
          <ul key={index} className="flex flex-col">
            <li className="border-t border-[#0C4E47] text-[#0C4E47] h-[73px] flex items-center justify-between font-bold text-[16px]">
              <span
                onClick={() => changeState(index)}
                className="cursor-pointer"
              >
                {items.question}
              </span>

              <button
                className="cursor-pointer "
                onClick={() => changeState(index)}
              >
                {dropDown && selected === index ? (
                  <img src={AboutHCGUP} alt="" />
                ) : (
                  <img src={AboutHCGDOWN} alt="" />
                )}
              </button>
            </li>
            {dropDown && selected === index ? (
              <li className="border-t border-[#0C4E47] text-[#0C4E47] h-[73px] flex items-center">
                {items.answer}
              </li>
            ) : (
              ""
            )}
          </ul>
        ))}
      </div>
    </>
  );
};

export default FAQ;
