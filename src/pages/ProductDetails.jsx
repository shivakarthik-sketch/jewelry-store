import { useParams } from "react-router-dom"
import { useContext } from "react"
import Footer from "../components/Footer"

import Navbar from "../components/Navbar"
import products from "../data/products"
import { CartContext } from "../context/CartContext"

function ProductDetails() {
  const { id } = useParams()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  const { addToCart } = useContext(CartContext)

  if (!product) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-pink-50">

      <Navbar />

      <div className="max-w-6xl mx-auto p-10">

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center">

            <h1 className="text-5xl font-bold mb-5">
              {product.name}
            </h1>

            <p className="text-3xl text-pink-500 font-bold mb-5">
              ₹{product.price}
            </p>

            <p className="text-lg text-gray-600 mb-8">
              {product.description}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl text-xl"
            >
              Add To Cart 🛒
            </button>

          </div>

        </div>

      </div>
    <Footer />
    </div>
  )
}

export default ProductDetails