import { Button, ListItem, OrderedList, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./dropDown.css"
const obj = ["Ayoa Mind Map","Ayoa Task","Ayoa Ultimate"]
const NeuroDiversity=["DSA","Software","Workplace","Education"]
const Resources = ["Ayoa Blog","Press& Ariticles","Keynote Speaker","Our Partners","Help Center"]

const Dropdown = () => {
  return (
    <div className='mobile-menu'>
             <UnorderedList style={{listStyleType:"none"}}>
                <ListItem padding={3}>
                    <NavLink to="/">HOME</NavLink>
                </ListItem>
                <ListItem padding={3}> 
                    <NavLink to="/">PRODUCTS</NavLink>
                    <OrderedList>
                        {
                            obj.map((el)=>{
                                return (
                                    <>
                                    <ListItem key={el}>--{el}</ListItem>
                                    </>
                                )
                            })
                        }
                    </OrderedList>
                </ListItem>
                <ListItem padding={3}>
                    <NavLink to="/">NEO-DIVERSITY</NavLink>
                    <OrderedList>
                        {
                             NeuroDiversity.map((el)=>{
                                return (
                                    <>
                                    <ListItem  key={el}>--{el}</ListItem>
                                    </>
                                )
                            })
                        }
                        {/* <ListItem>-Ayoa mind mapping</ListItem>
                        <ListItem>-Ayoa mind mapping</ListItem>
                        <ListItem>-Ayoa mind mapping</ListItem>
                        <ListItem>-Ayoa mind mapping</ListItem> */}
                    </OrderedList>
                </ListItem>
                <ListItem padding={3}>
                    <NavLink to="/">RESOURCES</NavLink>
                    <OrderedList>
                    {
                             Resources.map((el)=>{
                                return (
                                    <>
                                    <ListItem  key={el}>--{el}</ListItem>
                                    </>
                                )
                            })
                        }
                        {/* <ListItem>-Ayoa mind mapping</ListItem>
                        <ListItem>-Ayoa mind mapping</ListItem>
                        <ListItem>-Ayoa mind mapping</ListItem>
                        <ListItem>-Ayoa mind mapping</ListItem> */}
                    </OrderedList>
                </ListItem>
                <ListItem padding={3}>
                    <NavLink to="/">PRICING</NavLink>
                </ListItem>
                <ListItem padding={3}>
                    <select name="" id="">
                        <option value="">Country</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </ListItem>
                <ListItem >
                    <Button colorScheme={"white"} borderRadius="20px" color={"black"} border="0.5px solid black">
                    <NavLink to="/">Login</NavLink>
                    </Button>
                </ListItem>
            </UnorderedList>
      
    </div>
  )
}

export default Dropdown



