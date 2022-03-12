import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialMediaLinks() {
  return (
    <div className='social-media'>
        <h3>Follow Me on Social Media</h3>

        <div className="social-media-icon">
            <a href="https://www.instagram.com/warren.thomis/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
        </div>
    </div>
  )
}

export default SocialMediaLinks