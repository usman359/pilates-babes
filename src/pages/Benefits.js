import React from "react";

function Benefits() {
  return (
    <div className="mx-auto w-3/5 px-6 py-32 text-white md:px-0" id="benefits">
      <h3 className="mb-6 text-center text-2xl text-pink-300">
        Why Choose Us?
      </h3>
      <h1 className="mb-12 text-center text-5xl text-black">
        Benefits of Joining Our GYM
      </h1>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="mb-8 flex items-center">
          <div className="flex items-center text-6xl text-pink-300">
            <ion-icon name="barbell-outline"></ion-icon>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-black">
              Videos Instruction
            </h3>
            <p className="text-lg text-black">
              Video introduction is a concise presentation that offers an
              overview of the content, purpose, and highlights of the upcoming
              video.
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-center">
          <div className="text-6xl text-pink-300">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-black">Training Calendar</h3>
            <p className="text-lg text-black">
              A training calendar provides a structured plan outlining workout
              sessions, rest days, and specific exercises tailored to individual
              fitness goals over a designated period.
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-center">
          <div className="text-6xl text-pink-300">
            <ion-icon name="wifi-outline"></ion-icon>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-black">Free Apps & Wifi</h3>
            <p className="text-lg text-black">
              Free apps and WiFi are invaluable resources for staying connected
              and accessing a wide range of digital services and content without
              any cost.
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-center">
          <div className="text-6xl text-pink-300">
            <ion-icon name="hand-right-outline"></ion-icon>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-black">Community Support</h3>
            <p className="text-lg text-black">
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
