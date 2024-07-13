import React, { useEffect, useState } from 'react';
// import { db } from '../../Firebase/Firebase';
import AddCss from '../Admin/Add.module.css';
import { HiMenu, HiX } from 'react-icons/hi';
import { SidebarData } from '../Server/Sidebar';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { imgDB } from '../../Firebase/Firebase';
import { v4 as uuidv4, v4 } from 'uuid';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";


const AddProducts = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    const [imageUrl, setImageUrl] = useState('');




    const [imgUrl, setImgUrl] = useState('');

    const handleUpload = (e) => {
        const file = e.target.files[0];
        const imgRef = ref(imgDB, `Imgs/${v4 ()}`); // Storage referansı oluşturuyoruz

        // Dosyayı Storage'e yükleme işlemi
        uploadBytes(imgRef, file).then((snapshot) => {
            console.log('Dosya başarıyla yüklendi');

            // Yükleme işlemi tamamlandıktan sonra dosyanın URL'sini alma
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                console.log('Dosya şu adreste bulunabilir:', downloadURL);
                setImgUrl(downloadURL); // State'i güncelleyerek resmi ekranda gösteriyoruz
            });
        }).catch((error) => {
            console.error('Dosya yükleme hatası:', error);
        });
    };



    const [data, setData] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "products"), {
                text: data,
                price: price
            });
            setPrice("")
            setData("");
        } catch (error) {
            console.error("Hata oluştu: ", error);
        }
    };
    const getProducts = async () => {
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return productsList;
    };

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productsData = await getProducts();
            setProductsList(productsData);
        };

        fetchData();
    }, []);

    return (
        <>

            <div className='container' style={{ display: 'flex', marginTop: '30px' }}>
                <div className={AddCss.dropMenu}>
                    <HiMenu className={AddCss.menuIcon} onClick={toggleMenu} />

                    <div className={`${AddCss.sidebar} ${isOpen ? AddCss.open : ''}`}>
                        <div className={AddCss.sidebarHeader}>
                            <HiX className={AddCss.closeIcon} onClick={closeMenu} />
                        </div>
                        {SidebarData.map((category, index) => (
                            <div key={index} className={AddCss.category}>
                                <h2>{category.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <div style={{ width: '100%' }}>
                    <h2>ADD PRODUCTS</h2>
                    <hr />
                    <form autoComplete='off' onSubmit={handleSubmit} className={AddCss.formGroup} >
                        <div className={AddCss.inputForProduct}>
                            <label htmlFor='product-name'>Product Name:</label>
                            <input
                                type='text'
                                className={AddCss.formControl}
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                            />

                        </div>

                        <br />

                        <div className={AddCss.inputForProduct}>
                            <label htmlFor='product-price'>Product Price</label>
                            <input
                                type='number'
                                className={AddCss.formControl}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <br />

                        <div className={AddCss.inputForProduct}>
                            <label htmlFor='product-img'>Product Image</label>
                            <input
                                type='file'
                                className={AddCss.formControl}
                                onChange={handleUpload}
                            />
                        </div>

                        <br />
                        <button type='submit' className={AddCss.buttonAdd}>
                            ADD
                        </button>

                    </form>
                    <span className='error-msg'></span>
                </div>

            </div >
            <div className="App">
                <h1 style={{ fontSize: '45px', display: 'flex', justifyContent: "center" }}>PRODUCT</h1>

                <ul>
                    {productsList.map(product => (
                        <li key={product.id}>
                            <strong>Ürün: </strong> {product.text} <strong>Fiyat:$ </strong> {product.price}
                            {imgUrl && <img src={imgUrl} alt="Yüklenen Resim" style={{ maxWidth: '100%' }} />}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default AddProducts;