import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/website/logo.png";
import { FaShoppingBag } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },

  {
    id: 2,
    name: "History",
    link: "/#sejarah",
  },

  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Maps",
    link: "/#maps",
  },
  
  {
    id: 5,
    name: "Product",
    link: "/#services",
  }
];

const Navbar = () => {
  return (
    <>
      {/* Background hijau tosca */}
      <div className="bg-[#1abc9c] shadow-md text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-[Lato] 
                          relative px-4 py-2 border-2 border-white rounded-lg shadow-lg
                          hover:bg-white hover:text-[#1abc9c] transition duration-300"
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Chemical Life
              </a>
            </div>


            {/* Link section (di tengah) */}
            <div className="flex-1 flex justify-center" data-aos="fade-down" data-aos-once="true" data-aos-delay="300">
              <ul className="hidden sm:flex items-center gap-6">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="relative inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200 
                        after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-full after:h-[3px] 
                        after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                        hover:after:scale-x-100"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order button (tetap di kanan) */}
            <Link
              to="/cart"
              className="bg-white hover:scale-105 duration-200 text-[#1abc9c] px-4 py-2 rounded-full flex items-center gap-3 font-semibold"
            >
              Order
              <FaShoppingBag className="text-xl text-[#1abc9c] drop-shadow-sm cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;
