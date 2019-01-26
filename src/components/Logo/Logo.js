import React from 'react';
import Tilt from 'react-tilt';
import brain from './chip.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' option={{ max : 45 }} style={{ height: 150, width: 150 }} >
                <div className='Tilt-inner pa3'><img style={{paddingTop: '4px'}} src={brain} alt='logo'/></div>
            </Tilt>
        </div>
    );
}

export default Logo;