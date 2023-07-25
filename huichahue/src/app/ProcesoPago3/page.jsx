import styles from "./ProcesoPago3.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProcesoPago3() {
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
          <span className={styles.circleactive}>3</span>
          <span className={styles.infoactive}>Pago</span>
        </div>
        <span className={styles.linea_puntos}></span>
      </div>

      <section className={styles.informacion}>
        <div className={styles.contactopedido}>
          <div className={styles.contenedorinfo}>
            <h1>Informacion de Orden</h1>
            <div className={styles.contenedor_tarjetas}>
              <div className={styles.tarjeta}>
                <span className={styles.contenido}>
                  Enviar a: "Calle - comuna - region"
                </span>
              </div>
              <div className={styles.tarjeta}>
                <span className={styles.contenido}>
                  ◎ Código QR tarjetas de debito o crédito
                </span>
              </div>
              <div className={styles.tarjeta}>
                <span className={styles.contenido}>
                  ◎ Transferencia Bancaria{" "}
                </span>
              </div>
              <div className={styles.tarjeta_datos}>
                <div className={styles.datos_bancarios}>
                  <strong>Banco:</strong>
                  <strong>Tipo de cuenta:</strong>
                  <strong>Numero de cuenta:</strong>
                  <strong>Rut:</strong>
                  <strong>Razon Social:</strong>
                </div>
                <div className={styles.datos_bancarios}>
                  <span>Estado</span>
                  <span>Chequera electronica / Cuenta vista</span>
                  <span>63770199605</span>
                  <span>77.203.569-1</span>
                  <span>Microcervecería Huichahue Eirl</span>
                </div>
              </div>
            </div>
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
          <Link href={"/Tienda"}>
            <button className={styles.botoness}>Confirmar pago</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
