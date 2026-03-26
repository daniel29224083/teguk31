import AdminDashboard from '../components/AdminDashboard'

function AdminPage({ orders, bookings, menuItems, onDeleteItem }) {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="fade-up text-3xl font-semibold text-zinc-100">Admin Dashboard Prototype</h1>
      <AdminDashboard
        orders={orders}
        bookings={bookings}
        menuItems={menuItems}
        onDeleteItem={onDeleteItem}
      />
    </main>
  )
}

export default AdminPage
