import React, { useState } from "react";

function Products({
  id,
  imageSrc,
  title,
  price,
  soldOut,
  description,
  setCartItems,
}) {
  const [quantity, setQuantity] = useState(1);

  function handleDecQuantity() {
    if (quantity > 1) setQuantity((q) => q - 1);
  }

  function handleIncQuantity() {
    setQuantity((q) => q + 1);
  }

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
      {/* Image container */}
      <div className="flex items-center justify-center">
        <img src={imageSrc} alt="Pilate babes cap" className="block w-[80%]" />
      </div>

      {/* Content container */}
      <div className="mt-2 justify-self-center text-3xl">
        <h6 className="mb-8 text-xl font-light uppercase">
          Pilates babes the shop
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
          <span
            className={`ml-4 ${quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
            onClick={handleDecQuantity}
          >
            -
          </span>
          <span>{quantity}</span>
          <span className="mr-4 cursor-pointer" onClick={handleIncQuantity}>
            +
          </span>
        </div>
        <button
          className={`mb-8 w-1/2 rounded-full border-2 border-black px-12 py-4 transition-all duration-150 ${soldOut ? "cursor-not-allowed" : "hover:shadow-inner-border cursor-pointer"} disabled:cursor-not-allowed`}
          disabled={soldOut}
          onClick={() =>
            setCartItems((prevItems) => [
              ...prevItems,
              { id, title, imageSrc, price, quantity },
            ])
          }
        >
          {soldOut ? "Sold out" : "Add to cart"}
        </button>
        <p className="mb-8">{description}</p>
        {/* <div className="flex flex-col gap-2">
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
          </div> */}
      </div>
    </div>
  );
}

export default Products;
