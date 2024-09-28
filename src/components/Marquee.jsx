import React from 'react'

function Marquee({imagesurls}) {
  return (
    <div className='flex w-full py-8 gap-20 bg-zinc-900 whitespace-nowrap overflow-hidden'>
      {imagesurls.map((url, index) => <img key={index} src={url} className='flex-shrink-0 w-[6vw]'/>)}
      {imagesurls.map((url, index) => <img key={index} src={url} className='flex-shrink-0 w-[6vw]'/>)}
    </div>
  )
}

export default Marquee