import {Link} from 'react-router-dom';
import React from 'react';

const OtherPage = ()=>{
    return (
        <div>
            I'm some other page!
            <Link to='/'>Go back</Link>
        </div>
    )
}

export default OtherPage;