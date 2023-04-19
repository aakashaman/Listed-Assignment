import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import { signInWithPopup } from "firebase/auth";
import Homepage from "./Homepage";



function Signin(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

    
    return (
        <div>
        {value?<Homepage/>:
        <button onClick={handleClick}>Signin With Google</button>
        }
        </div>
    );
    }

export default Signin;
