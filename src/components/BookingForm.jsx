import { useState } from 'react'

const initialState = {
  date: '',
  time: '',
  pax: 2,
  name: '',
  phone: '',
  notes: '',
}

function BookingForm({ onSubmit }) {
  const [form, setForm] = useState(initialState)
  const [done, setDone] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(form)
    setDone(true)
    setForm(initialState)
  }

  return (
    <section className="fade-up rounded-3xl border border-white/10 bg-zinc-900/75 p-6 shadow-xl shadow-black/20 backdrop-blur sm:p-8">
      <h2 className="text-2xl font-semibold text-zinc-100">Reserve a Table</h2>
      <form onSubmit={handleSubmit} className="mt-5 grid gap-4 sm:grid-cols-2">
        <input required type="date" name="date" value={form.date} onChange={handleChange} className="rounded-xl border border-white/15 bg-zinc-950/90 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-amber-300" />
        <input required type="time" name="time" value={form.time} onChange={handleChange} className="rounded-xl border border-white/15 bg-zinc-950/90 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-amber-300" />
        <input required type="number" min="1" max="20" name="pax" value={form.pax} onChange={handleChange} className="rounded-xl border border-white/15 bg-zinc-950/90 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-amber-300" placeholder="No. of Pax" />
        <input required name="name" value={form.name} onChange={handleChange} className="rounded-xl border border-white/15 bg-zinc-950/90 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-amber-300" placeholder="Name" />
        <input required name="phone" value={form.phone} onChange={handleChange} className="rounded-xl border border-white/15 bg-zinc-950/90 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-amber-300" placeholder="Phone Number" />
        <textarea name="notes" value={form.notes} onChange={handleChange} className="rounded-xl border border-white/15 bg-zinc-950/90 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-amber-300 sm:col-span-2" rows="4" placeholder="Notes" />
        <button type="submit" className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:bg-amber-400 sm:col-span-2">
          Submit Booking
        </button>
      </form>
      {done && <p className="fade-up mt-4 rounded-xl border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm text-green-200">Booking submitted successfully. We will contact you soon.</p>}
    </section>
  )
}

export default BookingForm
