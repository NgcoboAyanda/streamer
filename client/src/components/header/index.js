import React from 'react';
import {Link} from 'react-router-dom';

import OAuth from '../OAuth';

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
                <OAuth className="item">
                    
                </OAuth>
            </div>
        </div>
    )
}

export default Header;