import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Page1 } from "./Components/Page1";
import { Page2 } from "./Components/Page2";
import { Users } from "./Components/Users";

export default function App() {
  return (
    <Routes>
      {/* path="" elemet */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/registration/one" element={<Page1 />}></Route>
      <Route path="/registration/two" element={<Page2 />}></Route>
      <Route path="/users" element={<Users />}></Route>
    </Routes>
  );
}