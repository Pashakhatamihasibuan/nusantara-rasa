import React, { useState } from "react";
import Logo from "/logo.svg";

const navItems = [
  { href: "#beranda", label: "Beranda" },
  { href: "#menu", label: "Menu" },
  { href: "#cerita-kami", label: "Cerita Kami" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#beranda");

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setActiveNav(targetId);
    setIsMenuOpen(false); // Tutup menu setelah klik
  };

  return (
    <div className="sticky top-0 z-50 bg-white py-3.5 shadow-md">
      <div className="flex flex-row max-w-6xl mx-auto justify-between items-center px-4 md:px-0">
        <img src={Logo} alt="Logo Nusantara Rasa - Restoran Kuliner Indonesia" className="w-28 md:w-auto" />

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="block md:hidden focus:outline-none hover:cursor-pointer">
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row gap-x-8 font-inter">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`${activeNav === item.href ? "text-primary font-medium" : "text-ternary hover:text-primary"}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu with Transition */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col space-y-4 text-center py-4 bg-white shadow-md">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`block py-2 ${activeNav === item.href ? "text-primary font-medium" : "text-ternary hover:text-primary"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
