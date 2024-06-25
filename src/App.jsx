import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Sidebar from "./Components/navbar/Sidebar";
import Footer from "./Components/footer/Footer";
import "./App.css";

const Home = lazy(() => import("./Components/home/Home"));
const Comunidad = lazy(() => import("./Components/comunidad/Comunidad"));

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Sidebar />
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comunidad-academica" element={<Comunidad />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
