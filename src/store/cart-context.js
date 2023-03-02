import React from "react"

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    clearCart: () => { },
    // removeItem: (id) = {}
})

export default CartContext;