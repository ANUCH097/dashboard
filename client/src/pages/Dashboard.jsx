/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/immutability */
import { useState, useEffect } from 'react'
import axiosInstance from '../utils/axios'
import MetricCard from '../components/MetricCard'
import SalesChart from '../components/SalesChart'
import UsersChart from '../components/UsersChart'
import TrafficChart from '../components/TrafficChart'
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react'

const Dashboard = ({ isDark }) => {
  const [analytics, setAnalytics] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      const { data } = await axiosInstance.get('/api/analytics')
      setAnalytics(data)
    } catch (error) {
      console.error('Failed to fetch analytics!', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const { kpiData, salesData, trafficData, weeklyUsers } = analytics

  const metrics = [
    {
      title: 'Total Sales',
      value: `$${kpiData.totalSales.toLocaleString()}`,
      growth: kpiData.salesGrowth,
      icon: <DollarSign size={20} className="text-blue-600" />,
      color: 'bg-blue-100',
    },
    {
      title: 'Total Revenue',
      value: `$${kpiData.totalRevenue.toLocaleString()}`,
      growth: kpiData.revenueGrowth,
      icon: <TrendingUp size={20} className="text-green-600" />,
      color: 'bg-green-100',
    },
    {
      title: 'Total Users',
      value: kpiData.totalUsers.toLocaleString(),
      growth: kpiData.usersGrowth,
      icon: <Users size={20} className="text-purple-600" />,
      color: 'bg-purple-100',
    },
    {
      title: 'Total Orders',
      value: kpiData.totalOrders.toLocaleString(),
      growth: kpiData.ordersGrowth,
      icon: <ShoppingCart size={20} className="text-orange-600" />,
      color: 'bg-orange-100',
    },
  ]

  return (
    <div className={`p-6 ${isDark ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Dashboard Overview
        </h1>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
          Welcome back! Here's what's happening.
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <SalesChart data={salesData} />
        <UsersChart data={weeklyUsers} />
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrafficChart data={trafficData} />

        {/* Recent Orders Table */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Recent Orders
          </h3>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm border-b">
                <th className="pb-3">Order</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#1001', amount: '$120', status: 'Completed' },
                { id: '#1002', amount: '$85', status: 'Pending' },
                { id: '#1003', amount: '$240', status: 'Completed' },
                { id: '#1004', amount: '$60', status: 'Cancelled' },
                { id: '#1005', amount: '$180', status: 'Completed' },
              ].map((order, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-3 text-gray-800 font-medium">{order.id}</td>
                  <td className="py-3 text-gray-600">{order.amount}</td>
                  <td className="py-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Completed'
                        ? 'bg-green-100 text-green-600'
                        : order.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Dashboard