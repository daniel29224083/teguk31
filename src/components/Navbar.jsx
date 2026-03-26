import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/order', label: 'Order' },
  { to: '/booking', label: 'Booking' },
  { to: '/contact', label: 'Contact' },
  { to: '/admin', label: 'Admin' },
]

function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-1.5 text-sm transition ${
      isActive
        ? 'bg-amber-300/15 text-amber-200'
        : 'text-zinc-200 hover:bg-white/5 hover:text-amber-100'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#121212]/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-orange-500 text-sm font-bold text-zinc-950 shadow-lg shadow-amber-500/20 transition group-hover:scale-105">
            31
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-wide text-amber-200 sm:text-lg">31 Teguk</span>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-zinc-400 sm:block">
              Coffee • Meals • Desserts
            </span>
          </span>
        </NavLink>
        <ul className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <NavLink
            to="/order"
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5 hover:bg-amber-400"
          >
            Cart ({cartCount})
          </NavLink>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-200 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-base">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#141414]/95 transition-all duration-300 md:hidden ${
          open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-3 sm:px-6">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
