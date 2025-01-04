import React from 'react'
import { Button} from "@/components/ui/button";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Hero = () => {
  return (
    
    
    <div>
          <Header />

      <div className="flex justify-center">
    <div className="max-w-[1440px] w-full px-4]">


{/* HERO SECTION 1 */}

<div className="max-w-[1440px] w-full h-auto bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-10">
<div className="flex flex-col items-center">
  <p className="font-Helvetica Neue text-gray-900 font-semibold text-[9px] leading-[24px] mt-2 sm:text-[11px] md:text-[14px] lg:text-[16px]">Hello Nike App</p>
  <p className="text-[10px] sm:text[11px] md:text-[12px] lg:text[14px] leading-[20px] sm:leading-[24px] text-gray-900 font-normal">Download the app to access everything Nike.
    <span className="underline text-gray-900 font-bold pl-1"><a href="#" className="text-black
      hover:text-blue-500 transition-colors duration-300">Get Your Great</a></span></p>
</div>

</div>


<div className="flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10">
    <Image 
        src="/shoe-pic1.svg"
        alt="content1-image"
        width={1344}
        height={700}
        className="w-full max-w-[1344px] h-auto"
    />
        
</div>
        
  <div className="flex justify-center px-4 sm:px-6 md:px-8 lg:px-10">
  <div className="w-full max-w-[1008px] h-auto my-8 sm:my-12 lg:my-16">
    <div className="flex justify-center">
      <p className="font-[Helvetica Neue] text-[14px] sm:text[15px] leading-[20px] sm:leading-[24px] my-1 font-semibold">First Look</p>
    </div>
    <div className="flex justify-center">
      <p className="font-[Helvetica Neue] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[60px]">NIKE AIR MAX PULSE</p>
    </div>
    <div className="flex flex-col justify-center items-center font-[Helvetica Neue] font-normal text-[13px]
     sm:text-[15px] leading-[20px] sm:leading-[24px] py-4 text-center px-2 sm:px-4">
  <p className="flex items-center">
    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max pulse
  </p>
  <p>
    — designed to push you past your limits and help you go to the max.
  </p>
</div>
                    <div className="flex justify-center gap-2">
                    <Button className="rounded-full px-4 py-2 text-sm sm:text-base">Notify Me</Button>
                    <Button className="rounded-full px-4 py-2 text-sm sm:text-base">Shop Air Max</Button>
                    </div>
  </div>
  </div>



{/* HERO SECTION 2 */}



<div className='w-full max-w-[1440px] h-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-2 sm:mb-4 md:mb-6 lg:mb-8'>
  
  {/* Title Section */}
  <div className='font-[Helvetica Neue] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[28px] font-semibold'>
    <h3>Best of Air Max</h3>
  </div>
        
  {/* Button Section */}
  <div className='flex gap-2 sm:gap-3 items-center'>
    <p className='pt-3 pr-2 text-[14px] sm:text-[15px] font-[Helvetica Neue] font-semibold leading-[24px]'>Shop</p>
    
    {/* Right Arrow Button */}
    <button className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-gray-100 rounded-full flex items-center justify-center">
      <Image src="/arrow-right.svg" alt="Right Arrow" width={6.97} height={13.93} className='w-[9.97px] h-[18.93px]'/>
    </button>
    
    {/* Left Arrow Button */}
    <button className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-gray-200 rounded-full flex items-center justify-center">
      <Image src="/arrow-left.svg" alt="Left Arrow" width={6.97} height={13.93} className='w-[9.97px] h-[18.93px]' />
    </button>
  </div>
</div>


  
  
  {/* HERO SECTION 3 */}
  
  

  <div className="flex flex-wrap justify-center gap-6">
  {/* First Product */}
  <div className='space-y-6 w-full sm:w-[400px] md:w-[450px] lg:w-[441px]'>
    <Image src="/box-shoe1.svg" alt="Nike Air Max Pulse" width={441.36} height={510.36} className="w-full h-auto"/>
    <div>
      <div className='flex justify-between'>
        <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] font-semibold leading-[24px]">Nike Air Max Pulse</p>
        <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] font-semibold leading-[24px] pr-5">₹ 13 995</p>
      </div>
      <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] font-medium leading-[24px] text-gray-500">
        Men&apos;s Short-Sleeve
      </p>
    </div>
  </div>

  {/* Second Product */}
  <div className='space-y-6 w-full sm:w-[400px] md:w-[450px] lg:w-[441px]'>
    <Image src="/box-shoe2.svg" alt="Nike Air Max Pulse" width={441.36} height={510.36} className="w-full h-auto"/>
    <div>
      <div className='flex justify-between'>
        <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] font-semibold leading-[24px]">Nike Air Max Pulse</p>
        <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] font-semibold leading-[24px] pr-5">₹ 13 995</p>
      </div>
      <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] font-medium leading-[24px] text-gray-500">
        Men&apos;s Short-Sleeve
      </p>
    </div>
  </div>

  {/* Third Product */}
  <div className='space-y-6 w-full sm:w-[400px] md:w-[450px] lg:w-[441px]'>
    <Image src="/box-shoe3.svg" alt="Nike Air Max Pulse" width={441.36} height={510.36} className="w-full h-auto"/>
    <div>
      <div className='flex justify-between'>
        <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] font-semibold leading-[24px]">Nike Air Max 97 SE</p>
        <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] font-semibold leading-[24px] pr-5">₹ 16 995</p>
      </div>
      <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] font-medium leading-[24px] text-gray-500">
        Men&apos;s Short-Sleeve
      </p>
    </div>
  </div>
</div>

            
            
            
            
{/* HERO-SECTION 4 */}


<div className='flex justify-center mt-10'>
  <div className="relative mt-20">
    <div className='font-semibold font-[Helvetica Neue] h-[48px] text-[23px] sm:text-[25px] md:text-[27px] lg:text-[30px] leading-[28px]'>
      Featured
    </div>
    <Image 
      src="/running-man.svg" 
      alt="running man image" 
      width={1344} 
      height={977} 
      className="w-full h-auto" // Make the image responsive
    />
  </div>
</div>

<div className="flex flex-col items-center mt-14 px-4 sm:px-6 md:px-8 lg:px-16">
  <h1 className="text-[32px] sm:text-[42px] md:text-[54px] font-semibold leading-[40px] sm:leading-[50px] md:leading-[60px] font-[Helvetica Neue]">
    STEP INTO WHAT FEELS GOOD
  </h1>
  <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] font-medium mt-6 text-center">
    Cause everyone should know the feeling of running in that perfect pair.
  </p>
  <Button className="rounded-full mt-6 px-6 py-3 text-sm sm:text-base md:text-lg">
    Find Your Shoe
  </Button>
</div>





{/* HERO-SECTION 5 */}


<div className="flex justify-start mt-6 px-8 sm:px-10 md:px-12 lg:px-14">
  <div className="top-[1807.36px] mt-20">
    <div className="font-semibold font-[Helvetica Neue] h-[48px] text-[20px] sm:text-[22px] md:text-[23px] lg:text-[24px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px]">Gear Up</div>
  </div>
</div>

<div className="flex justify-evenly items-center px-6 sm:px-8 md:px-12 lg:px-14">
  <div className="w-full sm:w-[211px] md:w-[237px] h-[48px] flex justify-between items-center content-center my-4 mx-2">
    <p className="px-2 text-[14px] sm:text-[15px] font-semibold leading-[20px] sm:leading-[24px] font-[Helvetica Neue]">Shop Men&apos;s</p>
    <div className="flex gap-2">
      <button className="w-[48px] h-[48px] bg-gray-100 rounded-[24px] flex items-center justify-center">
        <Image src="/arrow-right.svg" alt="Left Arrow" width={6.97} height={13.93} className="w-[9.97px] h-[18.93px]" />
      </button>
      <button className="w-[48px] h-[48px] bg-gray-200 rounded-[24px] flex items-center justify-center">
        <Image src="/arrow-left.svg" alt="Right Arrow" width={6.97} height={13.93} className="w-[9.97px] h-[18.93px]" />
      </button>
    </div>
  </div>

  <div className="w-full sm:w-[211px] md:w-[237px] h-[48px] flex justify-between items-center content-center my-4 mx-2">
    <p className="px-2 text-[14px] sm:text-[15px] font-semibold leading-[20px] sm:leading-[24px] font-[Helvetica Neue]">Shop Women&apos;s</p>
    <div className="flex gap-2">
      <button className="w-[48px] h-[48px] bg-gray-100 rounded-[24px] flex items-center justify-center">
        <Image src="/arrow-right.svg" alt="Left Arrow" width={6.97} height={13.93} className="w-[9.97px] h-[18.93px]" />
      </button>
      <button className="w-[48px] h-[48px] bg-gray-200 rounded-[24px] flex items-center justify-center">
        <Image src="/arrow-left.svg" alt="Right Arrow" width={6.97} height={13.93} className="w-[9.97px] h-[18.93px]" />
      </button>
    </div>
  </div>
</div>

<div className="flex justify-between items-center px-6 sm:px-8 md:px-12 lg:px-14">
  <div className="flex gap-6 flex-wrap justify-center sm:justify-between md:justify-start">
    <div className="w-full sm:w-[300px] lg:w-[311px] mb-6">
      <Image src="/person-1.svg" alt="pic1" width={300} height={300} />
      <div className="mt-6">
        <div className="flex justify-between">
          <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] font-semibold leading-[24px]">Nike Dri-FIT ADV TechKnit Ultra</p>
          <span className="font-[Helvetica Neue] text-[14px] sm:text-[15px] font-semibold leading-[24px]">₹ 3 895</span>
        </div>
        <p className="font-[Helvetica Neue] text-[14px] sm:text-[16px] font-medium leading-[24px] text-gray-500">Men&apos;s Short-Sleeve</p>
        <p className="font-[Helvetica Neue] text-[14px] sm:text-[16px] font-medium leading-[24px] text-gray-500">Running Top</p>
      </div>
    </div>

    <div className="w-full sm:w-[300px] lg:w-[311px] mb-6">
      <Image src="/person-2.svg" alt="pic2" width={300} height={300} />
      <div className="mt-6">
        <div className="flex justify-between">
          <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] font-semibold leading-[24px]">Nike Dri-FIT Challenger</p>
          <span className="font-[Helvetica Neue] text-[14px] sm:text-[15px] font-semibold leading-[24px]">₹ 2 495</span>
        </div>
        <p className="font-[Helvetica Neue] text-[14px] sm:text-[16px] font-medium leading-[24px] text-gray-500">Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</p>
      </div>
    </div>

    <div className="w-full sm:w-[300px] lg:w-[311px] mb-6">
      <Image src="/person-3.svg" alt="pic3" width={300} height={300} />
      <div className="mt-6">
        <div className="flex justify-between">
          <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] font-semibold leading-[24px]">Nike Dri-FIT ADV Run Division</p>
          <span className="font-[Helvetica Neue] text-[14px] sm:text-[15px] font-semibold leading-[24px]">₹ 5 295</span>
        </div>
        <p className="font-[Helvetica Neue] text-[14px] sm:text-[16px] font-medium leading-[24px] text-gray-500">Women&apos;s Long-Sleeve</p>
        <p className="font-[Helvetica Neue] text-[14px] sm:text-[16px] font-medium leading-[24px] text-gray-500">Running Top</p>
      </div>
    </div>

    <div className="w-full sm:w-[300px] lg:w-[311px] mb-6">
      <Image src="/person-4.svg" alt="pic4" width={300} height={300} />
      <div className="mt-6">
        <div className="flex justify-between">
          <p className="font-[Helvetica Neue] text-[14px] sm:text-[15px] font-semibold leading-[24px]">Nike Fast</p>
          <span className="font-[Helvetica Neue] text-[14px] sm:text-[15px] font-semibold leading-[24px]">₹ 3 795</span>
        </div>
        <p className="font-[Helvetica Neue] text-[14px] sm:text-[16px] font-medium leading-[24px] text-gray-500">Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets</p>
      </div>
    </div>
  </div>
</div>




{/* HERO SECTION 6 */}


<div className="flex justify-center mt-10 px-6 sm:px-8 md:px-10 lg:px-12">
  <div className="top-[1807.36px] mt-20">
    <div className="font-semibold font-[Helvetica Neue] h-[48px] text-[20px] sm:text-[22px] md:text-[23px] lg:text-[24px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px]">Don&apos;t Miss</div>
    <Image 
      src="/Don't-Miss-Image.png" 
      width={1344} 
      height={977} 
      alt="dont miss image" 
      className="w-full h-auto"
    />
  </div>
</div>

<div className="flex flex-col items-center mt-14 px-6 sm:px-8 md:px-10 lg:px-12">
  <h1 className="text-[40px] sm:text-[50px] md:text-[54px] lg:text-[60px] font-semibold leading-[50px] sm:leading-[55px] md:leading-[60px] lg:leading-[65px] font-[Helvetica Neue] text-center">FLIGHT ESSENTIALS</h1>
  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[20px] sm:leading-[24px] mt-6 text-center">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
  <Button className="rounded-full mt-6 px-8 py-3 text-[16px] sm:text-[18px] md:text-[20px]">Shop</Button>
</div>





{/* HERO SECTION 7 */}


<div className="flex mt-6 px-6 sm:px-8 md:px-10 lg:px-12">
  <div className="top-[1807.36px] mt-10">
    <div className="font-semibold font-[Helvetica Neue] h-[48px] text-[20px] sm:text-[22px] md:text-[23px] lg:text-[24px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px]">
      The Essentials
    </div>
  </div>
</div>

<div className="flex flex-wrap justify-between px-6 sm:px-8 md:px-10 lg:px-12 gap-3">
  <div className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[30%]">
    <Image src="/Essential-3.svg" width={440} height={5407} alt="Essential Image-1" />
    <Button className="rounded-full bg-white text-black font-medium hover:bg-white absolute bottom-6 sm:bottom-10 left-1/4 transform -translate-x-1/2">
      Men&apos;s
    </Button>
  </div>

  <div className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[30%]">
    <Image src="/Essential-1.svg" width={440} height={5407} alt="Essential Image-2" />
    <Button className="rounded-full bg-white text-black font-medium hover:bg-white absolute bottom-6 sm:bottom-10 left-1/4 transform -translate-x-1/2">
      Women&apos;s
    </Button>
  </div>

  <div className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[30%]">
    <Image src="/Essential-2.svg" width={440} height={5407} alt="Essential Image-3" />
    <Button className="rounded-full bg-white text-black font-medium hover:bg-white absolute bottom-6 sm:bottom-10 left-1/4 transform -translate-x-1/2">
      Kids&apos;
    </Button>
  </div>
</div>

<div className="flex justify-center px-6 sm:px-8 md:px-10 lg:px-12 my-12 pb-10">
  <div className="w-full sm:w-[700px] md:w-[880px] lg:w-[880px] h-auto">
    <div className="flex flex-wrap justify-between">
      <div className="w-full sm:w-[45%] md:w-[22%] lg:w-[22%]">
        <h6 className="font-[Helvetica Neue] font-bold text-[14px] sm:text-[15px] leading-[24px]">Icons</h6>
        <ul className="mt-6">
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Air Force 1
            </a>
          </li>
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Huarache
            </a>
          </li>
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Air Max 90
            </a>
          </li>
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Air Max 95
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full sm:w-[45%] md:w-[22%] lg:w-[22%]">
        <h6 className="font-[Helvetica Neue] font-bold text-[14px] sm:text-[15px] leading-[24px]">Shoes</h6>
        <ul className="mt-6">
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              All Shoes
            </a>
          </li>
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Custom Shoes
            </a>
          </li>
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Jordan Shoes
            </a>
          </li>
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Running Shoes
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full sm:w-[45%] md:w-[22%] lg:w-[22%]">
        <h6 className="font-[Helvetica Neue] font-bold text-[14px] sm:text-[15px] leading-[24px]">Clothing</h6>
        <ul className="mt-6">
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              All Clothing
            </a>
          </li>
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Modest Wear
            </a>
          </li>
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Hoodies & Pullovers
            </a>
          </li>
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Shirts & Tops
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full sm:w-[45%] md:w-[22%] lg:w-[22%]">
        <h6 className="font-[Helvetica Neue] font-bold text-[14px] sm:text-[15px] leading-[24px]">Kids&apos;</h6>
        <ul className="mt-6">
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Infant & Toddler Shoes
            </a>
          </li>
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Kids&apos; Shoes
            </a>
          </li>
          <li className="font-[Helvetica Neue] font-normal text-[14px] sm:text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
            <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
              Kids&apos; Clothing
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
</div>
    
    <Footer />
    </div>
  )
}

export default Hero
