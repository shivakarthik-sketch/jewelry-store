import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="bg-white rounded-3xl shadow-md p-5 hover:scale-105 transition">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-2xl h-72 w-full object-cover"
        />

        <h4 className="text-2xl font-semibold mt-4">
          {product.name}
        </h4>
      </Link>

      <p className="text-pink-500 text-xl font-bold mt-2">
        ₹{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="w-full mt-5 bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600"
      >
        Add to Cart
      </button>

    </div>
  )
}

export default ProductCard