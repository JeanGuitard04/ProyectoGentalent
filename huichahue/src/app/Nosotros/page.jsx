import styles from "./Nosotros.module.css";
import Image from "next/image";

export default function Nosotros() {
  return (
    <main className={styles.contenedor}>
      <h1 className={styles.titulosection1}>SOBRE NOSOTROS</h1>
      <section className={styles.sobrenosotros}>
        <div className={styles.nuestrahistoria}>
          <div className={styles.video_nuestrahistoria}>
            <video
              src="/Nosotros/NosotrosVideo.mp4"
              type="video/mp4"
              width="100%"
              controls
              muted
              loop
            ></video>
          </div>
          <div className={styles.text_nuestrahistoria}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit vero, expedita consectetur nisi earum sequi
              doloribus sed deleniti, temporibus unde, minus placeat fuga
              tempore! Ut alias perferendis quam quas fugiat.
            </p>
          </div>
        </div>
        <div className={styles.mundoconsciente}>
          <div className={styles.text_mundoconsciente}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit vero, expedita consectetur nisi earum sequi
              doloribus sed deleniti, temporibus unde, minus placeat fuga
              tempore! Ut alias perferendis quam quas fugiat.
            </p>
          </div>
          <div className={styles.image_mundoconsciente}>
            <Image
              className={styles.image_consciente}
              src={"/Nosotros/mundo-consciente.jfif"}
              alt="mundo consciente"
              width={600}
              height={400}
            />
          </div>
        </div>
        <div className={styles.mision}>
          <div className={styles.image_mision}>
            <Image
              src={"/Nosotros/misión.png"}
              alt="mision"
              width={550}
              height={400}
            />
          </div>
          <div className={styles.text_mision}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit vero, expedita consectetur nisi earum sequi
              doloribus sed deleniti, temporibus unde, minus placeat fuga
              tempore! Ut alias perferendis quam quas fugiat.
            </p>
          </div>
        </div>
        <div className={styles.vision}>
          <div className={styles.text_vision}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit vero, expedita consectetur nisi earum sequi
              doloribus sed deleniti, temporibus unde, minus placeat fuga
              tempore! Ut alias perferendis quam quas fugiat.
            </p>
          </div>
          <div className={styles.image_vision}>
            <Image
              src={"/Nosotros/visión.png"}
              alt="vision"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className={styles.nuestroscolaboradores}>
        <h1 className={styles.titulosection2}>NUESTROS COLABORADORES</h1>
        <div className={styles.btncolaboradores}>
          <Image src={"/Balloon.png"} width={200} height={200} />
          <Image src={"/Kyklos.png"} width={400} height={200} />
          <Image src={"/Reciclamos.png"} width={200} height={200} />
          <Image src={"/Fosis.png"} width={200} height={200} />
          <Image src={"/Sercotec.png"} width={200} height={200} />
        </div>
      </section>
    </main>
  );
}
