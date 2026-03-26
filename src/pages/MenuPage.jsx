import { useMemo, useState } from 'react'
import CartDrawer from '../components/CartDrawer'
import MenuCard from '../components/MenuCard'

const categories = ['All', 'Coffee', 'Drinks', 'Snacks', 'Meals', 'Desserts']

function MenuPage({ menuItems, onAddToCart, cartItems }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [showCartDrawer, setShowCartDrawer] = useState(false)

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const byCategory = category === 'All' || item.category === category
      const bySearch = item.name.toLowerCase().includes(search.toLowerCase())
      return byCategory && bySearch
    })
  }, [menuItems, category, search])

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <div className="fade-up flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-semibold text-zinc-100">Menu</h1>
        <button
          onClick={() => setShowCartDrawer(true)}
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200 hover:-translate-y-0.5 hover:border-amber-300"
        >
          View Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </div>

      <div className="fade-up flex flex-col gap-3 rounded-2xl border border-white/10 bg-zinc-900/70 p-4 shadow-lg shadow-black/20 backdrop-blur md:flex-row md:items-center md:justify-between">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search menu..."
          className="w-full rounded-xl border border-white/15 bg-zinc-950/90 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-amber-300 md:max-w-sm"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                category === cat
                  ? 'bg-amber-500 font-semibold text-zinc-900'
                  : 'border border-white/20 text-zinc-300 hover:-translate-y-0.5 hover:border-amber-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="fade-up grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>

      {showCartDrawer && <CartDrawer cartItems={cartItems} onClose={() => setShowCartDrawer(false)} />}
    </main>
  )
}

export default MenuPage
