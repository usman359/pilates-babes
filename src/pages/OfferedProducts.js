import React from "react";
import Products from "../components/Products";

function OfferedProducts() {
  return (
    <div className="mx-auto w-[80%] p-16">
      {/* Pilates babes heading */}
      <h1 className="mb-16 text-center text-5xl uppercase">Our Products</h1>
      <main className="flex flex-col gap-8">
        <Products
          type="sweatshirt"
          imageSrc="sweat-shirt.jpeg"
          title="THE ORIGINAL Pilates Babes Sweatshirt"
          price="89.00"
          soldOut={true}
          description="THE ORIGINAL Pilates Babes Unisex Sweatshirt:
          screen printing 
          Set-in sleeve
          2x2 rib knit at neckline, sleeve ends and bottom hem
          Herringbone neckband
          Contrasting crescent moon at the neck, made of own fabric
          Simple topstitching at the neckline
          Double stitching on sleeve ends, sleeve cuffs and bottom hem"
        />
        <Products
          type="sticker"
          imageSrc="sticker.jpeg"
          title="Pilates Babes Logo Sticker"
          price="1.50"
          soldOut={false}
          description="Your highly coveted Pilates Babes sticker is now finally available in the shop!"
        />
        <Products
          type="cap"
          imageSrc="cap.jpeg"
          title="Pilates Babes Baseball Cap"
          price="39.00"
          soldOut={false}
          description="The baseball cap is the perfect accessory for sports or everyday life."
        />
      </main>
    </div>
  );
}

export default OfferedProducts;
