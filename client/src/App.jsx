import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, CreatePost, HomePage, CaptiVate,About } from "./pages";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main className=" w-full bg-sky-50 min-h-[calc(100vh-73px)] py-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/captivate" element={<CaptiVate />} />
          <Route path="/generate" element={<CreatePost />} />
          <Route path="/community" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
