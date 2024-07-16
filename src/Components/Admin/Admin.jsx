import AddCss from '../Admin/Add.module.css';
import { HiMenu, HiX } from 'react-icons/hi';
import { SidebarData } from '../Server/Sidebar';
import React, { useState, useEffect } from 'react';
import { db, imgDB } from '../../Firebase/Firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

const AddProducts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [items, setItems] = useState([]);
    const [editingItemId, setEditingItemId] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetchItems();
    }, []);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newImageUrl = imageUrl;

        if (image) {
            const imageRef = ref(imgDB, `images/${image.name}`);
            await uploadBytes(imageRef, image);
            newImageUrl = await getDownloadURL(imageRef);
        }

        if (editingItemId) {
           
            const itemDoc = doc(db, 'items', editingItemId);
            await updateDoc(itemDoc, { name, price, imageUrl: newImageUrl });
            setEditingItemId(null);
        } else {
          
            await addDoc(collection(db, 'items'), { name, price, imageUrl: newImageUrl });
        }

        setName('');
        setPrice('');
        setImage(null);
        setImageUrl('');
        fetchItems();
    };

    const handleEdit = (item) => {
        setName(item.name);
        setPrice(item.price);
        setImageUrl(item.imageUrl);
        setImage(null);
        setEditingItemId(item.id);
    };

    const handleDelete = async (itemId, imageUrl) => {
        
        const imageRef = ref(imgDB, imageUrl);
        await deleteObject(imageRef);

        
        await deleteDoc(doc(db, 'items', itemId));
        fetchItems();
    };

    const fetchItems = async () => {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const itemsList = [];
        querySnapshot.forEach((doc) => {
            itemsList.push({ id: doc.id, ...doc.data() });
        });
        setItems(itemsList);
    };

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
            </div>
            <br />

            <div>
                <form onSubmit={handleSubmit} className={AddCss.formGroup}>
                    <input
                        className={AddCss.formControl}
                        type="text"
                        placeholder="Ad"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className={AddCss.formControl}
                        type="number"
                        placeholder="Fiyat"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        className={AddCss.formControl}
                        type="file"
                        onChange={handleImageChange}
                    />
                    <button className={AddCss.buttonAdd} type="submit">
                        {editingItemId ? 'UPDATE' : 'ADD'}
                    </button>
                </form>

                <div>
                    {items.map((item) => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>{item.price} $</p>
                            <img src={item.imageUrl} alt={item.name} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                            <button onClick={() => handleEdit(item)}>EDIT</button>
                            <button onClick={() => handleDelete(item.id, item.imageUrl)}>DELETE</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AddProducts;