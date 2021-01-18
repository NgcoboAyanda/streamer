import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                StreamR
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <Link to="/streams/new" className="item">
                    Create streams
                </Link>
            </div>
        </div>
    )
}

export default Header;