import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const PrivateRoute = ({children}) => {
    const {Auth} = useContext(AuthContext)
    
      if(Auth===false){
        return <Navigate to="/"/>
      }

      return children

}

export default PrivateRoute
