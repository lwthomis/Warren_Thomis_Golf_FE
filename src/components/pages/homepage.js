import React from 'react';
import Layout from '../layout';
import picThree from '../../images/playerPics/pic_three.jpeg';

function Homepage() {
  return (
      <Layout>
        <div className='player-pics'>
            <img src={picThree} alt='Warren Putting'/>
        </div>
      </Layout>
  )
}

export default Homepage