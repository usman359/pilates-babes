import React from "react";
import Products from "../components/Products";

function OfferedProducts() {
  return (
    <div className="mx-auto w-[80%] p-16">
      {/* Pilates babes heading */}
      <h1 className="mb-12 text-center text-5xl uppercase">Pilates Babes</h1>
      <main className="flex flex-col gap-8">
        <Products
          imageSrc="cap.jpeg"
          title="THE ORIGINAL Pilates Babes Sweatshirt"
          price="89.00"
          soldOut={true}
          description="The baseball cap is the perfect accessory for sports or everyday life."
        />
        <Products
          imageSrc="cap.jpeg"
          title="Pilates Babes Logo Sticker"
          price="1.50"
          soldOut={false}
          description="Your highly coveted Pilates Babes sticker is now finally available in the shop! "
        />
        <Products
          imageSrc="cap.jpeg"
          title="Pilates Babes Logo Sticker"
          price="1.50"
          soldOut={false}
          description="Your highly coveted Pilates Babes sticker is now finally available in the shop! "
        />
      </main>
    </div>
  );
}

export default OfferedProducts;
