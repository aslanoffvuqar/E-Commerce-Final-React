import { useState, React, useEffect } from "react";
import styles from "../Best_product/best.module.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { db } from "../../Firebase/Firebase"
import { collection, getDocs, query, where } from 'firebase/firestore';


export default function BestProducts() {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, 'items'), where('isBest', '==', true))
        const querySnapshot = await getDocs(q);
        let productsList = [];
        querySnapshot.forEach((doc) => {
          productsList.push({ id: doc.id, ...doc.data() });
        });
        setProducts(productsList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className={styles.product_text_wrapper}>
          <span className={styles.text_span}>.</span>
          <h5>{t("This Month")}</h5>
        </div>
        <div className={styles.all_view}>
          <h1>{t("Best Selling Products")}</h1>
          <Link to="/ViewAllProduct">{t("View All")}</Link>
        </div>
        <div className={styles.slider}>
          {products.map((product) => (
            <div key={product.id} className={styles.sliderBox}>
              <div className={styles.sliderBoxes}>
                <div className={styles.upSide}>
                  <img src={product.imageUrl} alt={product.name} />
                  <div className={styles.buttons}>
                    {product.discount && (
                      <div>
                        <span className={styles.saleProcent}>-{product.discount}%</span>
                      </div>
                    )}
                    <div className={styles.iconsBox} id='prod-icon1'>

                      {/* <WishProduct /> */}
                      <Link to="/ProductView"> </Link>

                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.downSide}>
                <h1 className={styles.downSideText}>{product.name}</h1>
                <div className={styles.price}>
                  <span className={styles.firstPrice}>${product.currentPrice}</span>
                  {product.originalPrice && (
                    <span className={styles.line}>${product.originalPrice}</span>
                  )}
                </div>

              </div>

              <div className='stars-product'>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
