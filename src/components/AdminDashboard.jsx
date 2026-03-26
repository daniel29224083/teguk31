function AdminDashboard({ orders, bookings, menuItems, onDeleteItem }) {
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)

  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
          <p className="text-sm text-zinc-400">Total Orders</p>
          <p className="text-2xl font-semibold text-zinc-100">{orders.length}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
          <p className="text-sm text-zinc-400">Total Bookings</p>
          <p className="text-2xl font-semibold text-zinc-100">{bookings.length}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
          <p className="text-sm text-zinc-400">Revenue (Mock)</p>
          <p className="text-2xl font-semibold text-amber-300">RM {totalRevenue.toFixed(2)}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80">
        <h3 className="border-b border-white/10 px-4 py-3 text-lg font-semibold text-zinc-100">Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-zinc-950 text-zinc-300">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-white/10 text-zinc-300">
                  <td className="px-4 py-3">#{order.id}</td>
                  <td className="px-4 py-3">{order.customerName || 'Guest'}</td>
                  <td className="px-4 py-3">{order.orderType}</td>
                  <td className="px-4 py-3">{order.status}</td>
                  <td className="px-4 py-3">RM {order.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80">
        <h3 className="border-b border-white/10 px-4 py-3 text-lg font-semibold text-zinc-100">Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-zinc-950 text-zinc-300">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Pax</th>
                <th className="px-4 py-3">Phone</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-t border-white/10 text-zinc-300">
                  <td className="px-4 py-3">{booking.name}</td>
                  <td className="px-4 py-3">{booking.date}</td>
                  <td className="px-4 py-3">{booking.time}</td>
                  <td className="px-4 py-3">{booking.pax}</td>
                  <td className="px-4 py-3">{booking.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
        <h3 className="mb-4 text-lg font-semibold text-zinc-100">Menu Management</h3>
        <div className="space-y-3">
          {menuItems.map((item) => (
            <div key={item.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 p-3">
              <div>
                <p className="text-sm font-medium text-zinc-100">{item.name}</p>
                <p className="text-xs text-zinc-400">{item.category} · RM {item.price.toFixed(2)}</p>
              </div>
              <div className="flex gap-2 text-xs">
                <button className="rounded-full border border-white/20 px-3 py-1 text-zinc-200">Edit</button>
                <button className="rounded-full border border-white/20 px-3 py-1 text-zinc-200">Add</button>
                <button onClick={() => onDeleteItem(item.id)} className="rounded-full border border-red-400/40 px-3 py-1 text-red-300">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminDashboard
