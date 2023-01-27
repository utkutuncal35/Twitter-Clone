import React from 'react'

function SideLink({ name, Icon, active, onMenuItemClick}) {
    
  return (
    <li className='group' onClick={() => onMenuItemClick(name)}>
        <a href={name.toLowerCase()} className='cursor-pointer block text-xl mb-2 '>
            <div className='inline-block'>
            <div className={'flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-3 '}>
            
            
            
                <Icon/>
                <span className='ml-4 font-bold'>{name}</span>
            </div>
            </div> 
        </a>
    </li>
  )
}

export default SideLink;