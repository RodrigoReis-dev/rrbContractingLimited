import { Route, Routes } from "react-router-dom"

import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Projects from "./components/Projects"

function App() {
  return (
    <div className="flex flex-col mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
