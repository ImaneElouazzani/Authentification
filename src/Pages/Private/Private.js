import React, {useContext} from 'react'
import { UserContext } from '../../Context/userContext'
import { Outlet, useLocation, Navigate } from 'react-router'

export default function Private() {

    const {currentUser} = useContext(UserContext)
    console.log("PRIVATE", currentUser)
    if(!currentUser) {
        return <Navigate to="/" />
    }

  return (
    <div className="container">
        {/* le outlet c'est pour montrer les composants imbriqés et leurs sorti
        sera ici */}
        <Outlet/>
    </div>
  )
}
