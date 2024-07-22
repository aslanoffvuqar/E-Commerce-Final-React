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
                // If the product is already in the cart, update its quantity
                const docRef = existingProduct.ref;
                await docRef.update({
                    quantity: existingProduct.data().quantity + 1
                });
            } else {
                // Otherwise, add a new product to the cart
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
                                <Link to="/ProductView">
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
        </div>
    );
};
export default ProductList;