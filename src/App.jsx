import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import ProductDetails from "./pages/ProductDetails"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App