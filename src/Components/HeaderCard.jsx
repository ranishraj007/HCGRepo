// import React from "react";
import CardBackgroundImage from "../assets/cardBackground.jpeg";

const HeaderCard = () => {
  return (
    <>
      <div
        className=" bg-cover bg-center h-[520px] m-5"
        style={{ backgroundImage: `url(${CardBackgroundImage})` }}
      >
        <div className="flex flex-col justify-center items-center gap-[24px] w-full h-full bg-opacity-[62%] bg-[#D5D5D5]">
          <div className=" flex flex-col justify-center items-center z-50">
            <h1 className="text-green-950 text-3xl font-bold text-center">
              Preserving the Himalayan Environment for Future Generations
            </h1>
            <h3 className="text-green-950 text-xl text-center">
              Join us in our mission to protect the Himalayan environment and
              mitigate disasters through sustainable development.
            </h3>
          </div>
          <div className="flex justify-center self-center w-full z-50">
            <button className="border primary px-6 py-3 md:flex gap-[8px] bg-green-950 justify-center items-center text-white hover:border-blue-800">
              <span>Join HCG Newsletterl</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCard;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Background Image with Opacity</title>
//   <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.2.4/dist/tailwind.min.css" rel="stylesheet">
//   <style>
//     /* Custom style to handle the background image opacity */
//     .bg-opacity-80 {
//       position: relative;
//       overflow: hidden;
//     }
//     .bg-opacity-80::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background: inherit;
//       opacity: 0.8;
//       z-index: 1;
//     }
//     .bg-opacity-80 > * {
//       position: relative;
//       z-index: 2;
//     }
//   </style>
// </head>
// <body class="bg-gray-100">
//   <div class="relative bg-opacity-80 bg-[url('https://example.com/your-image.jpg')] bg-cover bg-center h-64 flex items-center justify-center">
//     <p class="text-white text-xl">Your content here</p>
//   </div>
// </body>
// </html>
