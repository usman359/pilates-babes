import React from "react";

function OfferedProducts() {
  return (
    <div className="mx-auto w-[80%] p-16">
      {/* Pilates babes heading */}
      <h1 className="mb-12 text-center text-5xl uppercase">Pilates Babes</h1>
      {/* Pilates babes product grid container */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {/* Image container */}
        <div className="flex justify-end">
          <img src="cap.jpeg" alt="Pilate babes cap" className="block w-full" />
        </div>

        {/* Content container */}
        <div className="mt-2 text-3xl">
          <h6 className="mb-8 text-xl font-light uppercase">
            Pilates babes the shop
          </h6>
          <h4 className="mb-12 text-5xl capitalize">
            Pilates Babes Baseball Cap
          </h4>
          <div className="mb-8 flex items-center gap-2">
            <span>€39.00 EUR</span>
            <span className="rounded-full bg-red-300 px-6 py-2 text-white">
              Sold out
            </span>
          </div>
          <div className="mb-8">VAT included.</div>
          <div className="text-sm">Number</div>
          <div className="mb-8 flex w-[20%] items-center justify-between border py-4">
            <span className="ml-4 cursor-pointer">-</span>
            <span>1</span>
            <span className="mr-4 cursor-pointer">+</span>
          </div>
          <button
            className="mb-8 w-1/2 rounded-full border-2 border-black px-12 py-4 disabled:cursor-not-allowed"
            disabled
          >
            Sold out
          </button>
          <p className="mb-8">
            The baseball cap is the perfect accessory for sports or everyday
            life.
          </p>
          <div className="flex flex-col gap-2">
            <div>
              <span>Color: </span>
              <span>Black</span>
            </div>
            <div>
              <span>100% Cotton</span>
            </div>
            <div>
              <span>PILATES BABES print on front</span>
            </div>
            <div>Adjustable metal fastener </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferedProducts;
