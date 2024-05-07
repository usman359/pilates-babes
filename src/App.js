import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}
