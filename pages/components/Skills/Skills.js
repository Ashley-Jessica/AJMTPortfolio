import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import Software from './Software'

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
        <h2 className="section_title skill_title">Skills and Strengths</h2>
        <span className="section_subtitle">Frontend, Backend, Software Proficiencies</span>

        <div className="skills_container container grid">
          <Frontend></Frontend>
          <Backend></Backend>
          <Software></Software>

        </div>
    </section>
  )
}

export default Skills