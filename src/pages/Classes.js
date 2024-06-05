import React, { useEffect, useRef, useState } from "react";
import ClassesCart from "../components/ClassesCart";

function Classes() {
  const [classItems, setClassItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const ref = useRef();
  const isInitialMount = useRef(true);

  function handleClose(e) {
    if (ref.current && !ref.current.contains(e.target)) setShowCart(false);
  }

  function handleShowCart() {
    if (classItems.length > 0) setShowCart((open) => !open);
  }

  function handleItemDelete(id) {
    setClassItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      if (updatedItems.length === 0) setShowCart(false);
      return updatedItems;
    });
  }

  useEffect(() => {
    if (showCart) {
      document.addEventListener("mousedown", handleClose);
    } else {
      document.removeEventListener("mousedown", handleClose);
    }
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [showCart]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setClassItems(items);
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem("cart", JSON.stringify(classItems));
    }
  }, [classItems]);

  return (
    <main className="p-16">
      <div className="relative">
        {/* Pilates babes heading */}
        <h1 className="mb-16 text-center text-5xl uppercase">Classes</h1>
        <div className="cursor-pointer" onClick={handleShowCart}>
          <img
            src="shopping-bag.png"
            alt="Shopping cart"
            className="absolute right-0 top-0 h-10 w-10"
          />
          <div>
            {classItems.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black p-2 text-sm text-white">
                {classItems.length}
              </span>
            )}
          </div>
        </div>

        <div>
          {/* Cart Box */}
          {showCart && (
            <div
              ref={ref}
              className="absolute right-0 top-16 cursor-default border bg-white p-8 text-xl"
            >
              {/* Header */}
              <header className="mb-8 flex items-center justify-between gap-12">
                <div className="flex items-center gap-2">
                  <img src="check.png" alt="Check" className="h-8 w-8" />
                  <p>Item has been added to your shopping basket</p>
                </div>
                <div>
                  <img
                    src="close.png"
                    alt="Close"
                    className="h-4 w-4 cursor-pointer"
                    onClick={() => setShowCart(false)}
                  />
                </div>
              </header>

              {/* Main */}
              <main>
                {classItems.map((item) => (
                  <div
                    className="mb-8 flex items-center justify-between"
                    key={item.id}
                  >
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={item.imageSrc}
                        alt="Sticker"
                        className="h-14 w-12"
                      />
                      <h6>{item.title}</h6>
                      <span>({item.quantity})</span>
                    </div>
                    <div>
                      <img
                        src="bin.png"
                        alt="bin"
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => handleItemDelete(item.id)}
                      />
                    </div>
                  </div>
                ))}

                <button className="mb-4 block w-full rounded-full bg-black py-4 text-white">
                  Check out
                </button>
              </main>
            </div>
          )}
        </div>

        <main className="flex flex-col gap-8">
          <ClassesCart
            id={1}
            type="singleClass"
            imageSrc="courses/singleClass.jpeg"
            title="Classic Pilates - Single Class 55 min online"
            price="22.00"
            soldOut={false}
            description="Get to know the classic Pilates method on the mat or deepen your practice.
          As always, you don't have to be a professional. I look forward to seeing you.
          You can, but don't have to, turn on your camera. ;)"
            classItems={classItems}
            setclassItems={setClassItems}
          />
          <ClassesCart
            id={2}
            type="privateClass"
            imageSrc="courses/privateClass.jpeg"
            title="Private Class - 55 min online"
            price="100.00"
            soldOut={false}
            description="Individual session tailored to your needs. To arrange an appointment,
          please contact me by email at hi@pilatesbabes.com."
            classItems={classItems}
            setclassItems={setClassItems}
          />
          <ClassesCart
            id={3}
            type="slot1Hamburg"
            imageSrc="courses/slot1Hamburg.jpeg"
            title="Pilates Babes Brunch Slot 1 Hamburg"
            price="65.00"
            soldOut={true}
            description="Finally the time has come again and the sale for the next Pilates Brunch 2024 is entering the next round."
            classItems={classItems}
            setclassItems={setClassItems}
          />
          <ClassesCart
            id={4}
            type="slot2Hamburg"
            imageSrc="courses/slot2Hamburg.jpeg"
            title="Pilates Babes Brunch Slot 2 Hamburg"
            price="65.00"
            soldOut={true}
            description="Finally the time has come again and the sale for the next Pilates Brunch 2024 is entering the next round."
            classItems={classItems}
            setclassItems={setClassItems}
          />
        </main>
      </div>
    </main>
  );
}

export default Classes;
