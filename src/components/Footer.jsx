import React from "react";

const Footer = () => {
  return (
    <footer className="text-white pt-7">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-caprasimo text-primary mb-4">Tentang Kami</h3>
          <p className="text-sm text-ternary">
            Nusantara Rasa menghadirkan seni kuliner modern dengan sentuhan tradisi Indonesia. Nikmati pengalaman kuliner yang autentik dengan teknik modern
            yang elegan.
          </p>
        </div>
        {/* Navigasi */}
        <div>
          <h3 className="text-xl font-caprasimo text-primary mb-4">Navigasi</h3>
          <ul className="space-y-2">
            <li>
              <a href="#beranda" className="text-ternary hover:text-primary">
                Beranda
              </a>
            </li>
            <li>
              <a href="#menu" className="text-ternary hover:text-primary">
                Menu
              </a>
            </li>
            <li>
              <a href="#cerita-kami" className="text-ternary hover:text-primary">
                Cerita Kami
              </a>
            </li>
            <li>
              <a href="#galeri" className="text-ternary hover:text-primary">
                Galeri
              </a>
            </li>
            <li>
              <a href="#kontak" className="text-ternary hover:text-primary">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Formulir Kontak */}
        <div id="kontak">
          <h3 className="text-xl font-caprasimo text-primary mb-4 scroll-mt-10">Hubungi Kami</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama"
              className="w-full px-4 py-2 bg-gray-100 text-ternary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-100 text-ternary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Pesan"
              className="w-full px-4 py-2 bg-gray-100 text-ternary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-80">
              Kirim
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 bg-secondary text-center p-5 text-sm text-gray-300">
        &copy; 2025 <span className="font-caprasimo text-primary">Nusantara Rasa</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
