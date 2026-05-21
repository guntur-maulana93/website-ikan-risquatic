import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import FishLoader from "../components/FishLoader";
// ================= IMPORT GAMBAR =================
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.png";
import banner3 from "../assets/img/banner3.png";
import aboutImg from "../assets/img/about.png";

// =============== IMPORT GAMBAR PRODUK ===============
import arwanaImg from "../assets/img/products/arwana.jpg";
import botiaImg from "../assets/img/products/botia.jpg";
import lohanImg from "../assets/img/products/lohan.jpg";
import glowfishImg from "../assets/img/products/glowfish.jpg";
import chfImg from "../assets/img/products/chf.jpg";
import rtcImg from "../assets/img/products/rtc.jpg";
import arwana2Img from "../assets/img/products/arwana2.jpg";
import blackghostImg from "../assets/img/products/blackghost.jpg";
import prtdeImg from "../assets/img/products/prtde.jpg";
import pakanImg from "../assets/img/products/pakan.jpg";
import candilaImg from "../assets/img/products/candila.jpg";
import filterImg from "../assets/img/products/filter.jpg";
import batu_apungImg from "../assets/img/products/batu_apung.jpg";
import karang_jaheImg from "../assets/img/products/karang_jahe.jpg";
import bioringImg from "../assets/img/products/bioring.jpg";
import kapasImg from "../assets/img/products/kapas.jpg";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Home() {

  // ================= SLIDER =================
  const slides = [
    {
      image: banner1,
      title: "Selamat Datang di RISQUATIC",
      desc: "Temukan keindahan biota air dan peralatan lengkap untuk hobi Anda.",
    },

    {
      image: banner2,
      title: "Koleksi Ikan Hias Premium",
      desc: "Berbagai jenis ikan hias berkualitas dengan kesehatan terjamin.",
    },

    {
      image: banner3,
      title: "Peralatan Aquarium Terbaik",
      desc: "Filter, lampu LED, aquarium, dan aksesoris lengkap.",
    },
  ];

  // ================= PRODUK =================
  const products = [
    {
      id: 1,
      name: "Arwana Silver Albino",
      price: "Rp 550.000",
      image: arwanaImg,
      category: "Ikan",
      desc: "Ikan Arwana dengan ukuran 60cm dan harga terjangkau.",
    },

    {
      id: 2,
      name: "Botia",
      price: "Rp 125.000",
      image: botiaImg,
      category: "Ikan",
      desc: "Ikan endemik Indonesia dari wilayah Sumatera dan Kalimantan.",
    },

    {
      id: 3,
      name: "Lohan",
      price: "Rp 150.000",
      image: lohanImg,
      category: "Ikan",
      desc: "Ikan dengan warna yang tidak kalah bagus dengan coraknya.",
    },

    {
      id: 4,
      name: "Glowfish",
      price: "Rp 3.000",
      image: glowfishImg,
      category: "Ikan",
      desc: "Promo setiap pembelian 10 ekor, akan di berikan bonus 2 ekor.",
    },

    {
      id: 5,
      name: "Chinese High Fin (CHF)",
      price: "Rp 125.000",
      image: chfImg,
      category: "Ikan",
      desc: "Ikan yang tergolong langka dan memiliki penampilan yang menarik.",
    },

    {
      id: 6,
      name: "RED TAIL CATFISH (RTC)",
      price: "Rp 50.000",
      image: rtcImg,
      category: "Ikan",
      desc: "Ikan dengan ekor berwarna merah menyala yang sangat mencolok.",
    },

    {
      id: 7,
      name: "Arowana Silver",
      price: "Rp 150.000",
      image: arwana2Img,
      category: "Ikan",
      desc: "Ikan Arwana dengan warna silver yang elegan dan ukuran sekitar 20cm.",
    },

    {
      id: 8,
      name: "Black Ghost",
      price: "Rp 10.000",
      image: blackghostImg,
      category: "Ikan",
      desc: "Ikan unik dengan fisik seperti bendera yang berkibar.",
    },

    {
      id: 9,
      name: "Guppy PRTDE",
      price: "Rp 3.000",
      image: prtdeImg,
      category: "Ikan",
      desc: "Ikan guppy dengan warna yang sangat menarik dan bervariasi.",
    },

    {
      id: 10,
      name: "Pakan Ikan",
      price: "Rp 8.000",
      image: pakanImg,
      category: "Bahan",
      desc: "makanan ikan dengan kualitas terbaik untuk kesehatan dan pertumbuhan optimal.",
    },

    {
      id: 11,
      name: "Lampu Candila",
      price: "Rp 70.000-100.000",
      image: candilaImg,
      category: "Alat",
      desc: "Harga berbeda-beda tergantung ukuran, dari 30cm sampai 60cm.",
    },

    {
      id: 12,
      name: "Filter Aquarium",
      price: "Rp 78.000",
      image: filterImg,
      category: "Alat",
      desc: "Filter yang cocok untuk aquarium 50cm ke bawah.",
    },

    {
      id: 13,
      name: "Batu Apung",
      price: "Rp 10.000",
      image: batu_apungImg,
      category: "Bahan",
      desc: "Media filter alami yang efektif untuk menjaga kualitas air.",
    },

    {
      id: 14,
      name: "Karang Jahe",
      price: "Rp 10.000",
      image: karang_jaheImg,
      category: "Bahan",
      desc: "Media filter alami yang kaya akan bakteri baik untuk aquarium.",
    },

    {
      id: 15,
      name: "Bioring",
      price: "Rp 15.000",
      image: bioringImg,
      category: "Bahan",
      desc: "Media filter buatan yang dirancang untuk meningkatkan kualitas air.",
    },

    {
      id: 16,
      name: "Kapas Filter",
      price: "Rp 10.000",
      image: kapasImg,
      category: "Bahan",
      desc: "Media filter yang efektif untuk menyaring kotoran dan partikel halus.",
    }
  ]
  // ================= STATE =================
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // ================= CATEGORY =================
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // ================= LOADING =================
  const [loading, setLoading] = useState(true);

  // ================= FILTER PRODUCT =================
  const filteredProducts =
    selectedCategory === "Semua"
      ? products
      : products.filter(
        (product) => product.category === selectedCategory
      );

  // ================= AUTO SLIDE =================
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // ================= LOADING SCREEN =================
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);

  }, []);

  // ================= AUTO CLOSE MOBILE MENU =================
  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }

    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  // ================= CLOSE MENU WHEN CLICK ANYWHERE =================
  useEffect(() => {

    const handleClickOutside = (e) => {

      // jika yang diklik bukan menu mobile dan bukan tombol hamburger
      if (
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".menu-btn")
      ) {
        setMenuOpen(false);
      }

    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };

  }, []);

  // ================= SHOW LOADER =================
  if (loading) {
    return <FishLoader />;
  }

  // ================= BUTTON =================
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // ================= NAVBAR CSS =================
  const navbarStyle = `
html{
  scroll-behavior:smooth;
}

*{
  box-sizing:border-box;
}

img{
  will-change:transform;
  transform:translateZ(0);
}

.navbar{
  position:fixed;
  top:0;
  width:100%;
  padding:18px 25px;
  background:rgba(8,17,32,0.72);
  backdrop-filter:blur(18px);
  display:flex;
  justify-content:space-between;
  align-items:center;
  z-index:1000;
  border-bottom:1px solid rgba(125,211,252,0.08);
}

.logo{
  font-size:30px;
  font-weight:800;
  font-family:'Montserrat', sans-serif;
  color:#38bdf8;
  letter-spacing:1px;
  text-shadow:0 0 20px rgba(56,189,248,0.4);
}

.desktop-menu{
  display:flex;
  gap:28px;
  align-items:center;
}

.desktop-menu a,
.mobile-menu a{
  color:white;
  text-decoration:none;
  font-weight:600;
  transition:0.3s;
  font-family:'Inter', sans-serif;
}

.desktop-menu a:hover,
.mobile-menu a:hover{
  color:#7dd3fc;
}

.menu-btn{
  display:none;
  background:none;
  border:none;
  color:white;
  font-size:32px;
  cursor:pointer;
}

.mobile-menu{
  position:fixed;
  top:80px;
  right:20px;
  background:rgba(15,35,65,0.95);
  backdrop-filter:blur(18px);
  padding:20px;
  border-radius:18px;
  display:flex;
  flex-direction:column;
  gap:18px;
  z-index:2000;
  min-width:220px;
  box-shadow:0 10px 30px rgba(0,0,0,0.4);
}

.logout-btn{
  padding:12px 22px;
  border:none;
  border-radius:14px;
  background:linear-gradient(135deg,#ef4444,#dc2626);
  color:white;
  cursor:pointer;
  font-weight:600;
  font-family:'Inter', sans-serif;
}

@media(max-width:768px){

  .desktop-menu{
    display:none;
  }

  .menu-btn{
    display:block;
  }
}

/* ================= PRODUCT GRID ================= */

.product-grid{
  display:grid;
  gap:24px;

  grid-template-columns:repeat(2,1fr);
}

/* TABLET */
@media(min-width:768px){
  .product-grid{
    grid-template-columns:repeat(3,1fr);
  }
}

/* LAPTOP */
@media(min-width:1200px){
  .product-grid{
    grid-template-columns:repeat(4,1fr);
  }
}
  /* ================= RESPONSIVE MOBILE ================= */

@media(max-width:768px){

  /* NAVBAR */
  .navbar{
    padding:14px 18px;
  }

  .logo{
    font-size:22px;
  }

  .mobile-menu{
    top:70px;
    right:15px;
    width:200px;
    padding:18px;
  }

  .mobile-menu a{
    font-size:15px;
  }

  /* HERO */
  #beranda h1{
    font-size:38px !important;
    line-height:1.2;
  }

  #beranda p{
    font-size:16px !important;
    line-height:1.6;
    padding:0 10px;
  }

  /* BUTTON SLIDER */
  button{
    touch-action:manipulation;
  }

  /* SECTION */
  section{
    padding-left:20px !important;
    padding-right:20px !important;
  }

  /* TITLE */
  h2{
    font-size:34px !important;
  }

  /* PRODUK */
  .product-grid{
    grid-template-columns:1fr !important;
    gap:20px;
  }

  .product-grid img{
    height:220px !important;
  }

  /* CARD */
  .product-grid div{
    border-radius:20px !important;
  }

  /* BUTTON CATEGORY */
  .category-btn{
    padding:10px 16px !important;
    font-size:14px !important;
  }

  /* KONTAK */
  .contact-grid{
    grid-template-columns:1fr !important;
  }

  /* CONTACT CARD */
  .contact-card{
    padding:20px !important;
  }

  /* ICON */
  .contact-icon{
    width:58px !important;
    height:58px !important;
    font-size:26px !important;
  }

  /* FOOTER */
  footer{
    padding:30px 20px !important;
  }

}

/* ================= SMALL PHONE ================= */

@media(max-width:480px){

  #beranda h1{
    font-size:30px !important;
  }

  #beranda p{
    font-size:14px !important;
  }

  h2{
    font-size:28px !important;
  }

  .logo{
    font-size:20px;
  }

  .mobile-menu{
    width:180px;
  }

}
`;

  return (
    <>
      <style>{navbarStyle}</style>

      <div
        style={{
          background: `
      linear-gradient(
        180deg,
        #081120 0%,
        #0b1d35 20%,
        #12345a 45%,
        #1b4f7e 65%,
        #11457a 82%,
        #071a33 100%
      )
    `,
          color: "white",
          fontFamily: "'Inter', sans-serif",
          minHeight: "100vh",
        }}
      >

        {/* ================= NAVBAR ================= */}
        <nav className="navbar">

          <h2 className="logo">RISQUATIC</h2>

          {/* DESKTOP MENU */}
          <div className="desktop-menu">
            <a href="#beranda" onClick={() => setMenuOpen(false)}>
              Beranda
            </a>

            <a href="#produk" onClick={() => setMenuOpen(false)}>
              Produk
            </a>

            <a href="#tentang" onClick={() => setMenuOpen(false)}>
              Tentang
            </a>

            <a href="#kontak" onClick={() => setMenuOpen(false)}>
              Kontak
            </a>
          </div>

          {/* HAMBURGER */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </nav>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="mobile-menu">

            <a
              href="#beranda"
              onClick={() => setMenuOpen(false)}
            >
              Beranda
            </a>

            <a
              href="#produk"
              onClick={() => setMenuOpen(false)}
            >
              Produk
            </a>

            <a
              href="#tentang"
              onClick={() => setMenuOpen(false)}
            >
              Tentang
            </a>

            <a
              href="#kontak"
              onClick={() => setMenuOpen(false)}
            >
              Kontak
            </a>

          </div>
        )}

        {/* ================= HERO ================= */}
        <section
          id="beranda"
          style={{
            position: "relative",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                opacity: index === currentSlide ? 1 : 0,
                transition: "all 1s ease",
              }}
            >

              {/* IMAGE */}
              <img
                src={slide.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                }}
              />

              {/* OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(8,17,32,0.90))",
                }}
              />

              {/* TEXT */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  width: "90%",
                }}
              >
                <h1
                  style={{
                    fontSize: "78px",
                    fontWeight: "800",
                    marginBottom: "22px",
                    fontFamily: "'Montserrat', sans-serif",
                    textShadow: "0 8px 30px rgba(0,0,0,0.4)",
                  }}
                >
                  {slide.title}
                </h1>

                <p
                  style={{
                    fontSize: "22px",
                    color: "#dbeafe",
                    maxWidth: "760px",
                    margin: "auto",
                    lineHeight: "1.7",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {slide.desc}
                </p>
              </div>
            </div>
          ))}

          {/* PREV */}
          <button onClick={prevSlide} style={buttonPrev}>
            ❮
          </button>

          {/* NEXT */}
          <button onClick={nextSlide} style={buttonNext}>
            ❯
          </button>
        </section>

        {/* ================= PRODUK ================= */}
        <motion.section
          id="produk"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: "110px 60px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <h2
              style={{
                fontSize: "50px",
                marginBottom: "15px",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Produk Terbaru
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "18px",
              }}
            >
              Produk pilihan dengan kualitas terbaik
            </p>

            {/* ================= CATEGORY BUTTON ================= */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                flexWrap: "wrap",
                marginTop: "30px",
              }}
            >
              {["Semua", "Ikan", "Alat", "Bahan"].map((category) => (
                <button
                  className="category-btn"
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: "12px 22px",
                    borderRadius: "14px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "600",
                    color: "white",

                    background:
                      selectedCategory === category
                        ? "linear-gradient(135deg,#38bdf8,#0ea5e9)"
                        : "rgba(255,255,255,0.08)",

                    boxShadow:
                      selectedCategory === category
                        ? "0 10px 25px rgba(56,189,248,0.25)"
                        : "none",

                    transition: "0.3s ease",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "rgba(15,35,65,0.72)",

                  borderRadius: "26px",
                  overflow: "hidden",

                  border: "1px solid rgba(255,255,255,0.06)",

                  backdropFilter: "blur(18px)",

                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",

                  display: "flex",
                  flexDirection: "column",
                  height: "100%",

                  transition: "0.35s ease",
                }}
              >

                {/* IMAGE */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "240px",
                    objectFit: "cover",
                  }}
                />

                {/* INFO */}
                <div
                  style={{
                    padding: "24px",

                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "24px",
                      marginBottom: "12px",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      color: "#38bdf8",
                      fontWeight: "700",
                      marginBottom: "12px",
                      fontSize: "20px",
                    }}
                  >
                    {product.price}
                  </p>

                  <p
                    style={{
                      color: "#dbeafe",
                      lineHeight: "1.8",
                      marginBottom: "20px",
                    }}
                  >
                    {product.desc}
                  </p>

                  <a
                    href="https://wa.me/6285338168831"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...socialButton,
                      marginTop: "auto",
                    }}
                  >
                    Pesan via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ================= TENTANG ================= */}
        <motion.section
          id="tentang"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: "110px 60px",
          }}
        >
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "35px",
            }}
          >

            {/* TEXT */}
            <div>
              <h2
                style={{
                  fontSize: "48px",
                  marginBottom: "25px",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Tentang RISQUATIC
              </h2>

              <p
                style={{
                  color: "#dbeafe",
                  lineHeight: "1.9",
                  marginBottom: "20px",
                }}
              >
                RISQUATIC Bondowoso menyediakan berbagai kebutuhan aquarium,
                ikan hias, serta media filter berkualitas.
              </p>

              <p
                style={{
                  color: "#dbeafe",
                  lineHeight: "1.9",
                  marginBottom: "20px",
                }}
              >
                Berawal dari hobi, kami berdedikasi untuk menyediakan berbagai macam biota air berkualitas tinggi, peralatan aquarium terlengkap, serta pakan dan aksesoris yang terjamin mutunya.
              </p>

              <p
                style={{
                  color: "#dbeafe",
                  lineHeight: "1.9",
                }}
              >
                Kami percaya bahwa setiap aquarium memiliki ceritanya sendiri. Oleh karena itu, kami berkomitmen untuk membantu Anda mewujudkan ekosistem air yang indah, sehat, dan memukau di dalam rumah Anda.
              </p>
            </div>

            {/* IMAGE */}
            <div>
              <img
                src={aboutImg}
                alt="Tentang RISQUATIC"
                style={{
                  width: "100%",
                  borderRadius: "28px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                }}
              />
            </div>
          </div>
        </motion.section>

        {/* ================= KONTAK ================= */}
        <motion.section
          id="kontak"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: "120px 60px 60px",

            background: "transparent",

            position: "relative",
            overflow: "visible",
          }}
        >

          <div
            style={{
              maxWidth: "1200px",
              margin: "auto",
              position: "relative",
              zIndex: 2,
            }}
          >

            {/* HEADER */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "70px",
              }}
            >
              <h2
                style={{
                  fontSize: "52px",
                  marginBottom: "20px",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Hubungi Kami
              </h2>

              <p
                style={{
                  color: "#dbeafe",
                  fontSize: "18px",
                  lineHeight: "1.9",
                  maxWidth: "850px",
                  margin: "auto",
                }}
              >
                Kunjungi toko kami atau hubungi kami melalui media sosial.
                Kami tidak melayani pengiriman. Pembelian hanya bisa dilakukan
                langsung di toko.
              </p>
            </div>

            {/* GRID */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
                gap: "35px",
              }}
            >

              {/* LEFT */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >

                {/* ALAMAT */}
                <div className="contact-card" style={contactCard}>
                  <div className="contact-icon" style={iconBox}>
                    🗺️
                  </div>

                  <div>
                    <h3 style={contactTitle}>Alamat Toko</h3>

                    <p style={contactText}>
                      Jl. Yos Sudarso,
                      <br />
                      Blindungan, Bondowoso Kota
                    </p>
                  </div>
                </div>

                {/* JAM OPERASIONAL */}
                <div className="contact-card" style={contactCard}>
                  <div className="contact-icon" style={iconBox}>
                    🕰️
                  </div>

                  <div>
                    <h3 style={contactTitle}>Jam Operasional</h3>

                    <p style={contactText}>
                      Setiap hari BUKA, kecuali JUM`AT TUTUP
                      <br />
                      09.00 - 21.00 WIB
                    </p>
                  </div>
                </div>

                {/* INFORMASI */}
                <div className="contact-card" style={contactCard}>
                  <div className="contact-icon" style={iconBox}>
                    🏪
                  </div>

                  <div>
                    <h3 style={contactTitle}>Informasi Toko</h3>

                    <p style={contactText}>
                      Pembelian hanya bisa dilakukan
                      <br />
                      langsung di toko RISQUATIC.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div
                style={{
                  background: "rgba(15,35,65,0.45)",
                  border: "1px solid rgba(125,211,252,0.10)",
                  borderRadius: "28px",
                  padding: "40px",
                  backdropFilter: "blur(18px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                }}
              >
                <h3
                  style={{
                    fontSize: "30px",
                    marginBottom: "30px",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Ikuti Media Sosial Kami
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >

                  {/* INSTAGRAM */}
                  <a
                    href="https://www.instagram.com/risquatic"
                    target="_blank"
                    rel="noreferrer"
                    style={socialCard}
                  >
                    <div
                      style={{
                        ...socialIcon,
                        color: "#E1306C",
                      }}
                    >
                      <FaInstagram />
                    </div>

                    <span>Instagram</span>
                  </a>

                  {/* FACEBOOK */}
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    style={socialCard}
                  >
                    <div
                      style={{
                        ...socialIcon,
                        color: "#1877F2",
                      }}
                    >
                      <FaFacebookF />
                    </div>

                    <span>Facebook</span>
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href="https://wa.me/6285338168831"
                    target="_blank"
                    rel="noreferrer"
                    style={socialCard}
                  >
                    <div
                      style={{
                        ...socialIcon,
                        color: "#25D366",
                      }}
                    >
                      <FaWhatsapp />
                    </div>

                    <span>WhatsApp</span>
                  </a>

                </div>
              </div>

            </div>
          </div>
        </motion.section>

        {/* ================= FOOTER ================= */}
        <footer
          style={{
            background: "#071a33",
            padding: "45px",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.05)",

            position: "relative",
            zIndex: 10,
            marginTop: "-1px",
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              color: "#38bdf8",
              marginBottom: "12px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            RISQUATIC
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            © 2026 RISQUATIC. All rights reserved.
          </p>
        </footer>

      </div>
    </>
  );
}

// ================= STYLE =================

const socialButton = {
  display: "inline-block",
  padding: "14px 24px",
  background: "linear-gradient(135deg,#38bdf8,#0ea5e9)",
  borderRadius: "14px",
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
  boxShadow: "0 10px 25px rgba(56,189,248,0.25)",
};

const buttonPrev = {
  position: "absolute",
  left: "25px",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  fontSize: "30px",
  cursor: "pointer",
};

const buttonNext = {
  position: "absolute",
  right: "25px",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  fontSize: "30px",
  cursor: "pointer",
};

const contactCard = {
  display: "flex",
  alignItems: "flex-start",
  gap: "18px",

  background: "rgba(15,35,65,0.55)",

  border: "1px solid rgba(125,211,252,0.10)",

  borderRadius: "24px",

  padding: "28px",

  backdropFilter: "blur(18px)",

  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
};

const iconBox = {
  width: "72px",
  height: "72px",
  borderRadius: "22px",
  background: "rgba(255,255,255,0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "34px",
};

const contactTitle = {
  fontSize: "22px",
  marginBottom: "10px",
  fontFamily: "'Montserrat', sans-serif",
};

const contactText = {
  color: "#dbeafe",
  lineHeight: "1.8",
};

const socialCard = {
  display: "flex",
  alignItems: "center",
  gap: "18px",

  padding: "18px 22px",

  borderRadius: "18px",

  background: "rgba(255,255,255,0.04)",

  border: "1px solid rgba(125,211,252,0.08)",

  color: "white",

  textDecoration: "none",

  fontWeight: "600",

  transition: "0.3s ease",
};

const socialIcon = {
  width: "58px",
  height: "58px",
  borderRadius: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
  background: "rgba(255,255,255,0.08)",
};