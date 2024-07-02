import React from "react";

function AboutUs() {
  return (
    <div
      className="flex h-screen items-center justify-center bg-gray-100 px-6"
      id="about"
    >
      <div className="grid grid-cols-1 gap-12">
        <div className="flex justify-center">
          <img
            src="hero-img.jpg"
            alt="Body mirror by sema"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 lg:text-5xl">
            10 Years Experience
          </h1>
          <p className="mb-8 text-center text-xl text-gray-700 lg:text-2xl">
            Labore vero lorem eos sed aliquy ipsum aliquy sed.
          </p>

          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2">
            <div>
              <div className="mb-4 text-6xl text-pink-300">
                <ion-icon name="barbell-outline"></ion-icon>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-4xl">
                Certified GYM Center
              </h3>
              <p className="text-lg text-gray-700 lg:text-2xl">
                Ipsum sanctu dolor ipsum dolore sit et kasd duo
              </p>
            </div>

            <div>
              <div className="mb-4 text-6xl text-pink-300">
                <ion-icon name="trophy-outline"></ion-icon>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-4xl">
                Award Winning
              </h3>
              <p className="text-lg text-gray-700 lg:text-2xl">
                Ipsum sanctu dolor ipsum dolore sit et kasd duo
              </p>
            </div>
          </div>

          <button className="mt-16 rounded border-2 border-gray-900 bg-transparent px-8 py-4 text-xl font-semibold text-gray-900 transition duration-300 hover:bg-pink-300 hover:text-white lg:text-2xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
