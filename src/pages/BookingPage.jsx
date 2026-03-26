import BookingForm from '../components/BookingForm'

function BookingPage({ onSubmitBooking }) {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="fade-up text-3xl font-semibold text-zinc-100">Table Booking</h1>
      <p className="text-sm text-zinc-300">Reserve your preferred date and time in seconds.</p>
      <BookingForm onSubmit={onSubmitBooking} />
    </main>
  )
}

export default BookingPage
