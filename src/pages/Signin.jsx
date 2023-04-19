import React, { useEffect, useState } from "react";
import {auth, provider} from "./config";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Homepage from "./Homepage";
import s from './signin.module.css'
import googleImage from './google.svg';
import appleImage from './apple.svg';

function Signin(){
    const [value,setValue] = useState('')
    const [showSignup, setShowSignup] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSignupModal, setShowSignupModal] = useState(false);

    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    const handleSignup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setValue(user.email);
                localStorage.setItem("email", user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setValue(user.email);
                localStorage.setItem("email", user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

    const handleSignupClick = () => {
        setShowSignupModal(true);
      };
      
      const closeSignupModal = () => {
        setShowSignupModal(false);
      };
    
    return (
        <div >
        {value?<Homepage/>:
     <div style={{ display: "flex" }}>
     <div style={{ display: "flex", width: "35vw", height: "100vh", backgroundColor: "black" }}>
       <p style={{ color: "white", fontSize: "72px", fontWeight: "700", marginTop: "40vh", marginLeft: "10vw" }}>Board.</p>
     </div>
     <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "65vw" }}>
       <h2 style={{marginRight:'15vw',fontSize:"36px"}}>Sign In</h2>
       <p style={{marginRight:'12.5vw',fontSize:"16px",marginTop:'-20px'}}> Sign in to your Account</p>
       <div style={{display:"flex",gap:"5px",marginTop:'-10px'}}>
       <button className={s.loginbutton} onClick={handleClick}><img className={s.imagelog} src={googleImage} alt="Google" />Sign in With Google</button>
       <button className={s.loginbutton} > <img className={s.imagelog} src={appleImage} alt="Apple" />Sign in with Apple</button>
       </div>
       <div className={s.signcontainer}>
         <form onSubmit={handleLogin}>
           <label htmlFor="username">Email Address</label>
           <input className={s.intext} type="text" id="username" name="username" value={email} onChange={(event) => setEmail(event.target.value)} />
           <label htmlFor="password">Password</label>
           <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
           <p style={{fontSize:'16px',font:"lato",color:'blue'}}>Forgot Password?</p>
<button  type="submit">Sign In</button>
</form>

<p style={{marginTop:'30px',marginBottom:'20px'}}>Don't have an account? <span style={{color:'blue',cursor:"pointer"}} onClick={handleSignupClick}>Register here</span></p>

{showSignupModal && (
     <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center",alignItems: "center" }}>
        <div style={{ backgroundColor: "#fff", width: "20.5vw", height: "40vh", padding: "3vw", borderRadius: "10px" }}>
          <span className={s.close} onClick={closeSignupModal}>
            &times;
          </span>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Sign Up</h2>
          <form onSubmit={handleSignup}>
            <label htmlFor="email">Email Address</label>
            <input
            className={s.intext}
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className={s.signupbutton} type="submit">
                Sign Up
            </button>
          </form>
        </div>
      </div>
    )}
  </div>


</div>

   </div>
}
   </div>
    )
}
export default Signin;







