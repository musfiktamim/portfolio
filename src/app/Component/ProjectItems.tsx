import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectItems({item}:{item:any}) {
    return (
        <div className='flex flex-col items-center justify-center'>        
            <Link href={item.links} target='_blank' className={`w-[300px] hover:px-[3px] rounded-[4px] overflow-hidden transition=[border] hover:py-[3px] transition-all h-[175px] hover:border hover:shadow-[0_20px_50px_rgba(246,_0,_2,_0.7)] `}>
                <div className='w-full h-full rounded-[4px] overflow-hidden'>
                    <Image src={item.image} className='h-full w-full' alt='project Image' />
                </div>
            </Link>
            <h1>{item.name}</h1>
        </div>
    )
}

export default ProjectItems