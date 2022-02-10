import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword} from 'firebase/auth'; 
import { auth, db} from '../../firebase/firebase';
import { doc, updateDoc } from "firebase/firestore"; 
import Navbar from '../../components/navbar/navbar.js'
import {SignUp, SignUpContainer, Header, Alert, FormBody, FormGroup, Input, SignUpButton, Button, Already, Loading, Loaded } from '../signup/signupStyles.js'


const Signin = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
        errorMsg: "",
        loading: false,
    });

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        }); 
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        setData({ ...data, errorMsg: null, loading: true });

        try {
            const signin = await signInWithEmailAndPassword(auth, email, password);

            await updateDoc(doc(db, 'users', signin.user.uid), {
                isOnline: true,
            });

            setData({
                email: "",
                password: "",
                errorMsg: "",
                loading: false,

            });

            navigate('/')
            
        } catch (error) {
            setData({ ...data,errorMsg: error.message,  loading: false });
        }    
    }

    const { email, password, errorMsg, loading } = data;


    return(
        <>
            <Navbar />

            <SignUp>
                <SignUpContainer small>
                    <Header>
                        <h2>Sign In</h2>
                    </Header>

                    <div className='alert'>
                    {errorMsg ? <p>{errorMsg}</p> : null}
                </div>

                    <FormBody>
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <label>Email</label>
                                <br/>
                                <Input 
                                    type='text'
                                    required
                                    value={email}
                                    name='email'
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <br />

                            <FormGroup>
                                <label>Password</label>
                                <br/>
                                <Input 
                                    type='password'
                                    required
                                    value={password}
                                    name='password'
                                    onChange={handleChange}
                                />                        
                            </FormGroup>
                            <br />

                            <SignUpButton>
                                <Button>
                                    {loading ? (
                                        <Loading>Signing Up</Loading>
                                    ) : (
                                        <Loaded> Sign Up</Loaded>
                                    )}
                                </Button>
                            </SignUpButton>


                            {/* <SignUpButton>
                                
                                {loading ? (
                                    <Loading>Signing Up</Loading>
                                ) : (
                                    <Loaded> Sign Up</Loaded>
                                )}
                                
                            </SignUpButton> */}

                            <br />
                        </form>

                        <Already>
                            Don't have an account? <Link to='/signup'>Sign Up </Link>
                        </Already>



                    </FormBody>
                </SignUpContainer>
            </SignUp>

        </>
    )

}


export default Signin;

