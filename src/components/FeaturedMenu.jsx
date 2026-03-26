import MenuCard from './MenuCard'

function FeaturedMenu({ items, onAddToCart, title = 'Featured Menu' }) {
  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold text-zinc-100">{title}</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedMenu
