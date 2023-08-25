"use client";
import { Connect, connect } from "react-redux";
import { setProducts as setProductsAction } from "@/actions";
import { Header } from "./Header";
import { Footer } from "./components/Footer";
import Image from "next/image";
import "./globals.css";
import { useEffect } from "react";
import { getProduct } from "@/api";

export const metadata = {
  title: "Cervezas Huichahue",
  description: "Cervezas artesanales, Cervezas Huichahue, Cervezas ,",
};

function RootLayout({ children }) {
  /* Logica para consumir API con Axios...*/
  useEffect(() => {
    const fetchProducts = async () => {
      await getProduct();
    };

    fetchProducts();
  }, []);

  return (
    <html lang="es">
      <body>
        <Header />
        <section className="bg">
          <Image
            src="/background.jpg"
            alt=""
            className="fondo"
            width={1400}
            height={1200}
          />
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}

const mapStateToProps = (state) => ({
  cervezas: state.cervezas,
});

const mapDispatchToProps = (dispatch) => ({
  setCervezas: (value) => dispatch(setCervezasAction),
});

export default RootLayout;
