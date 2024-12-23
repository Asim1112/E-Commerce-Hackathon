import React from 'react'
import Image from "next/image";
import Link from "next/link";


const Header = () => {
  return (
    
<div className="flex justify-center">
<div className="w-[1440px]">
  <div className="h-[36px] bg-[rgba(245,245,245,1)] content-center px-12">
      <div className="flex justify-between">
      <div>
                 
    <Image 
    src="/logo-icon.svg"
    alt="logo design"
    width={24}
    height={24}
                    
    />
    </div>

<div>
  <ul className="flex gap-4 font-[Helvetica Neue] font-medium text-[11px]">
    
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




<div className="flex justify-between px-10 w-[1440px] h-[60px] top-[36px] items-center">
      
<div>
    <Link href="/">
    <Image 
    src="/nike-logo.svg"
    alt="logo icon"
    width={78.47}
    height={78.47}/>
    </Link>
</div>



{/* NAVBAR LINKS AND SEARCHBAR */}
  
<div className="font-Helvetica Neue text-[15px] font-medium pl-32">
  
  <ul className="flex gap-6">
    <li><Link href="/NewFeatured" className="hover:text-blue-500 transition-colors duration-300">New & Featured</Link></li>
    <li><Link href="/Men" className="hover:text-blue-500 transition-colors duration-300">Men</Link></li>
    <li><Link href="/Women" className="hover:text-blue-500 transition-colors duration-300">Women</Link></li>
    <li><a href="#" className="hover:text-blue-500 transition-colors duration-300">Kids</a></li>
    <li><a href="#" className="hover:text-blue-500 transition-colors duration-300">Sale</a></li>
    <li><a href="#" className="hover:text-blue-500 transition-colors duration-300">SNKRS</a></li>
  </ul>
  
  </div>
                  
  
  <div className="flex items-center gap-8">
  
  <div className="relative">
      <input
      type="text"
      placeholder="Search" 
      className="w-[180px] h-[40px] rounded-[100px] bg-gray-100 pl-12"
        />
    
    <Image 
    src="/search-mirror-icon.svg"
    alt="search bar icon"
    width={5}
    height={5}
    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
    />
  </div>

    
    
    
  {/* Heart and box logo */}
  
  
  <div className="flex justify-between items-center w-[84px] h-[50px] justify">
    <Link href="#">
    <Image 
    src="/icon-heart.svg"
    alt="heart icon"
    width={19.5}
    height={16.76}
    className="w-[30.5px] h-[22.76px]"
    />
    </Link>
    

  <Link href="/Cart">
  <Image 
    src="/icon-box.svg"
    alt="heart box"
    width={16.5}
    height={16.5}
    className="w-[35.5px] h-[35.5px]"
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
