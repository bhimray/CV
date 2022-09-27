import React from 'react'
import './Links.css'
import webIcon from '../../svgIcons/earth-asia-solid.svg'
import gitIcon from '../../svgIcons/github.svg'
import netlifyIcon from '../../svgIcons/netlify.svg'
import upworkIcon from '../../svgIcons/laptop-file-solid.svg'
import Link from '../../svgIcons/link-solid.svg'
const Links = () => {
  return (
    <div className='link-wrapper'>
      <div className="link-website">
        <img src={Link} className='github-icon'></img>
        <div className='website-head'>Website</div>
      </div>
      <div className="link-others">
        <div className='left'>
          <div className='left-link-github'>
            <img src={gitIcon} className='github-icon'></img>
            <div className='github-name'>Github</div>
          </div>
          <div className='left-link-netlify'>
            <img src={netlifyIcon} className='netlify-icon'></img>
            <div className='netlify-name'>Netlify</div>
          </div>
        </div>
        <div className='right'>
          <div className="right-link-upwork">
            <img src={upworkIcon} alt="" className='upwork-icon'/>
            <div className="upwork-name">Upwork</div>
          </div>
          <div className='website-icon-link'>
            <img src={webIcon} className='website-icon'></img>
            <div className='website-link'>Profile Website</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Links