import { Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import {AuthContext} from '../../Context/AuthContext'
import "./dashboard.css"

const Dashboard = () => {
    const {token} = useContext(AuthContext) 
    const code = token.token
    console.log(code,"dahborard")
  return (
    <div className='token'>
        <Text fontSize="6xl" style={{textAlign:"center"}}>DashBoard : {code}</Text>
        <Text fontSize="4xl" style={{textAlign:"center"}}>Nayan</Text>
    </div>
  )
}

export default Dashboard
