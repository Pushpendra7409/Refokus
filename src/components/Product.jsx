import React from 'react'
import Button from './Button'

function Product({val}) {
  return (
    <div className='w-full py-20 text-white bg-zinc-900 text-white'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-3xl capitalize font-medium'>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-10 text-lg'>{val.description}</p>
                <div className='flex items-center gap-5'>
                    {val.live && <Button />}
                    {val.case && <Button title="Case Study" />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product