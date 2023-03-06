import React from 'react'
import './experience.css'
import {FaUnity} from 'react-icons/fa'
import {TbAugmentedReality} from 'react-icons/tb'
import {SiFirebase} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {SiCsharp} from 'react-icons/si'
import {SiC} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
const experience = () => {
  return (
    <section id = 'experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Software Tools and Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <FaUnity className='experience__details-icons'/>
            <div>
            <h4>UNITY 3D</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <TbAugmentedReality className='experience__details-icons'/>
            <div>
            <h4>Vuforia</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <AiOutlineHtml5 className='experience__details-icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <FaReact className='experience__details-icons'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiFirebase className='experience__details-icons'/>
            <div>
            <h4>Firebase</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
          {/* ========== End of frontend ====================== */}
          </div>
        </div>
        <div className="experience__backend">
        {/*========== Start of backend ======================*/}
        <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <SiC className='experience__details-icons'/>
            <div>
            <h4>C</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiCplusplus className='experience__details-icons'/>
            <div>
            <h4>C++</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiCsharp className='experience__details-icons'/>
            <div>
            <h4>C#</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiJavascript className='experience__details-icons'/>
            <div>
            <h4>Java-Script</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiMysql className='experience__details-icons'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
          </div>
          {/*========== End of backend ======================*/}
        </div>
        
      </div>
    </section>
  )
}

export default experience