
import React, { useState } from 'react'

import {
  Home,
  Info,
  Settings,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react'

import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true)

  const menuitems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Page2', icon: Info, path: '/Page2' },
    { name: 'Page3', icon: Settings, path: '/Page3' }
  ]

  return (
    <aside
      className={`bg-white h-full shrink-0 flex flex-col p-4
        text-violet-800 border-r border-violet-100
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-20' : 'w-72'}`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-2 mb-5">
        {!collapsed && (
          <span className="text-xl font-semibold">
            SideBar
          </span>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-violet-100 transition-colors"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-expanded={!collapsed}
        >
          {collapsed
            ? <PanelLeftOpen size={20} />
            : <PanelLeftClose size={20} />
          }
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-2">
        {menuitems.map((items) => {
          const Icon = items.icon

          return (
            <NavLink
              key={items.path}
              to={items.path}
              end={items.path === '/'}
              title={collapsed ? items.name : undefined}
              className={({ isActive }) =>
                `flex items-center rounded-lg p-3
                transition-colors duration-200
                ${collapsed ? 'justify-center' : 'justify-start gap-3'}
                ${isActive
                  ? 'bg-violet-600 text-white'
                  : 'text-black hover:bg-violet-100'
                }`
              }
            >
              <Icon size={20} />

              {!collapsed && (
                <span>{items.name}</span>
              )}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
