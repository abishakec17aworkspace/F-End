import { icons, PanelBottomIcon } from 'lucide-react'
import React from 'react'
import {
  Home,
  Info,
  Settings,
  PanelLeft
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const menuitems = [
        {name:"Home",icon:Home,path:"/"},
        {name:"Page2",icon:Info,path:"/Page2"},
        {name:"page2",icon:Settings,path:"/Page3"}
    ]

  return (
    <aside className='bg-white w-72 h-full flex flex-col justify-start p-4 text-violet-800'>
        <div>
            <div className='flex flex-row-reverse p-3 justify-between align-middle items-center'>
            <PanelBottomIcon/>
            <span className='text-3xl font-sans text-violet-800'>SideBar</span>
            </div>

            <nav className='p-4 flex flex-col justify-start'>
                {menuitems.map((items)=>{
                    const Icon = items.icon

                    return(
                        <NavLink key={items.path} to={items.path} className='flex flex-row justify-start align-middle items-center px-2 gap-2'>
                            <Icon size={20}/>
                            <span>{items.name}</span>
                        </NavLink>
                    )
                })}
            </nav>


        </div>

    </aside>
  )
}

export default Sidebar
