import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Components/Routes/Home";
import About from "./Components/Routes/About";
import Contact from "./Components/Routes/Contact";
import Services from "./Components/Routes/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
