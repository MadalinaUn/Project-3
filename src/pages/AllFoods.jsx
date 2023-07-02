import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "reactstrap"

import Helmet from "../components/Helmet/Helmet"
import products from "../assets/fake-data/products"
import ProductCard from "../components/UI/product-card/ProductCard"
import "../styles/AllFoods.css"

import PizzaImg from "../assets/iamages/pizza.png"
import PasteImg from "../assets/iamages/paste.png"
import BurgerImg from "../assets/iamages/burger.png"
import DesertImg from "../assets/iamages/desert.png"

const AllFoods = () => {
  const [category, setCategory] = useState("ALL")
  const [allProducts, setAllProducts] = useState(products)

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products)
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      )
      setAllProducts(filteredProducts)
    }
    if (category === "PASTE") {
      const filteredProducts = products.filter(
        (item) => item.category === "Paste"
      )
      setAllProducts(filteredProducts)
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      )
      setAllProducts(filteredProducts)
    }
    if (category === "DESERT") {
      const filteredProducts = products.filter(
        (item) => item.category === "Desert"
      )
      setAllProducts(filteredProducts)
    }
  }, [category])

  return (
    <Helmet title="Foods">
      <Container className="allFood__page">
        <Row>
          <Col lg="12">
            <div className="food__category">
              <button
                className="all__btn"
                on
                onClick={() => setCategory("ALL")}
              >
                <h4>All_food</h4>
              </button>
              <button on onClick={() => setCategory("PIZZA")}>
                <img src={PizzaImg} alt="" />
                <h4>Pizza</h4>
              </button>
              <button on onClick={() => setCategory("PASTE")}>
                <img src={PasteImg} alt="" />
                <h4>Paste</h4>
              </button>
              <button on onClick={() => setCategory("BURGER")}>
                <img src={BurgerImg} alt="" />
                <h4>Burger</h4>
              </button>
              <button on onClick={() => setCategory("DESERT")}>
                <img src={DesertImg} alt="" />
                <h4>Desert</h4>
              </button>
            </div>
          </Col>

          {allProducts.map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="all__food mt-5">
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Helmet>
  )
}

export default AllFoods
