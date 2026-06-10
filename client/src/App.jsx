import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>

      <div className="flex h-screen overflow-hidden">

        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-auto">

          {/* Navbar */}
          <Navbar
            onMenuClick={() => setSidebarOpen(true)}
            isDark={isDark}
            onToggleDark={() => setIsDark(!isDark)}
          />

          {/* Dashboard Page */}
          <Dashboard isDark={isDark} />

        </div>
      </div>
    </div>
  )
}

export default App