import React from 'react'
import './Links.css'
import webIcon from '../../svgIcons/earth-asia-solid.svg'
import gitIcon from '../../svgIcons/github.svg'
import netlifyIcon from '../../svgIcons/netlify.svg'
import upworkIcon from '../../svgIcons/laptop-file-solid.svg'
import Link from '../../svgIcons/link-solid.svg'
import idCard from '../../svgIcons/id-card-clip-solid.svg'
const Links = () => {
  return (
    <div className='link-wrapper'>
      <div className="link-website">
        <img src={Link} className='github-icon'></img>
        <div className='website-head'>Website</div>
      </div>
      <div className='link-others-wrapper'>
        <div className="link-others">
          <div className='left'>
            <a href='https://github.com/bilenray' className='left-link-github'>
              <img src={gitIcon} className='github-icon'></img>
              <div className='github-name'>Github</div>
            </a>
            <a href='https://app.netlify.com/teams/bilenray/overview' className='left-link-netlify'>
              <img src={netlifyIcon} className='netlify-icon'></img>
              <div className='netlify-name'>Netlify</div>
            </a>
          </div>
          <div className='right'>
            <a href='https://www.upwork.com/freelancers/~01467736550a4d5895' className="right-link-upwork">
              <img src={upworkIcon} alt="" className='upwork-icon'/>
              <div className="upwork-name">Upwork</div>
            </a>
            <a href='https://63307526b515e8081da320f0--bimlendra.netlify.app/' className='website-icon-link'>
              <img src={idCard} className='website-icon'></img>
              <div className='website-link'>Profile Website</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Links