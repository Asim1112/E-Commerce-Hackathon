import React from 'react'
import SpecificHeader from '@/components/SpecificHeader';
import SpecificFooter from '@/components/SpecificFooter';
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  return (
   <div>
    <SpecificHeader />
        
<div className='flex justify-center'>
    <div className="w-[880px] h-[2376px] bg-cyan-300">
      <div className="w-[440px] h-[386px] bg-lime-300 py-4">
        
          <h6 className="font-[Helvetica Neue] text-[21px] leading-[24px] font-semibold pb-3">How would you like to get your order?</h6>
          <p className="font-[Helvetica Neue] text-[16px] text-[rgba(117,117,117,1)] leading-[24px] font-normal pb-9">Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <span className="font-[Helvetica Neue] text-[15px] text-[rgba(117,117,117,1)] leading-[24px] font-normal underline">Learn More</span></p>
          <Button variant="ghost" className="w-[440px] h-[82px] flex justify-start gap-6 border-2 font-[Helvetica Neue] text-[15px] leading-[24px] font-semibold border-black rounded-[10px]"><Image src="icon-box2.svg" alt="" width={21.85} height={19.02} />Deliver It</Button>
      </div>
      <div className="w-[440px] h-[1504px] bg-green-300">
        <div><p>Enter your name and address:</p></div>
        <div>
          <input type="text" placeholder="First Name" className="w-[440px] h-[56px] placeholder-black rounded-[4px] leading-[24px] font-[Helvetica Neue] text-[16px] font-normal pl-4 border-2 border-gray-300" />
          <input type="text" placeholder="Last Name" className="w-[440px] h-[56px] placeholder-black rounded-[4px] leading-[24px] font-[Helvetica Neue] text-[16px] font-normal pl-4 border-2 border-gray-300" />
          <input type="text" placeholder="Address Line 1" className="w-[440px] h-[56px] placeholder-black rounded-[4px] leading-[24px] font-[Helvetica Neue] text-[16px] font-normal pl-4 border-2 border-gray-300" />
          <input type="text" placeholder="Address Line 2" className="w-[440px] h-[56px] placeholder-black rounded-[4px] leading-[24px] font-[Helvetica Neue] text-[16px] font-normal pl-4 border-2 border-gray-300" />
          <input type="text" placeholder="Address Line 3" className="w-[440px] h-[56px] placeholder-black rounded-[4px] leading-[24px] font-[Helvetica Neue] text-[16px] font-normal pl-4 border-2 border-gray-300" />
          <div className="flex justify-between"><input type="text" placeholder="Postal Code" className="w-[211.19px] h-[56px] placeholder-black rounded-[4px] leading-[24px] font-[Helvetica Neue] text-[16px] font-normal pl-4 border-2 border-gray-300" /><input type="text" placeholder="Locality" className="w-[211.19px] h-[56px] placeholder-black rounded-[4px] leading-[24px] font-[Helvetica Neue] text-[16px] font-normal pl-4 border-2 border-gray-300" /></div>
          <div className="flex justify-between"><input type="text" placeholder="Postal Code" className="w-[211.19px] h-[56px] placeholder-black rounded-[4px] leading-[24px] font-[Helvetica Neue] text-[16px] font-normal pl-4 border-2 border-gray-300" /><input type="text" placeholder="Locality" className="w-[211.19px] h-[56px] placeholder-black rounded-[4px] leading-[24px] font-[Helvetica Neue] text-[16px] font-normal pl-4 border-2 border-gray-300" /></div>
          
          </div>

        





      </div>
    </div>
</div>
    
    <SpecificFooter />
   </div>
  )
}

export default page
