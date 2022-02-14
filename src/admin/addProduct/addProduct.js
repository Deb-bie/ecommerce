import React , { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { db, storage} from '../../firebase/firebase.js';
import { addDoc, collection, doc, updateDoc, setDoc } from "firebase/firestore"; 
import { ref, getDownloadURL, uploadBytes} from 'firebase/storage';
import Navbar from '../../components/navbar/navbar';
import {SignUp, SignUpContainer, Header, Alert, FormBody, FormGroup, Input, SignUpButton, Button, Already, Loading, Loaded } from '../../pages/signup/signupStyles.js'
import {Select} from './addProductStyles.js'


const AddProduct = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        title: "",
        description: "",
        price: Number(),
        stock: Number(),
        error: "",
        success: "",
        loading: false,
        user: "",
        totalPrice: 0,
        qty: 1,
        category: "",
        fav: 1,
    });

    const [image, setImage] = useState('')

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        }); 
    }


    const { title, description, price, stock, loading, success, error, category, fav} = data;

    const handleSubmit = async (e) => {
        e.preventDefault();

        setData({ ...data, success: null, error: null, loading: true });

        setImage(null)

        try {
            // storing the product images in firebase storage with the product images title
            const storageRef = ref(storage, `product-images/${image.name}`);

            const snap = await uploadBytes(storageRef, image);
    
            const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

            const main = await addDoc(collection(db, "Products", category, category), {
                title,
                description,
                price,
                stock,
                image: url,
                path: snap.ref.fullPath,
                totalPrice: price,
                qty: 1,
                category,
                fav: 1,
            });

            await updateDoc(doc(db, "Products", category, category, `${main.id}`), {
                id: main.id
            });



            const refs = await setDoc(doc(db, "Products", "All_Products", "Product", `${main.id}`), {
                title,
                description,
                price,
                stock,
                image: url,
                path: snap.ref.fullPath,
                totalPrice: price,
                qty: 1,
                category,
                fav: 1,
                id: main.id,

            });

            setData({
                ...data, 
                title: "", 
                description: "",
                price: Number(),
                stock:  Number(),
                success: "Product Added",
                uploadErrorMsg: "",
                loading: false,
                totalPrice: Number(),
                qty: 1,
                category: "",
                fav: 1,
    
            });
    
            setImage(null);

            navigate('/productList');

            return refs;

        } catch(errors) {
            setData({
                ...data, error: errors.message
            });
            console.log(errors)
        }
    }



    return (
        <>
            <Navbar />

            <SignUp>
                <SignUpContainer>
                    <Header>
                        <h2>Add Product</h2>
                    </Header>

                    <div className='alert'>
                    {error ? <p>{error}</p> : null}
                </div>

                    <FormBody>
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <label>Product Title</label>
                                <br/>
                                <Input 
                                    type='text'
                                    required
                                    value={title}
                                    name='title'
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <br />

                            <FormGroup>
                                <label>Category</label>
                                <br/>
                                <Select required value={category} onChange={handleChange} name='category'>
                                    <option value="none" selected hidden>Select Category</option>
                                    <option value="Tops">Tops</option>
                                    <option value="Dresses">Dresses</option>
                                    <option value="Pieces">2 Pieces</option>
                                    <option value="Bags">Bags</option>
                                    <option value="Shoes">Shoes</option>
                                    <option value="Accessories">Accessories</option>
                                </Select>

                            </FormGroup>
                            <br />

                            <FormGroup>
                                <label>Description</label>
                                <br/>
                                <Input 
                                    type='text'
                                    required
                                    value={description}
                                    name='description'
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <br />


                            {/* Checkbox: <input type="checkbox" id="myCheck" value="myvalue" /> */}


                            <FormGroup>
                                <label>Stock</label>
                                <br/>
                                <Input 
                                    type='text'
                                    required
                                    value={stock} 
                                    name='stock'
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <br />

                            <FormGroup>
                                <label>Price</label>
                                <br/>
                                <Input 
                                    type='text'
                                    required
                                    value={price}
                                    name='price'
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <br />

                            <FormGroup>
                                <label>Upload Product Image</label>
                                <br/>
                                <Input 
                                    type='file'
                                    required
                                    id='file'
                                    accept='image/*'
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </FormGroup>
                            <br/>

                            <SignUpButton>
                                <Button>
                                    {loading ? (
                                    <>Adding Product</>
                                    ) : (
                                    <>Add Product</>
                                    )}
                                </Button>
                            </SignUpButton>
                        </form>
                    </FormBody>
              </SignUpContainer>
            </SignUp>
        </>
    )
}


export default AddProduct;


