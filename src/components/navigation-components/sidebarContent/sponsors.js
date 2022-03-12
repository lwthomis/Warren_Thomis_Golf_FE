import React from 'react';

import footjoy from '../../../images/logos/footjoy-logo-white.png';
import titleist from '../../../images/logos/titleist-logo-white.png';

export const Sponsors = () => {
    return (
        <div className='sponsors-wrapper'>
            <h3 className='sponsors'>Jr Affiliations</h3>
            <div className='sponsor-logo'>
                <a href='https:/titleist.com' alt="titleist logo" rel="noreferrer" target="_blank">            
                    <img src={titleist} alt='titleist'/>
                </a>
                <a href='https:/footjoy.com' alt="titleist logo" rel="noreferrer" target="_blank">            
                    <img src={footjoy} alt='footjoy'/>
                </a>
            </div>
        </div>
    )
}