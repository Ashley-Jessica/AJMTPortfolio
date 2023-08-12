import React from 'react'
import Image from 'next/image'
import Oarsimg from './oarsimg'

const OARS = () => {
  return (
    <div className="works_content">
        <h3 className="oars_title">OARS: An Online Accomodation Reservation System</h3>
        <p className="oars_description">
        OARS is a website designed for more systematic hotel management. 
        This is made to make customer service in hotels easier to access by customers and better management for the staff. 
        The website is aimed to provide customers a list of services being offered and itineraries available. 
        This also aims to create online registrations, services and the amenities the hotel provides. 
        </p>
        <p>
            This website was created during my third year in college while studying under Bachelor of Science in Information Technology
            in partial completion for the subject Web Development. The langauges used to develop this capstone are: HTML, PHP, JavaScript, PHPMyAdmin, MySQL and CSS
        </p>
        <Oarsimg></Oarsimg>
    </div>
  )
}

export default OARS