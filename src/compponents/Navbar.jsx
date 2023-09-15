import React from 'react'

function Navbar() {
    return (
        <div className='main lg:flex md:flex flex-wrap   justify-between items-center
          bg-blue-300 shadow-md  px-4 py-4 sticky top-0'>
            <div className=' left flex items-center space-x-3 justify-center'>
                <img className=' w-10' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt=""/>
                <h1 className=' font-bold text-white'>MovieKnus</h1>
            </div>
            <div className=' right'>
             <ul className=' flex space-x-4 justify-center'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
             </ul>
            </div>
        </div>
    )
}

export default Navbar