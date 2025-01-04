import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-full max-w-[1440px] h-[auto] bg-black px-4 sm:px-6 md:px-10 lg:px-12'>
            
            <div className='flex flex-col sm:flex-row sm:gap-8 px-2'>
              {/* Column 1 */}
              <div className="text-white font-[Helvetica Neue] pt-10">
                  <ul className="font-medium text-[10px] leading-[32.67px] sm:text-[11px]">
                      <li><a href="#">FIND A STORE</a></li>
                      <li><a href="#">BECOME A MEMEBER</a></li>
                      <li><a href="#">SIGN UP FOR EMAIL</a></li>
                      <li><a href="#">Send Us Feedback</a></li>
                      <li><a href="#">STUDENT DISCOUNTS</a></li>
                  </ul>
              </div>

              {/* Column 2 */}
              <div className="text-white font-[Helvetica Neue] pt-10">
                  <ul className="text-[11px] leading-[28px] font-medium font-[Helvetica Neue] sm:text-[12px]">
                      <li><a href="#">GET HELP</a></li>
                      <li className='text-[#7E7E7E]'><a href="#">Order Status</a></li>
                      <li className='text-[#7E7E7E]'><a href="#">Delivery</a></li>
                      <li className='text-[#7E7E7E]'><a href="#">Returns</a></li>
                      <li className='text-[#7E7E7E]'><a href="#">Payment Options</a></li>
                      <li className='text-[#7E7E7E]'><a href="#">Contact Us On Nike.com Inquiries</a></li>
                      <li className='text-[#7E7E7E]'><a href="#">Contact Us On All Other Inquiries</a></li>
                  </ul>
              </div>

              {/* Column 3 */}
              <div className="text-white font-[Helvetica Neue] pt-10">
                  <ul className='font-[Helvetica Neue] text-[11px] font-normal leading-[28px] sm:text-[12px]'>
                      <li><a href="#">ABOUT NIKE</a></li>
                      <li className='text-[#7E7E7E]'><a href="#">News</a></li>
                      <li className='text-[#7E7E7E]'><a href="#">Careers</a></li>
                      <li className='text-[#7E7E7E]'><a href="#">Investors</a></li>
                      <li className='text-[#7E7E7E]'><a href="#">Sustainability</a></li>
                  </ul>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center sm:justify-end gap-3 mt-4 sm:mt-0 relative -top-6 sm:-top-48">
              <a href="#"><Image src="/twitter.svg" alt="twitter" width={30} height={30}/></a>
              <a href="#"><Image src="/facebook.svg" alt="facebook" width={30} height={30}/></a>
              <a href="#"><Image src="/youtube.svg" alt="youtube" width={30} height={30}/></a>
              <a href="#"><Image src="/insta.svg" alt="instagram" width={30} height={30}/></a>
            </div>

            {/* Footer Bottom */}
            <div className="flex justify-between items-center pt-8 w-full">
              <div className="flex items-center gap-3">
                <Image src="pointer.svg" alt="pointer" width={9.38} height={13.12}/>
                <p className="font-normal text-[12px] text-white leading-[12px] font-[Helvetica Neue]">India</p>
                <p className="leading-[12px] text-[11px] text-[#7E7E7E] font-normal font-[Helvetica Neue] pl-4">
                  &copy; 2023 Nike, Inc. All Rights Reserved
                </p>
              </div>

              {/* Footer Links */}
              <ul className="flex gap-6 text-[#7E7E7E] font-medium text-[11px] leading-[12px] font-[Helvetica Neue] items-center sm:text-[12px]">
                  <li><a href="#">Guides</a></li>
                  <li><a href="#">Terms of Sale</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Nike Privacy Policy</a></li>
              </ul>
            </div>
        </div>
    </div>            
  )
}

export default Footer;
