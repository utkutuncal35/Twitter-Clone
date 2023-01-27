import React from 'react'
import { EmojiIcon, GIFıcon, ImageIcon, LocationIcon, PollIcon, ScheduleIcon } from '../icons/Icons'



const TweetBox = () => {
    
    
   
    
  return (
    <div className='flex flex-col flex-1 mt-2 px-0 '>
    <textarea className='w-full text-xl placeholder-gray-dark outline-none overflow-hidden bg-transparent' placeholder='Whats Happening?' ></textarea>
        <div className='flex items-center justify-between'>
            <div className='flex -ml-3'>
                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                    <ImageIcon className='w-6 h-6 text-primary-base'/>
                </div>  
                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                    <GIFıcon className='w-6 h-6 text-primary-base'/>
                </div>
                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                    <PollIcon className='w-6 h-6 text-primary-base'/>
                </div>
                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                    <EmojiIcon className='w-6 h-6 text-primary-base'/>
                </div>
                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                    <ScheduleIcon className='w-6 h-6 text-primary-base'/>
                </div>
                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                    <LocationIcon className='w-6 h-6 text-primary-base'/>
                </div>
            </div>
            <button className='bg-primary-base text-white rounded-full px-4 py-2 font-medium' >
                Tweet</button>
        </div>
    </div>
    
    
  )
}

export default TweetBox