import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import Logout from '../logout';

function Navbar() {
    const isLogin = sessionStorage.getItem("islogin");

    return (
        <div className='navigation-wrapper'>
            <div className='left-side-nav'>
                <div className='nav-link-wrapper'>    
                    <Link to='/'><div className='link'>Home</div></Link>
                    <Link to='/schedule'><div className='link'>2022 Player Schedule</div></Link> 
                    <Link to='/results'><div className='link'>Previous Results</div></Link>
                    <Link to='/swings'><div className='link'>Swing Videos</div></Link>                 
                    {/* { isAdmin === "true" ? 
                        <Link to='/register'><div className='link'>Users</div></Link>
                    : null } */}
                </div>
            </div>

            <div className='right-side-nav'>
                    <div className='player-name'>WARREN THOMIS</div>
                    { isLogin === "true" ? <Logout/> :
                        <Link to='/login' className='login-logout-button'>Login <FontAwesomeIcon className='login' icon={faSignInAlt}/></Link>}                
            </div>
        </div>
    )

}

export default Navbar;