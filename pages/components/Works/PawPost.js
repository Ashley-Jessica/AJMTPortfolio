import React from 'react'
import Image from 'next/image'
import Pawpostimg from './pawpostimg'

const PawPost = () => {
  return (
    <div className="works_content">
        <h2 className="pawpost_title">Pawpost: Online Pet Adoption and Pet Finder System for Lost Pets Without GPS Tracking Equipment</h2>
        <p className="pawpost_description">
            This capstone project is a website created to aid animal shelters and pounds in providing their services. 
            This includes pet adoption and returning lost pets. 
            This website will not only help shelters and pounds, but also pet owners and people who want to become pet owners. 
            We aim to create a social media-like community for pet owners from where the shelter is from.
        </p>
        <p>The langauges used to develop this capstone are: HTML, PHP, JavaScript, PHPMyAdmin, MySQL and CSS</p>
       <Pawpostimg></Pawpostimg>
    </div>
  )
}

export default PawPost