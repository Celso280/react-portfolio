import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {

    const [sideBar, setSideBar] = useState(false)
    const handleClick = () => setSideBar(!sideBar)

  return (
    <div className='fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300'>
        {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" spy={true} smooth={true} duration={500} >
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} duration={500} >
                    About
                    </Link>
                </li>
                <li>
                    <Link to="skills" spy={true} smooth={true} duration={500} >
                    Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" spy={true} smooth={true} duration={500} >
                    Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} duration={500} >
                    Contact
                    </Link>
                </li>
            </ul>      
        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!sideBar ? <FaBars/> : <FaTimes/>}
        </div>
        {/* mobile menu */}
        <ul className={!sideBar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-4 text-2xl'>
                <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500} >
                Home
                </Link>
            </li>
            <li className='py-4 text-2xl'>
                <Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500} >
                About
                </Link>
            </li>
            <li className='py-4 text-2xl'>
                <Link onClick={handleClick} to="skills" spy={true} smooth={true} duration={500} >
                Skills
                </Link>
            </li>
            <li className='py-4 text-2xl'>
                <Link onClick={handleClick} to="work" spy={true} smooth={true} duration={500} >
                Work
                </Link>
            </li>
            <li className='py-4 text-2xl'>
                <Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500} >
                Contact
                </Link>
            </li>
        </ul>
        {/* social media icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href='https://www.linkedin.com/in/celso-diamante-0b8b8325b/'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href='https://github.com/Celso280'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href='/'>
                        Gmail <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href='/'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar