// import React from "react";

import { useState } from "react";
import TestCard from "../Components/TestCard";
import BlogCardImg1 from "../assets/BlogCard1.jpeg";
import BLogCardImg2 from "../assets/BlogCard2.png";
import BlogCardImg3 from "../assets/BlogCard3.jpeg";
import BlogCardImg4 from "../assets/BlogCard4.png";
import ImagePlaceholder from "../assets/ImagePlaceholder.png";

const Blog = () => {
  const BlogCardData2 = [
    {
      img: BlogCardImg1,
      title: "Case",
      title2: "Empowering Local Communities",
      discription:
        "Learn how HCG is making a positive impact in the Himalayan region.",
      profile: {
        picture: ImagePlaceholder,
        name: "Guras Gurung",
        date: "11 Jan 2022",
        time: "5 min read",
      },
    },
    {
      img: BLogCardImg2,
      title: "Case",
      title2: "Building Resilient Communities",
      discription:
        "Learn how our projects are making a difference in the Himalayas.",
      profile: {
        picture: ImagePlaceholder,
        name: "Gaurav Khakurel",
        date: "11 Jan 2022",
        time: "5 min read",
      },
    },
    {
      img: BlogCardImg3,
      title: "Case",
      title2: "Preserving Biodiversity ",
      discription:
        "Learn how we are helping communities prepare for and recover from disasters.",
      profile: {
        picture: ImagePlaceholder,
        name: "Satya Neupane",
        date: "11 Jan 2022",
        time: "5 min read",
      },
    },
    {
      img: BlogCardImg4,
      title: "Case",
      title2: "Preserving Biodiversity ",
      discription:
        "Learn how we are helping communities prepare for and recover from disasters.",
      profile: {
        picture: ImagePlaceholder,
        name: "SIta Sitaula",
        date: "11 Jan 2022",
        time: "5 min read",
      },
    },
    {
      img: BlogCardImg4,
      title: "Case",
      title2: "Preserving Biodiversity ",
      discription:
        "Learn how we are helping communities prepare for and recover from disasters.",
      profile: {
        picture: ImagePlaceholder,
        name: "SIta Sitaula",
        date: "11 Jan 2022",
        time: "5 min read",
      },
    },
    {
      img: BlogCardImg4,
      title: "Case",
      title2: "Preserving Biodiversity ",
      discription:
        "Learn how we are helping communities prepare for and recover from disasters.",
      profile: {
        picture: ImagePlaceholder,
        name: "SIta Sitaula",
        date: "11 Jan 2022",
        time: "5 min read",
      },
    },
    {
      img: BlogCardImg4,
      title: "Case",
      title2: "Preserving Biodiversity ",
      discription:
        "Learn how we are helping communities prepare for and recover from disasters.",
      profile: {
        picture: ImagePlaceholder,
        name: "SIta Sitaula",
        date: "11 Jan 2022",
        time: "5 min read",
      },
    },
    {
      img: BlogCardImg4,
      title: "Case",
      title2: "Preserving Biodiversity ",
      discription:
        "Learn how we are helping communities prepare for and recover from disasters.",
      profile: {
        picture: ImagePlaceholder,
        name: "SIta Sitaula",
        date: "11 Jan 2022",
        time: "5 min read",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;
  const totalCards = BlogCardData2.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + cardsPerPage);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - cardsPerPage);
  };
  const displayedCards = BlogCardData2.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  return (
    <>
      <div className="mx-[25px] my-[32px] md:mx-[336px] md:my-[80px]">
        <div>
          <h1 className="text-green-600 text-[16px] font-semibold">Blog</h1>
          <h2 className="text-green-900 text-[32px] font-bold">
            Insights and Blogs on Himalayan Conservation
          </h2>
          <p>
            Here, we share the latest insights, experiences, and breakthroughs
            in Himalayan conservation efforts, bringing you closer to the heart
            of our work and the communities we serve.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center border ">
        {displayedCards.map((items, index) => (
          <TestCard
            key={index}
            img={items.img}
            title={items.title}
            title2={items.title2}
            discription={items.discription}
            picture={items.profile.picture}
            name={items.profile.name}
            date={items.profile.date}
            time={items.profile.time}
          />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-800 text-white"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + cardsPerPage >= totalCards}
          className="px-4 py-2 bg-gray-800 text-white"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Blog;
