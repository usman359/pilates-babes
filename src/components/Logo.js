import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src="logo-new.jpg" alt="Logo" className="h-36 w-36" />
    </Link>
  );
}
