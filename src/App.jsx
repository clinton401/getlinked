
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import './fonts/ClashDisplay-Regular.otf'
import './fonts/ClashDisplay-Bold.otf'
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Contact from './component/Contact/Contact';
import Register from './component/Register/Register';
import Maintenance from './component/Maintenance';
import { AnimatePresence } from "framer-motion";
import Nomatch from './component/Nomatch';

function App() {
 const location = useLocation()

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" >
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/overview" element={<Maintenance />} />
          <Route path="/faq" element={<Maintenance />} />
          <Route path="/timeline" element={<Maintenance />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App
