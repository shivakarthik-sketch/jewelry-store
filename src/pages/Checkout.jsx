import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import Footer from "../components/Footer"

function Checkout() {
  const { cartItems, totalPrice } = useContext(CartContext)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const orderText = `
Name: ${name}
Phone: ${phone}

Address:
${address}

Items:
${cartItems
  .map(
    (item) =>
      `${item.name} x ${item.quantity} - ₹${item.price}`
  )
  .join("\n")}

Total: ₹${totalPrice}
`

  const whatsappLink =
    `https://wa.me/916302861967?text=${encodeURIComponent(orderText)}`

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-5xl font-bold mb-10">
          Checkout 💳
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Customer Form */}
          <div className="bg-white p-6 rounded-3xl shadow">

            <h2 className="text-2xl font-bold mb-5">
              Customer Details
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-xl mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-xl mb-4"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              placeholder="Delivery Address"
              className="w-full border p-3 rounded-xl mb-4"
              rows="5"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-3xl shadow">

            <h2 className="text-2xl font-bold mb-5">
              Order Summary
            </h2>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mb-3"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>

                <span>
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}

            <hr className="my-5" />

            <h3 className="text-2xl font-bold mb-6">
              Total: ₹{totalPrice}
            </h3>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl"
            >
              Place Order on WhatsApp
            </a>

          </div>

        </div>

      </div>
    <Footer />
    </div>
  )
}

export default Checkout