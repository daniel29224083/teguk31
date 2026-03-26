import { Link } from 'react-router-dom'

function PromoCard() {
  return (
    <section className="rounded-3xl border border-amber-300/30 bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-200">Promo</p>
      <h3 className="mt-2 text-2xl font-semibold text-zinc-100">Buy 1 Signature Drink, Get 2nd at 50%</h3>
      <p className="mt-2 max-w-2xl text-sm text-zinc-300">
        Valid weekdays from 2PM to 6PM. Perfect for tea break sessions with your team.
      </p>
      <Link
        to="/menu"
        className="mt-4 inline-flex rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-amber-400"
      >
        Claim Promo
      </Link>
    </section>
  )
}

export default PromoCard
