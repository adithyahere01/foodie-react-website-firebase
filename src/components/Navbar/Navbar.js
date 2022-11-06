import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Context'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config'

const Navbar = () => {
   const { name, userLogged, setUserLogged } = useGlobalContext()
   const [nav, setNav] = useState(false)

   const logout = () =>{
       signOut(auth)
       setUserLogged(false)
   }

    return (
        <nav>
            <header className="navbar">
                <div className="brand">
                    <Link to='/'>FOODIE</Link>
                </div>

                <div className={nav ?'nav-links show-links' :'nav-links'}>
                    <ul>
                        <li><Link to='/' onClick={()=>setNav(false)}>Home</Link></li>
                
                        <li><Link to="/menu" onClick={()=>setNav(false)}>Menus</Link></li>
                    
                        <li><Link to='/about' onClick={()=>setNav(false)}>About</Link></li>
        
                        <li><Link to="/contact" onClick={()=>setNav(false)}>Contact</Link></li>
                    </ul>

                    <div className={nav ?'cross show-cross' :'cross'} onClick={()=>setNav(false)}><i className="fa-solid fa-xmark"></i></div>
                </div>

                <div className={nav ? "actions show-actions" : "actions"}>
                    <ul>
                        {userLogged && 
                        <>
                         <li><button className='btn'><Link to='#' ><i className="fas fa-user-circle"></i><span className="displayName">{name ?`@${name}` :'@username'}</span></Link></button></li>
                         <li><button className='btn' onClick={logout} >SignOut</button></li>
                        </>
                        }
                        {!userLogged && 
                        <>
                            <li><button className='btn'><Link to='/login' onClick={()=>setNav(false)}>Login</Link></button></li>

                             <li><button className='btn'><Link to='/signup' onClick={()=>setNav(false)}>Sign Up</Link></button></li>
                        </>
                        }
                    </ul>
                </div>
                
                <div className="hamburger" onClick={()=>setNav(true)}><i className="fa-solid fa-bars"></i></div>
            </header>
        </nav>
    )
}

export default Navbar
