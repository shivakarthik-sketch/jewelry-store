function Footer() {
  return (
    <footer className="bg-pink-100 mt-20">

      <div className="max-w-6xl mx-auto px-8 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-pink-600">
              ✨ Jewelry Store
            </h2>

            <p className="mt-3 text-gray-600">
              Cute and trendy jewelry for every style.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>Home</li>
              <li>Shop</li>
              <li>Cart</li>
              <li>Checkout</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">
              Contact
            </h3>

            <p className="text-gray-600">
              WhatsApp: +91 6302861967
            </p>

            <p className="text-gray-600">
              Instagram: @yourstore
            </p>
          </div>

        </div>

        <hr className="my-8" />

        <p className="text-center text-gray-500">
          © 2026 Jewelry Store. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer