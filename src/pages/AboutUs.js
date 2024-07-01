import React from "react";

function AboutUs() {
  return (
    <div
      className="relative mx-auto flex h-screen w-80 items-center justify-center gap-12"
      id="about"
    >
      <div className="top-1/5 absolute flex flex-col gap-12">
        <div className="flex justify-center">
          <img src="hero-img.jpg" alt="Body mirror by sema" className="w-3/5" />
        </div>
        <div className="text-center">
          <h1 className="mb-12 mt-24 text-4xl">10 Years Experience</h1>
          <p className="mb-12 text-lg">
            Labore vero lorem eos sed aliquy ipsum aliquy sed.
          </p>

          <div className="grid grid-cols-2 gap-12">
            <div className="text-center">
              <div className="text-6xl text-pink-500">
                <ion-icon name="barbell-outline"></ion-icon>
              </div>
              <h3 className="mb-7 text-2xl font-bold">Certified GYM Center</h3>
              <p className="text-lg">
                Ipsum sanctu dolor ipsum dolore sit et kasd duo
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl text-pink-500">
                <ion-icon name="trophy-outline"></ion-icon>
              </div>
              <h3 className="mb-7 text-2xl font-bold">Award Winning</h3>
              <p className="text-lg">
                Ipsum sanctu dolor ipsum dolore sit et kasd duo
              </p>
            </div>
          </div>
        </div>
        <button className="duration-400 cursor-pointer border-2 border-black bg-transparent px-12 py-3 text-lg text-black shadow-lg transition-all hover:bg-pink-500 hover:text-white">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
