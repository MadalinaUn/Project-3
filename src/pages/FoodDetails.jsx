import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"

import Helmet from "../components/Helmet/Helmet"
import products from "../assets/fake-data/products"
import imageZ from "../assets/iamages/pizza.png"
import "../styles/FoodDetails.css"

// import { useSelector } from "react-redux"

const FoodDetails = () => {
  // const [tab, setTab] = useState("desc")
  const { id } = useParams()

  // const product = products.find((product) => product.id === id)
  // const [previewImg, setPreviewImg] = useState(product.image)
  const { title, price, image, category, desc } = products

  // const { id, title, price, image, category, desc } = product

  return (
    <Helmet title="Product-details">
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2"></Col>
            <Col lg="3" md="3">
              <div className="product__main-img">
                <img src={imageZ} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="1" md="1"></Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h1 className="product__title">bhuj</h1>
                <p className="product__price">
                  Price: <span>7 RON</span>
                </p>
                <p className="product__category">
                  Category: <span>hj</span>
                </p>
                <button className="addToCart__btn">Add to cart</button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs">
                <h4>Description</h4>
              </div>
              <div className="tab__content">
                <p> nhj</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails
