import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    return selectedCategory === "all"
      ? true
      : product.category.toLowerCase() === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-pink-50">

      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-pink-100 via-pink-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-8 py-24">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <span className="bg-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
                  ✨ New Collection 2026
                </span>

                <h1 className="text-6xl font-bold mt-6 leading-tight">
                  Cute &
                  <span className="text-pink-500"> Trendy</span>
                  <br />
                  Jewelry For Girls
                </h1>

                <p className="mt-6 text-lg text-gray-600 max-w-lg">
                  Discover beautiful earrings, necklaces,
                  bracelets and accessories designed to
                  elevate every outfit.
                </p>

                <Link
                  to="/shop"
                  className="inline-block mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl text-lg"
                >
                  Shop Now 💖
                </Link>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop"
                  alt="Jewelry"
                  className="rounded-[40px] shadow-2xl"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-10">

        <h2 className="text-4xl font-bold text-center mb-12">
          Shop By Category 💎
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          <div
            onClick={() => setSelectedCategory("all")}
            className={`bg-white rounded-3xl p-8 shadow text-center cursor-pointer hover:shadow-lg ${
              selectedCategory === "all" ? "ring-2 ring-pink-400" : ""
            }`}
          >
            <h3 className="text-2xl font-bold">All</h3>
          </div>

          <div
            onClick={() => setSelectedCategory("earrings")}
            className={`bg-white rounded-3xl p-8 shadow text-center cursor-pointer hover:shadow-lg ${
              selectedCategory === "earrings" ? "ring-2 ring-pink-400" : ""
            }`}
          >
            <h3 className="text-2xl font-bold">Earrings</h3>
          </div>

          <div
            onClick={() => setSelectedCategory("necklace")}
            className={`bg-white rounded-3xl p-8 shadow text-center cursor-pointer hover:shadow-lg ${
              selectedCategory === "necklace" ? "ring-2 ring-pink-400" : ""
            }`}
          >
            <h3 className="text-2xl font-bold">Necklaces</h3>
          </div>

          <div
            onClick={() => setSelectedCategory("bracelet")}
            className={`bg-white rounded-3xl p-8 shadow text-center cursor-pointer hover:shadow-lg ${
              selectedCategory === "bracelet" ? "ring-2 ring-pink-400" : ""
            }`}
          >
            <h3 className="text-2xl font-bold">Bracelets</h3>
          </div>

          <div
            onClick={() => setSelectedCategory("ring")}
            className={`bg-white rounded-3xl p-8 shadow text-center cursor-pointer hover:shadow-lg ${
              selectedCategory === "ring" ? "ring-2 ring-pink-400" : ""
            }`}
          >
            <h3 className="text-2xl font-bold">Rings</h3>
          </div>

        </div>
      </section>

      {/* Products */}
      <section className="px-10 pb-20">

        <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Trending Products 💖
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500 text-lg">
              No products found in this category.
            </p>
          )}
        </div>

      </section>

      {/* Testimonials */}
      <section className="py-20 px-10">

        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say 💕
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-3xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-4 text-gray-600">
              Beautiful quality and very affordable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-4 text-gray-600">
              My daughter absolutely loved it.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-4 text-gray-600">
              Fast delivery and lovely packaging.
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}

export default Home;