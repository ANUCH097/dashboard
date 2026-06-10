const express = require('express')
const router = express.Router()

// Mock Data
const salesData = [
  { month: 'Jan', sales: 4000, revenue: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398 },
  { month: 'Mar', sales: 6000, revenue: 5800 },
  { month: 'Apr', sales: 8000, revenue: 3908 },
  { month: 'May', sales: 5000, revenue: 4800 },
  { month: 'Jun', sales: 9000, revenue: 3800 },
  { month: 'Jul', sales: 7000, revenue: 4300 },
  { month: 'Aug', sales: 6500, revenue: 5100 },
  { month: 'Sep', sales: 8500, revenue: 6200 },
  { month: 'Oct', sales: 7200, revenue: 5400 },
  { month: 'Nov', sales: 9500, revenue: 7800 },
  { month: 'Dec', sales: 11000, revenue: 9800 },
]

const trafficData = [
  { name: 'Direct', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Email', value: 200 },
  { name: 'Organic', value: 500 },
]

const weeklyUsers = [
  { day: 'Mon', users: 120 },
  { day: 'Tue', users: 240 },
  { day: 'Wed', users: 180 },
  { day: 'Thu', users: 320 },
  { day: 'Fri', users: 290 },
  { day: 'Sat', users: 150 },
  { day: 'Sun', users: 90 },
]

const kpiData = {
  totalSales: 84700,
  totalRevenue: 62498,
  totalUsers: 12400,
  totalOrders: 1893,
  salesGrowth: 12.5,
  revenueGrowth: 8.3,
  usersGrowth: 5.2,
  ordersGrowth: 15.7,
}

// @desc    Get all analytics
// @route   GET /api/analytics
// @access  Public
router.get('/', (req, res) => {
  res.status(200).json({
    kpiData,
    salesData,
    trafficData,
    weeklyUsers,
  })
})

module.exports = router