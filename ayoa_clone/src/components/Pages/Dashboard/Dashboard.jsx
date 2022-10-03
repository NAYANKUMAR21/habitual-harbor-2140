import {  Text,Button, Input } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import {AuthContext} from '../../Context/AuthContext'
import "./dashboard.css"
import {BiSearch} from "react-icons/bi"
import {FaFilter} from "react-icons/fa"
import { TbAlignJustified } from "react-icons/tb";

const Dashboard = () => {
    const {token,name,Auth} = useContext(AuthContext) 
    console.log(name,Auth,"dashboard")
    console.log(Auth,"login dashbord")
    const {email}  = name
    

    var sum = ""
  for(let i=0;i<email.length;i++){
    if(email[i]==="@"){
      break;
    }
    sum += email[i]
  }

    console.log(email,email[0],sum)
    const code = token.token
    console.log(code,"dahborard")

    


  return (
      <div className='dash-body'>
      <div style={{margin:"auto",display:"flex",justifyContent:"space-evenly"}}>
      <Text  fontSize="3xl" style={{textAlign:"center",marginTop:"100px",marginLeft:"0px"}}>Hello , {sum}</Text>  
      <Text  fontSize="l" style={{textAlign:"center",marginTop:"100px",marginBottom:"0px"}}>Your token is : {code}</Text>
      </div>
    <div className='dash-nav'>
         <hr />
         <br />
         <br />
         <div className='rightBar'>
          <div>
            <div>
            <img src="https://app-assets.ayoa.com/8.96.6/images/icons/home.svg" alt="home" />     
            </div>
            <h1 style={{fontWeight:" bold"}}>Home</h1>
          </div>
          <div>
          <div>
          <img src="https://app-assets.ayoa.com/8.96.6/images/folders/folders.svg" alt="folder" />     
          </div>
          <h1 style={{fontWeight:" bold"}}>Folder</h1>
          </div>
          <div>
            <div>
            <img src="https://app-assets.ayoa.com/8.96.6/images/icons/planner.svg" alt="Notes" />     
            </div>
            <h1 style={{fontWeight:" bold"}}>Note</h1>
          </div>
          <div>
            <div>
            <img src="https://app-assets.ayoa.com/8.96.6/images/icons/search-icon.png" alt="Search" />     
            </div>
            <h1 style={{fontWeight:" bold"}}>Search</h1>
          </div>
    
         </div>
         <div className='sideBar'>
          <div>
          <div className='top-sideBar'>
            <Button mr={20} style={{color:" rgb(255, 255, 255)",background: "rgb(0, 144, 255)"}}> <span style={{fontWeight:"bold",marginRight:"5px"}}>+</span> Create New</Button>
            <div className='input-feilds' style={{marginRight:"10px"}}>
              <BiSearch style={{color:" rgb(0, 144, 255)"}} className='search-icon'/>
              <Input  p={2} placeholder="Search"></Input>
            </div>
            <div className='input-feilds' style={{marginRight:"10px"}}>
              <TbAlignJustified style={{color:" rgb(0, 144, 255)"}} className='search-icon'/>
              <Input p={2} placeholder="Search"></Input>
            </div>
            <div className='input-feilds' style={{marginRight:"10px"}}>
            <FaFilter style={{color:" rgb(0, 144, 255)"}} className='search-icon'/>
              <Input p={2} placeholder="Search"></Input>
            </div>
          </div>
          </div>
          <div className='bottom-box'>
            <div>
              <div>
                <img src="https://app-assets.ayoa.com/8.96.6/images/home/home-idea-boards.svg" alt="Mind map" />
              </div>
              <p style={{textAlign:"center"}}> Mind Map</p>
              <p> <strong>Grow and structure</strong> ideas using <br /> radial, speed, or organic style  <strong>mind <br /> maps</strong></p>
              <Button mt={2} style={{color:" rgb(255, 255, 255)",background: "rgb(0, 144, 255)"}}>Create mind map</Button>
            </div>
            <div>
              <div>
                <img src="https://app-assets.ayoa.com/8.96.6/images/home/home-whiteboards.svg" alt="White board" />
              </div>
              <p style={{textAlign:"center"}}>WhiteBoard</p>
              <p><strong>Brainstorm ideas</strong>, work together, <br /> and cultivate knowledge on a <br /> <strong>limitless canvas .</strong></p>
              <Button  mt={2} style={{color:" rgb(255, 255, 255)",background: "rgb(0, 144, 255)"}}>Create WhiteBoard</Button>
            </div>
            <div>
              <div>
                <img src="https://app-assets.ayoa.com/8.96.6/images/home/home-task-boards.svg" alt="Task board" />
              </div>
              <p style={{textAlign:"center"}}>Task Board</p>
              <p> <strong>Take action</strong>  and get things done by <br /> <strong>managing tasks</strong> using multiple <br /> project views.</p>
              <Button  mt={2} style={{color:" rgb(255, 255, 255)",background: "rgb(0, 144, 255)"}}>Create task Board</Button>
            </div>
          </div>
         </div>
    </div>
    </div>
  )

}

export default Dashboard
/*
<Text  fontSize="6xl" style={{textAlign:"center"}}>DashBoard : {code}</Text>
        <Text fontSize="4xl" style={{textAlign:"center"}}>Nayan</Text>
        background-image: url("https://app-assets.ayoa.com/8.96.6/images/home/home-idea-boards.svg");
        https://app-assets.ayoa.com/8.96.6/images/icons/planner.svg
        background-image: url("https://app-assets.ayoa.com/8.96.6/images/home/home-whiteboards.svg");
        background-image: url("https://app-assets.ayoa.com/8.96.6/images/home/home-task-boards.svg");
        marginBottom:"0px"
*/