import React from 'react'
import "./Footer.css"
const social_icons = [{img:"https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/twitter.png"},
{img:"https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/facebook.png"},
{img:"https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/youtube.png"},
{img:"https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/instagram.png"},
{img:"https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/linkedin.png"}]
const ayoa_approved = [{img:"https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/combined_logos.png",id:1},
{img:"https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/gcloudsupplier@2x.png",id:2},
{img:"https://www.ayoa.com/wp-content/uploads/2022/06/bata_logo-250.png",id:3},{img:"https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/bda_assured@2x.png",id:4}]
const Footer = () => {
  return (
    <div className='footer-parent'>
      <div className='footer'>
        <div>
            <ol>
                <li>Ayoa</li>
                <li>Features</li>
                <li>About us</li>
                <li>Pricing</li>
                <li>Integrations</li>
                <li>Security</li>
            </ol>
            <br />
            <ol>
                <li>News</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Road map</li>
                <li>Release Note</li>
            </ol>
        </div>
        <div>
        <ol>
                <li>Task management</li>
                <li>Mind Mapping</li>
                <li>Project management</li>
                <li>Marketing</li>
                <li>Finance</li>
                <li>Education</li>
                <li>Neurodiversity</li>
                <br />
                <li>All Use Cases</li>
                <li>Mind Maps Gallery</li>
                <li>Template Library</li>
                <br />
                <li>Customer Success Stories</li>
                <li></li>
            </ol>
        </div>
        <div>
            <ol>
                <li>Support</li>
                <li>Help</li>
                <li>FAQ</li>
                <li>Free Demo and Webinar</li>
                <li>Where is DropTask</li>
                <li>How to mind map</li>
            </ol>
        </div>
        <div>
        <ol>
                <li>Services</li>
                <li>Applied inovation  training</li>
                <li>Trainer</li>
                <li>Keynote Speaker</li>
                <li>Partership Programmes</li>
                <li>Desicion Rader Profiler</li>
            </ol>
            <br />
            <ol>
                <li>Legal</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>License Agreement</li>
                <li>Use Policy</li>
                <li>How to mind map</li>
            </ol>
        </div>
        <div>
            <ol>
                <li>Download</li>
                <li>Andriod</li>
                <li>iPhone</li>
                <li>iPad</li>
                <li>Windows(Desktop)</li>
                <li>Mac((Desktop))</li>
                <br />
                <li>All Apps</li>
            </ol>
        </div>
      </div>
      <div className='footer-images'>
            {
                    ayoa_approved.map(({img,id})=>{
                        return(
                            <>
                                <div>
                                    <img src={img} alt={`nayan ${id}`} />
                                </div>
                            </>
                        )
                    })
            }
      </div>
      <hr color="teal"/>
      <div className='footer-bar'>
        <div>
            <div>
            <img src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/ayoa.svg" alt="ayoa" />
            </div>
            <div>
            <img src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/opengenius_logo.svg" alt="open-ginues" />
            </div>
        </div>
        <div>
            {
                social_icons.map(({img})=>{
                    return (
                        <>
                        <div>
                            <img src={img} alt="pic" />
                        </div>
                        </>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Footer
