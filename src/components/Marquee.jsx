import React from 'react'

function Marquee({imagesurls}) {
  return (
    <div className='flex w-full py-5 gap-20 bg-zinc-900 whitespace-nowrap overflow-hidden'>
      {imagesurls.map(url => <img src={url} className='h-6 mb-15'/>)}
    </div>
  )
}

export default Marquee