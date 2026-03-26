import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 px-6 py-14 shadow-2xl shadow-black/40 sm:px-10 lg:px-12">
      <div className="float-soft absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="float-soft absolute -bottom-14 -left-10 h-44 w-44 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="relative max-w-2xl space-y-5 fade-up">
        <p className="inline-flex rounded-full border border-amber-300/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-200">
          Kuala Lumpur Cafe Prototype
        </p>
        <h1 className="bg-gradient-to-r from-zinc-50 to-amber-100 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-6xl">
          31 Teguk
        </h1>
        <p className="text-base text-zinc-300 sm:text-lg">
          Crafted coffee, comforting meals, and signature drinks for every mood.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/order"
            className="glow-pulse rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:bg-amber-400"
          >
            Order Now
          </Link>
          <Link
            to="/booking"
            className="rounded-full border border-zinc-400 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-200"
          >
            Book Table
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
