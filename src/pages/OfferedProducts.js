import React, { useRef, useState, useEffect } from "react";
import Products from "../components/Products";
import Footer from "./Footer";

function OfferedProducts() {
  const [productItems, setProductItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const ref = useRef();
  const isInitialMount = useRef(true);

  function handleClose(e) {
    if (ref.current && !ref.current.contains(e.target)) setShowCart(false);
  }

  function handleShowCart() {
    if (productItems.length > 0) setShowCart((open) => !open);
  }

  function handleItemDelete(id) {
    setProductItems((prevItems) => {
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
    setProductItems(items);
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem("cart", JSON.stringify(productItems));
    }
  }, [productItems]);

  return (
    <>
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
              {productItems.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black p-2 text-sm text-white">
                  {productItems.length}
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
                  {productItems.map((item) => (
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
            <Products
              id={1}
              type="sweatshirt"
              imageSrc="sweat-shirt-1.webp"
              title="THE ORIGINAL Body mirror by sema Sweatshirt"
              price="89.00"
              soldOut={true}
              description={`THE ORIGINAL Body mirror by sema Sweatshirt:
          screen printing 
          Set-in sleeve
          2x2 rib knit at neckline, sleeve ends and bottom hem
          Herringbone neckband
          `}
              productItems={productItems}
              setProductItems={setProductItems}
            />
            {/* <Products
              id={2}
              type="sticker"
              imageSrc="sticker.jpeg"
              title="Pilates Babes Logo Sticker"
              price="1.50"
              soldOut={false}
              description="Your highly coveted Pilates Babes sticker is now finally available in the shop!"
              productItems={productItems}
              setProductItems={setProductItems}
            /> */}
            <Products
              id={3}
              type="cap"
              imageSrc="cap.jpeg"
              title="Body mirror by sema Baseball Cap"
              price="39.00"
              soldOut={false}
              description="The baseball cap is the perfect accessory for sports or everyday life."
              productItems={productItems}
              setProductItems={setProductItems}
            />
          </main>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default OfferedProducts;
