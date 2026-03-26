import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { menuItems as initialMenuItems } from './data/mockData'
import AdminPage from './pages/AdminPage'
import BookingPage from './pages/BookingPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import OrderPage from './pages/OrderPage'

function App() {
  const [menuItems, setMenuItems] = useState(initialMenuItems)
  const [cartItems, setCartItems] = useState([])
  const [orders, setOrders] = useState([
    { id: 1101, customerName: 'Aisyah', orderType: 'Delivery', status: 'Pending', total: 46.8 },
    { id: 1102, customerName: 'Rahim', orderType: 'Takeaway', status: 'Preparing', total: 29.9 },
    { id: 1103, customerName: 'Chen', orderType: 'Dine-in', status: 'Ready', total: 58.4 },
    { id: 1104, customerName: 'Farah', orderType: 'Delivery', status: 'Completed', total: 72.2 },
  ])
  const [bookings, setBookings] = useState([
    { id: 1, date: '2026-03-29', time: '19:30', pax: 4, name: 'Nora', phone: '0123456789' },
    { id: 2, date: '2026-03-30', time: '20:00', pax: 2, name: 'Daniel', phone: '0176543210' },
  ])

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id)
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const handlePlaceOrder = (payload) => {
    const newOrder = {
      id: Date.now(),
      ...payload,
      status: 'Pending',
    }
    setOrders((prev) => [newOrder, ...prev])
    setCartItems([])
  }

  const handleSubmitBooking = (payload) => {
    const newBooking = {
      id: Date.now(),
      ...payload,
    }
    setBookings((prev) => [newBooking, ...prev])
  }

  const handleDeleteItem = (id) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id))
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0b0b0c] text-zinc-100">
      <div className="pointer-events-none fixed -left-20 top-16 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none fixed -right-20 bottom-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      <Navbar cartCount={cartCount} />
      <div className="page-enter relative z-10">
        <Routes>
          <Route path="/" element={<HomePage menuItems={menuItems} onAddToCart={addToCart} />} />
          <Route
            path="/menu"
            element={<MenuPage menuItems={menuItems} onAddToCart={addToCart} cartItems={cartItems} />}
          />
          <Route
            path="/order"
            element={<OrderPage cartItems={cartItems} setCartItems={setCartItems} onPlaceOrder={handlePlaceOrder} />}
          />
          <Route path="/booking" element={<BookingPage onSubmitBooking={handleSubmitBooking} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/admin"
            element={<AdminPage orders={orders} bookings={bookings} menuItems={menuItems} onDeleteItem={handleDeleteItem} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
      <FloatingWhatsApp />
      <Analytics />
    </div>
  )
}

export default App
