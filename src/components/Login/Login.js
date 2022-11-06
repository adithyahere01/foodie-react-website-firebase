import React,{useState} from 'react'
import { auth } from '../../firebase-config';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useGlobalContext } from '../../Context';
import './Login.css'

const Login = () => {
    const { setUserLogged } = useGlobalContext()
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })

    const login = async() =>{
        try{
            const loggedUser =  await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            if(loggedUser){
                setUserLogged(true)
                setLoginEmail("")
                setLoginPassword("")
            }
         }catch(err){
             console.log(err.message);
         }
    }

    const logout = async() =>{
        await signOut(auth)
        setUserLogged(false)
        setUser({})
    }

    return (
        <section className='login-section'>
             <div className='login-div'>
                <h1>Login</h1> 
                <input type="email" placeholder='Email' value={loginEmail} required onChange={(e)=> setLoginEmail(e.target.value)} /> 
                <input type="password" placeholder='Password' value={loginPassword} onChange={(e)=> setLoginPassword(e.target.value)} /> 

                <button className='btn' onClick={login}>Login</button> 
                <h3>User Name: {user?.email}</h3>

                <button className='btn' onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}

export default Login
