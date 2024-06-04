import React, { useState } from "react";

function ClassesCart({
  id,
  type,
  imageSrc,
  title,
  price,
  soldOut,
  description,
  classCartItems,
  setclassCartItems,
}) {
  const [quantity, setQuantity] = useState(1);

  function handleDecQuantity() {
    if (quantity > 1) {
      const decQuantity = quantity - 1;
      setQuantity(decQuantity);
      setclassCartItems((prevItems) => {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: decQuantity } : item,
        );
      });
    }
  }

  function handleIncQuantity() {
    const incQuantity = quantity + 1;
    setQuantity(incQuantity);
    setclassCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: incQuantity } : item,
      );
    });
  }

  function handleAddToCart() {
    if (!soldOut)
      setclassCartItems((prevItems) => [
        ...prevItems,
        { id, title, imageSrc, price, quantity },
      ]);
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
          <span
            className={`ml-4 cursor-pointer ${quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
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
          disabled={soldOut || classCartItems.some((item) => item.id === id)}
          onClick={handleAddToCart}
        >
          {soldOut ? "Sold out" : "Add"}
        </button>
        <p className="mb-8">{description}</p>
      </div>
    </div>
  );
}

export default ClassesCart;
