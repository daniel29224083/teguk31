function CartDrawer({ cartItems, onClose }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <aside className="fade-up fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-white/10 bg-zinc-950/95 p-5 shadow-2xl backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-zinc-100">Cart Preview</h3>
        <button onClick={onClose} className="text-sm text-zinc-400 hover:text-zinc-200">
          Close
        </button>
      </div>
      <div className="space-y-3 overflow-y-auto pr-1">
        {cartItems.length === 0 ? (
          <p className="text-sm text-zinc-400">No items in cart.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="rounded-xl border border-white/10 bg-black/20 p-3">
              <p className="text-sm font-medium text-zinc-200">{item.name}</p>
              <p className="text-xs text-zinc-400">
                Qty {item.quantity} · RM {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))
        )}
      </div>
      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-sm text-zinc-300">Subtotal</p>
        <p className="text-xl font-semibold text-amber-300">RM {subtotal.toFixed(2)}</p>
      </div>
    </aside>
  )
}

export default CartDrawer
