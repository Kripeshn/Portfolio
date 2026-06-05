import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.png'
import  mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>
            My Latest Work
        </h1>
        <img src={theme_pattern} alt='' />
      </div>
       <div className='mywork-container'>
        {mywork_data.map((work, index) => {
          return (
            <a
              href={work.link}
              target='_blank'
              rel='noreferrer'
              key={index}
              className='work-card'
            >
              <img src={work.w_img} alt={work.name} />

              <div className='work-overlay'>
                <h3>{work.name}</h3>
              </div>
            </a>
          );
        })}
      </div>
      {mywork_data.length > 4 && (
      <div className='mywork-showmore'>
        <p>Show more</p>
        <img src={arrow_icon} alt='' />
      </div>
)}
    </div>
  )
}

export default MyWork
