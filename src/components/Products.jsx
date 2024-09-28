import React from 'react'
import Product from './Product'


function Products() {
    var products = [
        {title: "cula", description: "We've had a ton of fun creating a new website for Cula! This time, we immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false},
        {title: "BCG Platinion", description: "We created a robust website that blends top notch design and facilitates dynamic content to the requirements of 74 locations, all powered by Webflow’s modern CMS, giving the BCG Platinion marketing team a completely new experience for content management.", live: true, case: false},
        {title: "arqitel", description: "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.", live: true, case: true},
        {title: "sevdesk", description: "We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.", live: true, case: false},
        {title: "layout land", description: "We collaborated with the Webflow University team to develop an educational experience aimed at helping designers and newcomers grasp the core fundamentals of the product. This partnership allowed us to leverage our expertise as a leading Webflow agency,", live: true, case: false},

    ]
  return (
    <div className='mt-28 relative'>
        {products.map((val, index) => <Product key={index} val={val}/>)}
        <div className='absolute top-0 w-full h-full pointer-events-none'> 
          <div className='window absolute w-[32rem] h-[23rem] bg-white left-[44%] -translate-x-[50%]'>
          <div className='w-full h-full bg-sky-100'></div>
          <div className='w-full h-full bg-sky-200'></div>
          <div className='w-full h-full bg-sky-300'></div>
          <div className='w-full h-full bg-sky-400'></div>
          <div className='w-full h-full bg-sky-500'></div>
          </div>
        </div>
    </div>
  )
}

export default Products