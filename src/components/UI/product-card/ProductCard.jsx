import React from "react"
import { Link } from "react-router-dom"
import "../../../styles/product-card.css"

const ProductCard = (props) => {
  const { title, image, price } = props.item
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image} alt="product-img" className="w-100" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${title}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between">
          <span className="product__price">{price} RON </span>
          <button className="addToCart__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
