import React from "react";

function AboutUs() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid grid-cols-1 gap-12">
        <div className="flex justify-center">
          <img
            src="hero-img.jpg"
            alt="Body mirror by sema"
            className="w-1/2 rounded-lg shadow-lg md:h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-8 text-5xl font-bold">10 Years Experience</h1>
          <p className="mb-8 text-center text-xl">
            Labore vero lorem eos sed aliquy ipsum aliquy sed.
          </p>

          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2">
            <div>
              <div className="mb-4 text-9xl text-pink-500">
                <ion-icon name="barbell-outline"></ion-icon>
              </div>
              <h3 className="mb-4 text-5xl font-bold">Certified GYM Center</h3>
              <p className="text-xl">
                Ipsum sanctu dolor ipsum dolore sit et kasd duo
              </p>
            </div>

            <div>
              <div className="mb-4 text-9xl text-pink-500">
                <ion-icon name="trophy-outline"></ion-icon>
              </div>
              <h3 className="mb-4 text-5xl font-bold">Award Winning</h3>
              <p className="text-xl">
                Ipsum sanctu dolor ipsum dolore sit et kasd duo
              </p>
            </div>
          </div>

          <button className="duration-400 mt-12 cursor-pointer border-2 border-white bg-transparent px-12 py-3 text-lg shadow-lg hover:bg-pink-500 hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
