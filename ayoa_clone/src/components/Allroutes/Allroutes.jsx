import React from 'react'
import {Routes,Route} from "react-router-dom"
import Mainbody from '../Pages/home/Mainbody'
const Allroutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Mainbody/>}></Route>
    </Routes>
    </>
  )
}

export default Allroutes
