import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [activeSection, setActiveSection] = useState('dashboard')

  return (
    <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <div className="flex-1 flex flex-col overflow-auto">
          <Navbar
            onMenuClick={() => setSidebarOpen(true)}
            isDark={isDark}
            onToggleDark={() => setIsDark(!isDark)}
          />
          <Dashboard isDark={isDark} activeSection={activeSection} />
        </div>
      </div>
    </div>
  )
}

export default App