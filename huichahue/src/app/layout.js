import "./globals.css";
import { Header } from "./Header";
import { Footer } from "./components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Cervezas Huichahue",
  description: "Cervezas artesanales, Cervezas Huichahue, Cervezas ,",
};

export default function RootLayout({ children }) {
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
