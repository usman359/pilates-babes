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
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
      {/* Image container */}
      <div className="flex items-center justify-center p-8">
        <img
          src={imageSrc}
          alt="Pilate babes single class"
          className="block h-full"
        />
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
        <div className="mb-8 flex w-[20%] items-center justify-between border border-black py-4">
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
        {id === 1 && (
          <>
            <p className="mb-4">
              Discover the revolution of Pilates: Your transformation starts
              here!
            </p>
            <p className="mb-4">
              My Pilates classes go beyond classic Pilates. I integrate modern
              elements from functional training, strength training, and
              endurance training to offer you a unique and effective workout.
            </p>
            <h1 className="mb-2">Why my classes are special:</h1>
            <ul>
              <li>
                <strong>Innovative Exercises</strong>
                <p>
                  I combine traditional Pilates techniques with innovative
                  approaches to strengthen and shape your body holistically.
                </p>
              </li>
              <li>
                <strong>Functional Training</strong>
                <p>
                  Elements from functional training enhance your mobility and
                  everyday functionality.
                </p>
              </li>
              <li>
                <strong>Strength and Endurance</strong>
                <p>
                  My workouts include powerful and endurance-boosting exercises
                  that push you to your limits and beyond.
                </p>
              </li>
              <li>
                <strong>Playful Rules</strong>
                <p>
                  Some exercises are designed with playful elements and rules to
                  bring variety and fun to your training.
                </p>
              </li>
              <p className="mt-8">
                Experience how the fusion of classic Pilates and modern training
                methods can revolutionize your fitness. There is so much to
                discover, and I am confident that you will be thrilled. Come out
                of curiosity and stay out of full conviction.
              </p>
              <p className="mt-4">
                Put yourself in my hands and be excited about the change. The
                only thing I expect from you is discipline and a willingness to
                change.
              </p>
              <p>
                Don't wait any longer - book your course now and start your
                transformation! Try my method and be surprised by the results.
                Your new fitness journey awaits you!
              </p>
            </ul>
          </>
        )}
        {id === 2 && (
          <>
            <p className="mb-4">
              Discover the revolution of Pilates: Your transformation starts
              here!
            </p>
            <p className="mb-4">
              My Pilates classes go beyond classic Pilates. I integrate modern
              elements from functional training, strength training, and
              endurance training to offer you a unique and effective workout.
            </p>
            <h1 className="mb-2">Why my classes are special:</h1>
            <ul>
              <li>
                <strong>Innovative Exercises</strong>
                <p>
                  I combine traditional Pilates techniques with innovative
                  approaches to strengthen and shape your body holistically.
                </p>
              </li>
              <li>
                <strong>Functional Training</strong>
                <p>
                  Elements from functional training enhance your mobility and
                  everyday functionality.
                </p>
              </li>
              <li>
                <strong>Strength and Endurance</strong>
                <p>
                  My workouts include powerful and endurance-boosting exercises
                  that push you to your limits and beyond.
                </p>
              </li>
              <li>
                <strong>Playful Rules</strong>
                <p>
                  Some exercises are designed with playful elements and rules to
                  bring variety and fun to your training.
                </p>
              </li>
              <p className="mt-8">
                Experience how the fusion of classic Pilates and modern training
                methods can revolutionize your fitness. There is so much to
                discover, and I am confident that you will be thrilled. Come out
                of curiosity and stay out of full conviction.
              </p>
              <p className="mt-4">
                Put yourself in my hands and be excited about the change. The
                only thing I expect from you is discipline and a willingness to
                change.
              </p>
              <p>
                Don't wait any longer - book your course now and start your
                transformation! Try my method and be surprised by the results.
                Your new fitness journey awaits you!
              </p>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default ClassesCart;
