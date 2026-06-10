import { TrendingUp, TrendingDown } from 'lucide-react'

const MetricCard = ({ title, value, growth, icon, color }) => {
  const isPositive = growth >= 0

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className={`p-2 rounded-lg ${color}`}>
          {icon}
        </div>
      </div>

      {/* Value */}
      <p className="text-3xl font-bold text-gray-800 mb-2">
        {value}
      </p>

      {/* Growth */}
      <div className="flex items-center gap-1">
        {isPositive ? (
          <TrendingUp size={16} className="text-green-500" />
        ) : (
          <TrendingDown size={16} className="text-red-500" />
        )}
        <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{growth}%
        </span>
        <span className="text-gray-400 text-sm">vs last month</span>
      </div>

    </div>
  )
}

export default MetricCard