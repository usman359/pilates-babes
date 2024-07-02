import React from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();

  return (
    <div
      className="mx-auto flex h-auto min-h-screen w-4/5 flex-col items-center justify-center gap-12 py-12"
      id="courses"
    >
      <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex-1 rounded-lg bg-[#a08679] p-10 md:p-20">
          <h1 className="mb-4 text-3xl font-semibold tracking-wide text-white lg:text-4xl">
            Single Class
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-white lg:text-2xl">
            Get to know the Body mirror by sema method on the mat or deepen your
            practice. As always, you don't have to be a professional. I look
            forward to you. You can but don't have to turn on your camera.
          </p>
          <button
            className="w-full rounded bg-[#d9b7a5] px-4 py-3 text-lg font-semibold text-white hover:bg-[#c99e87] lg:text-2xl"
            onClick={() => navigate("single-class")}
          >
            Join The Class
          </button>
        </div>

        <div className="flex-1 rounded-lg bg-[#a08679] p-10 md:p-20">
          <h1 className="mb-4 text-3xl font-semibold tracking-wide text-white lg:text-4xl">
            Private Class
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-white lg:text-2xl">
            Individual session tailored to your needs. To make an appointment,
            please contact me by email at hi@pilatesbabes.com. If you have
            health problems or are pregnant, please contact me in advance.
          </p>
          <button
            className="w-full rounded bg-[#d9b7a5] px-4 py-3 text-lg font-semibold text-white hover:bg-[#c99e87] lg:text-2xl"
            onClick={() => navigate("private-class")}
          >
            Private Class
          </button>
        </div>
      </div>

      <div className="w-full rounded-lg bg-[#a08679] p-10 md:p-20">
        <h1 className="mb-4 text-3xl font-semibold tracking-wide text-white lg:text-4xl">
          5ca Session Pass
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-white lg:text-2xl">
          Individual session tailored to your needs. To make an appointment,
          please contact me by email at hi@pilatesbabes.com. If you have health
          problems or are pregnant, please contact me in advance.
        </p>
        <button
          className="w-full rounded bg-[#d9b7a5] px-4 py-3 text-lg font-semibold text-white hover:bg-[#c99e87] lg:text-2xl"
          onClick={() => navigate("5ca-session-pass")}
        >
          Join The Class
        </button>
      </div>
    </div>
  );
}
