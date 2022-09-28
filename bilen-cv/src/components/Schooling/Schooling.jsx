import React from 'react'
import './Schooling.css'
import studyIcon from '../../svgIcons/graduation-cap-solid.svg'

const Schooling = () => {
  return (
    <div className='study-wrapper-whole'>
      <div className="study-head-wrapper">
        <img src ={studyIcon} className="studyIcon"></img>
        <div className="study-head">Schooling</div>
      </div>
      <div className="study-wrapper">
        <div className='study-content-wrapper'>
          <div className='study-date-wrapper'>
            <div className='study-date'>Date: 2016 - 2020</div>
          </div>
          <div className="level-institute-wrapper">
            <div className='study-level'>
              <div>Bachelor of Technology, (Mechanical Engineering)</div>
            </div>
            <div className='study-institute'>
              <div>Tula's Institute of Management and Technology (Uttrakhand Technical University)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="study-wrapper">
        <div className='study-content-wrapper'>
          <div className='study-date-wrapper'>
            <div className='study-date'>Date: 2014 - 2016</div>
          </div>
          <div className="level-institute-wrapper">
            <div className='study-level'>
              <div>Higher Secondary School</div>
            </div>
            <div>
              <div className='study-institute'>NASA Higher Secondary School</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schooling