import React from "react";

function Features() {
  return (
    <div
      className="mx-auto flex flex-col items-center justify-center gap-6 py-32 md:flex-row"
      id="features"
    >
      <div className="flex items-center gap-4 bg-yellow-300 p-16">
        <div className="text-6xl text-pink-300">
          <ion-icon name="calendar-outline"></ion-icon>
        </div>
        <div className="text-white">
          <h4 className="mb-4 text-2xl">Progression</h4>
          <p className="text-lg text-white">
            Progression is the journey towards improvement and growth, marked by
            continuous advancement and development. It's the steady climb up the
            ladder of success, fueled by determination and perseverance. With
            each step forward, new horizons emerge, revealing opportunities for
            further expansion and evolution.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-pink-500 p-16">
        <div className="text-6xl text-pink-300">
          <ion-icon name="barbell-outline"></ion-icon>
        </div>
        <div className="text-white">
          <h4 className="mb-4 text-2xl">Workout</h4>
          <p className="text-lg text-white">
            Workout involves physical activity designed to improve strength,
            endurance, flexibility, or overall fitness levels. It's a dynamic
            process that challenges the body and mind, pushing individuals to
            surpass their previous limits and reach new heights of performance.
            Whether it's lifting weights, or any other form of exercise, the
            goal remains the same.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-yellow-300 p-16">
        <div className="text-6xl text-pink-300">
          <ion-icon name="nutrition-outline"></ion-icon>
        </div>
        <div className="text-white">
          <h4 className="mb-4 text-2xl">Nutrition</h4>
          <p className="text-lg text-white">
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
