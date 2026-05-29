import Navbar from "../components/Navbar"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Footer from "../components/Footer"

function Cart() {

  const {
    cartItems,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext)

  return (
    <div className="min-h-screen bg-pink-50">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold mb-10">
          Your Cart 🛒
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-xl">
            Your cart is empty
          </p>
        ) : (

          <div className="space-y-6">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl flex items-center justify-between"
              >

                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt=""
                    className="w-24 h-24 object-cover rounded-xl"
                  />

                  <div>
                    <h2 className="text-2xl font-semibold">
                      {item.name}
                    </h2>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <p className="text-pink-500 font-bold">
                      ₹{item.price}
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-5 py-2 rounded-xl"
                >
                  Remove
                </button>

              </div>

            ))}

            <div className="text-3xl font-bold mt-10">
              Total: ₹{totalPrice}
            </div>

          </div>

        )}

      </div>
    <Footer />
    </div>
  )
}

export default Cart