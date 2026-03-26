function MenuCard({ item, onAddToCart }) {
  const fallbackImage =
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1.5 hover:border-amber-300/50 hover:shadow-amber-500/10">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = fallbackImage
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {item.bestSeller && (
          <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-zinc-900">
            Best Seller
          </span>
        )}
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-zinc-100">{item.name}</h3>
          <p className="text-sm font-semibold text-amber-300">RM {item.price.toFixed(2)}</p>
        </div>
        <p className="text-sm text-zinc-400">{item.description}</p>
        {onAddToCart && (
          <button
            onClick={() => onAddToCart(item)}
            className="w-full rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:bg-amber-400"
          >
            Add to Cart
          </button>
        )}
      </div>
    </article>
  )
}

export default MenuCard
