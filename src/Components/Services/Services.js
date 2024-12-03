import React, { useState } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.png'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className='services-title'>
                <h1>My Services</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <AllServices>
                
            </AllServices>
        </div>
    )
}
function AllServices({
    collapsedNumWords = 10,
    ReadmoreButton = "Read More",
    collapseButton = "Read Less",
    expanded = false,
    // myservices = Services_Data.service,
    children
}){
    const [isExpanded, setIsExpanded] = useState(null);
    const handleReadMoreClick = (index) => {
        // Toggle the expanded state for the specific service
        setIsExpanded(isExpanded === index ? null : index);
      };
    // const displayText = 
    return (
        <div className='services-container'>
                 {Services_Data.map((service, index) => {
                    
                    return <div className='services-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{isExpanded === index ? service.s_desc : service.s_desc.split(" ").slice(0, collapsedNumWords).join(" ") + "..."}
                             </p>
                        <div className='services-readmore' onClick={() =>handleReadMoreClick(index) }>
                            <p>Read More</p>
                            <img src={arrow_icon} alt='' />
                         </div>
                    </div>
                }
                )} 
               
            </div>
    );
}


export default Services
