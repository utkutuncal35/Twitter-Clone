import React from 'react'
import Divider from '../Components/Divider'
import TweetBox from '../Components/TweetBox'


function Content() {

  return (
    <main className='flex-1 flex flex-col border-r border-l border-gray-extraLight'>
        <header className='sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white'>
          <span className='font-bold text-xl text-gray-900 '>Home</span>
        </header>
        <div className='flex p-4 py-3 space-x-4 '>
        <img src='https://pbs.twimg.com/profile_images/1618599894129807360/2d1ko7lr_400x400.png' alt='Profile' className='w-11 h-11 rounded-full'></img>
        <TweetBox/>
        </div>
        <Divider/>
    </main>
  )
}

export default Content