import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.barra_nav}>
        <Link href={"/"}>
          <Bars3Icon className={styles.icon}></Bars3Icon>
        </Link>
        <Link className={styles.botones} href={"/Tienda"}>
          Tienda
        </Link>
        <Link className={styles.contenedor_image} href={"/"}>
          <Image src="/logo.png" alt="LogoHeader" width={120} height={120} />
        </Link>
        <Link className={styles.botones} href={"/Form"}>
          Contacto
        </Link>
        <Link href={"/"}>
          <ShoppingCartIcon className={styles.icon}></ShoppingCartIcon>
        </Link>
      </nav>
    </header>
  );
}
