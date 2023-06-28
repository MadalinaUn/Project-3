import React from "react"
import { ListGroup } from "reactstrap"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import { useDispatch, useSelector } from "react-redux"
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice"

import "../../../styles/shopping-cart.css"

const Carts = () => {
  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="close__btn">
          <span onClick={toggleCart}>
            <i class="ri-close-circle-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h3 className="text-center mt-5">No item added to the cart</h3>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>
        <div className="cart__bottom">
          <h5>
            Subtotal amount: <span>{totalAmount} RON</span>
          </h5>
          <button className="checkout__btn">
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  )
}

export default Carts
