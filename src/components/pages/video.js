import React from 'react'
import Layout from '../layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


function Video() {
  return (
    <Layout>
      <h1 className='page-header'>Coming Soon!</h1>
      <div className='coming-soon-wrapper'>
        <p className='coming-soon'>Until then....</p>
        <p className='coming-soon-msg'>Check out my swing videos on Instagram!
          <div className="social-media-icon">
              <a href="https://www.instagram.com/warren.thomis/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram}/>
              </a>
          </div>
        </p>
      </div>
    </Layout>
  )
}

export default Video