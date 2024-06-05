import React, { useState } from "react";

function ClassesCart({
  id,
  imageSrc,
  title,
  price,
  soldOut,
  description,
  classItems,
  setclassItems,
}) {
  const [quantity, setQuantity] = useState(1);

  function handleDecQuantity() {
    if (quantity > 1) {
      const decQuantity = quantity - 1;
      setQuantity(decQuantity);
      setclassItems((prevItems) => {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: decQuantity } : item,
        );
      });
    }
  }

  function handleIncQuantity() {
    const incQuantity = quantity + 1;
    setQuantity(incQuantity);
    setclassItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: incQuantity } : item,
      );
    });
  }

  function handleAddToCart() {
    if (!soldOut && !classItems.some((item) => item.id === id)) {
      setclassItems((prevItems) => [
        ...prevItems,
        { id, title, imageSrc, price, quantity },
      ]);
    }
  }

  const isSoldOut = soldOut;
  const isInCart = classItems.some((item) => item.id === id);
  const isButtonDisabled = isSoldOut || isInCart;

  return (
    <div className="grid gap-8 bg-stone-200 sm:grid-cols-1 md:grid-cols-2">
      {/* Image container */}
      <div className="flex items-center justify-center p-8">
        <img src={imageSrc} alt="Pilate babes cap" className="block w-[80%]" />
      </div>

      {/* Content container */}
      <div className="mt-2 justify-self-center p-8 text-3xl">
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
            className={`ml-4 ${soldOut || quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
            onClick={!soldOut && quantity > 1 ? handleDecQuantity : undefined}
          >
            -
          </span>
          <span>{quantity}</span>
          <span
            className={`mr-4 ${soldOut ? "cursor-not-allowed" : "cursor-pointer"}`}
            onClick={!soldOut ? handleIncQuantity : undefined}
          >
            +
          </span>
        </div>
        <button
          className={`mb-8 w-1/2 rounded-full border-2 border-black px-12 py-4 transition-all duration-150 ${isButtonDisabled ? "cursor-not-allowed" : "cursor-pointer hover:shadow-inner-border"} disabled:cursor-not-allowed`}
          disabled={isButtonDisabled}
          onClick={handleAddToCart}
        >
          {soldOut ? "Sold out" : isInCart ? "In cart" : "Add to cart"}
        </button>
        <p className="mb-8">{description}</p>
      </div>
    </div>
  );
}

export default ClassesCart;
