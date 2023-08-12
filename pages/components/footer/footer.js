import React from 'react'

const footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Torrefiel Portfolio</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About Me</a>
                </li>

                <li>
                    <a href="#skills" className="footer_link">Skills and Strengths</a>
                </li>

                <li>
                    <a href="#works" className="footer_link">Works and Projects</a>
                </li>
            </ul>
            <div className="footer_social"> 
                <a href="https://www.facebook.com/torrefiel2001" className="footer_social-link" target="_blank">
                    <i class="facebook f icon"></i>
                </a>

                <a href="https://instagram.com/ash_string?igshid=YmMyMTA2M2Y=" className="footer_social-link" target="_blank">
                    <i class="instagram icon"></i>
                </a>

                <a href="https://twitter.com/a_jessicant" className="footer_social-link" target="_blank">
                    <i class="twitter icon"></i>
                </a>
            </div>

            <span className="footer_copy">All Rights Reserved</span>

        </div>

    </footer>
  )
}

export default footer