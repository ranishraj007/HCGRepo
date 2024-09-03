// import React from "react";

const BlogCard = ({
  img,
  title,
  title2,
  discription,
  picture,
  name,
  date,
  time
}) => {
  return (
    <>
      <div className="flex flex-col md:max-w-[416px]">
        <img src={img} alt="cardimage" className="h-[300px] min-w-full" />
        <div className="py-4">
          <h1>{title}</h1>
          <h2 className="text-3xl py-4">{title2}</h2>
          <h3 className="text-sm">{discription}</h3>
        </div>
        <div className="flex gap-5">
          <img src={picture} alt="profile" />
          <div>
            <h4>{name}</h4>
            <div className="flex gap-5">
              <h4>{date}</h4>
              <h4>
                <li></li>
              </h4>
              <h4>{time}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
