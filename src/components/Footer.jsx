import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-zinc-900'>
      <div className='max-w-screen-xl mx-auto py-10 flex gap-32 ml-28'>
        <div className='basis-1/2 text-[10rem] font-medium leading-none mr-28'>refokus.</div>

        <div className='basis-1/2 flex gap-4'>
         <div className='basis-1/3'>
         <h4 className='mb-10 capitalize'>Socials</h4>
            {["Instagram", "Facebook", "X", "Linkedin"].map((item, index) => <a key={index} className='block mt-2 capitalize text-zinc-500 text-2xl'>{item}</a>)}
         </div>

         <div className='basis-1/3'>
         <h4 className='mb-10 capitalize'>Socials</h4>
            {["Instagram", "Facebook", "X", "Linkedin"].map((item, index) => <a key={index} className='block mt-2 capitalize text-zinc-500 text-2xl'>{item}</a>)}
         </div>

         <div className='basis-1/3 flex flex-col items-end'>
         <img src= "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" />
         </div>

        </div>   
      </div>
    </div>
  )
}

export default Footer