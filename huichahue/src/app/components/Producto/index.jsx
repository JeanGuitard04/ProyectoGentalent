import Image from "next/image";
import styles from "./Producto.module.css";

// Aqui definimos el componente Producto y le pasamos los props necesarias para

function Producto({
  id,
  nombre,
  seo,
  descripcion,
  precio,
  grados,
  formato,
  enStock,
  Imagen,
}) {
  return (
    <article className={styles.item}>
      <figure>
        {Imagen && (
          <Image
            src={Imagen}
            alt={seo}
            width={400}
            height={400}
            priority={true}
          />
        )}
      </figure>
      <div className={styles.info_product}>
        <h2>{nombre}</h2>
        <br />
        <p>{descripcion}</p>
        <br />
        <p>Grados de Alcohol: {grados}</p>
        <p>Botella: {formato}</p>
        <br />
        <p className={styles.price}>${precio}</p>
        {enStock ? <p>Disponible</p> : <p>No disponible</p>}
        <button>Añadir al carrito</button>
      </div>
    </article>
  );
}

export { Producto };
