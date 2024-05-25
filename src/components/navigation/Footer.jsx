import React from 'react'

import Nav from 'react-bootstrap/Nav';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='d-flex justify-contect-center align-items-center'>

            <div>
                Grab me on social midea
                <span >< FaLongArrowAltRight /></span>
            </div>
            <div className='ms-auto'>
                <Nav >

                    <Nav.Item>
                        <Nav.Link href="https://www.facebook.com/ah.antor.602">
                            < FaFacebook />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.instagram.com/amithasan0420/?hl=bn">
                            < FaInstagram />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.youtube.com/">
                            < FaYoutube />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#" disabled>
                            < FaLinkedin />
                        </Nav.Link>
                    </Nav.Item>

                </Nav>
            </div>

        </div>
    )
}

export default Footer
