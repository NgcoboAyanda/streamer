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
                <OAuth></OAuth>
            </div>
        </div>
    )
}

export default Header;