import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase';

const Register=()=> {
  const auth = getAuth(app);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
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
    console.log(email,password)
  };

  return (
<div>
    <Navbar></Navbar>
    <div className="register-form">
       <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label><h5><b>First Name :</b></h5></label><br/>
            <input
              className='fg'
              type="text"
              name="firstName"
              placeholder="First Name"/>
          </div>
          <div className="form-group">
            <label><h5><b>Last Name :</b></h5></label><br/>
            <input
              className='fg'
              type="text"
              name="lastName"
              placeholder="Last Name"/>
          </div>
          <div className="form-group">
            <label><h5><b>Email :</b></h5></label><br/>
            <input
              className='fg'
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label><h5><b>Password :</b></h5></label><br/>
            <input
              className='fg'
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button type="submit" className='btn btn-primary zx'><b>Register</b></button>
        </form>
    </div>
    <div className='xc'><Footer></Footer></div>
</div>
  );
}

export default Register;
