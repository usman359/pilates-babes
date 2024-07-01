import React from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-10 w-3/5" id="courses">
      <div className="mb-4 flex gap-4">
        <div className="rounded-lg bg-yellow-300 p-4">
          <h1 className="mb-4 text-3xl font-semibold tracking-wide text-white md:text-4xl">
            Single Class
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-white md:text-base">
            Get to know the Body mirror by sema method on the mat or deepen your
            practice. As always, you don't have to be a professional. I look
            forward to you. You can but don't have to turn on your camera.
          </p>
          <button className="btn" onClick={() => navigate("single-class")}>
            Join The Class
          </button>
        </div>

        <div className="rounded-lg bg-pink-500 p-4">
          <h1 className="mb-4 text-3xl font-semibold tracking-wide text-white md:text-4xl">
            Private Class
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-white md:text-base">
            Individual session tailored to your needs. To make an appointment,
            please contact me by email at hi@pilatesbabes.com. If you have
            health problems or are pregnant, please contact me in advance.
          </p>
          <button className="btn" onClick={() => navigate("private-class")}>
            Private Class
          </button>
        </div>
      </div>

      <div className="rounded-lg bg-yellow-300 p-4">
        <h1 className="mb-4 text-3xl font-semibold tracking-wide text-white md:text-4xl">
          5ca Session Pass
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-white md:text-base">
          Individual session tailored to your needs. To make an appointment,
          please contact me by email at hi@pilatesbabes.com. If you have health
          problems or are pregnant, please contact me in advance.
        </p>
        <button
          className="flex justify-center border bg-none transition-all hover:bg-[#fecdd3] hover:text-[#666]"
          onClick={() => navigate("5ca-session-pass")}
        >
          Join The Class
        </button>
      </div>
    </div>
  );
}
