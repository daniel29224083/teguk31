import { useState } from 'react'

const orderTypes = ['Dine-in', 'Takeaway', 'Delivery']
const paymentOptions = ['Cash', 'Online Payment']

function OrderPage({ cartItems, setCartItems, onPlaceOrder }) {
  const [form, setForm] = useState({
    orderType: 'Dine-in',
    customerName: '',
    phone: '',
    notes: '',
    time: '',
    payment: 'Cash',
  })
  const [success, setSuccess] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const placeOrder = (event) => {
    event.preventDefault()
    if (cartItems.length === 0) {
      return
    }

    onPlaceOrder({
      ...form,
      items: cartItems,
      total: subtotal,
    })

    setSuccess(true)
  }

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="fade-up text-3xl font-semibold text-zinc-100">Order</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="fade-up rounded-3xl border border-white/10 bg-zinc-900/70 p-5 shadow-xl shadow-black/20 backdrop-blur">
          <h2 className="text-xl font-semibold text-zinc-100">Shopping Cart</h2>
          <div className="mt-4 space-y-3">
            {cartItems.length === 0 ? (
              <p className="text-sm text-zinc-400">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-zinc-100">{item.name}</p>
                      <p className="text-xs text-zinc-400">RM {item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(item.id, -1)} className="h-8 w-8 rounded-full border border-white/20 text-zinc-300 hover:border-amber-300">-</button>
                      <span className="text-sm text-zinc-200">{item.quantity}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="h-8 w-8 rounded-full border border-white/20 text-zinc-300 hover:border-amber-300">+</button>
                      <button onClick={() => removeItem(item.id)} className="ml-2 text-xs text-red-300">Remove</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="fade-up-delay rounded-3xl border border-white/10 bg-zinc-900/70 p-5 shadow-xl shadow-black/20 backdrop-blur">
          <h2 className="text-xl font-semibold text-zinc-100">Checkout</h2>
          <form onSubmit={placeOrder} className="mt-4 space-y-4">
            <div className="flex flex-wrap gap-2">
              {orderTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, orderType: type }))}
                  className={`rounded-full px-4 py-2 text-sm ${
                    form.orderType === type
                      ? 'bg-amber-500 font-semibold text-zinc-900'
                      : 'border border-white/20 text-zinc-300 hover:border-amber-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <input required placeholder="Name" value={form.customerName} onChange={(e) => setForm((p) => ({ ...p, customerName: e.target.value }))} className="w-full rounded-xl border border-white/15 bg-zinc-950/90 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-amber-300" />
            <input required placeholder="Phone number" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} className="w-full rounded-xl border border-white/15 bg-zinc-950/90 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-amber-300" />
            <textarea placeholder="Notes" value={form.notes} onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))} className="w-full rounded-xl border border-white/15 bg-zinc-950/90 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-amber-300" rows="3" />
            <input required type="time" value={form.time} onChange={(e) => setForm((p) => ({ ...p, time: e.target.value }))} className="w-full rounded-xl border border-white/15 bg-zinc-950/90 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-amber-300" />
            <div className="flex gap-2">
              {paymentOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, payment: option }))}
                  className={`rounded-full px-4 py-2 text-sm ${
                    form.payment === option
                      ? 'bg-amber-500 font-semibold text-zinc-900'
                      : 'border border-white/20 text-zinc-300 hover:border-amber-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="rounded-xl border border-white/10 bg-zinc-950/50 p-4">
              <p className="text-sm text-zinc-300">Order Summary</p>
              <p className="mt-2 text-xl font-semibold text-amber-300">RM {subtotal.toFixed(2)}</p>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:bg-amber-400"
            >
              Place Order
            </button>
          </form>
        </section>
      </div>

      {success && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
          <div className="fade-up w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-6 text-center shadow-2xl shadow-black/40">
            <h3 className="text-xl font-semibold text-zinc-100">Order Placed Successfully</h3>
            <p className="mt-2 text-sm text-zinc-300">Thank you for ordering from 31 Teguk.</p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-5 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-zinc-900"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default OrderPage
