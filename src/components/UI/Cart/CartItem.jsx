import React from "react"
import { ListGroupItem } from "reactstrap"
import "../../../styles/cart-item.css"
import { useDispatch } from "react-redux"
import { cartActions } from "../../../store/shopping-cart/cartSlice"

const CartItem = ({ item }) => {
  const { id, title, price, image, quantity, totalPrice } = item
  const dispatch = useDispatch()

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image,
      })
    )
  }

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id))
  }

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }

  return (
    <ListGroupItem className="border-0">
      <div className="cart__item-info">
        <img src={image} alt="product-img" />

        <div className="cart__product-info">
          <div>
            <h3>{title}</h3>
            <p>
              x {quantity} <span>{totalPrice} RON</span>
            </p>

            <div className="increase__btn">
              <span onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>
              <span> {quantity} </span>
              <span onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i class="ri-close-circle-fill"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  )
}

export default CartItem
