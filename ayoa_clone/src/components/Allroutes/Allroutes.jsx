import React from 'react'
import {Routes,Route} from "react-router-dom"
import Dashboard from '../Pages/Dashboard/Dashboard'
import Mainbody from '../Pages/home/Mainbody'
import Login from '../Pages/LoggedIn/Login'
import PrivateRoute from './PrivateRoute'
const Allroutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Mainbody/>}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/login/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
    </Routes>
    </>
  )
}

export default Allroutes
