// import React from "react";
// import Navbar from "../Components/Navbar";
import HeaderCard from "../Components/HeaderCard";
import Content from "../Components/Content";
import BlogCard from "../Components/BlogCard";
import BlogCard2 from "../Components/BlogCard2";
import ContactForm from "../Components/ContactForm";
import BlogCardImg1 from "../assets/BlogCard1.jpeg";
import BLogCardImg2 from "../assets/BlogCard2.png";
import BlogCardImg3 from "../assets/BlogCard3.jpeg";
import BlogCardImg4 from "../assets/BlogCard4.png";
import ImagePlaceholder from "../assets/ImagePlaceholder.png";
import Mail from "../assets/Email.png";
import Phone from "../assets/Phone.png";
import Pin from "../assets/Pin.png";
import HcgMap from "../Components/Map";
import FAQ from "../Components/FAQ";
import { useState } from "react";

const Home = () => {
  const BlogCardData = [
    {
      img: BlogCardImg1,
      title: "News",
      title2: "Empowering Local Communities through Sustainable Practices",
      discription:
        "Learn how HCG is making a positive impact in the Himalayan region",
      profile: {
        picture: ImagePlaceholder,
        name: "John Doe",
        date: "11 Jan 2022",
        time: "5 min read",
      },
    },
    {
      img: BLogCardImg2,
      title: "Success",
      title2: "Creating Sustainable Solutions for Himalayan Communities",
      discription:
        "Discover how HCG's projects are transforming lives in the Himalayas.",
      profile: {
        picture: ImagePlaceholder,
        name: "Ram Bahadur",
        date: "11 Jan 2022",
        time: "5 min read",
      },
    },
    {
      img: BlogCardImg3,
      title: "Conservation",
      title2: "Preserving Biodiversity in the Himalayan Region",
      discription:
        "Learn about HCG's efforts to protect and restore the fragile ecosystem.",
      profile: {
        picture: ImagePlaceholder,
        name: "Hari Tuladhar",
        date: "11 Jan 2022",
        time: "5 min read",
      },
    },
  ];

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
  const cardsPerPage = 3;
  const totalCards = BlogCardData2.length;

  // useEffect(() => {
  //   if (currentIndex < 0) {
  //     setCurrentIndex(totalCards - cardsPerPage);
  //   } else if (currentIndex >= totalCards) {
  //     setCurrentIndex(0);
  //   }
  // }, [currentIndex, totalCards]);

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
      <HeaderCard />
      <Content />
      <section className="flex flex-col items-center justify-center bg-green-50 pb-[40px]">
        <div className="flex flex-col justify-center items-center w-2/3 border">
          <h1 className="text-xl font-bold text-center">Latest</h1>
          <h1 className="text-2xl font-bold text-center">
            Stay Updated with HCG
          </h1>
          <p className="text-center">
            Explore our latest activities and updates from HCG.
          </p>
        </div>
        <div className="px-10 py-10 md:flex md:flex-wrap md:gap-[32px] justify-center">
          {BlogCardData.map((items, index) => (
            <BlogCard
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
        <div>
          <button className="h-[48px] w-[131px] border">View All</button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center pt-5 pb-[40px]">
        <div className="flex flex-col justify-center items-center w-2/3">
          <h1 className="text-xl font-bold text-center">Our initatives</h1>
          <h1 className="text-2xl font-bold text-center">Impact Initiatives</h1>
          <p className="text-center">
            Read about our project impacts and success initatives.
          </p>
        </div>
        <div className="px-10 py-10 md:flex md:flex-wrap md:gap-[32px] justify-center">
          {BlogCardData2.map((items, index) => (
            <BlogCard2
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
        <div>
          <button className="h-[48px] w-[131px] ">View All</button>
        </div>
      </section>
      {/* CTA section */}
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
            By Clicking Sign Up you're confirming that you agree with our Terms
            and Conditions.
          </h3>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center py-[48px] px-[85.5px]">
          <h1 className="text-[16px] text-green-900 font-semibold text-center">
            Connect
          </h1>
          <h2 className="font-semicold text-[32px] text-green-900 text-center">
            Get in Touch
          </h2>
          <h3 className="text-[16px] text-green-900 text-center">
            Have a question or suggestion? We'd love to hear from you!
          </h3>
        </div>
        <div className="px-[29.5px] flex justify-center pb-[48px]">
          <ContactForm />
        </div>
      </section>
      {/* Contact/16/  */}
      <div className="flex flex-col  items-center pt-[52px] gap-40 w-full pb-[32px]">
        <div className="flex flex-col px-5 md:flex-row md:gap-[80px] md:w-full md:justify-between md:px-[64px]">
          <div className="pb-[28px] md:w-full ">
            <h1 className="text-[#0C4E47] text-[16px] font-semibold">
              Discover
            </h1>
            <h2 className="text-[#0C4E47] text-[48px] font-bold">
              Contact HCG
            </h2>
            <p className="text-[#0C4E47] text-[18px] font-normal">
              Explore our interactive map to find our loaction and get
              directions.
            </p>
          </div>
          <ul className=" flex flex-col gap-4 md:w-full">
            <li className="flex gap-4 h-[28px]  items-center">
              <img src={Mail} alt="Mail" className="h-4 w-5" />
              <h1 className="text-[#0C4E47] text-[20px] font-bold">Email</h1>
              <h2 className="text-[#0C4E47] text-[16px] font-normal">
                info@hcg.org
              </h2>
            </li>
            <li className="flex gap-4 h-[28px]  items-center">
              <img src={Phone} alt="Phone" className="h-4 w-5" />
              <h1 className="text-[#0C4E47] text-[20px] font-bold">Phone</h1>
              <h2 className="text-[#0C4E47] text-[16px] font-normal">
                +977-44587745
              </h2>
            </li>
            <li className="flex gap-4 h-[28px]  items-center">
              <img src={Pin} alt="Pin" className="h-4 w-5" />
              <h1 className="text-[#0C4E47] text-[20px] font-bold">Office</h1>
              <h2 className="text-[#0C4E47] text-[16px] font-normal">
                123 Sample, Bagmati, Kathmandu
              </h2>
            </li>
          </ul>
        </div>
        <div className=" relative w-full h-[500px] mb-10 md:px-[64px]">
          <HcgMap lng="85.330991" lat="27.725406" name="map" />
        </div>
      </div>

      {/* hiring section */}
      <div className="pt-[32px] flex flex-col items-center border gap-[24px] pb-[32px]">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[32px] ">We're hiring!</h1>
          <h2>Join our team to make an Impact</h2>
        </div>
        <button className="cursor-pointer border-[1px] border-[#0C4E47] w-[160px] h-[48px] text-[16px] font-normal text-[#0C4E47]">
          Open Positions
        </button>
      </div>
      <div className="md:flex md:justify-center">
        <div className="flex flex-col gap-[44px] md:w-[70%] ">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-[40px] text-[#0C4E47]">FAQs</h1>
            <h2 className="border w-[70%] text-center text-[18px] text-[#0C4E47]">
              Find quick answers to common questions about HCG
            </h2>
          </div>
          <div>
            <FAQ />
          </div>
          <div className="flex flex-col items-center gap-[24px]">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[32px] text-[#0C4E47]">
                Still have a question?
              </h1>
              <h2 className="font-normal text-[18px] text-[#0C4E47]">
                Contact us for more information
              </h2>
            </div>
            <button className="cursor-pointer border-[1px] border-[#0C4E47] w-[160px] h-[48px] text-[16px] font-normal text-[#0C4E47]">
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="border">
        <div className="px-10 py-10  overflow-x-scroll gap-5 border border-red-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {displayedCards.map((items, index) => (
            <BlogCard2
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
      </div>
    </>
  );
};

export default Home;
