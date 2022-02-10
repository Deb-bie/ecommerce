import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db} from '../../firebase/firebase';
import { setDoc, Timestamp, doc } from "firebase/firestore"; 
import Navbar from '../../components/navbar/navbar.js'
import {SignUp, SignUpContainer, Header, Alert, FormBody, FormGroup, Input, SignUpButton, Button, Already, Loading, Loaded } from './signupStyles.js'





const Signup = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorMsg: {},
        epass: '',
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

        if(validate()) {
            try {
            const signup = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(auth.currentUser, {
                displayName: username

            });

            await setDoc(doc(db, 'users', signup.user.uid), {
                uid: signup.user.uid,
                username,
                email, 
                password, 
                confirmPassword, 
                createdAt: Timestamp.fromDate(new Date()),
                isOnline: true,
                displayName: username,
            });

            console.log(password.length);

            setData({
                username,                      
                email: "",
                password: "",
                confirmPassword: "",
                errorMsg: "",
                loading: false,

            });

            navigate('/')
        } catch (error) {
            setData({ ...data,epass: error.message,  loading: false });
        }

        } 
    };


    const validate = () => {
        let errors = {};
        let isValid = true;

        if (password.length < 6) {
            isValid = false;
            errors["password"] = "Passwords must be equal to or more than 6 characters.";
        }


        if (typeof password !== "undefined" && typeof confirmPassword !== "undefined") {
        
            if (password != confirmPassword) {
                isValid = false;
                errors["confirmPassword"] = "Passwords don't match.";
            }
        }
        
        setData({ ...data, errorMsg: errors});

        return isValid;
    }

    const {username, email, password, confirmPassword, errorMsg, loading, epass, } = data;



    return(
        <>
            <Navbar />

            <SignUp>
                <SignUpContainer>
                    <Header>
                        <h2>Sign Up</h2>
                    </Header>

                    <div className='alert'>
                    {epass ? <p>{epass}</p> : null}
                </div>

                    <FormBody>
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <label>Username</label>
                                <br/>
                                <Input 
                                    type='text'
                                    required
                                    value={username}
                                    name='username'
                                    onChange={handleChange}
                                />

                            </FormGroup>
                            <br />

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
                                <Alert>{errorMsg.password}</Alert>
                                
                            </FormGroup>
                            <br />

                            <FormGroup>
                                <label>Confirm Password</label>
                                <br/>
                                <Input 
                                    type='password'
                                    required
                                    value={confirmPassword}
                                    name='confirmPassword'
                                    onChange={handleChange}
                                />
                                <Alert>{errorMsg.confirmPassword}</Alert>
                            </FormGroup>
                            <br />

                            {/* <SignUpButton>
                                <Button>
                                    {loading ? (
                                        <Loading>Signing Up</Loading>
                                    ) : (
                                        <Loaded> Sign Up</Loaded>
                                    )}
                                </Button>
                            </SignUpButton> */}


                            <SignUpButton>
                                
                                {loading ? (
                                    <Loading>Signing Up</Loading>
                                ) : (
                                    <Loaded> Sign Up</Loaded>
                                )}
                                
                            </SignUpButton>



                            <br />
                        </form>

                        <Already>
                            Already have an account? <Link to='/signin'>Log In </Link>
                        </Already>



                    </FormBody>
                </SignUpContainer>
            </SignUp>

        </>
    )

}


export default Signup;

