import React, { useEffect, useState } from 'react';
import { db } from '../../Firebase/Firebase';
import AddCss from '../Admin/Add.module.css';
import { HiMenu, HiX } from 'react-icons/hi';
import { SidebarData } from '../Server/Sidebar';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../Firebase/Firebase';

const AddProducts = () => {
    const imageRef = ref(storage, "image/image-name");
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    const [url, setUrl] = useState(null);
    useEffect(() => {

        getDownloadURL(imageRef).then(url => {
            setUrl(url)
        }).catch(e => {
            console.log(e)
        })
    }, [])
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
                    <form autoComplete='off' className={AddCss.formGroup} >
                        <div className={AddCss.inputForProduct}>
                            <label htmlFor='product-name'>Product Name:</label>
                            <input
                                type='text'
                                className={AddCss.formControl}

                            />
                        </div>

                        <br />

                        <div className={AddCss.inputForProduct}>
                            <label htmlFor='product-price'>Product Price</label>
                            <input
                                type='number'
                                className={AddCss.formControl}

                            />
                        </div>

                        <br />

                        <div className={AddCss.inputForProduct}>
                            <label htmlFor='product-img'>Product Image</label>
                            <input
                                type='file'
                                className={AddCss.formControl}
                                onChange={e => {
                                    const file = e.currentTarget.files[0]

                                    uploadBytes(imageRef, file)

                                }}
                            />
                        </div>

                        <br />
                        <button type='submit' className={AddCss.buttonAdd}>
                            ADD
                        </button>
                    </form>
                    <span className='error-msg'></span>
                </div>

            </div>
            {url && <img src={url} width={240} alt="photo" />}
        </>
    );
};

export default AddProducts;