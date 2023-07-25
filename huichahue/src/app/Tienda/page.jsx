import { Producto } from "../components/Producto";
import data from "./data";
import styles from "./Tienda.module.css";
import Link from "next/link";

export default function Tienda() {
  return (
    <main className={styles.container}>
      <h1> Tienda </h1>
      <section className={styles.container_items}>
        {data.map((info, index) => (
          <div key={index}>
            <Producto
              id={info.id}
              nombre={info.nombre}
              seo={info.seo}
              descripcion={info.descripcion}
              precio={info.precio}
              grados={info.grados}
              formato={info.formato}
              enStock={info.enStock}
              Imagen={info.Imagen}
            />
          </div>
        ))}
        <Link href={"/ProcesoPago1"}> Finaliza tu compra!</Link>
      </section>
    </main>
  );
}
