import '@fontsource/open-sans/700.css'
import React from 'react'
import "./Navbar.css"
import {GiHamburgerMenu } from "react-icons/gi"
import {Link, NavLink} from "react-router-dom"
import {
    Button,
    Img,
    ListItem,
    
    Text,
    UnorderedList,
  } from '@chakra-ui/react'
import { useState } from 'react'
import Dropdown from './Dropdown'
const obj = ["Ayoa Mind Map","Ayoa Task","Ayoa Ultimate"]
const NeuroDiversity=["DSA","Software","Workplace","Education"]
const Resources = ["Ayoa Blog","Press& Ariticles","Keynote Speaker","Our Partners","Help Center"]
const Country = [{flag:"https://www.ayoa.com/wp-content/uploads/2022/09/South-Korea.png",name:"KR"},
                 {flag:"https://www.ayoa.com/wp-content/uploads/2022/09/Japan.png",name:"JP"},
                 {flag:"https://www.ayoa.com/wp-content/uploads/2022/09/China.png",name:"CN"},
                 {flag:"https://www.ayoa.com/wp-content/uploads/2022/09/France.png",name:"FR"}]
const Navbar = () => {
    const [state,setState] = useState(false)
    console.log(state)
    
    

  return (
    <div className='parent-nav'>
      <nav className='nav'>
        <div className='logo'>
            <img src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/ayoa_bluenavlogo.svg" alt="logo" />
            
        </div>
        
        <div className="menu">
            <UnorderedList style={{listStyleType:"none"}}>
                <ListItem padding={3}>
                    <Text>
                    <NavLink to="/">Home</NavLink>
                    </Text>
                </ListItem>
                <ListItem padding={3} className="products"> 
                <Text>
                    <NavLink  to="/" >Products</NavLink>
                    <div className='nayan1'>
                        {
                            obj.map((el)=>{
                                return (
                                    <div key={el}>
                                    <p>{el}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Text>
                </ListItem>
                <ListItem padding={3} className="products">
                    <Text >
                    <NavLink to="/">Neurodiversity</NavLink>
                    <div className='nayan2'>
                    {
                            NeuroDiversity.map((el)=>{
                                return (
                                    <div key={el}>
                                    <p>{el}</p>
                                    </div>
                                )
                            })
                    }
                    </div>
                    </Text>
                </ListItem>
                <ListItem padding={3} className="products">
                    <Text>
                    <NavLink to="/">Resources</NavLink>
                    <div className='nayan3'>
                    {
                            Resources.map((el)=>{
                                return (
                                    <>
                                    <p>{el}</p>
                                    </>
                                )
                            })
                    }
                    </div>
                    </Text>
                </ListItem>
                <ListItem padding={3}>
                    <Text >
                    <NavLink to="/">Pricing</NavLink>
                    </Text>
                </ListItem>
                <ListItem padding={3} className="flag">
                    <div to='/' className="flag-flex England">
                        <div><Img className="EN" src="https://www.ayoa.com/wp-content/uploads/2022/09/UKUS.png"></Img></div>
                        <div><h1>EN</h1></div>
                    </div>
                    <div className='nayan4'>
                      {
                        Country.map(({flag,name})=>{
                            return (
                                <div key={name} className="flag-flex">
                                    <div>
                                        <Img src={flag} alt={name}/>
                                    </div>
                                    <div>
                                        <h1>{name}</h1>
                                    </div>
                                </div>
                            )
                        })
                      }
                    </div>
                </ListItem>
                <ListItem >
                    <Button colorScheme={"white"} borderRadius="20px" color={"black"} border="0.5px solid black" className='login'>
                    <NavLink to="/">Login</NavLink>
                    </Button>
                </ListItem>
            </UnorderedList>

            <div className='hamburger' onClick={()=>setState(!state)}>
                <Link onClick={()=>setState(!state)}>
                    <div className='burger'>
                    <GiHamburgerMenu  color='white'/>
                    </div>
                </Link>
               
            </div>
           
        </div>
        
      </nav>
        {
                    state ? <Dropdown/> :null
        }
      <hr />
    </div>
  )
}
 export default Navbar
/*

*/