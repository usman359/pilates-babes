import React from "react";
import { handleScrollTo } from "../helpers/scroll";
import { useNavigate } from "react-router-dom";

export default function Navbar({ navItems }) {
  const navigate = useNavigate();

  return (
    <ul className="flex items-center gap-12 text-3xl text-white">
      {navItems.map((item) => (
        <li
          key={item}
          className={`${item === "Home" ? "text-pink-200" : ""} cursor-pointer transition-all hover:text-pink-300`}
          onClick={() => {
            item === "Products"
              ? navigate("products")
              : handleScrollTo(item.toLowerCase());
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
