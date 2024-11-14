import React from 'react'
/* import logo */
import Logo from './Logo'
/* import icons */
import { FaSearch } from "react-icons/fa";
import { IoBagAddSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
/* router import */
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
   <header className='flex justify-center mt-6 w-full shadow-lg'>

<div className='container flex justify-between p-6  items-center'>
    
     <div className='flex'><Logo w={200} h={60}/></div> {/*1)Logo Section */}
    
    {/* Search Section (Visible on lg+ screens) */}
    <div className='hidden md:flex border  justify-center items-center rounded-full p-4'>
      <div className='flex items-center gap-2'>
        <input type="text" placeholder='Search product' className='text-2xl h-8 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <div className='bg-green-800 text-2xl p-2 text-white rounded-r-full'>
          <FaSearch />
        </div>
      </div>
    </div>
    
    {/* Add to Cart and Profile Icons */}
    <div className="flex items-center gap-5">
      <div className="text-3xl mr-4"><CgProfile /></div>

      <div className="text-3xl relative"><span><IoBagAddSharp /></span>
      <p className='text-lg bg-green-800 text-center rounded-full absolute -right-3 -top-3 w-7 text-white'>0</p></div>

      <Link to="/loginpage"><button className='border-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-950 text-xl'>Login</button></Link>
    </div>
    
  </div>
</header>

    </>
  )
}

export default Header