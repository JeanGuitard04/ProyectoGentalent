import styles from "./ProcesoPago2.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProcesoPago2() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.pasos}>
        <div className={styles.contenedorpasos}>
          <span className={styles.circleactive}>1</span>
          <span className={styles.infoactive}>Carrito</span>
        </div>
        <div className={styles.contenedorpasos}>
          <span className={styles.circleactive}>2</span>
          <span className={styles.infoactive}>Información</span>
        </div>
        <div className={styles.contenedorpasos}>
          <span className={styles.circle}>3</span>
          <span className={styles.info}>Pago</span>
        </div>
        <span className={styles.linea_puntos}></span>
      </div>

      <section className={styles.informacion}>
        <div className={styles.contactopedido}>
          <div className={styles.contenedorinfo}>
            <h1>Informacion de contacto</h1>
            <input
              className={styles.input_info}
              type="text"
              placeholder="Nombre"
            />
            <input
              className={styles.input_info}
              type="text"
              placeholder="Apellidos"
            />
            <input
              className={styles.input_info}
              type="text"
              placeholder="Rut"
            />
            <input
              className={styles.input_info}
              type="text"
              placeholder="Correo"
            />
            <input
              className={styles.input_info}
              type="text"
              placeholder="Celular"
            />
            <br />
            <br />

            <h1>Informacion de Envio</h1>
            <input
              className={styles.input_info}
              type="text"
              placeholder="Direccion"
            />
            <input
              className={styles.input_info}
              type="text"
              placeholder="Depto / casa / puerta"
            />
            <input
              className={styles.input_info}
              type="text"
              placeholder="Rut"
            />
            <input
              className={styles.input_info}
              type="text"
              placeholder="Region"
            />
            <input
              className={styles.input_info}
              type="text"
              placeholder="Ciudad"
            />
            <input
              className={styles.input_info}
              type="text"
              placeholder="Comuna"
            />
            <input
              className={styles.input_info}
              type="text"
              placeholder="Instrucciones"
            />
          </div>
          <div>
            <h1>Resumen del pedido</h1>
            <br />

            <div className={styles.resumen}>
              <div className={styles.card}>
                <Image src={"/ImagenPNG/amberale.png"} width={80} height={80} />
                <div className={styles.infoproducto}>
                  <h1>Cerveza Amber ale 330cc</h1>
                  <p>$25.000</p>
                  <span className={styles.circleproduct}>5</span>
                </div>
              </div>
              <div className={styles.card}>
                <Image src={"/ImagenPNG/amberale.png"} width={80} height={80} />
                <div className={styles.infoproducto}>
                  <h1>Cerveza Amber ale 330cc</h1>
                  <p>$6.000</p>
                  <span className={styles.circleproduct}>2</span>
                </div>
              </div>
              <div className={styles.contenedortotal}>
                <div className={styles.total}>
                  <strong>Subtotal:</strong>
                  <strong>Descuentos:</strong>
                  <strong>Total:</strong>
                </div>
                <div className={styles.total}>
                  <span>$31.000</span>
                  <span>$3.000</span>
                  <span>$28.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.botones_carrito}>
          <Link href={"/ProcesoPago1"}>
            <button className={styles.botoness}>Volver a carrito</button>
          </Link>
          <Link href={"/ProcesoPago3"}>
            <button className={styles.botoness}>Proceder a pago</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
