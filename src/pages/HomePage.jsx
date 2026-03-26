import FeaturedMenu from '../components/FeaturedMenu'
import HeroSection from '../components/HeroSection'
import PromoCard from '../components/PromoCard'
import { galleryImages, openingHours, testimonials } from '../data/mockData'

function HomePage({ menuItems, onAddToCart }) {
  const featuredItems = menuItems.filter((item) => item.featured).slice(0, 3)
  const bestSellers = menuItems.filter((item) => item.bestSeller).slice(0, 3)

  return (
    <main className="mx-auto w-full max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      <HeroSection />

      <div className="fade-up">
        <FeaturedMenu items={featuredItems} onAddToCart={onAddToCart} title="Featured Menu" />
      </div>
      <div className="fade-up-delay">
        <FeaturedMenu items={bestSellers} onAddToCart={onAddToCart} title="Best Sellers" />
      </div>

      <div className="fade-up">
        <PromoCard />
      </div>

      <section className="fade-up grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-2xl font-semibold text-zinc-100">About 31 Teguk</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            31 Teguk is a modern neighborhood restaurant and cafe blending local Malaysian flavors
            with global comfort food. Built for dine-in moments and quick online ordering.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-2xl font-semibold text-zinc-100">Opening Hours</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {openingHours.map((slot) => (
              <li key={slot.day} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                <span>{slot.day}</span>
                <span>{slot.hours}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="fade-up rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-lg shadow-black/20 backdrop-blur">
        <h2 className="text-2xl font-semibold text-zinc-100">Location</h2>
        <p className="mt-3 text-sm text-zinc-300">Lot 31, Jalan Alor, Bukit Bintang, Kuala Lumpur, Malaysia</p>
      </section>

      <section className="fade-up rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-lg shadow-black/20 backdrop-blur">
        <h2 className="text-2xl font-semibold text-zinc-100">QR Menu</h2>
        <p className="mt-2 text-sm text-zinc-300">Scan and order directly from your table (prototype preview).</p>
        <div className="float-soft mt-4 inline-flex h-28 w-28 items-center justify-center rounded-2xl border border-dashed border-zinc-500 text-xs text-zinc-400">
          QR Menu
        </div>
      </section>

      <section className="fade-up space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-100">Testimonials</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.id} className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4 backdrop-blur transition hover:-translate-y-1">
              <p className="text-sm text-zinc-300">“{t.quote}”</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-amber-200">{t.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fade-up space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-100">Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <img key={image} src={image} alt="31 Teguk" className="h-44 w-full rounded-2xl object-cover transition duration-300 hover:-translate-y-1 hover:scale-[1.01]" />
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
