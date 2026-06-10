require('dotenv').config()

const express = require('express')
const cors = require('cors')
const analyticsRoutes = require('./routes/analyticsRoutes')

const app = express()

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json())

// Routes
app.use('/api/analytics', analyticsRoutes)

// Test route
app.get('/', (req, res) => {
  res.send('Dashboard API is running...')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})