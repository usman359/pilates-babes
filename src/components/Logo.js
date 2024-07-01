import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <img src="logo-new.jpg" alt="Logo" />
      </Link>
    </div>
  );
}
