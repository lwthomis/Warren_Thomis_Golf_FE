import React, { Component } from 'react';

import Articles from './sidebarContent/articles';
import SocialMediaLinks from './sidebarContent/socialMedia';
import blackLogo from '../../images/logos/warren-logo-2024-black.png';
import { Sponsors } from './sidebarContent/sponsors';
import Contact from './sidebarContent/contact';



class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='wardog-logo'>
                    <img src={blackLogo} alt='logo' />
                </div>
                <div className='side-content'>
                    <Articles />
                    <SocialMediaLinks />
                    <Contact />
                    <Sponsors />
                </div>
            </div>
            
        )
    }
}

export default Sidebar;