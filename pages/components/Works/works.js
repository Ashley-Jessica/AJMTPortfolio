import React from 'react'
import OARS from './OARS'
import PawPost from './PawPost'


const works = () => {
  return (
    <section className="works-section" id="works">
        <h2 className="section_title works_title">Works and Projects</h2>
        <div className="work_container container grid">
            <OARS></OARS>
        </div>

        <div className="work_container container grid">
            <PawPost></PawPost>
        </div>

    </section>
  )
}

export default works