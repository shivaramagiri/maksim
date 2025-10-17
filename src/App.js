import logo from "./logo.svg";
import "./App.scss";
import Header from "./layout/header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Career from "./pages/career/career";
import Contact from "./pages/contact/contact";
import Services from "./pages/services/services";
import Industries from "./pages/industries/industries";
import About from "./pages/about/about";

function App() {
  return (
    <div className="App gap-5 mb-5">

         <Header />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} /> 
         </Routes>
    </div>
  );
}

export default App;
