import React, { useEffect, useState } from "react";
import { userReviews } from "../data/userReviews";

function Testimonials() {
  const [currentClient, setCurrentClient] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentClient((prevClient) =>
        prevClient >= userReviews.length - 1 ? 0 : prevClient + 1,
      );
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function handleSliderClick(index) {
    setCurrentClient(index);
  }

  return (
    <div className="my-32 ml-auto h-[50rem] w-4/5 bg-[#a08679]">
      <div className="flex gap-8">
        <div className="flex w-2/5 flex-col justify-center p-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-6 w-6">
              <img
                src={userReviews[currentClient].picture}
                alt="client"
                className="h-full w-full"
              />
            </div>
            <div className="text-lg text-white">
              <h3 className="mb-2 text-xl text-black">
                {userReviews[currentClient].name}
              </h3>
              <span>Profession</span>
            </div>
          </div>
          <p className="mb-6 border border-white bg-[#a08679] p-4 text-xl leading-6 text-white">
            {userReviews[currentClient].description}
          </p>
          <div className="relative flex w-full items-center justify-center gap-1.5">
            {userReviews.map((_, index) => (
              <hr
                key={index}
                className={`relative z-10 mt-2 h-1 w-9 cursor-pointer rounded border-none bg-white ${
                  currentClient === index ? "bg-stone-500" : ""
                }`}
                onClick={() => handleSliderClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="flex h-[50rem] w-3/5 flex-col justify-center bg-gradient-to-r from-black/10 to-gray-400/50 p-8">
          <div className="w-3/5">
            <h3 className="mb-2 text-xl text-black">Testimonial</h3>
            <span className="mb-3 block text-4xl font-bold text-white">
              What Our Clients Say?
            </span>
            <p className="mb-2 h-[15rem] text-xl leading-6 text-white">
              {userReviews[currentClient].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
