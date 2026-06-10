import { LayoutDashboard, TrendingUp, Users, ShoppingCart, X } from 'lucide-react'

const Sidebar = ({ isOpen, onClose, activeSection, onSectionChange }) => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', id: 'dashboard' },
    { icon: <TrendingUp size={20} />, label: 'Sales', id: 'sales' },
    { icon: <Users size={20} />, label: 'Users', id: 'users' },
    { icon: <ShoppingCart size={20} />, label: 'Orders', id: 'orders' },
  ]

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-30
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>

        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h1 className="text-xl font-bold text-white">Analytics</h1>
          <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <nav className="p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSectionChange(item.id)
                onClose()
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 text-left transition-colors
                ${activeSection === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar