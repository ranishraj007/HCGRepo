import React, { useEffect, useState } from "react";

const Test = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [selectedID, setSelectedID] = useState(null);
  // const [fetchedArr, setFetchedArr] = useState([]);
  let API = "https://dummyjson.com/todos";
  const fetchApiData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFetchedData(data.todos))
      // .then(console.log("data fetched"))
      .catch((error) => (alert("error"), error));
  };

  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     // console.log("hello", data);
  //     setFetchedData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(fetchedData, "hello");

  useEffect(() => {
    fetchApiData(API);
  }, []);

  const onClickHandle = (itemId) => {
    setSelectedID(itemId);
    const newArray =
      fetchedData?.length > 0 &&
      fetchedData.filter((item) => item.id !== itemId);
    setFetchedData(newArray);
  };
  // reduce method to display single item
  // const onClickHandle = (itemId) => {
  // const newArray = fetchedData?.length > 0 && fetchedData.reduce((a, b) =>{return a= a + b.id} ,0);
  // setFetchedData(newArray);
  // console.log(newArray, "newArrow");
  // };
  // console.log(selectedID, "selectedID");
  // console.log("fetchdata", fetchedData);
  // const singleToDo =
  //   fetchedData?.length > 0 && fetchedData.find((item) => item.id === 2);
  return (
    <>
      <div className="w-2/3 mx-5">
        {/* {singleToDo.} */}
        {fetchedData?.length > 0 &&
          fetchedData?.map((items) => (
            <div key={items.id} className="flex gap-20 justify-between">
              <h1>{items.id}</h1>
              <h2>{items.todo}</h2>
              <h3>{items.userId}</h3>
              <input type="checkbox" />
              <button
                className="border bg-red-400"
                onClick={() => onClickHandle(items.id)}
                // onChange={handleOnChange}
              >
                delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Test;
