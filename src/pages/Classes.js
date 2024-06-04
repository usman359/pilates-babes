import React from "react";
import ClassesCart from "../components/ClassesCart";

function Classes() {
  return (
    <div className="mx-auto w-[80%] p-16">
      {/* Pilates babes heading */}
      <h1 className="mb-16 text-center text-5xl uppercase">Courses</h1>
      <main className="flex flex-col gap-8">
        <ClassesCart
          type="singleClass"
          imageSrc="courses/singleClass.jpeg"
          title="Classic Pilates - Single Class 55 min online"
          price="22.00"
          soldOut={false}
          description="Get to know the classic Pilates method on the mat or deepen your practice.
          As always, you don't have to be a professional. I look forward to seeing you.
          You can, but don't have to, turn on your camera. ;)"
        />
        <ClassesCart
          type="privateClass"
          imageSrc="courses/privateClass.jpeg"
          title="Private Class - 55 min online"
          price="100.00"
          soldOut={false}
          description="Individual session tailored to your needs. To arrange an appointment,
          please contact me by email at hi@pilatesbabes.com."
        />
        <ClassesCart
          type="slot1Hamburg"
          imageSrc="courses/slot1Hamburg.jpeg"
          title="Pilates Babes Brunch Slot 1 Hamburg"
          price="65.00"
          soldOut={true}
          description="Finally the time has come again and the sale for the next Pilates Brunch 2024 is entering the next round."
        />
        <ClassesCart
          type="slot2Hamburg"
          imageSrc="courses/slot2Hamburg.jpeg"
          title="Pilates Babes Brunch Slot 2 Hamburg"
          price="65.00"
          soldOut={true}
          description="Finally the time has come again and the sale for the next Pilates Brunch 2024 is entering the next round."
        />
      </main>
    </div>
  );
}

export default Classes;
