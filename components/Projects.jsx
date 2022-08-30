import React from 'react'
import ProjectItem from './ProjectItem'
import proppertyImg from "../public/assets/projects/property.jpg"
import cryptoImg from "../public/assets/projects/crypto.jpg"
import netflixImg from "../public/assets/projects/netflix.jpg"
import twitchImg from "../public/assets/projects/twitch.jpg"
const Projects = () => {
  return (
    <div id="projects" className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl uppercase tracking-widest'>Projects</p>
        <h2 className="py-4">What I Have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem title="Property Finder" backgroundImg={proppertyImg} projectUrl={"/property"} />
          <ProjectItem title="Crypto" backgroundImg={cryptoImg} projectUrl={"/property"} />
          <ProjectItem title="Netflix" backgroundImg={netflixImg} projectUrl={"/property"} />
          <ProjectItem title="Twitch" backgroundImg={twitchImg} projectUrl={"/property"} />
        </div>
      </div>
    </div>
  )
}

export default Projects