import React from "react";

function Benefits() {
  return (
    <div
      className="mx-auto flex h-screen w-full flex-col items-center justify-center px-6 py-32 text-white"
      id="benefits"
    >
      <h3 className="mb-6 text-center text-4xl text-pink-300">
        Why Choose Us?
      </h3>
      <h1 className="mb-16 text-center text-5xl font-bold text-black lg:text-7xl">
        Benefits of Joining Our GYM
      </h1>

      <div className="grid w-4/5 grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="mb-8 flex items-start lg:mb-0">
          <div className="text-5xl text-pink-300 lg:text-7xl">
            <ion-icon name="barbell-outline"></ion-icon>
          </div>
          <div className="ml-6">
            <h3 className="mb-4 text-3xl font-bold text-black lg:text-4xl">
              Video Instruction
            </h3>
            <p className="text-lg text-black lg:text-xl">
              Video introduction is a concise presentation that offers an
              overview of the content, purpose, and highlights of the upcoming
              video.
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-start lg:mb-0">
          <div className="text-5xl text-pink-300 lg:text-7xl">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>
          <div className="ml-6">
            <h3 className="mb-4 text-3xl font-bold text-black lg:text-4xl">
              Training Calendar
            </h3>
            <p className="text-lg text-black lg:text-xl">
              A training calendar provides a structured plan outlining workout
              sessions, rest days, and specific exercises tailored to individual
              fitness goals over a designated period.
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-start lg:mb-0">
          <div className="text-5xl text-pink-300 lg:text-7xl">
            <ion-icon name="wifi-outline"></ion-icon>
          </div>
          <div className="ml-6">
            <h3 className="mb-4 text-3xl font-bold text-black lg:text-4xl">
              Free Apps & Wifi
            </h3>
            <p className="text-lg text-black lg:text-xl">
              Free apps and WiFi are invaluable resources for staying connected
              and accessing a wide range of digital services and content without
              any cost.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="text-5xl text-pink-300 lg:text-7xl">
            <ion-icon name="hand-right-outline"></ion-icon>
          </div>
          <div className="ml-6">
            <h3 className="mb-4 text-3xl font-bold text-black lg:text-4xl">
              Community Support
            </h3>
            <p className="text-lg text-black lg:text-xl">
              Community support fosters a sense of belonging, provides
              encouragement, and facilitates shared learning experiences among
              individuals pursuing common goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
