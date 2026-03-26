import { socialLinks } from '../data/mockData'

function ContactSection() {
  return (
    <section className="grid gap-5 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6">
        <h2 className="text-2xl font-semibold text-zinc-100">Contact Us</h2>
        <div className="mt-4 space-y-2 text-sm text-zinc-300">
          <p>Address: Lot 31, Jalan Alor, Bukit Bintang, Kuala Lumpur</p>
          <p>Phone: +60 12-345 6789</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="https://wa.me/60123456789" target="_blank" rel="noreferrer" className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-400">WhatsApp</a>
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-200 transition hover:border-amber-300 hover:text-amber-200">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6">
        <h3 className="text-xl font-semibold text-zinc-100">Map (Mockup)</h3>
        <div className="mt-4 h-64 rounded-2xl border border-dashed border-zinc-600 bg-zinc-950/60 p-4 text-sm text-zinc-400">
          Embedded map section placeholder for Google Maps integration.
        </div>
      </div>
    </section>
  )
}

export default ContactSection
