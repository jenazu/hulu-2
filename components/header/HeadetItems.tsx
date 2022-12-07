import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

function HeadetItems({Icon, title}: Props ) {
  return (
    <div className='group flex flex-col items-center  cursor-pointer
    w-12 sm:w-20 hover:text-white'>
      <Icon className='h-8 mb-1 group-hover:animate-bounce'/>
      <p className='tracking-widest group-hover:opacity-100 opacity-0 '>{title}</p>
    </div>
  )
}

export default HeadetItems
