import React from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


function Logout() {
    function onClick() {
        sessionStorage.setItem("islogin", false);
        sessionStorage.setItem("isAdmin", false);
        window.location.reload(false);
    }

    return (
        <div className='login-logout-button'>
            <div onClick={onClick}>Logout <FontAwesomeIcon icon={faSignOutAlt} /></div>
        </div>
    )
}

export default Logout