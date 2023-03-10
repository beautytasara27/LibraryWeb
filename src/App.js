import Header from "./layouts/Header/index";
import Structure from "./layouts/Structure/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Library from "./pages/Library";
import Contact from "./pages/Contact";
import Footer from "./layouts/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="bg-[#2192FF] sticky top-0 z-50 bg-opacity-90" >
          <Header />
        </div>
        <Structure>
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/library" element={<Library />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Structure>
        <div><Footer/></div>
      </Router>
    </div>
  );
}

export default App;
