import React from 'react'
import './Project.css'
import gearSolid from '../../svgIcons/gear-solid.svg'
import htmlIcon from '../../svgIcons/html5.svg'
import cssIcon from '../../svgIcons/css3-alt.svg'
import jsIcon from '../../svgIcons/js.svg'
import gearsSolid from '../../svgIcons/gears-solid.svg'

const Project = () => {
  return (
    <div className='projects-wrapper'>
      <div className="project-main-head-wrapper">
        <img src={gearsSolid} className='project-icon'></img>
        <div className="project">Project</div>
      </div>
      <div className='project-wrapper'>
        <div className="project-head-wrapper">
          <div className='project-head'>Hotel App</div>
        </div>
        <div className="project-detail-wrapper">
          <div className='project-language'>
            <div className="project-language-description">
              <img src={jsIcon} className='language-icon'></img>
              <div className='language-percent'>43.3%</div>
              <div className='language-name'>JS</div>
            </div>
            <div className="project-language-description">
              <img src={htmlIcon} className='language-icon'></img>
              <div className='language-percent'>17%</div>
              <div className='language-name'>HTML</div>
            </div>
            <div className="project-language-description">
              <img src={cssIcon} className='language-icon'></img>
              <div className='language-percent'>39.2%</div>
              <div className='language-name'>CSS</div>
            </div>
          </div>
          <div className='project-features'>
            <div className="features-list">Multipage website</div>
            <div className="features-list">Easy routing</div>
            <div className="features-list">Responsive</div>
          </div>
        </div>
      </div>
      <div className='project-wrapper'>
        <div className="project-head-wrapper">
          <div className='project-head'>Gym App</div>
        </div>
        <div className="project-detail-wrapper">
          <div className='project-language'>
            <div className="project-language-description">
              <img src={jsIcon} className='language-icon'></img>
              <div className='language-percent'>50.5%</div>
              <div className='language-name'>JS</div>
            </div>
            <div className="project-language-description">
              <img src={htmlIcon} className='language-icon'></img>
              <div className='language-percent'>3.7%</div>
              <div className='language-name'>HTML</div>
            </div>
            <div className="project-language-description">
              <img src={cssIcon} className='language-icon'></img>
              <div className='language-percent'>45.8%</div>
              <div className='language-name'>CSS</div>
            </div>
          </div>
          <div className='project-features'>
            <div className="features-list">Multipage website</div>
            <div className="features-list">Easy routing</div>
            <div className="features-list">Responsive</div>
          </div>
        </div>
      </div>
      <div className='project-wrapper'>
        <div className="project-head-wrapper">
          <div className='project-head'>Dry Cleaner Project</div>
        </div>
        <div className="project-detail-wrapper">
          <div className='project-language'>
            <div className="project-language-description">
              <img src={jsIcon} className='language-icon'></img>
              <div className='language-percent'>45.7%</div>
              <div className='language-name'>JS</div>
            </div>
            <div className="project-language-description">
              <img src={htmlIcon} className='language-icon'></img>
              <div className='language-percent'>4.5%</div>
              <div className='language-name'>HTML</div>
            </div>
            <div className="project-language-description">
              <img src={cssIcon} className='language-icon'></img>
              <div className='language-percent'>40%</div>
              <div className='language-name'>CSS</div>
            </div>
          </div>
          <div className='project-features'>
            <div className="features-list">Multipage website</div>
            <div className="features-list">Easy routing</div>
            <div className="features-list">Responsive</div>
          </div>
        </div>
      </div>
      <div className='project-wrapper'>
        <div className="project-head-wrapper">
          <div className='project-head'>My Profile</div>
        </div>
        <div className="project-detail-wrapper">
          <div className='project-language'>
            <div className="project-language-description">
              <img src={jsIcon} className='language-icon'></img>
              <div className='language-percent'>53.5%</div>
              <div className='language-name'>JS</div>
            </div>
            <div className="project-language-description">
              <img src={htmlIcon} className='language-icon'></img>
              <div className='language-percent'>4.2%</div>
              <div className='language-name'>HTML</div>
            </div>
            <div className="project-language-description">
              <img src={cssIcon} className='language-icon'></img>
              <div className='language-percent'>42.3%</div>
              <div className='language-name'>CSS</div>
            </div>
          </div>
          <div className='project-features'>
            <div className="features-list">Multipage website</div>
            <div className="features-list">Easy routing</div>
            <div className="features-list">Responsive</div>
          </div>
        </div>
      </div>
      <div className='project-wrapper'>
        <div className="project-head-wrapper">
          <div className='project-head'>CV</div>
        </div>
        <div className="project-detail-wrapper">
          <div className='project-language'>
            <div className="project-language-description">
              <img src={jsIcon} className='language-icon'></img>
              <div className='language-percent'>71%</div>
              <div className='language-name'>JS</div>
            </div>
            <div className="project-language-description">
              <img src={htmlIcon} className='language-icon'></img>
              <div className='language-percent'>7.6%</div>
              <div className='language-name'>HTML</div>
            </div>
            <div className="project-language-description">
              <img src={cssIcon} className='language-icon'></img>
              <div className='language-percent'>20.5%</div>
              <div className='language-name'>CSS</div>
            </div>
          </div>
          <div className='project-features'>
            <div className="features-list">Multipage website</div>
            <div className="features-list">Easy routing</div>
            <div className="features-list">Responsive</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project