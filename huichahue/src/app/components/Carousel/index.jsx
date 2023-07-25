import Image from "next/image";
import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <div className={styles.carouselcontainer}>
      <ul className={styles.slider}>
        <li id="slide1">
          <img src="/Slide/C5.jpeg" width={200} height={200} alt="Slide 1" />
        </li>
        <li id="slide2">
          <img src="/Slide/C2.jpg" width={200} height={200} alt="Slide 2" />
        </li>
        <li id="slide3">
          <img src="/Slide/C3.jpg" width={200} height={200} alt="Slide 3" />
        </li>
        <li id="slide4">
          <img src="/Slide/C4.jpg" width={200} height={200} alt="Slide 4" />
        </li>
      </ul>

      <ul className={styles.menu}>
        <li className={styles.menu}>
          <a href="#slide1"></a>
        </li>
        <li>
          <a href="#slide2"></a>
        </li>
        <li>
          <a href="#slide3"></a>
        </li>
        <li>
          <a href="#slide4"></a>
        </li>
      </ul>
    </div>
  );
}
export default Carousel;
