import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faCode, faHighlighter } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
library.add(faInstagram, faFacebook, faWhatsapp);

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerfooter}>
        <div className={styles.rowfooter}>
          <div className={styles.footer_col}>
            <h4>MENÚ</h4>
            <ul>
              <Link href={"/"}>Inicio</Link>
              <Link href={"/Tienda"}>Tienda</Link>
              <Link href={"/"}>Termines y condiciones</Link>
              <Link href={"/Contacto"}>Contáctanos</Link>
            </ul>
          </div>

          <div className={styles.footer_col}>
            <h4>SÍGUENOS</h4>
            <div className={styles.redes_sociales_link}> </div>
            <ul>
              <Link href={"https://www.instagram.com/cerveza_huichahue/"}>
                <FontAwesomeIcon icon={faInstagram} style={{ width: "22px" }} />
              </Link>{" "}
              <Link
                href={"https://web.facebook.com/cerveza.huichahue/?_rdc=1&_rdr"}
              >
                <FontAwesomeIcon icon={faFacebook} style={{ width: "22px" }} />
              </Link>{" "}
              <FontAwesomeIcon icon={faWhatsapp} style={{ width: "22px" }} />
            </ul>
          </div>
          <div className={styles.footer_col}>
            <ul>
              <Link href={"/"}>
                <Image
                  src="/logo.png"
                  alt="Logo Cerveza Huichahue"
                  width={80}
                  height={80}
                />
              </Link>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>SOBRE NOSOTROS</h4>
            <ul>
              <Link href={"/Nosotros"}>Nuestra Historia</Link>
              <Link href={"/Nosotros"}>Vision</Link>
              <Link href={"/Nosotros"}>Mision</Link>
              <Link href={"/Nosotros"}>Mundo Consciente</Link>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>PARTNERS</h4>
            <div className={styles.partners_logos}>
              <ul>
                <Link href={"/"}>
                  <Image
                    src="/balloon.png"
                    alt="Logo Balloon Latam"
                    width={40}
                    height={60}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/reciclamos.png"
                    alt="Todos reciclamos"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/fosis.png"
                    alt="Logo Fosis"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/kyklos2.jpg"
                    alt="Logo Kyklos"
                    width={60}
                    height={40}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/sercotec.png"
                    alt="Logo Sercotec"
                    width={60}
                    height={50}
                  />
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer_texto_copyright}>
          <p>Cerveza Huichahue®. Beber con moderación</p>
        </div>
      </div>
    </footer>
  );
}
