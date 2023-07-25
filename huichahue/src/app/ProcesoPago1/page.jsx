import styles from "./ProcesoPago1.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProcesoPago1() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.pasos}>
        <div className={styles.contenedorpasos}>
          <span className={styles.circleactive}>1</span>
          <span className={styles.infoactive}>Carrito</span>
        </div>
        <div className={styles.contenedorpasos}>
          <span className={styles.circle}>2</span>
          <span className={styles.info}>Información</span>
        </div>
        <div className={styles.contenedorpasos}>
          <span className={styles.circle}>3</span>
          <span className={styles.info}>Pago</span>
        </div>
        <span className={styles.linea_puntos}></span>
      </div>

      <section>
        <div className={styles.cart_titles}>
          <span>PRODUCTO</span>
          <span>PRECIO</span>
          <span>CANTIDAD</span>
        </div>
        <div className={styles.cart_row}>
          <div className={styles.product}>
            <Image
              className={styles.cart_item_image}
              src="/ImagenPNG/amberale.png"
              alt="Cerveza artesanal"
              width={100}
              height={100}
            />
            <span>AMBER ALE 330 CC</span>
          </div>
          <span className={styles}>$25.000</span>
          <div className={styles.cart_quantity}>
            <input
              className={styles.cart_quantity_input}
              type="number"
              value={5}
            />
            <button className={styles.btn_danger} type="button">
              X
            </button>
          </div>
        </div>
        <div className={styles.cart_row}>
          <div className={styles.product}>
            <Image
              className={styles.cart_item_image}
              src="/ImagenPNG/amberale.png"
              alt="Cerveza artesanal"
              width={100}
              height={100}
            />
            <span>AMBER ALE 330 CC</span>
          </div>
          <span className={styles}>$6.000</span>
          <div className={styles.cart_quantity}>
            <input
              className={styles.cart_quantity_input}
              type="number"
              value={2}
            />
            <button className={styles.btn_danger} type="button">
              X
            </button>
          </div>
        </div>

        <div className={styles.cart_total}>
          <div>
            <strong className={styles.cart_total_title}>Subtotal:</strong>
            <strong className={styles.cart_total_price}>$31.000</strong>
          </div>
          <div>
            <strong className={styles.cart_total_title}>Descuentos:</strong>
            <strong className={styles.cart_total_price}>$3.000</strong>
          </div>
          <div>
            <strong className={styles.cart_total_title}>Total:</strong>
            <strong className={styles.cart_total_price}>$28.000</strong>
          </div>
        </div>

        <div className={styles.botones_carrito}>
          <Link href={"/Tienda"}>
            <button className={styles.botoness}>Seguir comprando</button>
          </Link>
          <Link href={"/ProcesoPago2"}>
            <button className={styles.botoness}>Proceder a información</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
