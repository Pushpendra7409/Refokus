import React from 'react'

function Work() {

    var images = [
      {url:"/Img1.png", top: "50%", left: "50%", isActive: false},
      {url:"/Img2.png", top: "52%", left: "48%", isActive: false},
      {url:"/Img3.png", top: "54%", left: "46%", isActive: false},
      {url:"/Img4.png", top: "55%", left: "45%", isActive: false},
      {url:"/Img5.png", top: "48%", left: "52%", isActive: false},
      {url:"/Img6.png", top: "46%", left: "54%", isActive: false},
      {url:"/Img7.png", top: "45%", left: "55%", isActive: true},
    ];


  return (
  <div className='w-full'>
  <div className='relative max-w-screen-xl mx-auto text-center'>
    <h1 className='text-[28vw] leading-none font-medium select-none tracking-tight'>work</h1>
    <div className='absolute top-0 w-full h-full'>
        {images.map(
            (elem, index) =>
             elem.isActive && (
            <img
             className='absolute w-80 rounded-lg -translate-x-[50%] -translate-y-[50%]'
             src={elem.url} 
             style= {{top: elem.top, left:elem.left}} 
             alt=""/>
             )  
        )}
    </div>
  </div>
  </div>
  )
}

export default Work