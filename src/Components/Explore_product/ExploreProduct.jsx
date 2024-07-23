import React from 'react';
import Style from "./ExploreProduct.module.css";
import GlobalModuleCss from "../Global-Css/App.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { db } from "../../Firebase/Firebase";
import { collection, getDocs, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import useAuth from '../Authcontext/useAuth';
const ProductList = () => {
    const { t } = useTranslation();
    const [products, setProducts] = useState([]);
    const user = useAuth();

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
    const addToCart = async (productId) => {
        if (!user) {
            Swal.fire({
                title: 'Error',
                text: 'You must be logged in to add products to the cart',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }
        try {
            const cartRef = collection(db, 'cart');
            const productToAdd = products.find((product) => product.id === productId);
            const querySnapshot = await getDocs(cartRef);
            const existingProduct = querySnapshot.docs.find(doc => doc.data().id === productId);
            if (existingProduct) {
                
                const docRef = existingProduct.ref;
                await docRef.update({
                    quantity: existingProduct.data().quantity + 1
                });
            } else {
                
                await addDoc(cartRef, { ...productToAdd, quantity: 1 });
            }
            console.log('Product added to cart:', productToAdd);
            Swal.fire({
                title: "Good job!",
                text: "You successfully added the product to the cart!",
                icon: "success"
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Failed to add the product to the cart',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        }
    };
    return (
        <div className="container">
            <div className={Style.rectangle}>
                <div className={Style.red}></div>
                <h1 className={`${GlobalModuleCss.fontPoppins} ${Style.rectangleText}`}>{t("Our Products")}</h1>
            </div>
            <div className="section-our-products">
                <div className="section-ourProducts">
                    <h1 className={Style.sectionProductsText} id='section-products-text'>{t("Explore Our Products")}</h1>
                </div>
            </div>
            <div className={Style.products}>
                {products.map((product) => (
                    <div key={product.id} id='productMobCodes'>
                        <div className={Style.productBg} productSize="productBg">
                            <div className={Style.productImg} productImage="prodImg">
                                <img src={product.imageUrl} alt={product.name} className={Style.imageItem} />
                            </div>
                            <div className={Style.iconsBox} id='prod-icon1'>
                                <Link to="/WhistList">
                                    <svg
                                        className={Style.svg_product}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                                    </svg>
                                </Link>
                                <Link to="/ProductDetails">
                                    <svg
                                        className={Style.svg_product}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                    </svg>
                                </Link>
                            </div>
                            <button
                                className={Style.addToCart}
                                onClick={() => addToCart(product.id)}
                            >
                                {t("Add To Cart")}
                            </button>
                        </div>
                        <div className="product-about">
                            <h1 className={Style.productAboutText} productAbout="prod-about">{product.name}</h1>
                        </div>
                        <div className={Style.priceStar}>
                            <div className="price-product">
                                <p className={Style.productPrice}>${product.price}</p>
                            </div>
                            <div className='stars-product'>
                            </div>
                            <div className={Style.quanlity}>
                                <p>(38)</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={Style.viewAllProducts}>
                <button className={Style.viewButton}>{t("View Products All")}</button>
            </div>
        </div >
    );
};
export default ProductList;