import {React, useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/userContext'
import {signOut} from "firebase/auth"
import {useNavigate} from "react-router"
import { auth } from '../firebase-config'

export default function Navbar() {
    const {toggleModals} = useContext(UserContext)
    const navigate = useNavigate()
    const logOut = async () => {
        try {
            await signOut(auth)
        } catch {
            alert("For some reasons we can't deconnect, please check your internet connexion and ResizeObserverEntry.")
        }
    }
  return (
    <nav className='navbar navbar-light bg-light px-4'>
        <Link to="/" className="navbar-brand"> 
            AuthJS
        </Link>
        <div>
            <button className='btn btn-primary'
                onClick={() => toggleModals('signUp')}
            >
                Sign Up
            </button>
            <button className='btn btn-primary ms-2'
             onClick={() => toggleModals('signIn')}
            >
                Sign In
            </button>
            <button 
            onClick={logOut}
            className='btn btn-danger ms-2'>
                Log Out
            </button>
        </div>
    </nav>
  )
}
