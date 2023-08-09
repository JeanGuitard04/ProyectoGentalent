import Image from "next/image";
import styles from "./Home/page.module.css";
import Carousel from "./components/Carousel";
import Link from "next/link";

export default function Home() {
  return (
    <section className={styles.contenedor}>
      <div className={styles.contenedorcarrusel}>
        <Carousel />
      </div>

      <div className={styles.rectangulo}>
        <p>PRODUCTOS DDESTACADOS</p>
      </div>

      <div className={styles.fotosProductos}>
        <div className={styles.contenedorImagen}>
          <Image
            src="/Imagenes/amberAle.jpg"
            alt="cerveza1"
            width={400}
            height={500}
          />
        </div>
        <div className={styles.contenedorImagen}>
          <Image
            src="/Imagenes/pilsen.jpg"
            alt="cerveza2"
            width={400}
            height={500}
          />
        </div>
        <div className={styles.contenedorImagen}>
          <Image
            src="/Imagenes/aji.jpg"
            alt="cerveza3"
            width={400}
            height={500}
          />
        </div>
        <div className={styles.contenedorImagen}>
          <Image
            src="/Imagenes/arandanos.jpg"
            alt="cerveza4"
            width={400}
            height={500}
          />
        </div>
        <div className={styles.contenedorImagen}>
          <Image
            src="/Imagenes/maqui.jpg"
            alt="cerveza5"
            width={400}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/Imagenes/moras2.jpg"
            alt="cerveza6"
            width={400}
            height={500}
          />
        </div>
      </div>

      <div className={styles.rectangulo}>
        <p>PACKS</p>
      </div>

      <div className={styles.fotospacks}>
        <div>
          <Image
            src="/Imagenes/packSabores.jpg"
            alt="Pack de 6 cervezas artesanales"
            width={400}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/Imagenes/packKombuchela.jpg"
            alt="Pack de cervezas sin alcohol con Kombucha"
            width={400}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/Imagenes/pack12.jpg"
            alt="Pack de 12 cervezas artesanales"
            width={400}
            height={500}
          />
        </div>
      </div>

      <div className={styles.rectangulo}>
        <p>OBJETIVOS SOCIOAMBIENTALES</p>
      </div>

      <div className={styles.imagecontainer}>
        <div className={styles.imagecontainerimg}>
          <Image
            src="/solidaridad.png"
            alt="Solidadirad"
            height={90}
            width={90}
          />
          <Image src="/cervezas.png" alt="Cervezas" height={90} width={90} />
          <Image src="/comunidad.png" alt="Comunidad" height={90} width={90} />
          <Image src="/reciclaje.png" alt="Reciclaje" height={90} width={90} />
        </div>
      </div>

      <div className={styles.botonesobjetivos}>
        <div className={styles.botonesobjetivos}>
          <Link href="/Form">Impulsamos la comunidad local</Link>
          <Link href="/Form">Beber con moderción</Link>
          <Link href="/Form">Visitas guiadas con fines educativos</Link>
          <Link href="/Form">Envases reciclados</Link>
        </div>
      </div>
    </section>
  );
}
