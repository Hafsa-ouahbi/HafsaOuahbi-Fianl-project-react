import React from 'react';
import { logo } from '../constant/images/images';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";

const Nav = () => {
    return (
        <div className='flex items-center justify-between px-50 py-7  shadow-md z-50 w-full fixed'>
            <img src={logo} alt="" />
            <div className='flex gap-10'>
                <Link to="/" className="font-light  text-gray-700 hover:text-hafsa relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-hafsa after:transition-all after:duration-300 hover:after:w-full hover:text-hafsa transition-colors duration-300">Home</Link>
                <Link to="/shop" className="font-light  text-gray-700 hover:text-hafsa relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-hafsa after:transition-all after:duration-300 hover:after:w-full hover:text-hafsa transition-colors duration-300">Shop</Link>
                <Link to="/sale" className="font-light  text-gray-700 hover:text-hafsa relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-hafsa after:transition-all after:duration-300 hover:after:w-full hover:text-hafsa transition-colors duration-300">Sale</Link>
                <Link to="/about" className="font-light  text-gray-700 hover:text-hafsa relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-hafsa after:transition-all after:duration-300 hover:after:w-full hover:text-hafsa transition-colors duration-300">About</Link>
                <Link to="/contact" className="font-light  text-gray-700 hover:text-hafsa relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-hafsa after:transition-all after:duration-300 hover:after:w-full hover:text-hafsa transition-colors duration-300">Contact</Link>
            </div>
            <div className='flex gap-2 items-center'>
                <CgProfile className=' text-2xl text-gray-700 border-r-1 border-gray-700  w-13' />
                <IoBagHandleOutline className='text-2xl text-gray-700  border-gray-700' />
            </div>
        </div>
    );
};

export default Nav;