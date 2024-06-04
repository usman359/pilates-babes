import React from "react";

function ClassesCart({ type, imageSrc, title, price, soldOut, description }) {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
      {/* Image container */}
      <div className="flex items-center justify-center">
        <img src={imageSrc} alt="Pilate babes cap" className="block w-[80%]" />
      </div>

      {/* Content container */}
      <div className="mt-2 justify-self-center text-3xl">
        <h6 className="mb-8 text-xl font-light uppercase">
          Body mirror by sema the shop
        </h6>
        <h4 className="mb-12 text-5xl capitalize">{title}</h4>
        <div className="mb-8 flex items-center gap-4">
          <span>{`€${price} EUR`}</span>
          {soldOut && (
            <span className="rounded-full bg-red-300 px-6 py-2 text-white">
              Sold out
            </span>
          )}
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
        <p className="mb-8">{description}</p>
      </div>
    </div>
  );
}

export default ClassesCart;
