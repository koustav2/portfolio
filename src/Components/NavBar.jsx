import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Logo from '../assets/logos/three.jpg';


function NavBar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='flxed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt='Logo Image' style={{ width: '100px' }} className='rounded' />
            </div>
            {/* menu */}
            <ul className='hidden md:flex'>
                <Link to='home' smooth={true} duration={500}  className='link link-underline link-underline-black' >
                    Home
                </Link>
                <li>
                    <Link to='about' smooth={true} duration={500} className='link link-underline link-underline-black'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500} className='link link-underline link-underline-black'>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500} className='link link-underline link-underline-black'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500} className='link link-underline link-underline-black'>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* hamburger menu*/}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile */}
            <ul className={
                !nav
                    ? 'hidden'
                    : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] bg-opacity-90 flex flex-col justify-center items-center text-gray-500'
            }>
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className=' sm:flex fixed flex-col top-[35%] left-0 <i class="fa fa-i-cursor" aria-hidden="true"></i>'>
                <ul>
                    <li className='social bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/koustav-maity-802072210/'
                            target='_blank'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='social bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/koustav2'
                            target='_blank'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='social bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='mailto: maitymaitykoustav2809@gmail.com'
                            target='_blank'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='social bg-[#073976]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar