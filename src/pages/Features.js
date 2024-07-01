import React from "react";

function Features() {
  return (
    <div
      className="mx-auto flex h-screen flex-col items-center justify-center gap-12 bg-gray-100 px-4 py-16 md:px-8 lg:px-16"
      id="features"
    >
      <div className="flex w-full max-w-6xl flex-col items-center gap-4 rounded-lg bg-yellow-300 p-8 shadow-lg lg:flex-row lg:p-16">
        <div className="mb-4 text-6xl text-pink-300 lg:mb-0">
          <ion-icon name="calendar-outline"></ion-icon>
        </div>
        <div className="text-white">
          <h4 className="mb-4 text-4xl font-bold lg:text-5xl">Progression</h4>
          <p className="text-lg lg:text-xl">
            Progression is the journey towards improvement and growth, marked by
            continuous advancement and development. It's the steady climb up the
            ladder of success, fueled by determination and perseverance. With
            each step forward, new horizons emerge, revealing opportunities for
            further expansion and evolution.
          </p>
        </div>
      </div>

      <div className="flex w-full max-w-6xl flex-col items-center gap-4 rounded-lg bg-pink-500 p-8 shadow-lg lg:flex-row lg:p-16">
        <div className="mb-4 text-6xl text-pink-300 lg:mb-0">
          <ion-icon name="barbell-outline"></ion-icon>
        </div>
        <div className="text-white">
          <h4 className="mb-4 text-4xl font-bold lg:text-5xl">Workout</h4>
          <p className="text-lg lg:text-xl">
            Workout involves physical activity designed to improve strength,
            endurance, flexibility, or overall fitness levels. It's a dynamic
            process that challenges the body and mind, pushing individuals to
            surpass their previous limits and reach new heights of performance.
            Whether it's lifting weights, or any other form of exercise, the
            goal remains the same.
          </p>
        </div>
      </div>

      <div className="flex w-full max-w-6xl flex-col items-center gap-4 rounded-lg bg-yellow-300 p-8 shadow-lg lg:flex-row lg:p-16">
        <div className="mb-4 text-6xl text-pink-300 lg:mb-0">
          <ion-icon name="nutrition-outline"></ion-icon>
        </div>
        <div className="text-white">
          <h4 className="mb-4 text-4xl font-bold lg:text-5xl">Nutrition</h4>
          <p className="text-lg lg:text-xl">
            Nutrition is the process of providing or obtaining the necessary
            food and nutrients for health, growth, and vitality. It's about
            nourishing the body with the essential building blocks it needs to
            function optimally. This includes not only macronutrients like
            carbohydrates, proteins, and fats but also micronutrients such as
            vitamins and minerals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
