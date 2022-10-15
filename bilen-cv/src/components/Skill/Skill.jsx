import React from 'react'
import './Skill.css'
import chessSolid from '../../svgIcons/chess-solid.svg'
import cssSolid from '../../svgIcons/css3-alt.svg'
import htmlSolid from '../../svgIcons/html5.svg'
import reactSolid from '../../svgIcons/react.svg'
import jsSolid from '../../svgIcons/js.svg'
import mongoSolid from '../../svgIcons/mongodb.svg'
import graphqlSolid from '../../svgIcons/graphql.svg'

const Skill = () => {
  return (
    <div className='Skill-wrapper'>
      <div className="link-website">
        {/* <div className='website-head'></div> */}
        <div className='website-icon-link'>
          <img src={chessSolid} className='website-icon'></img>
          <div className='website-link'>Skills</div>
        </div>
      </div>
      <div className="link-others">
        <div className='left'>
          <div className='left-link-github'>
            <img src={reactSolid} className='github-icon'></img>
            <div className='github-name'>React</div>
          </div>
          <div className='left-link-netlify'>
            <img src={jsSolid} className='netlify-icon'></img>
            <div className='netlify-name'>JS</div>
          </div>
          <div className='left-link-netlify'>
            <img src={mongoSolid} className='netlify-icon'></img>
            <div className='netlify-name'>MONGODB</div>
          </div>
        </div>
        <div className='right'>
          <div className="right-link-upwork">
            <img src={htmlSolid} alt="" className='upwork-icon'/>
            <div className="upwork-name">Html</div>
          </div>
          <div className="right-link-upwork">
            <img src={cssSolid} alt="" className='upwork-icon'/>
            <div className="upwork-name">CSS</div>
          </div>
          <div className="right-link-upwork">
            <img src={graphqlSolid} alt="" className='upwork-icon'/>
            <div className="upwork-name">Graphql</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill