import React, { useEffect, useState } from "react";

const FAQpageTest = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const [selected, setSelected] = useState(null);
  // const [fetchedArr, setFetchedArr] = useState([]);
  let API = "http://192.168.18.227:8000/api/v1/frequently-asked-questions/"; 
  const fetchApiData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFetchedData(data))
      .catch((error) => (console.log("error"), error));
  };

    const changeState = (id) => {
      setDropDown(!dropDown);
      setSelected(id);
    };

  useEffect(() => {
    fetchApiData(API);
  }, []);
  //   console.log(fetchedData);

  return (
    <>
      <div className="px-[28px]">
        {fetchedData.map((items, index) => (
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
                  <img src="#" alt="" />
                ) : (
                  <img src="#" alt="" />
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

export default FAQpageTest;
