import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-black'>

        <Link className='navbar_link   hover:underline' href="#">HOME</Link>
        <Link className='navbar_link   hover:underline' href="#">CATEGORIES</Link>
        <Link className='navbar_link   hover:underline' href="#">MEN'S</Link>
        <Link className='navbar_link   hover:underline' href="#">WOMEN'S</Link>
        <Link className='navbar_link   hover:underline' href="#">JEWELRY</Link>
        <Link className='navbar_link   hover:underline' href="#">PERFUMES</Link>
        <Link className='navbar_link   hover:underline' href="#">BLOG</Link>
        <Link className='navbar_link   hover:underline' href="#">HOT OFFERS</Link>

  


        </div>
       </div>
    </div>
  )
}

export default Navbar
