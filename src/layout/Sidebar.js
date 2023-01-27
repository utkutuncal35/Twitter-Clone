import React, { useState } from 'react'
import SideLink from '../Components/SideLink'
import UserBox from '../Components/UserBox';
import { Twitter, HomeIcon, ExploreIcon, NotificationIcon, MessagesIcon, BookmarksIcon, ListIcon, ProfileIcon, MoreIcon } from "../icons/Icons"

const sideLinks = [
  {
    name: 'Home',
    icon: HomeIcon,
  },
  {
    name: 'Explore',
    icon: ExploreIcon,
  },
  {
    name: 'Notifications',
    icon: NotificationIcon,
  },
  {
    name: 'Messages',
    icon: MessagesIcon,
  },
  {
    name: 'Bookmarks',
    icon: BookmarksIcon,
  },
  {
    name: 'Lists',
    icon: ListIcon,
  },
  {
    name: 'Profile',
    icon: ProfileIcon,
  },
  {
    name: 'More',
    icon: MoreIcon,
  },
]



function Sidebar() {
  const [active, setActive] = useState("Home");

  const handleMenuItemClick = (name) => {
    setActive(name);

  }
  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between w-72 px-2'>
      <div>
        <div className='mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-primary-light transform transition-colors duration-200'>
          <Twitter/>
        </div>
        <nav className='mb-4'>
          <ul>
            {sideLinks.map(({ name, icon }) =>(
              <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick} />
            ))}
          </ul>
        </nav>
        <button className=' hover:bg-primary-dark bg-primary-base  text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200'>Tweet</button>
      </div>
      <UserBox/>
    </div>
  )
}

export default Sidebar