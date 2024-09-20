import React from 'react'
import NotfoundImage from "../../public/frontend_image/notfound.svg"
import Image from 'next/image';

function notfound() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <Image src={NotfoundImage} className='h-full w-full opacity-70' alt='not found image' />
    </div>
  )
}

export default notfound;