import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1440px]">

        {/* Top Bar */}
        <div className="h-[36px] bg-[rgba(245,245,245,1)] content-center px-4 sm:px-6 md:px-12">
          <div className="flex justify-between items-center">
            <div>
              <Image 
                src="/logo-icon.svg"
                alt="logo design"
                width={24}
                height={24}
              />
            </div>

            <div>
              <ul className="flex gap-4 font-[Helvetica Neue] font-medium text-[10px] sm:text-[11px]">
                <li><a href="#" className="text-black hover:text-blue-500 transition-colors duration-300">Find a Store</a></li>
                <li>|</li>
                <li><Link href="/Help" className="text-black hover:text-blue-500 transition-colors duration-300">Help</Link></li>
                <li>|</li>
                <li><Link href="/JoinUs" className="text-black hover:text-blue-500 transition-colors duration-300">Join Us</Link></li>
                <li>|</li>
                <li><Link href="/Login" className="text-black hover:text-blue-500 transition-colors duration-300">Sign In</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="flex justify-between px-4 sm:px-6 md:px-10 w-full h-[60px] top-[36px] items-center">
          <div>
            <Link href="/">
              <Image 
                src="/nike-logo.svg"
                alt="logo icon"
                width={78.47}
                height={78.47}
              />
            </Link>
          </div>

          {/* Navbar Links */}
          <div className="font-Helvetica Neue text-[13px] sm:text-[14px] md:text-[15px] font-medium pl-4 sm:pl-10 md:pl-32">
            <ul className="flex gap-4 sm:gap-6 md:gap-8">
              <li><Link href="/NewFeatured" className="hover:text-blue-500 transition-colors duration-300">New & Featured</Link></li>
              <li><Link href="/Men" className="hover:text-blue-500 transition-colors duration-300">Men</Link></li>
              <li><Link href="/Women" className="hover:text-blue-500 transition-colors duration-300">Women</Link></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-300">Kids</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-300">Sale</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-300">SNKRS</a></li>
            </ul>
          </div>

          {/* Search Bar and Icons */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">

            {/* Search Bar */}
            <div className="relative w-[150px] sm:w-[180px] md:w-[220px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-[40px] rounded-[100px] bg-gray-100 pl-12 text-sm sm:text-base"
              />
              <Image 
                src="/search-mirror-icon.svg"
                alt="search bar icon"
                width={16}
                height={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>

            {/* Heart and Cart Icons */}
            <div className="flex gap-6 items-center">
              {/* Heart Icon */}
              <Link href="#">
                <Image 
                  src="/icon-heart.svg"
                  alt="heart icon"
                  width={19.5}
                  height={16.76}
                  className="w-[24px] h-[20px] sm:w-[30px] sm:h-[22px]"
                />
              </Link>

              {/* Cart Icon */}
              <Link href="/Cart">
                <Image 
                  src="/icon-box.svg"
                  alt="cart icon"
                  width={16.5}
                  height={16.5}
                  className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]"
                />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;