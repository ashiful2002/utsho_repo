import React from 'react'

import logo from '../../assets/logo.png'
const AboutMe = () => {
    return (
        <>
            <div>
                <h1 className='heading1'>Hello there i'm <span>amit hasan</span></h1>
                <p>Photography is my passion. i love to do this. (add more 400 word...)</p>
            </div>

            <div>
                <img src={logo} alt="logo" />
            </div>
        </>
    )
}

export default AboutMe
