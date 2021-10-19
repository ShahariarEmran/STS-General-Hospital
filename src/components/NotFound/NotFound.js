import React from 'react';
import error from '../../images/error.png'
const NotFound = () => {
    return (
        <div>
            <br />
            <h2>Page not found</h2>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;