import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Carousel({resources}) {
  return (
    <div className='flex flex-row overflow-x-scroll overflow-hidden'>
      {resources?.map((resource,index)=>(
        <Link href={resource} className='p-2' key={index}>
      <Image src={resource} width={320} height={240} loading='lazy' style={{minWidth:'320px', maxHeight:'500px', objectFit:'contain'}}  quality={100} alt='....' />
      </Link>
      ))}
      
    </div>
  )
}

export default Carousel