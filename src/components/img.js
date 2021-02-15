import React from 'react';


export default function Img ({ img }) {
    return (
        <div className='img'>
            <img src="https://apod.nasa.gov/apod/image/1907/SpotlessSunIss_Colacurcio_960.jpg" alt='planet' style={{ maxWidth: '400px' }}></img>
        </div>
    );
}