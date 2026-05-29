import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import products from "../data/products"
import Footer from "../components/Footer"

import { useState } from "react"

function Shop() {

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesCategory =
      category === "All" ||
      product.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-pink-50">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold text-center mb-10">
          Shop Collection 💖
        </h1>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-5 justify-center mb-12">

          <input
            type="text"
            placeholder="Search jewelry..."
            className="px-5 py-3 rounded-xl border bg-white w-full md:w-96"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="px-5 py-3 rounded-xl border bg-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Necklace</option>
            <option>Earrings</option>
            <option>Bracelet</option>
            <option>Ring</option>
          </select>

        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    <Footer />
    </div>
  )
}

export default Shop