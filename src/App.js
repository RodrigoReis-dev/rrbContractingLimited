import { Route, Routes } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'

import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="flex flex-col mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop
        className="animate-pulse hover:bg-black"
        smooth
        color="orange"
        width="40"
        height="32"
      />
    </div>
  )
}

export default App
