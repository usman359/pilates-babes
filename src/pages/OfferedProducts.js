import React, { useRef, useState, useEffect } from "react";
import Products from "../components/Products";

function OfferedProducts() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const ref = useRef();

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
    if (cartItems.length > 0)
      localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart"));
    if (items) setCartItems(items);
  }, []);

  function handleShowCart() {
    if (cartItems.length > 0) setShowCart((open) => !open);
  }

  function handleClose(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowCart(false);
    }
  }

  function handleItemDelete(id) {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      if (updatedItems.length === 0) setShowCart(false);
      return updatedItems;
    });
  }

  return (
    <main className="p-16">
      <div className="relative">
        {/* Pilates babes heading */}
        <h1 className="mb-16 text-center text-5xl uppercase">Our Products</h1>
        <div className="cursor-pointer" onClick={handleShowCart}>
          <img
            src="shopping-bag.png"
            alt="Shopping cart"
            className="absolute right-0 top-0 h-10 w-10"
          />
          <div>
            {cartItems.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black p-2 text-sm text-white">
                {cartItems.length}
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
                {cartItems.map((item, index) => (
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
          <Products
            id={1}
            type="sweatshirt"
            imageSrc="sweat-shirt.jpeg"
            title="THE ORIGINAL Pilates Babes Sweatshirt"
            price="89.00"
            soldOut={true}
            description={`THE ORIGINAL Pilates Babes Unisex Sweatshirt:
          screen printing 
          Set-in sleeve
          2x2 rib knit at neckline, sleeve ends and bottom hem
          Herringbone neckband
          Contrasting crescent moon at the neck, made of own fabric
          Simple topstitching at the neckline
          Double stitching on sleeve ends, sleeve cuffs and bottom hem`}
            setCartItems={setCartItems}
          />
          <Products
            id={2}
            type="sticker"
            imageSrc="sticker.jpeg"
            title="Pilates Babes Logo Sticker"
            price="1.50"
            soldOut={false}
            description="Your highly coveted Pilates Babes sticker is now finally available in the shop!"
            setCartItems={setCartItems}
          />
          <Products
            id={3}
            type="cap"
            imageSrc="cap.jpeg"
            title="Pilates Babes Baseball Cap"
            price="39.00"
            soldOut={false}
            description="The baseball cap is the perfect accessory for sports or everyday life."
            setCartItems={setCartItems}
          />
        </main>
      </div>
    </main>
  );
}

export default OfferedProducts;
