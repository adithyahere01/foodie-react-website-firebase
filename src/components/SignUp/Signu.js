import {useState, useRef } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase-config';
import './Signup.css'
import { useGlobalContext } from '../../Context';

const Signu = () => {
    const { name, setName, setUserLogged } = useGlobalContext()
    
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const nameRef = useRef(null)

   const signup = async () =>{
     try{
        const user =  await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        // console.log(user);
        if(user){
            setUserLogged(true)
            setRegisterEmail("")
            setRegisterPassword("")
            nameRef.current.value = " "
        }
     }
     catch(err){
         console.log(err.message);
    }
   }

   const googleSignIn = ()=>{
      const provider = new GoogleAuthProvider()

      signInWithPopup(auth, provider)
      setUserLogged(true)
   }

    return (
        <section className='signup-section'>
            <div className='signup-div'>
                <h1>Create an Account <span className="signuo-line"></span></h1>
                <button className="btn" onClick={googleSignIn}>Sign Up with G</button>

                <input type="text" placeholder='Name...' value={name} ref={nameRef} onChange={(e) => setName(e.target.value)} /> 
                <input type="email" placeholder='Email...' value={registerEmail} onChange={(e)=> setRegisterEmail(e.target.value)} /> 
                <input type="password" placeholder='Password' value={registerPassword} onChange={(e)=> setRegisterPassword(e.target.value)} /> 

                <button className='btn' onClick={signup}>Sign Up</button>
            </div>
        </section>
    )
}

export default Signu

