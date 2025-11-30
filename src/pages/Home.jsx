// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreditCard from "../components/Creditcard.jsx";
import credits from "../data/creditsdata.js";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="carrusel">
        <div className="slides">
          {/* coloca aquí las imágenes en public/img/... o usa tus rutas */}
          <img src="/img/imagen1.jpg" alt="imagen1" />
          <img src="/img/imagen2.jpg" alt="imagen2" />
          <img src="/img/imagen3.jpg" alt="imagen3" />
          <img src="/img/imagen4.jpg" alt="imagen4" />
          <img src="/img/imagen5.jpg" alt="imagen5" />
          <img src="/img/imagen6.jpg" alt="imagen6" />
          {/* duplicadas para efecto scroll */}
          <img src="/img/imagen1.jpg" alt="imagen1b" />
          <img src="/img/imagen2.jpg" alt="imagen2b" />
          <img src="/img/imagen3.jpg" alt="imagen3b" />
          <img src="/img/imagen4.jpg" alt="imagen4b" />
          <img src="/img/imagen5.jpg" alt="imagen5b" />
          <img src="/img/imagen6.jpg" alt="imagen6b" />
        </div>
      </div>

      <header className="Banner">
        <div className="contenedor">
          <h2>Encuentra Tu Crédito Aquí</h2>
          <p>
            Descubre las mejores opciones de financiamiento adaptadas a tus necesidades. En CreditSmart te ayudamos a comparar y solicitar el crédito ideal.
          </p>
        </div>
      </header>

      <main className="contenedor">
        <section className="creditos-seccion">
          <h3>Nuestras Opciones De Créditos</h3>
          <div className="red-creditos">
            {credits.map(c => (
              <CreditCard key={c.id} credit={c} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
