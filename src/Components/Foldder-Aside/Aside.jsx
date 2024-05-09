import React from "react";
import styles from "../Foldder-Aside/aside.module.css";
import "../Foldder-Aside/aside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// import img from "../Foldder-Aside/Aside-Img/Frame 560.png";


// import Carousel from "react-bootstrap/Carousel";
// import Image from "react-bootstrap/Image";

function Aside() {
  return (
    <>
      <div className="container">
        <aside className={styles.asideBox}>
          <div className={styles.allBox}>
            <div className={styles.asideDiv}>
              <a className={styles.a} href="#">
                Woman’s Fashion
                <span className={styles.a_icon}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </a>
              <a className={styles.a} href="#">
                Men’s Fashion
                <span className={styles.a_icon2}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </a>
              <a className={styles.a} href="#">
                Electronics
              </a>
              <a className={styles.a} href="#">
                Home & Lifestyle
              </a>
              <a className={styles.a} href="#">
                Medicine
              </a>
              <a className={styles.a} href="#">
                Sports & Outdoor
              </a>
              <a className={styles.a} href="#">
                Baby’s & Toys
              </a>
              <a className={styles.a} href="#">
                Groceries & Pets
              </a>
              <a className={styles.a} href="#">
                Health & Beauty
              </a>
            </div>
            <div className={styles.Line}></div>
            {/* <Carousel>
              <Carousel.Item>
                <Image src={img} text="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={img} text="Second slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={img} text="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}
          </div>
        </aside>
      </div>
    </>
  );
}

export default Aside;
