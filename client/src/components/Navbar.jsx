import { Menu, Sun, Moon, Bell } from 'lucide-react'

const Navbar = ({ onMenuClick, isDark, onToggleDark }) => {
  return (
    <header className={`
      ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
      shadow-md px-6 py-4 flex items-center justify-between
    `}>

      {/* Left side - Menu button */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-500 hover:text-gray-700"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-lg font-bold">
          Dashboard Overview
        </h2>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-3">

        {/* Notification Bell */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100">
          <Bell size={20} className="text-gray-500" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={onToggleDark}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isDark ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-500" />
          )}
        </button>

      </div>
    </header>
  )
}

export default Navbar