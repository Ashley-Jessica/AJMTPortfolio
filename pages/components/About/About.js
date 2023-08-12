import React from 'react'
import Social from './Social'
import Data from './Data'
import Image from 'next/image'

const About = () => {
  return (
    <section className="about_section" id="about">
        <div className="about_container container grid">
           <div className="about_content grid">
            <Social></Social>
                <Image className="about_img"
                height={300}
                width={400}
                />  
            <Data></Data>
           </div>
        </div>
    </section>

    
  )
}

export default About