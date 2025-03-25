import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import MapComponent from "./components/Maps/MapComponent.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Order from "./components/Order/Order.jsx";
import Sejarah from "./components/sejarah/Sejarah";
import CartPage from "./components/Cart/CartPage";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Home Page layout
const Home = () => (
  <>
    <Hero />
    <Sejarah />
    <Services />
    <Banner />
    <MapComponent />
    <Testimonials />
    <Footer />
  </>
);

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<CartPage />} /> {/* Tambahkan route Cart */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
