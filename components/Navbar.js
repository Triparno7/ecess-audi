import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-cyan-950 flex justify-between items-center px-4 h-30 md:h-14 font-sans flex-col md:flex-row'>
        <div className="logo font-bold text-white text-lg">ECESS</div>
        <ul>
            <li className='flex gap-4 text-white'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="/">About</a>
                <a className='hover:font-bold' href="/">Contact Us</a>
                {/* <a className='hover:font-bold' href="/">Login</a> */}
            </li>
        </ul>
        <div>
          <Link href={"/login"}>
          <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-2">Login</button>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar

