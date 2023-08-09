import { XMarkIcon } from "@heroicons/react/24/solid";
import styles from "./Carrito.module.css";
import { useState } from "react";

export function Carrito(props) {
  const [abierto, setAbierto] = useState(true);
  const className = abierto ? "flex" : "hidden";

  return (
    <aside>
      <div className={styles.orden}>
        <span className={styles.titulo}>Mi Orden</span>
        <div>
          <XMarkIcon
            className={className}
            onClick={() => setAbierto(!abierto)}
          />
        </div>
      </div>
    </aside>
  );
}
