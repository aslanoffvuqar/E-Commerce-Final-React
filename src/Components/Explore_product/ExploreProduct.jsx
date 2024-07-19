import {React,useEffect,useState} from 'react'
import styles from '../Explore_product/ExploreProduct.module.css'
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { db, imgDB } from "../../Firebase/Firebase";

export default function ExploreProduct() {
    const { t } = useTranslation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'items'));
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

                </div>
                <div className={styles.products}>

                    {products.map((product) => (
                        <div key={product.id} id='productMobCodes'>
                            <div className={styles.productBg} productSize="productBg">
                                <div className={styles.productImg} productImage="prodImg">
                                    <img src={product.imageUrl} alt={product.name} className={styles.imageItem} />
                                </div>

                                <div className={styles.iconsBox} id='prod-icon1'>

                                    {/* <WishProduct /> */}
                                    {/* <Link to="/ProductView"> <LuEye className={`${OurProductsStyle.svg} ${OurProductsStyle.svgEyes}`} /></Link> */}

                                </div>

                                <button className={styles.addToCart}>{t("Add To Cart")}</button>
                            </div>

                            <div className="product-about">
                                <h1 className={styles.productAboutText} productAbout="prod-about">{product.name}</h1>
                            </div>


                            <div className={styles.priceStar}>
                                <div className="price-product">
                                    <p className={styles.productPrice}>${product.price}</p>
                                </div>

                                <div className='stars-product'>
                                    {/* <Raiting /> */}
                                </div>


                                <div className={styles.quanlity}>
                                    <p>(38)</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.all_products_div}>
                    <Link className={styles.all_products} to="/ViewAllProduct">{t("View Products All")}</Link>
                </div>

            </div >
        </>
    )
}
