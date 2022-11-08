
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import  Home from "./components/Home/Home"
import  About from "./components/About/About"
import  Portfolio from "./components/Portfolio/Portfolio"
import  ContactUs from "./components/ContactUs/ContactUs"

const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App