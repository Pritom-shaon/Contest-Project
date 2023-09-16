import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginForm = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handle = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem("user",JSON.stringify({email:user.email}))
    console.log(user.email)
    window.location.href="/"
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });
        console.log(email, password)
    }

    const handleGoogle=()=>{
        signInWithPopup(auth, provider)
  .then((result) => {

    const user = result.user;
    console.log(user)
    localStorage.setItem("user",JSON.stringify({email:user.email}))
   
  }).catch((error) => {
      console.log(error)
  });

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="login-form">
                <fieldset className='ui'>
                    <legend className='sd'><h4><b><u>Login Info.</u></b></h4></legend>
                    <form onSubmit={handle}>
                        <div className="form-group">
                            <label><h5><b>Email :</b></h5></label><br />
                            <input
                                className='as'
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label for="password"><h5><b>Password :</b></h5></label><br />
                            <input
                                className='as'
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className='btn btn-info op'><b>Login</b></button>
                    </form>
                </fieldset>
            </div>
           <div className='q9'> <i className="fab fa-google fa-2x"></i>
           <button onClick={handleGoogle} className='btn btn-primary q8'>Login-with-Google</button></div>
            <div className='gh'><Footer></Footer></div>
        </div>

    )
}

export default LoginForm
