import "./App.css";
import Comunidad from "./Components/comunidad/Comunidad";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Sidebar from "./Components/navbar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comunidadAcademica" element={<Comunidad />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
