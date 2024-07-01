import React from "react";
import { handleScrollTo } from "../helpers/scroll";

export default function Navbar({ navItems }) {
  return (
    <ul className="flex items-center gap-12 text-3xl text-white">
      {navItems.map((item) => (
        <li
          key={item}
          className={`${item === "Home" ? "text-red-600" : ""} cursor-pointer transition-all hover:text-red-600`}
          onClick={() => handleScrollTo(item.toLowerCase())}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
