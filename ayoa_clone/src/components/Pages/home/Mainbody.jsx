import React from 'react'
import "./Main.css"
import Footer from './footer'
import { Box, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Slider from './SliderContent'
const partners = [{img:"https://www.ayoa.com/wp-content/uploads/2021/04/amazon_logo_new.png"},
{img:"https://www.ayoa.com/wp-content/uploads/2021/04/samsung_logo_new.png"},{img:"https://www.ayoa.com/wp-content/uploads/2021/04/oracle_logo_new.png"},
{img:"https://www.ayoa.com/wp-content/uploads/2021/04/continental_logo_new.png"},{img:"https://www.ayoa.com/wp-content/uploads/2021/04/salesforce_logo_new.png"},
{img:"https://www.ayoa.com/wp-content/uploads/2021/04/aetna_logo_new.png"},{img:"https://www.ayoa.com/wp-content/uploads/2021/04/bbc_logo_new.png"}
]
const association = [{img:"https://www.ayoa.com/wp-content/uploads/2021/07/ayoa_assistive_tech-300x120.png"},{img:"https://www.ayoa.com/wp-content/uploads/2021/07/bata_logo-234x300.png"},{img:"https://www.ayoa.com/wp-content/uploads/2021/07/bda_assured@2x-300x157.png"}]
const slider = [{image:"https://www.ayoa.com/wp-content/uploads/2020/10/organic.svg",title:"Mind maps",id:0},
                {image:"https://www.ayoa.com/wp-content/uploads/2020/10/whiteboard.svg",title:"White Boards",id:1},
                {image:"https://www.ayoa.com/wp-content/uploads/2020/10/workflow.svg",title:"Work Flow",id:2},
                {image:"https://www.ayoa.com/wp-content/uploads/2020/10/canvas.svg",title:"Canvas",id:3},
                {image:"https://www.ayoa.com/wp-content/uploads/2020/10/radial.svg",title:"Gantt",id:4},
                {image:"https://www.ayoa.com/wp-content/uploads/2020/10/organic.svg",title:"Radial",id:5},
                {image:"https://www.ayoa.com/wp-content/uploads/2022/06/catpuremaps.svg",title:"Capture",id:6}] 

const channel_data = [{image:"https://www.ayoa.com/wp-content/uploads/2018/05/cbsnews_logo.png",matter:"“The most unique twist on task management I’ve ever seen”"},
                      {image:"https://www.ayoa.com/wp-content/uploads/2018/05/techcrunch-logo.png",matter:"“Visually-oriented people – this layout boosts productivity”"},
                      {image:"https://www.ayoa.com/wp-content/uploads/2019/09/logo-lhacker.png",matter:"“Turns your tasks into an awesome venn diagram”"},
                      {image:"https://www.ayoa.com/wp-content/uploads/2019/09/logo-pcworld.png",matter:"“A more intuitive way to manage workloads”"},]
                  
const Mainbody = () => {
  const [state,setState] = useState(0)
  return (
    <>
    <div className='body'>
        <Text style={{textAlign:"center"}} fontSize="5xl" fontWeight="800">Be different,Work visually</Text>
        <Text style={{textAlign:"center"}} fontSize="xl" mt={5} fontWeight="none">Try the world’s most visual productivity app. Supercharge thinking, planning and <br /> learning with AI, mind maps, task boards, and more</Text>
        <div className='get-started'>
          <div>
            <input type="text" placeholder='Enter your Email'/>
          </div>
          <div>
          <NavLink to="/login">
          <button>Get started</button>
          </NavLink>
          </div>
        </div>
        <div className='video'>
          <a href="https://www.youtube.com/watch?v=Iy49L8a8i7M">
          <img src="https://www.ayoa.com/wp-content/uploads/2022/07/ayoa_allinone_watch.webp" alt="video" />
          </a>
        </div>
        <div className='channel-comments'>
          {
              channel_data.map(({image,matter})=>{
                return (
                  <>
                  <div>
                    <div className='img' style={{width:"100px"}}>
                      <img src={image} alt="pic" />
                    </div>
                    <p>{matter}</p>
                  </div>
                  </>
                )
              })
          }
          </div>
          <div className='parent-anime'>
            <Box>
            <Text style={{textAlign:"left"}} mt={10} mb={10} fontSize="6xl" fontWeight="800">The world only <br />  mind maps with <span className='span-ai'>AI</span></Text>
            </Box>
            <Text  fontSize="xl" style={{textAlign:"left"}} > Use one of the largest deep learning networks ever created to generate unique <br /> and innovative ideas for <strong>anything you can think of</strong></Text>
              <ul className='anime-ticks'>
                <li>✔️  .Ask the right questions</li>
                <li>✔️  .Breeze past blocks</li>
                <li>✔️  .Unlock problems</li>
                <li>✔️  .mind map in full flow</li>
                <li>✔️  .Explore new Angles</li>
              </ul>
              <Text fontSize="l" style={{textAlign:"left"}} mt={10} mb={10}>Take your mind maps to the next level using AI. <br /> Available in <strong>Ayoa Ultimate only</strong></Text>
              <NavLink >
                <button >Find out more</button>
              </NavLink>
          </div>
          <Text style={{textAlign:"center"}} mt={100} mb={50} fontSize="6xl" fontWeight="800">Choose creativity or productivity, <br /> or why not have it all?</Text>
          <div className='choose-grid'>
            <div>
              <Text fontSize="3xl" mb={5} style={{textAlign:"left"}} fontWeight="700" color="#6A2FCC">Ayoa Mind map</Text>
              <Text  fontSize="xl" mb={10} style={{textAlign:"left"}} > Great for those looking to brainstorm <br /> ideas and get creative</Text>
              <ol style={{textAlign:"left"}}>
                <li>✔️ Organic mind map</li>
                <li>✔️ Speed mind maps</li>
                <li>✔️ Radial mind maps</li>
                <li>✔️ Capture mind maps</li>
              </ol>
              <div className='opaque-img'>
              <img src="https://www.ayoa.com/wp-content/uploads/2022/07/mm-laptop.png" alt="pic"/>
              </div>
            </div>
            
            <div>
            <Text fontSize="3xl" mb={5} fontWeight="700" style={{textAlign:"left"}} color="#73C43B">Ayoa Task</Text>
              <Text  fontSize="xl" mb={10} style={{textAlign:"left"}} >Easily manage your workload and  <br /> meet your deadline</Text>
              <ol style={{textAlign:"left"}}>
                <li>✔️ Work flow view</li>
                <li>✔️ Canvas view</li>
                <li>✔️ Urgency list</li>
                <li>✔️ Personal Planner</li>
              </ol>
              <div className='opaque-img'>
              <img src="https://www.ayoa.com/wp-content/uploads/2022/07/canvas-laptop.png" alt="pic"/>
              </div>
            </div>
            <div className='extrapolate'>
              {/* last  */}
              <div className='elaborate-img'>
                <div>
                  <img src="https://www.ayoa.com/wp-content/uploads/2022/07/AYOA-GUY.png" alt="pic" />
                </div>
                <Text color="white" style={{textAlign:"center"}} fontSize="3xl" mb={5} fontWeight="700">Ayoa Ultimate</Text>
                <Text color="white" style={{textAlign:"center"}}  fontSize="xl" mb={10} >The full  <strong>Suite</strong>  of Ayoa Mind Map, Ayoa <br /> Task and more…</Text>
              </div>
              <ol className='auto' >
                <li>✔️ Work flow view</li>
                <li>✔️ Canvas view</li>
                <li>✔️ Urgency list</li>
                <li>✔️ Personal Planner</li>
              </ol>
             </div>
          </div>
          <div className='full-compare-btn'>
              <NavLink >
                <button   colorScheme="">See full feature and comparison</button>
              </NavLink>
          </div>
          <div className='flexibility'>
          <Text style={{textAlign:"center"}} mt={20} mb={3} fontSize="6xl" fontWeight="800">Unrivaled <span className='span-unrival'>flexibility</span></Text>
          <Text fontSize="xl" style={{textAlign:"center"}} mt={10} mb={10}>Whether you’re brainstorming ideas, presenting in meetings, or managing tasks, Ayoa provides <br /> you with flexibility and intuitive working methods <strong>every step of the way</strong></Text>
          </div>
      </div>
      <div className='slider'>
             {
              slider.map(({image,title,id})=>{
                return (
                  <>
                   <div onClick={()=>{setState(id)}}>
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                <Text fontSize="l" color="teal" fontWeight="800">{title}</Text>
                </div>
              </div>
                  </>
                )
              })
             }
      </div>
      <div className='slider-content'>
      <Slider state={state}/> 
      </div>
      <div className='bottom-body'>
             <div className='bottom-body-img'>
              <img src="https://www.ayoa.com/wp-content/uploads/2021/11/diverse_teams_ayoa-1024x862.webp" alt="" />
             </div>
             <div>
             <Text style={{textAlign:"left"}} fontSize="6xl" fontWeight="800">Designed for diversity of thought</Text>
              <Text fontSize="xl" style={{textAlign:"left",lineHeight:"2"}} mb={10}>Diverse ideas discover alternative paths, they break moulds, they lead to <br /> breakthroughs. Discover how Ayoa’s  makes it a  tool which helps different <br /> types of people work together to achieve their <br /> best work.</Text>
              <div className='association'>
                {
                  association.map(({img})=>{
                    return(
                      <div className='association-img'>
                      <img src={img} alt="" />
                      </div>
                    )
                  })
                }
              </div>
             </div>
      </div>
      <div className='partners'>
      <h1 style={{fontSize:"50px",textAlign:"center",color:"white"}}><strong>Try <span className='symbol'>AYOA</span> today</strong></h1>
      <div className='get-started start2'>
          <input type="text" placeholder='Enter your Email'/>
          <NavLink to="/">
          <button>Get started</button>
          </NavLink>
        </div>
        <h1 style={{fontSize:"30px",textAlign:"center",color:"white",marginTop:"40px"}}><strong>Trusted by</strong></h1>
        <div className='partner-img-div'>
          {
             partners.map(({img})=>{
              return (
                <div className='partner-img'>
                  <img src={img} alt="" />
                </div>
              )
             })
          }
          
        </div>
        <div className='stars-rating'>
          <img src="https://www.ayoa.com/wp-content/uploads/2020/02/Stars.png" alt="" />
        </div>
        <Text fontSize="2xl" color="white" style={{textAlign:"center",lineHeight:"2"}} mt={5}>Average rating of <strong style={{fontSize: "22px",marginTop: "15px", color: "#FFCA00", fontWeight: 800}}>4.5 stars</strong> from <strong style={{color:"white",fontWeight:800}}>1,000+</strong> reviews </Text>
        <Text fontSize="l" color="white" style={{textAlign:"center"}} mb={10}>across the Apple App store and Google play and Capterra</Text>
      </div>
        
          <Footer></Footer>


      
    </>
  )
}

export default Mainbody
/*
<video class="generateideas-anim" preload="auto" muted="" loop="" poster="/wp-content/uploads/2021/11/svg_poster.jpg" playsinline="" webkit-playsinline="" autoplay="">
<source src="/wp-content/uploads/2021/11/generateideas.mp4">
</video>
 */