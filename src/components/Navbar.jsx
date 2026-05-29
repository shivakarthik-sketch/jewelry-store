import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Navbar() {
  const { cartItems } = useContext(CartContext)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-pink-500"
        >
          ✨ Jewelry Store
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8 font-medium">

          <Link
            to="/"
            className="hover:text-pink-500 transition"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="hover:text-pink-500 transition"
          >
            Shop
          </Link>

          <Link
            to="/checkout"
            className="hover:text-pink-500 transition"
          >
            Checkout
          </Link>

          <Link
            to="/cart"
            className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
          >
            🛒 {cartItems.length}
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar