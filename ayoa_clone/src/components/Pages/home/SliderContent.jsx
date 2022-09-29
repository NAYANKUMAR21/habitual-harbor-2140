import { Text } from '@chakra-ui/react'
import React from 'react'

const sliderData = [{heading:"Mind maps",para:"Mind Mapping is proven to boost productivity, creativity and memory. Grow ideas, structure information, and see the whole picture.",href:"https://www.youtube.com/watch?v=rcIWb6fxcms&rel=0",image:"https://www.ayoa.com/wp-content/uploads/2021/11/mm_thumbnail_new.png",Vtag:"How to use mind maps",Vtime:"02:22",Banner:"https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_mm_new_webp.webp"},
{heading:"Whiteboards ",para:"Use whiteboards for freeform thinking or to create content dashboards.  Add post-it notes, images, flowcharts, links, videos and more.",href:"https://www.youtube.com/watch?v=IXdFYFozmKw",image:"https://www.ayoa.com/wp-content/uploads/2021/11/wb_thumbnail_new.png",Vtag:"How to use whiteboards",Vtime:"01:56",Banner:"https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_wb_new_webp_2.webp"},
{heading:"Workflow ",para:"Inspired by the traditional Kanban board, this visual task board view lets you manage your projects and workflows in a clear, linear way.",href:"https://www.youtube.com/watch?v=s6RZCNRirVE",image:"https://www.ayoa.com/wp-content/uploads/2021/11/wb_thumbnail_new.png",Vtag:"How to use Workflow",Vtime:"02:02",Banner:"https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_kanban_new_webp.webp"},
{heading:"Canvas ",para:"Discover a more creative way to manage your tasks. Canvas view makes it easy to visualize your work in a fun circular format.",href:"https://www.youtube.com/watch?v=sNMZJQIckBM",image:"https://www.ayoa.com/wp-content/uploads/2021/11/canvas_thumbnail_new.png",Vtag:"How to use Canvas",Vtime:"02:17",Banner:"https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_canvas_new_webp.webp"},
{heading:"Gantt timeline ",para:"Working on a project with multiple milestones? View your tasks in clear and easily adaptable Gantt timeline mode.",href:"https://www.youtube.com/watch?v=OhAMQSDtots",image:"https://www.ayoa.com/wp-content/uploads/2021/11/gantt_thumbnail_new.png",Vtag:"How to use gantt timeline",Vtime:"01:14",Banner:"https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_gantt_new_webp.webp"},
{heading:"Radial",para:"Ready to make every goal a reality? Present your aims and ideas in a visual pie-chart and stay motivated by seeing your priorities at a glance.",href:"https://www.youtube.com/watch?v=oXIdUaggGho",image:"https://www.ayoa.com/wp-content/uploads/2021/11/radial_thumbnail_new.png",Vtag:"How to use Radial maps",Vtime:"01:59",Banner:"https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_radial_new_webp.webp"},
{heading:"Capture maps",para:"Capture maps are the quickest and easiest way to capture notes and ideas. Great for brainstorming and note making.",href:"https://www.youtube.com/watch?v=rSGOUDoUHsQ",image:"https://www.ayoa.com/wp-content/uploads/2022/06/fc_video_thumbnail.png",Vtag:"How to use capture maps",Vtime:"01:35",Banner:"https://www.ayoa.com/wp-content/uploads/2022/06/capturemaps.webp"},]



const Slider = ({state}) => {
  return (
    <>
    <div>
             <Text style={{textAlign:"left"}} mt={10} mb={10} fontSize="4xl" fontWeight="800" color="#1a9ef6;">{sliderData[state].heading}</Text>
             <Text fontSize="xl" style={{textAlign:"left",lineHeight:"2"}} mb={10}>{sliderData[state].para}</Text>
             <hr />
             <br />
             <div className='slider-video'>
              <div>
              <a href={sliderData[state].href}>
                <img src={sliderData[state].image} alt="" />
              </a>
              </div>
              <div>
              <Text fontSize="md" style={{textAlign:"left"}} fontWeight="800" md={2} color="teal">{sliderData[state].Vtag}</Text>
              <p>{sliderData[state].Vtime}</p>
              </div>
             </div>
             <br />
             <hr />
             </div>
             <div className='slider-right-image'>
              
                <img src={sliderData[state].Banner} alt={state} />
              
             </div>
    </>
      
    
  )
}

export default Slider

/*
<div>
             <Text style={{textAlign:"left"}} mt={10} mb={10} fontSize="4xl" fontWeight="800" color="#1a9ef6;">Mind maps </Text>
             <Text fontSize="xl" style={{textAlign:"left",lineHeight:"2"}} mb={10}>Mind Mapping is proven to boost productivity, <br /> creativity and memory. Grow ideas, structure <br /> information, and see the whole picture.</Text>
             <hr />
             <br />
             <div className='slider-video'>
              <div>
              <a href="https://www.youtube.com/watch?v=rcIWb6fxcms&rel=0">
                <img src="https://www.ayoa.com/wp-content/uploads/2021/11/mm_thumbnail_new.png" alt="" />
              </a>
              </div>
              
              <div>
              <Text fontSize="md" style={{textAlign:"left"}} fontWeight="800" md={2} color="teal">How to use mind maps</Text>
              <p>02:22</p>
              </div>
             </div>
             <br />
             <hr />
             </div>
             <div className='slider-right-image'>
              
                <img src="https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_mm_new_webp.webp" alt="" />
              
             </div>
*/