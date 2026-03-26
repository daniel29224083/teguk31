import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-14 border-t border-white/10 bg-[#101010]/95 backdrop-blur">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-amber-300">31 Teguk</h3>
          <p className="mt-3 text-sm text-zinc-400">
            Modern food and beverage experience inspired by Malaysia&apos;s cafe culture.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">Quick Links</h4>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-400">
            <NavLink to="/menu" className="hover:text-amber-200 hover:underline">Menu</NavLink>
            <NavLink to="/order" className="hover:text-amber-200 hover:underline">Order</NavLink>
            <NavLink to="/booking" className="hover:text-amber-200 hover:underline">Booking</NavLink>
            <NavLink to="/contact" className="hover:text-amber-200 hover:underline">Contact</NavLink>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">Contact</h4>
          <p className="mt-3 text-sm text-zinc-400">+60 12-345 6789</p>
          <p className="text-sm text-zinc-400">Lot 31, Bukit Bintang, Kuala Lumpur</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} 31 Teguk. Demo prototype.
      </div>
    </footer>
  )
}

export default Footer
