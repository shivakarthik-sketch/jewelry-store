import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cart")

  return savedCart
    ? JSON.parse(savedCart)
    : []
})
  useEffect(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems)
  )
}, [cartItems])

  // Add to cart
  const addToCart = (product) => {

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    )

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 },
      ])
    }
  }

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    )
  }

  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider