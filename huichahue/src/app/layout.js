import { Connect, connect } from "react-redux";
import { setProducts as setProductsAction } from "@/actions";
import { Header } from "./Header";
import { Footer } from "./components/Footer";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Cervezas Huichahue",
  description: "Cervezas artesanales, Cervezas Huichahue, Cervezas ,",
};

function RootLayout({ children }) {
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
  setProducts: (value) => dispatch(setProductsAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootLayout);
