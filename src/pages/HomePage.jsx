import React from "react";

// Import gambar (contoh)
import chef from "../assets/images/gbr-chef.png";
import gbr1 from "../assets/images/gbr-makanan-1.png";
import gbr2 from "../assets/images/gbr-accesories-menu.png";
import gbr3 from "../assets/images/gbr-chef-menu.png";
import gbr4 from "../assets/images/gbr-nasigoreng-kampung.png";
import gbr5 from "../assets/images/gbr-rendang-padang.png";
import gbr6 from "../assets/images/gbr-sate-ayam.png";
import gbr7 from "../assets/images/gambar-sop-buntut-bakar.png";
import gbr8 from "../assets/images/gbr-ayam-betutu.png";
import gbr9 from "../assets/images/gbr-gurame-asam-manis.png";
import gbr10 from "../assets/images/gbr-gado-gado-jakarta.png";
import gbr11 from "../assets/images/gbr-esteler.png";
import gbr12 from "../assets/images/gbr-cheff.png";
import gbr13 from "../assets/images/gbr-room1.png";
import gbr14 from "../assets/images/gbr-room2.png";
import gbr15 from "../assets/images/gbr-doll.png";
import gbr16 from "../assets/images/gbr-adm.png";
import gbr17 from "../assets/images/gbr-vegetables.png";
import gbr18 from "../assets/images/gbr-room3.png";
import gbr19 from "../assets/images/gbr-room4.png";
import gbr20 from "../assets/images/gbr-room5.png";
import gbr21 from "../assets/images/gbr-accesories-1.png";
import gbr22 from "../assets/images/gbr-makanan-2.png";
import gbr23 from "../assets/images/gbr-accesories-about.png";
import hero from "../assets/images/gbr-abstract.png";

const HomePage = () => {
  return (
    <main id="beranda">
      {/* Hero Section */}
      <div className="-scroll-mt-20 grid md:grid-cols-2 items-center mt-12 px-4 md:px-0">
        <div className="text-center md:text-left mx-auto">
          <h1 className="font-caprasimo text-[2.25rem] md:text-4xl text-secondary">
            Seni Kuliner Modern dengan <br className="hidden md:block" />
            Sentuhan Tradisi Indonesia
          </h1>
        </div>
        <div>
          <img src={hero} alt="Seni Kuliner Nusantara" className="w-full h-auto object-cover hidden md:block" />
        </div>
      </div>

      {/* Chef Section */}
      <div className="grid md:grid-cols-2 px-4 md:px-0">
        <div>
          <img src={chef} alt="Tim Koki Nusantara Rasa" className="w-full h-auto object-cover" />
        </div>
        <div className="p-6 md:p-12 flex items-center">
          <div>
            <div className="text-center md:text-left mb-4 md:text-base">
              <span className="text-secondary font-medium">Selamat Datang di</span> <span className="text-primary font-caprasimo">Nusantara Rasa,</span>
            </div>
            <p className="font-inter text-ternary leading-relaxed text-sm md:text-base">
              Tempat di mana tradisi bertemu inovasi. Kami menghadirkan pengalaman kuliner yang memadukan cita rasa autentik Indonesia dengan teknik modern yang
              elegan. Setiap hidangan dirancang untuk membawa Anda dalam perjalanan rasa melalui kekayaan rempah, bahan-bahan lokal terbaik, dan kreativitas
              tanpa batas. Dengan suasana yang hangat dan pelayanan yang prima, Nusantara Rasa bukan sekadar restoran, melainkan sebuah perayaan akan keindahan
              kuliner Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div id="menu" className="bg-secondary text-center p-12 scroll-mt-10">
        <h2 className="text-white font-caprasimo text-3xl">Menu</h2>
        <p className="text-ternary font-inter text-base mt-4 leading-relaxed sm:px-1 md:px-[94px]">
          Jelajahi kelezatan Nusantara Rasa! Dari hidangan utama seperti nasi goreng gurih dan rendang lembut, hingga dessert manis seperti klepon lava dan es
          teler modern. Nikmati juga minuman khas seperti wedang jahe hangat dan es cendol menyegarkan. Bagi vegetarian, kami menyediakan pilihan sehat berbahan
          sayuran segar.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden w-full h-full">
        <div className="flex w-full h-full transition-transform duration-500 ease-in-out">
          <div className="w-1/2 flex flex-col">
            <img src={gbr1} className="h-1/2 object-cover" alt="Restaurant" />
            <img src={gbr2} className="h-1/2 object-cover" alt="Chef" />
          </div>
          <div className="w-1/2 overflow-hidden">
            <img src={gbr3} className="w-full h-full object-cover" alt="Food" />
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {[gbr4, gbr5, gbr6, gbr7, gbr8, gbr9, gbr10, gbr11, gbr9].map((src, idx) => (
          <div key={idx} className="bg-white p-4">
            <img src={src} alt={`Menu ${idx + 1}`} className="w-full h-60 object-cover" />
            <h3 className="text-lg mt-2 font-caprasimo text-primary">Judul Menu</h3>
            <p className="text-base font-medium font-caprasimo text-secondary">IDR 100.000</p>
          </div>
        ))}
      </div>

      {/* Cerita Kami */}
      <div id="cerita-kami" className="bg-secondary text-center p-12 scroll-mt-10">
        <h2 className="text-white font-caprasimo text-3xl">Cerita Kami</h2>
        <p className="text-ternary font-inter text-base mt-4 leading-relaxed sm:px-1 md:px-[94px]">
          Di Nusantara Rasa, kami percaya bahwa setiap hidangan adalah sebuah cerita. Cerita tentang tanah, budaya, dan warisan kuliner Indonesia. Tim kami
          terdiri dari koki-koki berbakat yang berdedikasi untuk menciptakan pengalaman makan yang tak terlupakan. Dengan menggunakan bahan-bahan terbaik dari
          petani dan nelayan lokal, kami menghadirkan rasa yang autentik namun tetap inovatif. Mari bergabung dengan kami dalam merayakan keindahan kuliner
          Indonesia.
        </p>
      </div>

      {/* Carousel 2 */}
      <div className="relative overflow-hidden w-full h-full">
        <div className="flex w-full h-full transition-transform duration-500 ease-in-out">
          <div className="w-1/2 overflow-hidden">
            <img src={gbr21} className="w-full h-full object-cover" alt="Food" />
          </div>
          <div className="w-1/2 flex flex-col">
            <img src={gbr22} className="h-1/2 object-cover" alt="Restaurant" />
            <img src={gbr23} className="h-1/2 object-cover" alt="Chef" />
          </div>
        </div>
      </div>

      {/* Galeri */}
      <div id="galeri" className="bg-secondary text-center p-12 scroll-mt-10">
        <h2 className="text-white font-caprasimo text-3xl">Galeri</h2>
        <p className="text-ternary font-inter text-base mt-4 leading-relaxed sm:px-1 md:px-[94px]">
          Jelajahi kelezatan hidangan utama kami yang menggugah selera. Dari nasi goreng yang gurih hingga rendang yang lembut, setiap hidangan dibuat dengan
          cinta dan bahan-bahan terbaik.
        </p>
      </div>

      {/* Galeri Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {[gbr12, gbr13, gbr14, gbr15, gbr16, gbr17, gbr18, gbr19, gbr20].map((src, idx) => (
          <div key={idx} className="bg-white p-4">
            <img src={src} alt={`Galeri ${idx + 1}`} className="w-full h-60 object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
