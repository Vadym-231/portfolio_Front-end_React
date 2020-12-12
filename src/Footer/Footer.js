import React from 'react'
import {Link} from "react-router-dom";

const Footer = (props)=>{

    return (
        <footer>
        <h4 className='footer_container'>
            <Link className='footer_link' to='/'>
                Home
            </Link>
            <Link className='footer_link' to='/about'>
                About
            </Link>
            <Link className='footer_link' to='resume'>
                Resume
            </Link>
            <Link className='footer_link' to='projects'>
                Projects
            </Link>
        </h4>
        </footer>
    )

}
export default Footer;