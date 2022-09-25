import React from 'react'
import './Skill.css'
const Skill = () => {
  return (
    <div className='Skill-wrapper'>
      <div className="link-website">
        <div className='website-head'></div>
        <div className='website-icon-link'>
          <img src="" className='website-icon'></img>
          <div className='website-link'>My Profile Website</div>
        </div>
      </div>
      <div className="link-others">
        <div className='left'>
          <div className='left-link-github'>
            <img src="" className='github-icon'></img>
            <div className='github-name'>React</div>
          </div>
          <div className='left-link-netlify'>
            <img src="" className='netlify-icon'></img>
            <div className='netlify-name'>JS</div>
          </div>
        </div>
        <div className='right'>
          <div className="right-link-upwork">
            <img src="" alt="" className='upwork-icon'/>
            <div className="upwork-name">Html</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill