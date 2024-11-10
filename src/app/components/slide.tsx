import Image from 'next/image';
import React from 'react'




interface propsType {
    img: string;
    title:string;
    mainTitle: string;
    price:string;
}

const Slide: React.FC<propsType>  = ({img, title, mainTitle, price}) => {
  return (
    <div className='outline-none border-none relative'>
        <div className='absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50px] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2 sm:bg-transparent p-4'>
            <h3 className='text-accent text-[24-px] lg:text-[28px]'>{title}</h3>
            <h2 className='text-black text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]'>
                {mainTitle}

            </h2>

            <h3 className='text-[24px] text-gray-500'>
                starting at{" "}
                <b className='text-[20px] md:text-[24px] lg:text-[30px]'>{price}</b>
                .00

            </h3>
            <div className='bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg innline-block cursor-pointer hover:bg-black'>
                Shop Now

            </div>

        </div>

        <Image className="w-[600px] md:h-auto rounded-xl object-cover object-right md:object "
        src={img}
        alt="image"
        width={3000}
        height={3000}
        
        
        
        />
      
    </div>
  )
}

export default Slide

